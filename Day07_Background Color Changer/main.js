

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