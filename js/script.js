var i = (function init(){

    //this is the model
    var model = {
        // function init
        init:function(){
            
        }
    }

    //this is the controler
    var x = {
        init:function(){
            //init the model
            model.init()
            //init the view
            view.init()
       }
    }   

    var view = {
        state:{
            burger:false,
        },
        // function init
        init:function(){
            this.f.intro() //this animates the intro
            
            //1. store all the variabls needed
            this.txtElem = document.querySelector('.txt-type');
            this.words = JSON.parse(this.txtElem.getAttribute('data-words'));
            this.wait = this.txtElem.getAttribute('data-wait');
            this.hi = document.getElementById('hi');
            this.hi.style.opacity = '1'
            this.hiWords = JSON.parse(hi.getAttribute('data-hi'));

            this.burger = document.getElementById('burger');
            
            // 2.call the functions
            new this.f.Hi(this.hi,this.hiWords,3000);
            new this.f.TypeWriter(this.txtElem,this.words,this.wait);
            
            // 3. set all the event listeners
            this.burger.addEventListener('click', function(){view.f.burgerNav(view.state.burger) ; view.state.burger === true ? view.state.burger = false : view.state.burger = true }); //
            window.onresize = (function(){location.reload()});
        },
        // f or function: prepare the needed classes and functions
        f:(function(){
            var TypeWriter = function (txtElem, words, wait = 5000) {
                this.txtElem = txtElem;
                this.words = words;
                this.txt = '';
                this.wordIndex = 0;
                this.wait = parseInt(wait, 10);
                this.type(); //this is the type method of typewriter
                this.isDeleting = false;
            }

            //this is the type method
            TypeWriter.prototype.type = function(){
                var typeSpeed = 300;
                var current = this.wordIndex % this.words.length
                var fullTxt = this.words[current];
                if(this.isDeleting){
                    this.txt = fullTxt.substring(0,this.txt.length - 1)
                }else{
                    this.txt = fullTxt.substring(0,this.txt.length + 1)
                }
                this.txtElem.innerHTML =  `<span class="txt" > ${this.txt} </span>`
                if(this.isDeleting){
                    typeSpeed /= 2;
                } 
                if(!this.isDeleting && this.txt === fullTxt ){
                    typeSpeed = 2000;
                    if (this.txt === 'Solutions'){
                        typeSpeed = 3400;
                    }
                    this.isDeleting = true
                } else if (this.isDeleting && this.txt==='' ){
                    this.isDeleting = false;
                    this.wordIndex++;
                    typeSpeed = 500;
                }
                setTimeout(()=> this.type(),typeSpeed)
            }


            var Hi = function(hiElem,words,speed=4000){
                this.hi = hiElem;
                this.words = words;
                this.speed = speed;
                this.hiIndex = 0;
                this.length = this.words.length
                this.opacity = Number(this.hi.style.opacity)
                this.switch();

            };
            
            
            Hi.prototype.switch = function (){
                this.fade = function(){
                    this.hi.style.opacity = Number(this.hi.style.opacity) - 0.07;
                    this.opacity = this.hi.style.opacity;
                    this.switch()
                }
                if(this.hiIndex == (this.length - 1)){
                    this.hiIndex = 0
                }
                if (this.opacity < 0){
                    this.hiIndex++;
                    this.hi.innerText = this.words[this.hiIndex]
                    setTimeout( (function(){this.hi.style.opacity = '1' ; this.opacity = 1;}).bind(this) ,2000)
                    setTimeout( (function(){ this.switch()}).bind(this) ,this.speed)
                } else {
                    setTimeout( function(){this.fade()}.bind(this),90)
                }
            }

            // this is the intro animation
            function introAnime() {
                gsap.from('body',{duration:2, opacity:0})
                gsap.from( ' #burger , #name, #hi, .solidBack' , {duration: 1, delay:0.5, opacity: 0 , x:"random(-10,10)" , y: "random(-10,0)" , stagger: "0.20" } , "+=2")

                
            }


            // this section is dedicated to the burgerNav toggling open and close + animation ofthe burger 

            function burgerNav (state){  

                var tl = gsap.timeline()
                var w = window.innerWidth - 60;
                var h = window.innerHeight - 200;
                var midVal = h/2;
                

                if (state === false){ // animate the burger to a cross, open the menue

                    //burger
                    
                    tl.to( '#line2' , {duration:0.5, width:0, x:"12px"})
                    tl.to( '#line1' , {duration:0.5, y:"700%", rotation: "224_cw"} , "-=0.5")
                    tl.to( '#line3' , {duration:0.5, y:"-700%", rotation: "-224_ccw"} , "-=0.5")
                    tl.to( '.line' , {duration:0.5 , boxShadow:"0 0 10px 2px white",  } , "-=0.5" )

                    //menue
                    tl.to('#menu' , {duration:0.5 , borderRadius:"10px" , top:"30px", right:"30px", border: midVal+"px solid rgba(255, 239, 175, 0.411)" }, "-=0.5")
                    tl.to('#menu', {duration:0.5, width:w, height:h, border: "1px solid rgba(255, 239, 175, 0.411)" }, "-=0.5");
                    tl.to( '#menuList' , {duration:0.5, opacity:1 }  )
                    // gsap.to('#menu' , {duration:0.5, });
                    gsap.fromTo( '.li' , {duration:0.5 , x:"random(1,100)" , y:"random(-100,-1)"  } , {opacity:1, x:0 , y:0 ,stagger:0.3})

                } else if (state === true) { //animate the burger to normal, close the menue

                    gsap.to( '.li' , {duration:0.3 , x:100 , stagger: 0.03 , opacity:0 })
                    
                    // burger
                    tl.to( '#line2' , {duration:0.5,width:"100%", x:"0px"})
                    tl.to( '#line1' , {duration:0.5, y:"-100%", rotation: "0_ccw"} , "-=0.5")
                    tl.to( '#line3' , {duration:0.5, y:"100%", rotation: "0_cw"} , "-=0.5")
                    tl.to( '.line' , {duration:0.5 , boxShadow:"0 0 0px 0px white" } , "-=0.5" )
                    
                    //menue     
                    tl.to('#menu', {duration:0.5, borderRadius: "10px" , top: "4.5rem", right: "5.5rem" ,width:0, height:0, border: "0px solid rgba(255, 239, 175, 0.411)" }, "-=0.5");
                    tl.to( '#menuList' , {duration:0.5, opacity:0 } , "-=0.2" )
                }
            }
                                                    
            

            return{ //!!!!!!!!!!!!!!!!!!!!!!!!!!
                TypeWriter : TypeWriter,
                Hi: Hi,
                burgerNav: burgerNav,
                intro:introAnime,
            }
        
        })()
    }


    //init the controler
    x.init()
})

//init the program on load
document.onload = i()
