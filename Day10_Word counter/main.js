let text_Area = document.getElementById("textarea");
let btn = document.getElementById("count");
let update = document.getElementById("update");

const wordsCounter = () => {
    let words = text_Area.value.trim();
    
    if (words === "") {
        update.innerHTML = 0; // Set count to 0 if empty
        return;
    }

    let remove_space = words.replace(/\s+/g, " ");
    let splitWords = remove_space.split(" ");
    let numberofwords = splitWords.length;

    update.innerHTML = numberofwords;
};

btn.addEventListener("click", wordsCounter);
