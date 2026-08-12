
/*

const input = document.getElementById("inputText")

console.log(input)

const paragrafo = document.getElementsByClassName("paragraph-js")

console.log (paragrafo)

const tag = document.getElementsByTagName("h1")

console.log(tag)

const query = document.querySelector("h1")

console.log(query.innerHTML)

const queryAll = document.querySelectorAll("p")

console.log(queryAll)

const button = document.querySelector(".main-button")

button.style.color = "white"



*/

const input = document.querySelector("#inputText")
const titulo = document.querySelector("h3")

function cliqueiNoBotao() {
    console.log(input.value)
    titulo.textContent = input.value
}

function digiteiNoInput() {
    console.log("Digitei no Input!")
}




    


