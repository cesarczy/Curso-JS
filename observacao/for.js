//exemplo 1

for (let i = 0; i <= 5; i++) {
    console.log(`Adoro programar ${i}`);
}

//exemplo 2
for (let i = 0; i <= 5; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//exemplo 3

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i<frutas.length; i++) {
    console.log(`Indice ${i}`, frutas[i]);
}