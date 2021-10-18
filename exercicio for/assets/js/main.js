const elementos = [
    {tag : 'p', texto: 'Primeira frase'},
    {tag : 'div', texto: 'segunda frase'},
    {tag : 'section', texto: 'terceira frase'},
    {tag : 'footer', texto: 'quarta frase'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);