let style = document.createElement("style");
style.innerHTML = `
 body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f4f6;
            font-family: Arial, sans-serif;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: black;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
`
document.head.appendChild(style);

let button  = document.getElementById("btn");
let checkPalindrom = ()=>{
    let input = document.getElementById("textInput").value;
    let removespace = "";
    for (let i = 0 ; i < input.length ; i++){
        if (input[i] !== " ") {
            removespace += input[i]   
        }
    }
    let reversed = removespace.split("").reverse("").join("")
    // console.log(reversed);
    if (removespace === reversed){
        Swal.fire("The Phrase is a palindrome!");
    } else {
        Swal.fire("The Phrase is not a palindrome!"); 
    }
    

}
 button.addEventListener("click" , checkPalindrom)
