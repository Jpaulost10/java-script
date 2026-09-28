
const button = document.querySelector("button")
button.addEventListener("click", buscarContato)
let input = document.querySelector("input")
let p = document.querySelector("p")

let contatos = [
    { nome: "João Paulo", idade: 30, telefone: "62 99289-5694" },
    { nome: "João Pedro", idade: 33, telefone: "62 99163-5700" },
    { nome: "João Marcos", idade: 31, telefone: "62 99240-7805" },
    { nome: "Abadia", idade: 65, telefone: "62 99129-5155" },
    { nome: "Willian", idade: 63, telefone: "62 9222-7374" },
    { nome: "Yasmine", idade: 31, telefone: "62 99170-5309" }
]

function buscarContato() {

    let i = 0;
    while (i < contatos.length) {

        if (normalizarTexto(input.value.toLowerCase()) === normalizarTexto(contatos[i].nome.toLowerCase())) {
            p.innerHTML = `Contato encontrado - Nome: ${contatos[i].nome} - Tel: ${contatos[i].telefone}`
            break
        } i++
        if (i === contatos.length) {
            p.innerHTML = "Sinto muito. Contato não encontrado!"
        }
    }
}



function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
}

/*
function buscarContato() {
    for (const contact of contatos) {
        if (normalizarTexto(input.value.toLowerCase()) === normalizarTexto(contact.nome.toLowerCase())){
            p.innerHTML = `Contato encontrado - Nome: ${contact.nome} - Tel: ${contact.telefone}`
            break
        } else{
            p.innerHTML = "Sinto muito. Contato não encontrado!"
        }
        
    }
}

function buscarContato() {

    for (let i = 0; i < contatos.length; i++) {

        if (normalizarTexto(input.value.toLowerCase()) === normalizarTexto(contatos[i].nome.toLowerCase())) {
            p.innerHTML = `Contato encontrado - Nome: ${contatos[i].nome} - Tel: ${contatos[i].telefone}`
            break
        } else {
            p.innerHTML = "Sinto muito. Contato não encontrado!"
        }
    }
}

*/
