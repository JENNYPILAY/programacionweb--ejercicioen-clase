//!agregar overlay lightbox
var $overlay= $("<div id='overlay'></div>");
var image=$("<img>");
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

$overlay.click(function ()
{
	$overlay.hide();
});

	// body...
})

// menu para móviles//
var $select= $("<select></select>");
$("menu").append($select);
// recorrer el menu//

$("#menu a").each(function(){
var $anchor = $(this);
//crear una opcion  para el select por cada elemento
var $option = $("<option></option>");
//obtener cada valor de la opcion de atributo 
$option.val($anchor.attr("href"));
//obtener  el text de cada opcion
$option.text($anchor.text());
//agregar la opcion al select
$select.append($option);
var $button = $("<button"Go</button>");
	$("#menu").append($button);

	$button.click(function() {

		//toma el valor de la opcion seleccionada
		
	window.location 















