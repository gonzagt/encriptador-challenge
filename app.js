// -------------- Variables --------------

const boton = document.querySelector('.copiar');
const btn_encriptar = document.querySelector('#encriptar');
const btn_desencriptar = document.querySelector('#desencriptar');
const btn_resultado_1 = document.querySelector('.copiar');
const btn_resultado_2 = document.querySelector('.resetear');
const div_invisible = document.querySelector('.invisible');
const gritar = document.querySelector('.small');
const imagen = document.querySelector('.img');
const mensaje = document.querySelector('.error');
const resultado__final = document.querySelector('.resultado__final');
const texto_usuario = document.querySelector('.text');

const cuidado = '⛔ CUIDADO ⛔';
const max_height = '40px';
const min_height = '19px';
const mayuscula = 'uppercase';
const minuscula = 'lowercase';

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
    mensaje.textContent = '';
    div_invisible.style.height = min_height;
    gritar.style.textTransform = minuscula;
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
    
    cambio();
    mensaje.textContent = '';
    div_invisible.style.height = min_height;
    gritar.style.textTransform = minuscula;

    return resultado__final.textContent = desencriptado;
}

// Validación de minúsculas.

texto_usuario.addEventListener('input', ()=>{

    const regex = /^[a-z' ']*$/;

    if (regex.test(texto_usuario.value)) {
        mensaje.textContent = '';
        div_invisible.style.height = min_height;
        gritar.style.textTransform = minuscula;
    } else {
        div_invisible.style.height = max_height;
        gritar.style.textTransform = mayuscula;
        mensaje.textContent = cuidado;
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
        alert('Copiado con éxito.');
    } catch (err) {
        console.log(`Se produjo el error ${err}`);       
    }
    document.body.removeChild(tempInput);
})

// -------------- Extra: botón de reset --------------

const reset = () => {
    texto_usuario.value = '';
    imagen.style.display = 'inline-block';
    mensaje.textContent = '';
    resultado__final.hidden = true;
    div_invisible.style.height = min_height;
    gritar.style.textTransform = minuscula;
    btn_resultado_1.hidden = true;
    btn_resultado_2.hidden = true;
    btn_encriptar.classList.remove('encriptar');
    btn_encriptar.classList.add('encriptar_d');
    btn_desencriptar.classList.remove('desencriptar');
    btn_desencriptar.classList.add('desencriptar_d');
    btn_encriptar.disabled = true;
    btn_desencriptar.disabled = true;
    resultado = [];
}

const cambio = () => {
    imagen.style.display = "none";
    resultado__final.hidden = false;
    mensaje.textContent === cuidado
        ? div_invisible.style.height = max_height
        : div_invisible.style.height = min_height;
    btn_resultado_1.hidden = false;
    btn_resultado_2.hidden = false;
}

// -------------- Extra 2: deshabilitar botones --------------

texto_usuario.addEventListener('change', () => {
    const texto = texto_usuario.value;

    if (texto.length === 0) {
        btn_encriptar.disabled = true;
        btn_desencriptar.disabled = true;
    } else {
        btn_encriptar.disabled = false;
        btn_desencriptar.disabled = false;
    }
});

texto_usuario.addEventListener('input', ()=> {
    const texto = texto_usuario.value;

    if (texto.length === 0) {
        btn_encriptar.classList.remove('encriptar');
        btn_desencriptar.classList.remove('desencriptar');
        btn_encriptar.classList.add('encriptar_d');
        btn_desencriptar.classList.add('desencriptar_d');
    } else {
        btn_encriptar.classList.remove('encriptar_d');
        btn_desencriptar.classList.remove('desencriptar_d');
        btn_encriptar.classList.add('encriptar');
        btn_desencriptar.classList.add('desencriptar');
    }
})