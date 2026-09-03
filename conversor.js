const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect2 = document.querySelector(".currency-select2")

const cotacoes = {
    USD: {
        cotacao: 1,
        nome: "Dólar",
        img: "./imagens/eua.png"
    },

    BRL: {
        cotacao: 5.15,
        nome: "Real",
        img: "./imagens/brasil.png"
    },

    EUR: {
        cotacao: 1.17,
        nome: "Euro",
        img: "./imagens/euro.png"
    },

    GBP: {
        cotacao: 1.36,
        nome: "Libra",
        img: "./imagens/libra.png"
    },

    XBT: {
        cotacao: 78658.36,
        nome: "Bitcoin",
        img: "./imagens/bitcoin.png"
    }
}

function convertCurrency() {
    const initialValue = document.querySelector(".initial-value").value
    const initialValueResult = document.querySelector(".initial-value-result")
    const endValueResult = document.querySelector(".end-value-result")

    const cotacaoInicial = cotacoes[currencySelect2.value]
    const cotacaoFinal = cotacoes[currencySelect.value]

    initialValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencySelect2.value }).format(initialValue)
    endValueResult.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencySelect.value }).format(initialValue * (cotacaoFinal.cotacao / cotacaoInicial.cotacao))

}


function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    const cotacaoFinal = cotacoes[currencySelect.value]

    currencyName.innerHTML = cotacaoFinal.nome
    currencyImg.src = cotacaoFinal.img

    convertCurrency()

}

function changeCurrency2() {

    const currencyName2 = document.getElementById("currency-name2")
    const currencyImg2 = document.getElementById("currency-img2")

    const cotacaoInicial = cotacoes[currencySelect2.value]

    currencyName2.innerHTML = cotacaoInicial.nome
    currencyImg2.src = cotacaoInicial.img

    convertCurrency()

}


currencySelect2.addEventListener("change", changeCurrency2)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)

