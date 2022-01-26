/* Codado por Júlio César aka gaijin
Greetz Wesley!
 */



function chamar (){
	event.preventDefault();
    var captar = document.getElementById('input-texto').value;
     
    document.getElementById('msg').value = criptografar(captar);
		
}



document.getElementById('btn-copy').addEventListener('click', copiar);

function copiar() {
  document.querySelector("#msg").select();
  document.execCommand("copy");

}


var botaoEncriptar = document.querySelector('#btn-cripto');

var inputTexto = document.querySelector('#input-texto');

var msg = document.querySelector('#msg');

botaoEncriptar.addEventListener("click",function(event){
event.preventDefault();



var result = inputTexto.value.toLowerCase();
var mensagemMinuscula = criptografar(result);
msg.value = mensagemMinuscula.replace(/[^a-z]/gi,);



});