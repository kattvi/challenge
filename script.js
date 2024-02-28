const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e","enter"], //inice 0
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function btnEncriptar() {
    campoMensaje.value = Encriptar(campoTexto.value);
}

function Encriptar (fraseEncriptada) {

    for(let i = 0; i < matriz_code.length; i++) {

        if (fraseEncriptada.includes(matriz_code[i][0])) {

            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code [i][0],
                matriz_code [i][1],
                matriz_code [i][2],
                matriz_code [i][3],
                matriz_code [i][4],
        )
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    campoMensaje.value = Desencriptar(campoTexto.value);
}
function Desencriptar (fraseDesencriptada) {
    // Recorrer matriz de codigos
    for(let i = 0; i < matriz_code.length; i++) {
        const key = matriz_code[i][1];
        const value =  matriz_code[i][0];
        const includesKey = fraseDesencriptada.includes(key);

        if (includesKey) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(key, value)
        }
    }

    return fraseDesencriptada;
}