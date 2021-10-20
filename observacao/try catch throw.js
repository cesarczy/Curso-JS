function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números.');
    }
    return x + y;
}

try {
    console.log('primeira linha = ' + soma(11, 14));
    console.log(soma('segunda linha =' + '11', 14));
}catch(error) {
    console.log(error);
} 
