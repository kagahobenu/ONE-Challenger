/* Codado por Júlio César aka gaijin
Greetz Wesley!
 */


function criptografar(texto){
			
	

	var novaPalavra = [];

	for(var i=0; i < texto.length; i++){

		switch(texto[i]){

			case 'a':
			novaPalavra[i] = "ai";
			break;

			case 'e':
			novaPalavra[i] = "enter";
			break;

			case 'i':
			novaPalavra[i] = "imes";
			break;

			case 'o':
			novaPalavra[i] = "ober";
			break;

			case 'u':
			novaPalavra[i] = "ufat";
			break;

			default:
			novaPalavra[i] = texto[i];


		}

			

	} 

			return novaPalavra.join("");


			//validação ficará ao meu cargo!


}










	






