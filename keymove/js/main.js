var newLeft;
var $box;
var counter 	= 1;
var incremento;
var randomNumTop;
var randomNumLeft;


$('body').on('keydown', moveBox );

function moveBox (e) {

	$box 		= $('.box');

	counter++;
	incremento = 10 * counter;

	switch(e.which) {

		case 38:
			newTop 	= parseFloat($box.css('top')) - incremento;
			$box.css('top', newTop);
			break;
		case 39:
			newLeft 	= parseFloat($box.css('left')) + incremento;
			$box.css('left', newLeft);
			break;

		case 40:
			newTop 	= parseFloat($box.css('top')) + incremento;
			$box.css('top', newTop);
			break;

		case 37:
			newLeft 	= parseFloat($box.css('left')) - incremento;
			$box.css('left', newLeft);
			break;

		case 32:
			$box.toggleClass("red");
			break;

		case 13:
			getRandomNumTop() 
			getRandomNumLeft()
			break;
	}
}
function getRandomNumTop() {
	randomNumTop 	= (Math.random() * 1000);
};
function getRandomNumLeft() {
	randomNumLeft 	= (Math.random() * 1000);
	createNew();
};
function createNew() {

	var $newBox = $box.clone();

	$newBox.css('top', randomNumTop)
	$newBox.css('left', randomNumLeft)
	$('body').prepend($newBox);
};




