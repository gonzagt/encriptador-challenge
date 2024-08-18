// -------------- Variables --------------

const boton = document.querySelector('.copiar');
const botones_resultado = document.querySelector('.resultado__botones');
const caja = document.querySelector('.resultado');
const imagen = document.querySelector('.img');
const mensaje = document.getElementById('error');
const resultado__final = document.querySelector('.resultado__final');
const texto_usuario = document.getElementById('text');

let resultado = [];

const letras = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};


// -------------- Funciones --------------

// Encriptar usando if/else.

const encriptar = () => {
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
                resultado.push(letra);
            }
        })
    } else {
        resultado = [];
        encriptar();
    }

    encriptado = resultado.join('');
    
    resultado.length === 0 ? console.log('Error 404, text not found.'): cambio();

    return resultado__final.textContent = encriptado;
}

// Desencriptar manejando un objeto.

const desencriptar = () => {
    const texto = texto_usuario.value;
    let desencriptado = texto;

    for (let [letra, reemplazo] of Object.entries(letras)) {
        desencriptado = desencriptado.replaceAll(reemplazo, letra);
    }

    desencriptado === '' ? console.log('Error 404, text not found.'): cambio();
    
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

// -------------- Botón de copiar --------------
    
boton.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = resultado__final.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0,99999);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.log(`Se produjo el error ${err}`);       
    }
    document.body.removeChild(tempInput);
})

// -------------- Extra: botón de reset --------------

const reset = () => {
    resultado = [];
    texto_usuario.value = '';
    imagen.style.display = 'block';
    caja.hidden = true;
    botones_resultado.hidden = true;
}

const cambio = () => {
    imagen.style.display = "none";
    caja.hidden = false;
    botones_resultado.hidden = false;
}