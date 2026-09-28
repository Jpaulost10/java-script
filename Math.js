/* Math -> Objeto Matematico

Math.pow(2, 3) -> 2 elevado a 3
Math.sqrt(9) -> Raiz quadrada
Math.PI -> Pi
Math.ceil -> Arredonda para cima
Math.floor -> Arredonda para baixo
Math.round -> Arredonda para o mais próximo
Math.random -> Gera um número aleatório




const result = Math.pow(2, 3) // 2 elevado a 3
console.log(result)

const result2 = Math.sqrt(9) // Raiz quadrada
console.log(result2)

const result3 = Math.random()  // Gera um número aleatório entre 0 e 1
console.log(result3)

const result4 = Math.random() * 100 // Gera um número aleatório entre 0 e 100
console.log(result4)

const result5 = Math.round(Math.random() * 100) // Gera um número aleatório entre 0 e 100 e arredonda para o mais próximo
console.log(result5)

const result6 = Math.floor(Math.random() * 100) // Gera um número aleatório entre 0 e 100 e arredonda para baixo
console.log(result6)

const result7 = Math.ceil(Math.random() * 100) // Gera um número aleatório entre 0 e 100 e arredonda para cima
console.log(result7)

const result8 = (Math.random() * 100).toFixed(2) // Gera um número aleatório entre 0 e 100 com duas casas decimais
console.log(result8)

const result9 = Math.random() * 1000000 // Gera um número aleatório entre 0 e 1000000
console.log(result9)

const result10 = (Math.PI).toFixed(4) // Pi com quatro casas decimais
console.log(result10)

const result11 = (Math.PI).toFixed(6) // Pi com seis casas decimais
console.log(result11)


let number = 20 

number++ // adiciona 1 ao valor da variavel
number-- // subtrai 1 ao valor da variavel  

number += 10 // adiciona 10 ao valor da variavel
number -= 10 // subtrai 10 ao valor da variavel 


console.log(--number) // subtrai 1 ao valor da variavel e exibe na tela
console.log(++number) // adiciona 1 ao valor da variavel e exibe na tela

let number2 = 20 ** 2 // 20 elevado a 2
console.log(number2)

let number3 = 20 ** 3 // 20 elevado a 3
console.log(number3)

number3 %= 10 // divide o valor da variavel por 10 e atribui o resto a ela
console.log(number)

number3 /= 10 // divide o valor da variavel por 10 e atribui o resultado a ela
console.log(number)



const firstNumber = 10
const lastNumber = 20   

console.log(firstNumber > lastNumber) // compara se o primeiro número é maior que o segundo
console.log(firstNumber < lastNumber) // compara se o primeiro número é menor que o segundo


== // igual, compara o valor mas não o tipo
=== // estritamente igual, compara o valor e o tipo

!= // diferente de, compara o valor mas não o tipo
!== // estritamente diferente de, compara o valor e o tipo

> // maior que
< // menor que
>= // maior ou igual a
<= // menor ou igual a

&& = (e) operador lógico que retorna true se AMBAS as condições forem verdadeiras, caso contrário retorna false.
|| = (ou) operador lógico que retorna true se PELO MENOS UMA das condições for verdadeira, caso contrário retorna false.
! = (não) operador lógico que inverte o valor de uma condição, ou seja, se a condição for verdadeira retorna false, caso contrário retorna true.

typeof // retorna o tipo de dado
delete // exclui uma propriedade

? : // operador ternário -> if else

switch case // Controla o fluxo de execução de acordo com o valor de uma expressão

exemplo:

const temperature = 20

switch (temperature) {
    case 20 :
        console.log("Está frio")
        break
    case 30 :
        console.log("Está quente")
        break
    case 35 :
        console.log("Está muito quente")
        break
    default :
        console.log("Sem informação sobre a temperatura")
        break
}

setTimeout // executa uma função depois de um certo tempo
setInterval // executa uma função a cada certo tempo
clearTimeout // para a execução de uma função depois de um certo tempo
clearInterval // vai pausar o setInterval

Exemplo:

setTimeout(() => {
    alert("Bem vindo ao setTimeout")
}, 5000); // exibe uma mensagem depois de 5 segundos

setInterval(() => {
    alert("Bem vindo ao setInterval")
}, 5000); // exibe uma mensagem a cada 5 segundos


FOR // executa um bloco de código enquanto uma condição for verdadeira

1 - inicialização 
2 - condição
3 - expressão final

Exemplo:


for (let i = 0; i < 10; i++) {
    console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

const users = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Manager" }
    ];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].age) // 30, 25, 35
}

Forof // executa um bloco de código para cada elemento de um array

const myName = "João Paulo"
const users = ["João", "Maria", "José"]


for (const letter of myName) {
    console.log(letter)    
}

for (const name of users) {
    console.log(name) // João, Maria, José
}

forin // executa um bloco de código para cada propriedade de um objeto


const users = { name: "joao", age: "30", street: "alacarte"}

for (const key in users) {
    console.log(`${key}: ${users[key]}`) // name: joao, age: 30, street: alacarte
}

while // executa um bloco de código enquanto uma condição for verdadeira

let i = 0

while (i < 10) {
    i++
    console.log(i) // 1 2 3 4 5 6 7 8 9 10
    
}


Do While //  executa um bloco de codigo e depois verifica se a condicao e verdadeira

let i = 0

do {
    i++;
    console.log(i)
} while (i < 10);

array.forEach -> executa uma funcao para cada elemento de um array

exemplo:

const users = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 25, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Manager" }
    ];

users.forEach((user) => {
    console.log(user.name) // Alice, Bob, Charlie
}); 

*/





