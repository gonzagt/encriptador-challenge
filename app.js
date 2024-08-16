// Declaramos las variables

const boton = document.querySelector('.copiar');
const caja = document.querySelector('.resultado');
const imagen = document.querySelector('.img');
const mensaje = document.getElementById('error');
let resultado = [];
let resultado__final = document.querySelector('.resultado__final');
const texto_usuario = document.getElementById('text');

const letras = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};


// Declaramos las funciones

// En esta primera función, utilizo if/else para comprobar las letras del array
// A su vez, si el array 'resultado' tiene contenido, se lo vacía y se vuelve a
// ejecutar la función.

let encriptar = () => {
    const texto = texto_usuario.value;
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
    cambio();
    console.log(encriptado);

    return resultado__final.textContent = encriptado;

}

// En esta segunda función, utilizo un ciclo 'for' para iterar sobre el objeto
// letras y con los métodos Object.entries y replaceAll, puedo fácilmente retornar  
// el texto desencriptado. Es más fácil que la función para encriptar, pero quería
// utilizar las 2 formas.

let desencriptar = () => {
    const texto = texto_usuario.value;
    let desencriptado = texto;

    for (let [letra, reemplazo] of Object.entries(letras)) {
        desencriptado = desencriptado.replaceAll(reemplazo, letra);
    }
    cambio();
    return resultado__final.textContent = desencriptado;
}

// Validación de minúsculas.

texto_usuario.addEventListener('input', ()=>{
    const regex = /^[a-z' ']*$/;
    if (regex.test(texto_usuario.value)) {
        mensaje.textContent = '';
    } else {
        mensaje.textContent = '⛔ CUIDADO ⛔';
        texto_usuario.value = texto_usuario.value.replace(/[^a-z' ']/g, '');
    }
})

// Botón de copiar casi listo, falta adaptar el lugar donde va a ir el texto 
// encriptado/desencriptado y luego adaptar este botón para que funcione
// correctamente.
    
boton.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = resultado__final.textContent;
    document.body.appendChild(tempInput)
    tempInput.select();
    tempInput.setSelectionRange(0,99999);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.log(`Se produjo el error ${err}`);       
    }
    document.body.removeChild(tempInput);
})

const reset = () => {
    texto_usuario.value = '';
    imagen.style.display = 'block';
    caja.hidden = true;
}

const cambio = () => {
    imagen.style.display = "none";
    caja.hidden = false;
}
// Testeando propiedad style.display

// const btnOcultar = document.querySelector('#ocultar');
// const btnMostrar = document.querySelector('#mostrar');

// const ocultar = () => {
//     document.querySelector('.img').style.display = "none";
//     btnOcultar.hidden = true;
//     btnMostrar.hidden = false;
// }

// const mostrar = () => {
//     document.querySelector('.img').style.display = "block";
//     btnOcultar.hidden = false;
//     btnMostrar.hidden = true;
// }