/* Codado por Júlio César aka gaijin
Greetz Wesley!
 */

 
var butaodescripto = document.querySelector("#btn-descripto");
butaodescripto.addEventListener("click",function(){

event.preventDefault();

var inputdescripto = document.querySelector("#input-texto");

document.getElementById('msg').value = descriptografar(inputdescripto.value);

});

function descriptografar(texto){

	const ra = /ai/gi;
	const re = /enter/gi;
	const ri = /imes/gi;
	const ro = /ober/gi;
	const ru = /ufat/gi;
	var primeira = texto.replace(ra,'a');
	var segunda = primeira.replace(re,'e');
	var terceira = segunda.replace(ri,'i');
	var quarta = terceira.replace(ro,'o');
	var quinta = quarta.replace(ru,'u');
	return quinta;

}


