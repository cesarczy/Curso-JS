const alunos = ['Ana', 'Mario', 'Henrique'];

// adiciona esses elementos no fim do array
alunos.push('Lucia');
alunos.push('Silvia');

// adiciona esses elementos no começo do array
alunos.unshift('Cesar');

// altera elemento do array
alunos[2] = 'Carlos';

//Remover elemento do final do array
alunos.pop();

//remover elemento do começo do array
alunos.shift();


console.log(alunos);


console.log(alunos.slice(0, 2)); //fatia o array

