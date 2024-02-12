function encriptarTexto() {
    const textoOriginal = document.getElementById("input").value;;
    if (textoOriginal !== textoOriginal.toLowerCase() || /[^a-z]/.test(textoOriginal)) {
        document.getElementById("customAlert").classList.add("show");
        setTimeout(function(){
            document.getElementById("customAlert").classList.remove("show");
        }, 3000); 
        return; 
    
    }

    const textoDecifrado = textoOriginal.replaceAll("e", 'enter').replaceAll("i", 'imes').replaceAll("a", 'ai').replaceAll("o",'ober').replaceAll("u", 'ufat') ;
    document.getElementById("output").textContent = textoDecifrado;
}


document.getElementById("contenedor-input1").addEventListener("click", function() {
    var inputUsuario = document.getElementById("input");
        inputUsuario.value = "";
});


function desencriptarTexto() {
    const textoOriginal = document.getElementById("input").value;
    if (textoOriginal !== textoOriginal.toLowerCase() || /[^a-z]/.test(textoOriginal)) {
        document.getElementById("customAlert").classList.add("show");
        setTimeout(function(){
            document.getElementById("customAlert").classList.remove("show");
        }, 3000); 
        return; 

    }
    const textoDecifrado = textoOriginal.replaceAll('ufat', 'u').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('imes', 'i').replaceAll('enter', 'e');
    document.getElementById("output").textContent = textoDecifrado;
        
}

document.getElementById("contenedor-input2").addEventListener("click", function() {
    var inputUsuario = document.getElementById("input");
        inputUsuario.value = "";
});

function textoEncriptado() {
    const textoDesencriptado = document.getElementById("output").textContent;
    navigator.clipboard.writeText(textoDesencriptado);
}