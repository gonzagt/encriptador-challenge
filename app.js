// Declaramos las variables

const texto_user = document.getElementById('text');
const mensaje = document.getElementById('error');
const letras = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
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
                resultado.push(letras.a);
            } else if (letra === 'e') {
                resultado.push(letras.e);
            } else if (letra === 'i') {
                resultado.push(letras.i);
            } else if (letra === 'o') {
                resultado.push(letras.o);
            } else if (letra === 'u') {
                resultado.push(letras.u);
            } else {
                resultado.push(letra)
            }
        })
    } else {
        resultado = [];
        return encriptar();
    }

    encriptado = resultado.join('');

    return console.log(encriptado);
}

// En esta segunda función, utilizo un ciclo 'for' para iterar sobre el objeto
// letras y con los métodos Object.entries y replaceAll, puedo fácilmente retornar  
// el texto desencriptado. Es más fácil que la función para encriptar, pero quería
// utilizar las 2 formas.

let desencriptar = () => {
    const texto = texto_user.value
    let desencriptado = texto;

    for (let [letra, reemplazo] of Object.entries(letras)) {
        desencriptado = desencriptado.replaceAll(reemplazo, letra);
    }

    return console.log(desencriptado);
}

// Validación de minúsculas.

texto_user.addEventListener('input', ()=>{
    const regex = /^[a-z,' ']*$/;
    if (regex.test(texto_user.value)) {
        mensaje.textContent = '';
    } else {
        mensaje.textContent = '⛔ CUIDADO ⛔';
        texto_user.value = texto_user.value.replace(/[^a-z, ' ']/g, '');
    }
})