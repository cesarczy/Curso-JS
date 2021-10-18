function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa ('Sergio', 'Garcia', 25);
console.log(pessoa1.nome);
