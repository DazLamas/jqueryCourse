var button_type = true;

$('.js_add_task').click(addTask);
$('.js_all_done').click(allDone(button_type));
$('.js_remove_all').click(removeAll);
$('.js_remove_done').click(removeDone);
$('.main').delegate('.js_list_container li', 'click', checkUncheck);

function addTask() {
	$('.js_list_container').append('<li>new</li>');
};
function checkUncheck(e) {
	$(e.target).toggleClass('done');
};
function allDone(button_type) {

	console.log('entro');
	console.log(button_type);

	if (button_type) {
		$('.js_list_container li').addClass('done');
		$(this).html('Desmarcar todas');
		var button_type = false;
		console.log('dentro del if', button_type);
	}
	else {
		$('.js_list_container li').removeClass('done');
		$(this).html('Marcar todas');
		var button_type = true;
	};
};
function removeAll() {
	$('.js_list_container li').remove();
};
function removeDone() {
	$('.js_list_container li.done').remove();
};