const init = () => {

    let playerSign;
    let computerSign;
    let turn;
    let wins;
    const boxes = document.querySelectorAll('.box');
    const winCard = document.querySelector('.winCard');
    const loseCard = document.querySelector('.loseCard');
    const resetButtons = document.querySelectorAll('button');

    const reset =()=>{
        playerSign = 'x';
        computerSign = 'o';
        turn = 'x';
        wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        boxes.forEach(box=>box.innerHTML = '');
        winCard.classList.add('winCard') ;
        loseCard.classList.add('loseCard') ;
        resetButtons.forEach(button=>button.addEventListener('click',reset));
    };

    const debooger = () => {
        console.log('players sign: ',playerSign);
        console.log('computer Sign: ' ,computerSign);
        console.log('it is the turn of: ' ,turn);
        console.log('the current array is: ',wins);
    };

    const writeToGameTable =(event) => {
        event.path[0].innerHTML = turn.toUpperCase();
    };
    const writeToWinsPossibilities = (event) => {
        let sign = event.path[0].innerHTML.toLowerCase();
        let boxNum = Number(event.path[0]['id'].replace('box',''));
        for (i=0;i<wins.length;i++){
            for (b=0;b<wins[i].length;b++){
                if (wins[i][b] == boxNum ){
                    wins[i][b] = sign;
                };
            }
        }
    };

    const writer = (event) =>{
        writeToGameTable(event);
        writeToWinsPossibilities(event);
    };
    const switchTurn = () => {
        turn === playerSign ? turn = computerSign : turn = playerSign;
    };

    const checkForWinner = () => {
        console.log('checking to see if there is a winner!?')
    }

    const computerGoes = () => {
        if (youCanWinIt()) {
            winIt();
        } else if (youCanBlockIt()) {
            blockIt();
        } else if (middleIsEmpty()){
            takeMiddle();
        } else if (anyCornerIsEmpty()){
            takeAnyRandomCorner();
        } else if (anyBoxesAreFree()){
            takeAnyRandomFreeBox();
        } else if (noFreeBox()){
            reset();
        }
    };

    const playerGoes = (event) => {
        writer(event);
    }


    const doTheMagic = (event) => {
        playerGoes(event)
        checkForWinner()
        switchTurn()
        disabler()
        computerGoes()
        checkForWinner()
        switchTurn()
        enabler()
    };

    
    const enabler = () => {
        let box0 = document.getElementById('box0');
        let box1 = document.getElementById('box1');
        let box2 = document.getElementById('box2');
        let box3 = document.getElementById('box3');
        let box4 = document.getElementById('box4');
        let box5 = document.getElementById('box5');
        let box6 = document.getElementById('box6');
        let box7 = document.getElementById('box7');
        let box8 = document.getElementById('box8');

        box0.addEventListener('click',doTheMagic);
        box1.addEventListener('click',doTheMagic);
        box2.addEventListener('click',doTheMagic);
        box3.addEventListener('click',doTheMagic);
        box4.addEventListener('click',doTheMagic);
        box5.addEventListener('click',doTheMagic);
        box6.addEventListener('click',doTheMagic);
        box7.addEventListener('click',doTheMagic);
        box8.addEventListener('click',doTheMagic);
    };

    const disabler = () => {
        let box0 = document.getElementById('box0');
        let box1 = document.getElementById('box1');
        let box2 = document.getElementById('box2');
        let box3 = document.getElementById('box3');
        let box4 = document.getElementById('box4');
        let box5 = document.getElementById('box5');
        let box6 = document.getElementById('box6');
        let box7 = document.getElementById('box7');
        let box8 = document.getElementById('box8');

        box0.removeEventListener('click',doTheMagic);
        box1.removeEventListener('click',doTheMagic);
        box2.removeEventListener('click',doTheMagic);
        box3.removeEventListener('click',doTheMagic);
        box4.removeEventListener('click',doTheMagic);
        box5.removeEventListener('click',doTheMagic);
        box6.removeEventListener('click',doTheMagic);
        box7.removeEventListener('click',doTheMagic);
        box8.removeEventListener('click',doTheMagic);

    };










    reset();
    enabler();

};



init();