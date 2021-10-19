const frutas =  ['Pera', 'Uva', 'Maçã'];
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Cesar',
    sobrenome: 'Siqueira',
    idade: 32
};

for (let chave in pessoa) {
    console.log(chave, pessoa [chave]);
}