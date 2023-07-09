const textArea =document.querySelector(".text-area");
const mensaje =document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){

    let matrizCodigo =[["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}
 

function desencriptar(stringDesencriptada){

    let matrizCodigo =[["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

    function btnCopiar(){
      mensaje.select();
      document.execCommand("copy");
    

    }

    function textareaMensaje (){

        mensaje.readOnly = true;
        alert ("No esta permitido editar esta zona use el boton de copiar");

    }

    function validarTexto(textarea){

        const valida = /^[a-zA-Z\s]+$/;

        const texto = textarea.value;
        const textoValidado= valida.test(texto);

        if (!textoValidado){

            textarea.value = texto.replace(/[^a-zA-Z\s]+/g, "");
            mostrarNotificacion("Se ingresaron caracteres no permitidos");

        }
    }


    function mostrarNotificacion(mensaje){

        const notificacion = document.getElementById ("notificacion");
        notificacion.textContent = mensaje;
        notificacion.style.display = "block";

        setTimeout(function() {
            notificacion.style.display="none";
        }, 3000);
    }


