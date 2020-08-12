
var ticking = false;
var scroll_near_top = true;
var scroll_near_top_prev = true;

window.titlePos = new _titlePos(900, 2270, 20, 210);



window.addEventListener('scroll', function(e) {

	var y = last_known_scroll_position = window.scrollY;
	
	if (!ticking) {

		scroll_near_top = (y < 100);
		
		window.requestAnimationFrame(function() {
			if (scroll_near_top != scroll_near_top_prev) {
				if (!scroll_near_top) {
					$("#main-nav-logo").addClass("nav-logo-reduced");
					$("#main-nav").addClass("main-nav-reduced");
					$("#menu").addClass("menusec-reduced");
				}
				else {
					$("#main-nav-logo").removeClass("nav-logo-reduced");
					$("#main-nav").removeClass("main-nav-reduced");
					$("#menu").removeClass("menusec-reduced");
				}
				scroll_near_top_prev = scroll_near_top;
			}
			scrollImage(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;

	}
  
});


function scrollImage(scrollPosition) {
	var obj = document.getElementById("top-image");
	var top;
	if (obj) {
		top = "-" + parseInt(scrollPosition / 4.5, 10) + "px";
		obj.style.top = top;
	}
}

