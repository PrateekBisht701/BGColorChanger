const body = document.querySelector('body')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color ='#';

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;

const startChangingColor = function(){
    
    function colorChange(){
        document.body.style.backgroundColor = randomColor();
    } 

   if(!intervalId){
     intervalId = setInterval(colorChange, 1000)
   }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('.start').
addEventListener('click', startChangingColor)

document.querySelector('.stop').
addEventListener('click', stopChangingColor)