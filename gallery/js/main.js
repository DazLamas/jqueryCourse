$('.gallery li').hover(setOpacity);

function setOpacity() {
	$(this).toggleClass('bigger');
	$(this).siblings().toggleClass('grayscale');
	$(this).siblings().toggleClass('smaller');
}