/* //exemplo 1

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista1[1]);
 */

const pessoa = {
    nome: 'Cesar',
    sobrenome: 'Siqueira',
    endereco: {
        rua: 'SHA Conj 04',
        casa: '15'
    }
    
}

const { nome, sobrenome, endereco : {rua}} = pessoa;
console.log(nome, rua);
