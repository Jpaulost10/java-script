
const button = document.querySelector("button") 


function sortear() {
    const firstNumber = Math.ceil(document.querySelector("#first-number").value)
    const lastNumber = Math.floor(document.querySelector("#last-number").value)

    if (firstNumber >= lastNumber) {
        alert("O primeiro numero deve ser menor que o segundo")
    } else {
        const numeroSorteado = Math.floor(Math.random() * (lastNumber - firstNumber + 1) + firstNumber)
        button.innerHTML = ("O numero sorteado foi: ") + numeroSorteado
    }
}

button.addEventListener("click", sortear)







