
const init = (a) =>{
    


    screen = document.getElementsByClassName('screen');

    let seconds = 0;
    let minutes = 0;
    let miliSec = 0;
    let time;
    const builder =()=>{
        if (miliSec > 59) {
            miliSec = 0;
            seconds = seconds + 1;
        } else if ( seconds > 59){
            seconds = 0;
            minutes = minutes + 1;
        }
    }

    screen[0].innerHTML = '00:00:00' 
    const milisecplus = setInterval(()=>miliSec= miliSec+1,100)
    const timeConstructor = setInterval(()=>{time =  minutes + ':' + seconds + ':' + miliSec}, )
    const watcher = setInterval(()=>{screen[0].innerHTML = time; },10)
     const constructor = setInterval(builder,10)

     if (a==='stop') {
         console.log('asd')
        clearInterval(milisecplus)
        clearInterval(timeConstructor)
        clearInterval(constructor)
        clearInterval(watcher)
        document.getElementById('stop').removeEventListener('click',stop);
        document.getElementById('start').addEventListener('click',start)
    }

    document.getElementById('start').removeEventListener('click',init())
    document.getElementById('stop').addEventListener('click',stop)

}


init()
    
