function init (){

    var turn;
    var wins;
    const boxes = document.querySelectorAll('.box');

    const winCard = document.querySelector('.winCard');
    const loseCard = document.querySelector('.loseCard');
    const resetButtons = document.querySelectorAll('button');



    function reset(){

       

        turn = 'x';
        // this is all the winning posibilities
        wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        boxes.forEach(box=>box.innerHTML = '');
        winCard.classList.add('winCard') ;
        loseCard.classList.add('loseCard') ;
        resetButtons.forEach(button=>button.addEventListener('click',reset));
    }
    



    function switchTurn(){
        turn === 'x' ? turn ='o' : turn='x';
        console.log('turn now is: '+turn)
    }



    function assignTurn(wins,e){
        console.log(turn,'ass')
        for (i=0; i<wins.length; i++ ){
            for (b=0; b<wins[i].length; b++){
                if (wins[i][b] === Number(e.path[0]['id'][3])) {
                    wins[i][b] = turn 
                }
            }
        }
        
    }

    function winner(winner){
        if (winner === 'x'){
            winCard.classList.remove('winCard') ;
        } 
        else{
            loseCard.classList.remove('loseCard') ;
        }
    }

    function blockOrWin(){
        console.log('block Or Win detected')
        switchTurn();
    }






  




    function ticMiddle(wins,e){
        setTimeout(()=>{switchTurn(),console.log('after '+turn),assignTurn(wins,e,turn), boxes[4].innerHTML = turn.toUpperCase(); switchTurn() ; listenerEnabler(); return},1500);
    }

    function ticCorner(boxes){
        console.log('corner')
        let random = Math.floor(Math.random() * Math.floor(4))
        let corners = [0,2,6,8]
        setTimeout(()=>{boxes[corners[random]].innerHTML = 'O'; listenerEnabler(); },1500);

    }
    
    function ticAnyFree(boxes){
        console.log(boxes)
        // setTimeout(()=>{boxes[corners[random]].innerHTML = 'O'; switchTurn(); listenerEnabler(); },1500);
    }


    function isFree(){
        var is = false;
        wins.forEach((win)=>{
            win.forEach(box=>{
                if (typeof box === typeof 1){
                    is = true
                }
            })
        })
        return is;
    }



    function chooseBox(wins,e,boxes){
        for (i=0; i<wins.length; i++ ){
            console.log(wins)
            // 01. look for a winner:
            if (wins[i][0] === wins[i][1] && wins[i][1] === wins[i][2]){
                winner(wins[i][0]);
                // return false;
            }


            // 2 and 3 can be combined together !!!!!!!!!!!!!!!
            //  02. look out! do not lose, BLOCK!
            //  0.3 check to Selection, if you can win!
            else if (
                wins[i][0] === wins[i][1] || 
                wins[i][0] === wins[i][2] ||
                wins[i][1] === wins[i][2]
                ) {
                    blockOrWin()
                }


                // 04. if middle is free, GET IT!
            else if (typeof wins[1][1] === typeof 1){
                    ticMiddle(wins,e)
                }

            
                // 05.tic a corner
            else if (typeof wins[0][0] === typeof 1 ||
                     typeof wins[0][2] === typeof 1 ||
                     typeof wins[2][0] === typeof 1 ||
                     typeof wins[2][2] === typeof 1 
                    ){
                        ticCorner(boxes)
                    }
                // 06. cant? then tic anything,
                // 7. cnat tic anything? reset!
            else{
                console.log('here')
                if (isFree() === true){
                    ticAnyFree(boxes)
                } else{
                    reset()
                }
            }
            return false;
        }
    }

    function compTurn(e,boxes){
        chooseBox(wins,e,boxes);
    };



    function addMark(e){
        if (e.path[0].innerHTML==='') {
            e.path[0].innerHTML = turn.toUpperCase();
            listenerDisabler()
            assignTurn(wins,e);    
            compTurn(e,boxes);
        } else {
            alert('You cant mark here');
        }
    }


    var listenerDisabler = () => {
        boxes.forEach(box=>box.removeEventListener('click',addMark));
    }



    const listenerEnabler=() => boxes.forEach(box=>box.addEventListener('click',addMark))
    
    
    reset();
    listenerEnabler()

};


init();


