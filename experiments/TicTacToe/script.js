
    // function ticMiddle(e,wins){
        // setTimeout(()=>{switchTurn(),assignTurn(wins,e), boxes[4].innerHTML = turn.toUpperCase(); switchTurn() ; listenerEnabler(); return},1500);
        // switchTurn()
        // boxes[4].innerHTML = turn.toUpperCase();
        // listenerEnabler()
        // return false;
        // console.log(turn,boxes[4].innerHTML)
    // }

    // 
    
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
        if (e.nodeName === "DIV"){
            e.innerHTML = turn.toUpperCase()
        }else{
            e.path[0].innerHTML = turn.toUpperCase()
        }
    }

    const writeToWinTable = function (e,wins){
        if (e.nodeName === "DIV"){
            for (i=0; i<wins.length; i++) {
                for (b=0; b<wins[i].length; b++){
                    if (wins[i][b] === Number(e['id'][3])) {
                         wins[i][b] = turn;
                    }
                }
            }
        } else {
            for (i=0; i<wins.length; i++) {
                for (b=0; b<wins[i].length; b++){
                    // console.log(wins[i][b],e.path[0]['id'][3],wins[i][b] === Number(e.path[0]['id'][3]))
                    if (wins[i][b] === Number(e.path[0]['id'][3])) {
                         wins[i][b] = turn;
                    }
                }
            }
        }
    }

    const checkForWinner = function (wins){
        for (i=0; i<wins.length; i++) {
        if (wins[i][0]===wins[i][1] && wins[i][1] === wins[i][2]){
            let winner = wins[i][0];
            if (winner === 'x'){
                winCard.classList.remove('winCard')
            } else if (winner === 'o') {
                loseCard.classList.remove('loseCard') ;
            }
            return true;
        } else {
            console.log('no winners yet')
            return false
        }
        }
    }




    // const winOrBlock = function(e,winsList, win){
    //     let theEmptySquare = win.filter((box)=>(typeof box === typeof 1))
    //     let pSign = win.filter((box)=>(typeof box === typeof 'x'))
    //     if (pSign.length === 2){
    //         if (pSign[0] == playerSign){
    //             boxes[theEmptySquare].innerHTML = computerSign.toUpperCase();
    //             writeToWinTable(e.path[0],winsList);
    //             switchTurn();
    //             return false;
    //         } else if (pSign[0] === computerSign){
    //             console.log('WIN IT!');
    //             return false;
    //         }
    //     }
    // }

    // const middleIsFree = function (wins){
    //     if (typeof wins[1][1] === typeof 1){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // const cornerIsFree = function () {
    //     if (typeof wins[0][0] === typeof 1 ||
    //         typeof wins[0][2] === typeof 1 ||
    //         typeof wins[2][0] === typeof 1 ||
    //         typeof wins[2][2] === typeof 1 ){
    //             return true
    //         } else {
    //             return false;
    //         }
    // }






    // let theEmptySquare = win.filter((box)=>(typeof box === typeof 1))
    // let pSign = win.filter((box)=>(typeof box === typeof 'x'))
    // if (pSign.length === 2){
    //     if (pSign[0] == playerSign){
    //         boxes[theEmptySquare].innerHTML = computerSign.toUpperCase();
    //         writeToWinTable(e.path[0],winsList);
    //         switchTurn();
    //         return false;
    //     } else if (pSign[0] === computerSign){
    //         console.log('WIN IT!');
    //         return false;
    //     }
    // }



    
    // const doWin = function (e,winList,win){
    //     console.log('ICANWIN')
    //     console.log(e)
    //     console.log(winList)
    //     console.log(win)
    // }


    // const takeMiddle = function (wins) {
    //     let midBox = document.getElementById('box4')
    //     midBox.innerHTML = computerSign.toUpperCase();
    //     writeToWinTable(midBox,wins)
    //     switchTurn();
    //     return false;
    // }

    // const takeCorner = function () {
    //     console.log('taking corner')
    //    

    //     if (boxes[0].innerHTML === '' ||
    //         boxes[2].innerHTML === '' ||
    //         boxes[6].innerHTML === '' ||
    //         boxes[8].innerHTML === ''){
    //         if (boxes[corners[random]].innerHTML === '') {
    //             boxes[corners[random]].innerHTML = computerSign.toUpperCase();
    //             switchTurn()
    //             return false
    //         } else {
    //             takeCorner();
    //             return false
    //         }
    //     } else {
    //         return false;
    //     }
    // }


    const canWin = (wins) => {
        let numb
        for (i=0;i<wins.length;i++){
            if (wins[i][0]===wins[i][1] || wins[i][1] === wins[i][2] || wins[i][0] == wins[i][2]){
                numb = wins[i].filter((n)=>typeof n == typeof 'a')
                console.log(numb)
                if (numb[0] === computerSign) {
                    console.log('Can WIn!')
                } else {
                    console.log('can NOT win')
                }
            }
        }
        return false;
    }

    const canBlock = (wins) => {
        for (i=0;i<wins.length;i++){
            if (wins[i][0]===wins[i][1] || wins[i][1] === wins[i][2] || wins[i][0] == wins[i][2]){
                numb = wins[i].filter((n)=>typeof n == typeof 'a')
                if (numb[0] === playerSign) {
                    console.log(' HAVE TO BLOCK')
                    return true
                } else {
                    console.log(' No need to block')
                    return false
                }
            }
        }
    }


    const block = (wins) => {
        let ween = wins.filter(win=>(win[0] === win[1] || win[1] === win[2] || win[0] === win[2]))
        let final = ween.filter((win,i)=>!(win[i]===computerSign))
        let theBox = final[0].filter(box=>typeof box === typeof 1)
        writeOnTable(boxes[theBox[0]]);
        writeToWinTable(boxes[theBox[0]],wins);
        return false
    }

    const middleIsEmpty = (wins) => {
        if (typeof wins[1][1] === typeof 1){
            return true;
        } else{
            return false;
        }
    }

    const takeMiddle = (wins) => {
        writeToWinTable(boxes[4],wins)
        writeOnTable(boxes[4])
        return false
    }

    const cornerIsEmpty = () => {
        if (boxes[0].innerHTML === '' ||
            boxes[2].innerHTML === '' ||
            boxes[6].innerHTML === '' ||
            boxes[8].innerHTML === '' ){
                return true
            } else{
                return false
            }
    }

    const takeRandomCorner = () => {
        let random = Math.floor(Math.random() * Math.floor(4))
        let corners = [0,2,6,8]
        let legit = corners.filter((corner)=>boxes[corner].innerHTML === '')
        writeOnTable(boxes[legit[random]])
        writeToWinTable(boxes[legit[random]],wins)
        return false
    }


    const computerTurn = function (e,wins){
        if (canWin(wins)) {
            win()
            // return false
        } else if (canBlock(wins)) {
            block(wins)
            // return false
        } else if (middleIsEmpty(wins)){
            takeMiddle(wins)
        //     return false
        } else if (cornerIsEmpty(wins)){
            takeRandomCorner(wins)
        //     return false
        // } else if (anyBoxesFree()){
        //     takeFreeBox()
        //     return false
        // } else if (noFreeBox()){
        //     reset()
        //     return false
        }
    }





    const addMark = function(e){
        if (e.path[0].innerHTML==='') {
            writeOnTable(e);
            writeToWinTable(e,wins);
            checkForWinner(wins)
            switchTurn();
            listenerDisabler();
            computerTurn(e,wins);
            checkForWinner(wins)
            switchTurn();
            listenerEnabler();
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