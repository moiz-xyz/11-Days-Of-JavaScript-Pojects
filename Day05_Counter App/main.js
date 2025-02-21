
let html = document.getElementById ("html");
html.innerHTML = `
    <div id="main">
        0
    </div>
    <button id="Incremet">Incremet</button>
    <button id="Reset">Reset</button>
    <button id="Delete">Delete</button>
`
let increment = document.getElementById ("Incremet");
let decrement = document.getElementById ("Reset");
let reset = document.getElementById ("Delete");

let main = document.getElementById ("main");
let start = 0;


increment.addEventListener ("click" , function (){
    start ++
    main.textContent =  start
})

decrement.addEventListener("click" , function (){
    if (start < 1){
        alert ("value cannot be less than 0")
    } else {
        start --
        main.textContent =  start
    }
})
reset.addEventListener ("click" , function (){
    start = 0
    main.textContent =  start
})


// styling
let style = document.createElement("style");
style.innerHTML =   `
/* Apply a modern font and center the content */
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    margin: 0;
}

/* Style the counter display */
#main {
    font-size: 4rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.2);
    padding: 20px 50px;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Style the buttons */
button {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 4px 6px rgba(

`
document.head.append(style);
