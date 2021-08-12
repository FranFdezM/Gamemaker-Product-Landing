$(document).ready(function() {

// Mostrar/Ocultar menu desplegable
$("#header-img").click(function() {
	if  ($(".nav-desplegable").hasClass('activado')) {
		$(".nav-desplegable").animate({"left": "-=170px"}, "fast");
		$(".nav-desplegable").removeClass('activado');
	}
	else
	{
		$(".nav-desplegable").animate({"left": "+=170px"}, "fast");
		$(".nav-desplegable").addClass('activado');
	}
});

// Botones para interactuar con los modelos
$("#button-pag-der").click(function() {

if ($(".modelo-web").is(":visible")) {
	$(".modelo-web").hide("fast");
	$(".modelo-creator").show("fast");
} else {

	if ($(".modelo-desktop").is(":visible")) {
		$(".modelo-creator").hide();
		$(".modelo-mobile").hide();
		$(".modelo-desktop").hide("fast");
		$(".modelo-web").show("fast");
	}

	if ($(".modelo-mobile").is(":visible")) {
		$(".modelo-creator").hide();
		$(".modelo-mobile").hide("fast");
		$(".modelo-desktop").show("fast");
	}
	
	if ($(".modelo-creator").is(":visible")) {
		$(".modelo-creator").hide("fast");
		$(".modelo-mobile").show("fast");
	}
}	

});

$("#button-pag-izq").click(function () {

if ($(".modelo-creator").is(":visible")) {
	$(".modelo-creator").hide("fast");
	$(".modelo-web").show("fast");
} else {

	if ($(".modelo-mobile").is(":visible")) {
		$(".modelo-mobile").hide("fast");
		$(".modelo-creator").show("fast");
		}

	if ($(".modelo-desktop").is(":visible")) {
		$(".modelo-desktop").hide("fast");
		$(".modelo-mobile").show("fast");
		$(".modelo-creator").hide();
		}

	if ($(".modelo-web").is(":visible")) {
		$(".modelo-web").hide("fast");
		$(".modelo-desktop").show("fast");
		$(".modelo-mobile").hide();
		$(".modelo-creator").hide();
		}
	}
});
	
	// Función para ocultar menú desplegable una vez se pulse una opción
	$(".nav-link").click(function() {
		$(".nav-desplegable").animate({"left": "-=170px"}, "fast");
		$(".nav-desplegable").removeClass('activado');
	});

});