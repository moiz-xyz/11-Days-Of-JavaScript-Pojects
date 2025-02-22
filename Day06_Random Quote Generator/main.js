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
