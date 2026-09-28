/*

function soma(num1, num2) {
    console.log( num1 + num2);
}

function subtracao(num1, num2) {
    console.log( num1 - num2);
}

function multiplicacao(num1, num2) {
    console.log( num1 * num2);;
}

function divisao(num1, num2) {
    console.log( num1 / num2);
}

soma(10, 5);
subtracao(10, 5);
multiplicacao(10, 5);
divisao(10, 5);

function hisName (name = "Tomé"){
    console.log(name)
}

hisName("João Paulo");

hisName("Tião Carreiro");

hisName();

*/



const cart = [1, 2, 3, 40, 50]

function aplicarDesconto(cart) {

    const cartComDesconto = cart.map((price) => {
        if (price > 30) {
            price *= 0.9; // price = price * 0.9
        }
        return price // retorna o preco
    })
    return cartComDesconto // retorna um novo array
}

function calcularTotal(cart) {
    let total = 0
    cart.forEach((price) => {
        total += price // total = total + price
    })
    return total
}

const cartComDesconto = aplicarDesconto(cart) 

console.log(`Os preços originais do seu carrinho eram (${cart}) com o total de R$ ${calcularTotal(cart).toFixed(2)}.
Depois de aplicarmos o desconto os preços ficaram (${cartComDesconto}) com um total de R$ ${calcularTotal(cartComDesconto).toFixed(2)}`)




/*

const cartOriginal = [...cart] // Copia o array cart para cartOriginal

function aplicarDesconto(cart) {

    cart.forEach((price, index) => {
        if (price > 30) {
            cart[index] = price * 0.9;
        }
    });
    return cart
};
*/





