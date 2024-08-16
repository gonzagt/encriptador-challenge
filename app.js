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
    const regex = /^[a-z' ']*$/;
    if (regex.test(texto_user.value)) {
        mensaje.textContent = '';
    } else {
        mensaje.textContent = '⛔ CUIDADO ⛔';
        texto_user.value = texto_user.value.replace(/[^a-z' ']/g, '');
    }
})

// Botón de copiar casi listo, falta adaptar el lugar donde va a ir el texto 
// encriptado/desencriptado y luego adaptar este botón para que funcione
// correctamente.

const boton = document.querySelector('.copiar');
let texto = document.querySelector('.resultado');
    
boton.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = texto.textContent;
    document.body.appendChild(tempInput)
    tempInput.select();
    tempInput.setSelectionRange(0,99999);

    try {
        document.execCommand('copy')
            alert('copiado con éxito')
    } catch (err) {
        console.log(`Se produjo el error ${err}`);       
    }
    document.body.removeChild(tempInput);
})

// Testeando propiedad style.display

const btnOcultar = document.querySelector('#ocultar');
const btnMostrar = document.querySelector('#mostrar');

const ocultar = () => {
    document.querySelector('.img').style.display = "none";
    btnOcultar.hidden = true;
    btnMostrar.hidden = false;
}

const mostrar = () => {
    document.querySelector('.img').style.display = "block";
    btnOcultar.hidden = false;
    btnMostrar.hidden = true;
}