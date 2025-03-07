let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let [seconds , minutes ,hours] = [0,0,0]

let timerDisplay = document.querySelector(".timer"); 

let timer = null ;

let displayTime = () => {
    seconds ++
    if (seconds > 60){
        seconds = 0
        minutes ++
        if (minutes === 60){
            minutes = 0;
            hours ++
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerDisplay.innerHTML = h + ":"  + m + ":" + s 
    
}

let startTimer = () =>{
    if (timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(displayTime, 1000)
}
start.addEventListener("click", startTimer);

let stopTimer = () => {
    clearInterval(timer)
}
stop.addEventListener("click", stopTimer)

let resetTimer = () =>{
clearInterval(timer);
timerDisplay.innerHTML = "00:00:00"
}
reset.addEventListener("click", resetTimer)