// Declaramos las variables

const texto_user = document.getElementById('text');
const letras = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};
let resultado = [];

// Declaramos las funciones

// En esta primera función, utilizo if/else para comprobar las letras del array
// A su vez, si el array 'resultado' tiene contenido, se lo vacía y se vuelve a
// ejecutar la función.

let encriptar = () => {
    const texto = texto_user.value;
    const separar = texto.split('');
    let encriptado = 0;

    if (resultado.length === 0) {
        separar.forEach((letra) => {
            if (letra === 'a') {
                letra = 'ai'
                resultado.push(letra)
            } else if (letra === 'e') {
                letra = 'enter'
                resultado.push(letra)
            } else if (letra === 'i') {
                letra = 'imes'
                resultado.push(letra)
            } else if (letra === 'o') {
                letra = 'ober'
                resultado.push(letra)
            } else if (letra === 'u') {
                resultado.push('ufat')
            } else {
                resultado.push(letra)
            }
        })
    } else {
        resultado = [];
        return encriptar();
    }

    encriptado = resultado.join('')

    return console.log(encriptado);
}

let desencriptar = () => {
    const texto = texto_user.value
    resultado = '';
    for (let letra of texto) {
        resultado+= letras[letra] || letra;
    }

    return resultado
}