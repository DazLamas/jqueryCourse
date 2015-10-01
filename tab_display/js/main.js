
$('.navigation li').click(showSection);

function showSection() {

	$('.info_panel').stop().slideUp(300, "swing"); // Close all
	$('.navigation li').removeClass('active_tab'); // Remove active style
	if ($(this).hasClass('active_tab')) {
		console.log('1')
		$('.' + $(this).attr('class')).slideUp(400, "swing"); // Open
	}else{
		console.log('2')
		$('.' + $(this).attr('class')).delay(300).slideDown(400, "swing"); // Open
	}

	setActive(this);
};

function setActive(active_section) {
	$(active_section).addClass('active_tab');
	resetClick();
};

function resetClick() {
	$('.navigation li').off('click')
	$('.navigation li:not(.active_tab)').on('click', showSection);
};
