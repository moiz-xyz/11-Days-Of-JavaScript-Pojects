let cantiner  = document.querySelector(".cantiner");
cantiner.innerHTML = `
        <i class="fa-solid fa-arrow-left" id="left"></i>
    <div class="frmae">
        <div class="slider">
           <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" class="image" alt="">
           <img src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" class="image" alt="">
           <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" class="image" alt="">
           <img src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" class="image" alt="">
        </div>
    </div>
    <i class="fa-solid fa-arrow-right" id="right"></i>
`
let style = document.createElement("style");
style.innerHTML = `
    body {
        background-color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;

    }
    .cantiner{
        display: flex;
        align-items: center;
        gap: 50px;
    }
    i{
        font-size: 150px;
        cursor: pointer;
    }
    .frmae {
    width: 800px ;
    height: 500px ;
    overflow: hidden;   
    }
    .slider{
        display: flex;
        transition: all 1s ease;
    }
    .image{
        margin-top: 100px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
document.head.appendChild(style);
// Logic of slider
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let index = 0;

let dragToLeft = () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; 
    }
    slider.style.transform = `translateX(-${index * 800 }px)`;
};

let dragtoright = () => {
    if (index < images.length - 1) {
        index--;
    } else {
        index = 0; 
    }
    slider.style.transform = `translateX(-${index * 800}px)`;
}

right.addEventListener("click", dragToLeft);
left.addEventListener("click" , dragtoright);