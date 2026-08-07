/*  
    Introdução ao JavaScript

        console.log("Hello, World!");
        console.log("Welcome");

    Variaveis  

        Let -> Valor pode ser alterado
        Const -> Valor não pode ser alterado
        Var -> Valor pode ser alterado, mas não é mais recomendado usar / Descontinuado

        let nome = "João";
        const name = "Maria";
        nome = "Zezinho da Silva"; // Alterando o valor da variável nome

        console.log("Bem vindo ao mundo do JavaScript", nome,", fique a vontade para praticar JS!"); // Saída: Zezinho da Silva
        console.log(name); // Saída: Maria  


    Tipos de dados

        string -> textos "" , '' ou `` (crase = template string ou template literal)
        number -> números inteiros ou decimais
        boolean -> valores lógicos true ou false
        object -> objetos, arrays, funções, etc.
        null e undefined -> valor nulo e valor indefinido
        

    STRING

        exemplo:
        let nome = "João";
        let idade = 25;
        let ocupação = "Desenvolvedor";  

        console.log(nome); // Saída: João
        console.log(idade); // Saída: 25
        console.log(ocupação); // Saída: Desenvolvedor

        const myYear = 1995
        const currentYear = 2026 
        const myAge = currentYear - myYear; 

        const myString = `Minha idade é ${myAge} anos e estou aprendendo JavaScript!`; // Saída: Minha idade é 31 anos e estou aprendendo JavaScript!

        console.log(myString); // Saída: Minha idade é 31 anos e estou aprendendo JavaScript!

    NUMBERS

        const number1 = 10;
        const number2 = 5;

        const sum = number1 + number2;
        const difference = number1 - number2;
        const product = number1 * number2;
        const quotient = number1 / number2;

        console.log("Soma:", sum);
        console.log("Diferença:", difference);
        console.log("Produto:", product);
        console.log("Quociente:", quotient);

    BOOLEAN

        const isJavaScriptFun = true;
        const isCodingHard = false;

        console.log("JavaScript é divertido?", isJavaScriptFun);
        console.log("Programar é difícil?", isCodingHard);

    OBJECTS

        const person = {
            name: "Alice",
            age: 30,
            occupation: "Engineer"
        };

        console.log(person.name); // Saída: Alice
        console.log(person.age); // Saída: 30
        console.log(person.occupation); // Saída: Engineer

        const person = {
            name: "Alice",
            age: 30,
            occupation: "Engineer",
            address: {
                street: "123 Main St",
                neighborhood: "Center",
                city: "St Loius",
                state: "MO",
                country: "USA",
            }
        };
        
        console.log(person);
        console.log(person.name); // Saída: Alice
        console.log(person.age); // Saída: 30
        console.log(person.occupation); // Saída: Engineer
        console.log(person.address.street); // Saída: 123 Main St
        console.log(person.address.neighborhood); // Saída: Center
        console.log(person.address.city); // Saída: St Loius
        console.log(person.address.state); // Saída: MO
        console.log(person.address.country); // Saída: USA  

        person.address.state = "Louisiana"; // Alterando o valor da propriedade state do objeto address
        console.log(person); 

    NULL E UNDEFINED

        const user = {
        name: "João",
        age: 30,
        occupation: "Desenvolvedor",
        city: null // A propriedade city está definida como null, indicando que não há valor atribuído a ela        
        }

        console.log(user);
        console.log(user.city)

    Estruturas de dados

        Arrays -> Coleção de elementos, que podem ser de qualquer tipo de dado, inclusive outros arrays ou objetos. São representados por colchetes [] e os elementos são separados por vírgulas.

    ARRAYS

        const fruits = ["Apple", "Banana", "Orange", "Grapes"];
        console.log(fruits);

        const myArrays = ["input", "22.99", "10", "{name: 'John', age: 30}", "test"];
        console.log(myArrays);
        console.log(myArrays[3]); // Saída: {name: 'John', age: 30}
        
        const users = [
            { name: "Alice", age: 30, occupation: "Engineer" },
            { name: "Bob", age: 25, occupation: "Designer" },
            { name: "Charlie", age: 35, occupation: "Manager" }
            ];
        console.log(users);
        console.log(users[0].name); // Saída: Alice
        console.log(users[1].age); // Saída: 25
        console.log(users[2].occupation); // Saída: Manager

        users.push({ name: "David", age: 28, occupation: "Developer" }); // Adicionando um novo objeto ao array users
        console.log(users); // Saída: Array atualizado com o novo objeto

        users.pop(); // Removendo o último objeto do array users
        console.log(users); // Saída: Array atualizado sem o último objeto

        users[2].name = "Tião Carreiro"; // Alterando o valor da propriedade name do terceiro objeto do array users
        console.log(users); // Saída: Array atualizado com o novo valor da propriedade name do terceiro objeto

    CONTROLE DE FLUXO

        if e else -> Estrutura condicional que permite executar diferentes blocos de código com base em uma condição.  

    IF E ELSE

        if(se) 
        else(senão)

        operadores de comparação:
        == (igual a) compara apenas o valor, enquanto o operador === (estritamente igual a) compara tanto o valor quanto o tipo de dado. É recomendado usar o operador === para evitar resultados inesperados.
        != (diferente de) compara apenas o valor, enquanto o operador !== (estritamente diferente de) compara tanto o valor quanto o tipo de dado. É recomendado usar o operador !== para evitar resultados inesperados.
        > (maior que)
        < (menor que)
        >= (maior ou igual a)
        <= (menor ou igual a)
        && = (e) operador lógico que retorna true se AMBAS as condições forem verdadeiras, caso contrário retorna false.
        || = (ou) operador lógico que retorna true se PELO MENOS UMA das condições for verdadeira, caso contrário retorna false.
        ! = (não) operador lógico que inverte o valor de uma condição, ou seja, se a condição for verdadeira retorna false, caso contrário retorna true.

        const n1 = 60;
        const n2 = 90;
        const nFinal = (n1 + n2) / 2;

        if (nFinal >= 70) {
            console.log("Parabéns! Você foi aprovado com média:", nFinal);
        } else if (nFinal >= 50) {
            console.log("Infelizmente você está de recuperacao:", nFinal);
        } else {
            console.log("Infelizmente você foi reprovado com média:", nFinal);
        }

    FUNÇÕES

        Funções -> Blocos de código que podem ser reutilizados e executados quando chamados. Podem receber parâmetros e retornar valores.

        const variavel = "Olá, mundo!"; // Declaração de uma variável com valor inicial
        const variavelDois = "Hi, guys!"; // Declaração de uma variável com valor inicial

        function nomeNaTela() { // Declaração da função nomeNaTela, que recebe um parâmetro chamado variavel
            console.log (variavel, "Seja bem vindo!"); // Saída: Olá, mundo! bem vindo
            console.log (variavelDois, "Seja bem vindo nesse programa!"); // Saída: Hi, guys! bem vindo
        }

        nomeNaTela(); // Chamada da função nomeNaTela, que executa o código dentro dela e exibe a mensagem de boas-vindas no console.

    
*/

 





