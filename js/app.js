//!agregar overlay lightbox
var $overlay= $("<div id='overlay'></div>");
var image=$("img")
var $caption = $("<p></p>");


//2.1 imagen
$overlay.append($image);
//2.2 un texto
$overlay.append ($caption);
//agregar el overlay al body
$("body").append($overlay);


//1.-isuario da clic en un link que rodea la imagen /
$("galeria li a").click(function(event){
		event.preventDefault();
		var href= $(this).attr("href");

//1.1 mostrar el light boxcon la imagen 

$img.attr("src",href);
var texto = $(this).children("img".attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});






//$("galeria li a").click(function(event){
		//event.preventDefault();
		//var href=$(this).attr("href");
		//console.log(href);
		//console.log(href);
})//
