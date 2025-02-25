

const btn = document.getElementById ("btn");
let random = () =>{
    return Math.floor(Math.random() * 256)
}
let changeColor = () =>{
    let randomColor = `rgb(${random()}, ${random()}, ${random()})`;
    document.body.style.backgroundColor = randomColor 
}

btn.addEventListener("click" , changeColor);
window.addEventListener ("load" , changeColor)

let style = document.createElement ("style");
style.innerHTML =   `
*{
    margin: 0;
    padding: 0;

}
body {
height:  100vh;
display: grid;
place-items: center;
background-color: black;
}
button {
font-family: sans-serif;
font-size: 1.4em;
padding: 1em 2em;
border-radius: 2em;
border: 5px solid white;
background-color: transparent;
color: white;
letter-spacing: 1.5px;
cursor: pointer;
outline: none;
}
`
document.head.append(style);