// const wins = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ]






// var signal = 'null';
// const intro = () => {

//     const watcher = (sig) => {
//         if (sig.toLowerCase() === 'x') {
//             signal = 'x';
//             xBut.removeEventListener('click', clickF);
//             oBut.removeEventListener('click', clickF);
//             clearInterval(signalwatcher);
//         } else if (sig.toLowerCase() === 'o') {
//             signal = 'o';
//             xBut.removeEventListener('click', clickF);
//             oBut.removeEventListener('click', clickF);
//            clearInterval(signalwatcher);
//     }
//    };

//     const clickF = (e) => {
//         signal = e.target.textContent;
//     }

//     const firstButtons = document.getElementsByClassName('qq');
//     const [xBut, oBut] = [firstButtons[0], firstButtons[1]];
//     xBut.addEventListener('click', clickF);
//     oBut.addEventListener('click', clickF);
//     const signalwatcher = setInterval(()=>watcher(signal),1000);

// };

    
//     intro()


tl = new TimelineLite();

tl.fromTo('.dot',1, {width:'0', height:'0'},{width:'50VW',height:'70vh',y:'-100px'})
.fromTo('.dot',1,{boxShadow:'0 0 0 0 blue'},{boxShadow:'0 0 10000px 30vw blue'},'-=9')