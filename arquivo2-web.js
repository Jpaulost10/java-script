



const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")


function troqueiValor(valores){
    console.log(valores)
}

input.addEventListener("keypress", troqueiValor)
select.addEventListener("change", troqueiValor)
button.addEventListener("click", troqueiValor)





