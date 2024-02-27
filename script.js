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
