let main = document.getElementById ("main");
main.innerHTML = `
 <div class="cant">
            <div class="clock">
                <span id="hrs">00</span>
                <span>:</span>
                <span id="min">00</span>
                <span>:</span>
                <span id="sec">00</span>
            </div>
        </div>
`
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval (()=>{
let currentTime = new Date ()
let currentHours = currentTime.getHours() ;
let twelveHrs = currentHours % 12 || 12 ;
let formattedHours = (twelveHrs < 10 ? "0" : "") + twelveHrs;
let currentMins = (currentTime.getMinutes() <10 ? "0" :"") + currentTime.getMinutes()
let currentSec = (currentTime.getSeconds() <10 ? "0" :"") + currentTime.getSeconds()

    hrs.innerHTML = formattedHours
    min.innerHTML = currentMins
    sec.innerHTML = currentSec

} ,1000)




// console.log(new Date());
// console.log(tweleveHrs);
// console.log(new Date );

