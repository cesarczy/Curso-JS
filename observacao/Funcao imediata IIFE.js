// IIFE -> Immediately Invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Siqueira';

    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome ('Cesar'));
    }
    falaNome();
    console.log(idade, peso, altura);

}) (32, 85, 1.80);