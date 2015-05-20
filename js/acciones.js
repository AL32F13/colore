// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	var y = 1;
	var suma_1 = 0;
	var suma_2 = 0;
	var suma_3 = 0;
	var suma_4 = 0;
	
	$('#uno').on('click', function(){
		
		suma_1 = suma_1 + y
		$('#puntaje_1').text(suma_1)
		});
	
	$('#dos').on ('click', function(){
		suma_2 = suma_2 + y;
		$('#puntaje_2').text(suma_2)
	});
	
	$('#tres').on ('click', function(){
		suma_3 = suma_3 + y;
		$('#puntaje_3').text(suma_3)
	});
	
	$('#cuatro').on ('click', function(){
		suma_4 = suma_4 + y;
		$('#puntaje_4').text(suma_4)
	});
		 
//}); 
});


