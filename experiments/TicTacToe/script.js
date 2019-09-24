// function init (){




    // function reset(){

       

    // }
    






  




    // function ticMiddle(e,wins){
        // setTimeout(()=>{switchTurn(),assignTurn(wins,e), boxes[4].innerHTML = turn.toUpperCase(); switchTurn() ; listenerEnabler(); return},1500);
        // switchTurn()
        // boxes[4].innerHTML = turn.toUpperCase();
        // listenerEnabler()
        // return false;
        // console.log(turn,boxes[4].innerHTML)
    // }

    // function ticCorner(boxes){
        // console.log('corner')
        // let random = Math.floor(Math.random() * Math.floor(4))
        // let corners = [0,2,6,8]
        // setTimeout(()=>{boxes[corners[random]].innerHTML = 'O'; listenerEnabler(); },1500);

    // }
    
    // function ticAnyFree(boxes){
        // console.log(boxes)
        // setTimeout(()=>{boxes[corners[random]].innerHTML = 'O'; switchTurn(); listenerEnabler(); },1500);
    // }


    // function isFree(){
    //     var is = false;
    //     wins.forEach((win)=>{
    //         win.forEach(box=>{
    //             if (typeof box === typeof 1){
    //                 is = true;
    //             }
    //         })
    //     })
    //     return is;
    // };








    // function compTurn(e,boxes,wins){
    //     chooseBox(wins,e,boxes);
    // };




        // function addMark(e){
    //     
            // listenerDisabler()
    //         assignTurn(e,wins);
    //         console.log(events,'first')
    //         compTurn(events);
    //     
    //     }
    // }




// };



const init = function(){

    let playerSign;
    let computerSign;
    let turn;
    let wins;
    const boxes = document.querySelectorAll('.box');
    const winCard = document.querySelector('.winCard');
    const loseCard = document.querySelector('.loseCard');
    const resetButtons = document.querySelectorAll('button');

    const reset = function (){
        playerSign = 'x';
        computerSign = 'o'
        turn = 'x';
        wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        boxes.forEach(box=>box.innerHTML = '');
        winCard.classList.add('winCard') ;
        loseCard.classList.add('loseCard') ;
        resetButtons.forEach(button=>button.addEventListener('click',reset));
    }

    const switchTurn = function (){
        turn === playerSign ? turn =computerSign : turn=playerSign;
    }

    const writeOnTable = function(e){
        e.path[0].innerHTML = turn.toUpperCase();
    }

    const writeToWinTable = function (e,wins){
        for (i=0; i<wins.length; i++) {
            for (b=0; b<wins[i].length; b++){
                // console.log(wins[i][b],e.path[0]['id'][3],wins[i][b] === Number(e.path[0]['id'][3]))
                if (wins[i][b] === Number(e.path[0]['id'][3])) {
                     wins[i][b] = turn;
                }
            }
        }

    }

    const lookForWinner = function(winner){
        if (winner === 'x'){
            winCard.classList.remove('winCard')
        } else if (winner === 'o') {
            loseCard.classList.remove('loseCard') ;
        }
    }

    const winOrBlock = function(e,winsList, win){
        let theEmptySquare = win.filter((box)=>(typeof box === typeof 1))
        let playersign = win.filter((box)=>(typeof box === typeof 'x'))
        console.log(theEmptySquare)
        console.log(playersign)

    }

    const computerTurn = function(e,wins) {
        // loop around all the boxes and...
        for (i=0; i<wins.length; i++ ){
        // 01. look for a winner:
            if(wins[i][0]===wins[i][1] && wins[i][1] === wins[i][2]){
                lookForWinner(wins[i][1])
                // 02. try to win if possible, if not, block: if about to lose
            } else if (wins[i][0] === wins[i][1] || 
                        wins[i][0] === wins[i][2] ||
                        wins[i][1] === wins[i][2]){
                            winOrBlock(e,wins,wins[i])
            }
            
            


        }


    }


            // else if (
            //     wins[i][0] === wins[i][1] || 
            //     wins[i][0] === wins[i][2] ||
            //     wins[i][1] === wins[i][2]
            //     ) {
            //         blockOrWin()
            //     }


                // 04. if middle is free, GET IT!
            // else if (typeof wins[1][1] === typeof 1){
            //         ticMiddle(wins,e)
            //     }

            
                // 05.tic a corner
            // else if (typeof wins[0][0] === typeof 1 ||
            //          typeof wins[0][2] === typeof 1 ||
            //          typeof wins[2][0] === typeof 1 ||
            //          typeof wins[2][2] === typeof 1 
            //         ){
            //             ticCorner(boxes)
            //         }
                // 06. cant? then tic anything,
                // 7. cnat tic anything? reset!
            // else{
            //     if (isFree() === true){
            //         ticAnyFree(boxes)
            //     } else{
            //         reset()
            //     }
            // }
            // return false;
        // }
    // }








    const addMark = function(e){
        if (e.path[0].innerHTML==='') {
            writeOnTable(e);
            writeToWinTable(e,wins)
            switchTurn()
            listenerDisabler()
            computerTurn(e,wins)
            listenerEnabler()
        } else {
            alert('You cant mark here');
        }
    }







    const listenerEnabler=() => boxes.forEach(box=>box.addEventListener('click',addMark))
    const listenerDisabler = () => {boxes.forEach(box=>box.removeEventListener('click',addMark))}

    reset()
    listenerEnabler()


}

init();