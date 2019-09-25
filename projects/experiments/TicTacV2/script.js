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

    const writeToGameTable =(event) => {
        if (event.nodeName === 'DIV'){
            event.innerHTML = turn.toUpperCase();
            enabler()
        }else{
            event.path[0].innerHTML = turn.toUpperCase();
            enabler()
        };
        
    };
    const writeToWinsPossibilities = (event) => {
    if (event.nodeName === 'DIV'){
        let sign = event.innerHTML.toLowerCase();
        let boxNum = Number(event['id'].replace('box',''));
        for (i=0;i<wins.length;i++){
            for (b=0;b<wins[i].length;b++){
                if (wins[i][b] == boxNum ){
                    wins[i][b] = sign;
                };
            };
        };
    }else{
        let sign = event.path[0].innerHTML.toLowerCase();
        let boxNum = Number(event.path[0]['id'].replace('box',''));
        for (i=0;i<wins.length;i++){
            for (b=0;b<wins[i].length;b++){
                if (wins[i][b] == boxNum ){
                    wins[i][b] = sign;
                };
            };
        };
    }
    };

    const writer = (event) =>{
        writeToGameTable(event);
        writeToWinsPossibilities(event);
    };
    const switchTurn = () => {
        turn === playerSign ? turn = computerSign : turn = playerSign;
    };

    const endGame = (winner) => {
        if (winner === 'x'){
            console.log('winner is x')
            winCard.classList.remove('winCard')
        } else if (winner === 'o') {
            console.log('winner is o')
            loseCard.classList.remove('loseCard') ;
        };
    };

    const checkForWinner = () => {

        let winninBox;
        winninBox = wins.filter(win=> typeof win[0] === typeof '1' && typeof win[1] === typeof '1' && typeof win[2] === typeof '1');
        winninBox = winninBox.map((box)=>{
            if (box[0] === box[1] &&
                box[1] === box[2]){
                    return box
                }
            }
        )
        winninBox = winninBox.filter(box=>typeof box !== typeof undefined)
        if (winninBox[0] !== undefined){
            endGame(winninBox[0][0]);
        }else{
            console.log('There is no Winners yet')
        };
    }

    const youCanWinIt = () => {
        let winninBox;
        winninBox = wins.map(el => {
        if (el[0] === computerSign && el[1] === computerSign ||
            el[1] === computerSign && el[2] === computerSign ||
            el[0] === computerSign && el[2] === computerSign ){
                return el
            };
        });
        winninBox = winninBox.filter(box=>box !== undefined);
        if ( winninBox[0]) { 
            if (
                winninBox[0][0] === playerSign ||
                winninBox[0][1] === playerSign ||
                winninBox[0][2] === playerSign
            ){
                winninBox[0] = undefined;
            }
        }
        if (winninBox[0] !== undefined && (
            winninBox[0][0] === winninBox[0][1] ||
            winninBox[0][1] === winninBox[0][2]
            )){
            console.log('CAN win')
            return true;
        } else{
            console.log('cant win')
            return false;
        };
    };

    const winIt = () => {

        console.log('about to win it!')
        let winninBox;
        winninBox = wins.map(el => {
        if (el[0] === computerSign && el[1] === computerSign ||
            el[1] === computerSign && el[2] === computerSign ||
            el[0] === computerSign && el[2] === computerSign ){
                return el
            };
        });
        winninBox = winninBox.filter(box=>box !== undefined);
        winninBox = winninBox[0].filter(box=>typeof box === typeof 1 );

        writer(boxes[winninBox[0]])
    };

    const youCanBlockIt = () => {
        console.log('can i block?')
        let toBeBlocked;
        toBeBlocked = wins.map((el)=>{
            if (el[0] === playerSign && el[1] === playerSign ||
                el[1] === playerSign && el[2] === playerSign ||
                el[0] === playerSign && el[2] === playerSign ){
                    return el
                };
            });
        toBeBlocked = toBeBlocked.filter(box=> typeof box !== typeof undefined);
        toBeBlocked = toBeBlocked.map((box)=>{
            if(
                typeof box[0] === typeof 1 ||
                typeof box[1] === typeof 1 ||
                typeof box[2] === typeof 1
            ){
                return box;
            }
            }
        );
        toBeBlocked = toBeBlocked.filter(box=> typeof box !== typeof undefined);
        if (toBeBlocked[0] !== undefined){
            console.log('CAN block')
            return true;
        } else{
            console.log('cant block')
            return false;
        };
    };

    const blockIt = ()=>{
        let toBeBlocked;
        toBeBlocked = wins.map((el)=>{
            if (el[0] === playerSign && el[1] === playerSign ||
                el[1] === playerSign && el[2] === playerSign ||
                el[0] === playerSign && el[2] === playerSign ){
                    return el
                };
            }
        );
        toBeBlocked = toBeBlocked.filter(box=> typeof box !== typeof undefined);
        if (toBeBlocked.length > 1){
            toBeBlocked = toBeBlocked.map((box)=>{
                if (
                    typeof box[0] === typeof 1 ||
                    typeof box[1] === typeof 1 ||
                    typeof box[2] === typeof 1 
                ){
                    return box;
                }
            })
            toBeBlocked = toBeBlocked.filter(box=>typeof box !== typeof undefined)      
        }
        

        toBeBlocked = toBeBlocked[0].filter(box=>typeof box === typeof 1 );
        writer(boxes[toBeBlocked[0]]);
    };

    const middleIsEmpty = () => {
        let emptyMiddle;
        emptyMiddle = (typeof wins[1][1] === typeof 1);
        if (emptyMiddle) {
            console.log('middle IS empty')
            return true;
        } else{
            console.log('CANT take Middle')
            return false;
        };
    };
    
    const takeMiddle = () =>{
        writer(boxes[4]);
    };

    const anyCornerIsEmpty = () => {
        if (
            boxes[0].innerHTML === '' ||
            boxes[2].innerHTML=== '' ||
            boxes[6].innerHTML=== '' ||
            boxes[8].innerHTML=== '' 
        ){
            return true;
        } else {
            return false;
        }
    };
    const takeAnyRandomCorner = () =>{
        
        let cornerToBeTaken;
        let emptyCorners;
        let corners = [0,2,6,8];
        emptyCorners = corners.map(corner=>boxes[corner]);
        emptyCorners = emptyCorners.map(
            corners=>{
                if (corners.innerHTML === ''){
                    return corners;
                }
            })
        emptyCorners = emptyCorners.filter(corner=>typeof corner !== typeof undefined)
        cornerToBeTaken = emptyCorners.length - 1
        cornerToBeTaken = Math.floor(Math.random() * (cornerToBeTaken - 0 + 1) ) + 0;
        if (emptyCorners.length > 1) {
            writer(emptyCorners[cornerToBeTaken])
        } else(
            writer(emptyCorners[0])
        )    
    }


    const noFreeBox = () =>{
        for (i=0;i<boxes.length;i++) {
            if(boxes[i].innerHTML === ''){
                console.log('free Space is left')
                return false;
            } else{
                console.log('NO Space')
                return true;
            }
        }
    }
    

    const computerGoes = () => {
        console.log('Computer: Its my turn!')
        console.log('Im thinking....')
        if (youCanWinIt()) {
            console.log('I will do..')
            console.log(1)
            winIt();
        } else if (youCanBlockIt()) {
            console.log('I will do..')
            console.log(2);

            blockIt();
        } else if (middleIsEmpty()){
            console.log('I will do..')
            console.log(3)
            takeMiddle();
        } else if (anyCornerIsEmpty()){
            console.log('I will do..')
            console.log(4)
            takeAnyRandomCorner();
        } else if (noFreeBox()){
            console.log('I will do..')
            console.log('reset')
            console.log(5)
            reset();
        }
    };

    const playerGoes = (event) => {
        writer(event);
    }


    const doTheMagic = (event) => {
        if (event.path[0].innerHTML === ''){
        playerGoes(event);
        console.log('player finished ') ;
        checkForWinner();
        switchTurn();
        disabler();
        computerGoes();
        console.log('COMP FINSIHED ');
        checkForWinner();
        switchTurn();
        enabler();
    }else{
        alert('You cant mark here');
    };
}

    const enabler = () => boxes.forEach(box=>box.addEventListener('click',doTheMagic))
    const disabler = () => boxes.forEach(box=>box.removeEventListener('click',doTheMagic))

    reset();
    enabler();

};



init();