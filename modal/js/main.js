var text = [
	"cronicas": "Crónicas marcianas (en inglés: The Martian Chronicles )?; es una serie de relatos del escritor estadounidense Ray Bradbury. Los relatos carecen de una línea argumental 
	lineal fija, pero la referencia contextual y temporal es la misma en todos ellos. Narra la llegada a Marte y la colonización del planeta por parte de los humanos."
]


$('.open-modal').on('click', {text} , openModal);
$('body').on('click', '.close-modal', closeModal);

function openModal(e) {
	$('body').prepend('<div class="overlay"><div class="modal"><img src="/Users/jquery/Desktop/modal/icons/books8.svg"><p>' + e.data.cronicas +'</p><button class="close-modal">cerrar</button></div>');
};
function closeModal() {
	$('.overlay').fadeOut(), function() {
		$(this).remove();
	};
};