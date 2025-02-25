let quote = document.querySelector(".quote");
let changeBtn = document.querySelector("#btn");

const api_url = "https://type.fit/api/quotes";
let generatequote = async (url) => {
    fetch ()
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        // quote.innerText = `"${data.content}" — ${data.author}`;
    } catch (error) {
        quote.innerText = "Failed to load quote!";
    }
}

// Corrected event listener (without parentheses)
changeBtn.addEventListener("click", generatequote (api_url));


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
