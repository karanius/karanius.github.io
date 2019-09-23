function init (){
    var turn = 'x'
    
    // this is all the winning posibilities
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


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
        switchTurn()
        console.log(turn);
    }

    function compTurn(e){
        assignTurn(wins,e);
    };



    function addMark(e){
        if (e.path[0].innerHTML==='') {
            e.path[0].innerHTML= turn.toUpperCase();
            console.log(e);
            compTurn(e);
        } else {
            alert('You cant mark here');
        }
    }


    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box=>box.addEventListener('click',addMark))

};


init();