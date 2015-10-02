
var $container 	= $('.cont');
var beer_num 	= 20;


for(var i = 0; i < beer_num; i++) {  
  $container.append('<img src="http://www.clipartlord.com/wp-content/uploads/2014/12/beer11.png" data-z-pos="big" class="beer">');
};


$(window).scroll(function() {

	var scrrolled = $(window).scrollTop();

});