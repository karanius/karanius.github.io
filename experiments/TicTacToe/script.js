function init (){

    var turn;
    var wins;
    const boxes = document.querySelectorAll('.box');

    const winCard = document.querySelector('.winCard');
    const loseCard = document.querySelector('.loseCard');
    const resetButtons = document.querySelectorAll('button');


    // const b0 = boxes[0].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[1].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[2].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[3].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[4].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[5].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[6].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[7].addEventListener('DOMSubtreeModified', compTurn)
    // boxes[8].addEventListener('DOMSubtreeModified', compTurn)




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
    }



    function assignTurn(wins,e){
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

    function ticMiddle(){
        console.log('middle')
        setTimeout(()=>{boxes[4].innerHTML = 'O'; switchTurn(); listenerEnabler(); return},1500);
    }

    function ticCorner(boxes){
        console.log('corner')
        let random = Math.floor(Math.random() * Math.floor(4))
        let corners = [0,2,6,8]
        // let ticCornerTime = setTimeout(()=>{boxes[corners[random]].innerHTML = 'O'; switchTurn(); listenerEnabler(); },1500);

    }
    
    function ticAnyFree(){
        console.log('ticAny detected')
        switchTurn();
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

            // 01. look for a winner:
            if (wins[i][0] === wins[i][1] && wins[i][1] === wins[i][2]){
                winner(wins[i][0]);
                return false;
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
                    ticMiddle()
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
                    ticAnyFree()
                } else{
                    reset()
                }
            }
        }
    }

    function compTurn(e,boxes){
        assignTurn(wins,e);
        chooseBox(wins,e,boxes);
    };



    function addMark(e){
        if (e.path[0].innerHTML==='') {
            e.path[0].innerHTML = turn.toUpperCase();
            listenerDisabler()
            compTurn(e,boxes);
        } else {
            alert('You cant mark here');
        }
    }


    var listenerDisabler = () => {
        boxes.forEach(box=>box.removeEventListener('click',addMark));
    }
    
    // function marker(e){
        // console.log(e)
        // if (e.path[0].innerHTML==='') {
            // e.path[0].innerHTML = turn.toUpperCase();
        // } else {
            // alert('You cant mark here');
        // }
// }

    // const enabler = () =>{
        // boxes.forEach(box=>box.addEventListener('click',marker))
    // }

    // const desabler = () => {
        // boxes.forEach(box=>box.removeEventListener('click',marker))
    // }




    const listenerEnabler=() => boxes.forEach(box=>box.addEventListener('click',addMark))
    
    
    reset();
    listenerEnabler()
    // enabler();
    // addMark()

};


init();


