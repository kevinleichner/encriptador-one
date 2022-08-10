var textoIngresado = document.querySelector("#texto");
var textoFinal = document.querySelector("#textoFinal");;
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");

var contenidoOcultar = document.querySelector("#contenido");
var filtrar = true;
var activador = true;

var reg = new RegExp(/[0-9A-Zá-ý]/g);

function ocultar() {
	if(activador == true) {

		contenidoOcultar.classList.add("ocultar");
		btnCopiar.classList.remove("ocultar");
		textoFinal.classList.remove("ocultar");
		btnCopiar.classList.add("mostrar");
		textoFinal.classList.add("mostrar");
		console.log("realizado");
		activador = false;

	}
}

function filtro() {
	if(textoIngresado.value.match(reg)) {
		alert("Solo letras minúsculas y sin acentos ( ´ )");
		filtrar = false;
	} else if(textoIngresado.value == "") {
		alert("Por favor ingrese texto");
		filtrar = false;
	}
}

// Encriptar
btnEncriptar.onclick = function() {
	filtro();
	if (filtrar == true) {
		textoFinal.value = textoIngresado.value.replace(/e/g,'enter');
		textoFinal.value = textoFinal.value.replace(/i/g,'imes');
		textoFinal.value = textoFinal.value.replace(/a/g,'ai');
		textoFinal.value = textoFinal.value.replace(/o/g,'ober');
		textoFinal.value = textoFinal.value.replace(/u/g,'ufat');
		textoIngresado.value = "";
		ocultar();
	}
	filtrar = true;
}

// Desencriptar
btnDesencriptar.onclick = function() {
	filtro();
	if (filtrar == true) {
		textoFinal.value = textoIngresado.value.replace(/enter/g,'e');
		textoFinal.value = textoFinal.value.replace(/imes/g,'i');
		textoFinal.value = textoFinal.value.replace(/ai/g,'a');
		textoFinal.value = textoFinal.value.replace(/ober/g,'o');
		textoFinal.value = textoFinal.value.replace(/ufat/g,'u');
		textoIngresado.value = "";
		ocultar();
	}
	filtrar = true;
}

// Copiar
btnCopiar.onclick = function() {
	textoFinal.select();
	textoFinal.setSelectionRange(0,99999);
	document.execCommand('copy');
}