import api_key from "./config.js"
// console.log(api_key);



let  main = document.getElementById ("main") ;
let check = document.getElementById ('check');
check.addEventListener ("click" , function (){
    let city = document.getElementById ("city").value
    let getWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    // console.log("hellp");
    fetch (getWeatherApiUrl)
    .then ( function (response){
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("City not found")``
        }
    } )
    .then ( function(data){
     console.log(data.main);   
    let weatherdeatils = document.createElement ("div")
    weatherdeatils.innerHTML = `
       <p>Temperature ${data.main.temp}</p>
   <p>feels_like ${data.main.feels_like} </p>
   <p>Humidity ${data.main.humidity}</p>
   <p>Pressure ${data.main.pressure}</p>
   <p>Max Temp today ${data.main.temp_max}</p>
    <p>Min temp today ${data.main.temp_min}</p>
     `
     main.appendChild (weatherdeatils)
    })
   .catch  (function (error){
    console.log(error);
   })
})


let style = document.createElement ("style");
style.innerHTML =`
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #4facfe, #00f2fe);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#main {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 300px;
}

input {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background: #0056b3;
}

#weatherDetails {
    margin-top: 20px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    display: none; /* Initially hidden */
}

p {
    margin: 8px 0;
    font-size: 14px;
}
`
document.head.appendChild(style);