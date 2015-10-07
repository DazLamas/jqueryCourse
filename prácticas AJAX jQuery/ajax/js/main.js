
$("#btn-submit").click( cargarVideo ) 



function cargarVideo() {
	
	$.ajax(
  		{
		async:true,
		type: "POST" ,
		dataType: "html" ,
		contentType: "application/x-www-form-urlencoded" ,
		url:"cargarVideo.php" ,
		data:"num=" + $("#num").val() ,
		beforeSend: mostrarSpinner ,
		success: mostrarVideo ,
		timeout:8000 ,
		error: mostrarError
		}
		
/*		async : Indica si la comunicación será asincrónica (true) o sincrónica (false)
		type : Indica el método que se envían los datos (pudiendo ser GET o POST)
		dataType : Indica el tipo de datos que se va a recuperar (pudiendo ser "html","xml","json","script")
		contentType : Indicamos como se empaquetan los datos para enviarlos al servidor (normalmente
		application/x-www-form-urlencoded")
		url : Indicamos el nombre de la página que procesará la petición de datos.
		data : Indicamos los datos a enviar al servidor.
		beforeSend : Indicamos el nombre de la función que se ejecutará previo al envío de datos (en nuestro ejemplo
		mostramos el gif animado que indica que se inició el pedido de datos al servidor)
		success : Indicamos la función que se ejecuta cuando finalizó el envío de datos del servidor y además
		ocurrió todo en forma correcta (en nuestro ejemplo recuperamos el dato devuelto y lo mostramos en la página)
		timeout : El tiempo máximo a esperar por la petición de datos.
		error : El nombre de la función que se ejecuta si los datos no llegan del servidor. */
	) 
	
	event.preventDefault() 
}



function mostrarSpinner() {
	$("#videoWrapper").html("<img src='img/spinner.gif' alt='Cargando...'>")
}



function mostrarVideo(video) {
	console.log(video)
	$("#videoWrapper").html("<iframe src='http://www.youtube.com/embed/" + video + "?autoplay=1'></iframe>")
}



function mostrarError() {
	$("#videoWrapper").text("Problemas al cargar el vídeo :(")
}
