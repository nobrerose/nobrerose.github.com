function getContact(ref){

	let phone = "+5511962508718";
	let message = "Olá, gostei de um produto da sua loja com a referência "+ref;

	let endpoint = "https://api.whatsapp.com/send?phone="+phone+"&text="+encodeURI(message);

	window.location.href = endpoint;
}

$(document).ready(function(){

	// Initialize
	$(".fixed-action-btn").floatingActionButton();

});