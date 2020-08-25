$(document).ready(function(){
    
});

function showMenu() {
	var obj = document.getElementById("responsive-menu");
	if (obj) {
		$(obj).show();
	}
}

function menuClick(tag) {
	var obj = document.getElementById(tag);
	if (obj) obj.scrollIntoView(true);
	//anchorLink.scrollIntoView(true);
	clearMenu();
}

function clearMenu() {
	var obj = document.getElementById("responsive-menu");
	if (obj) {
		$(obj).hide();
	}
}

function notImplimentedYet() {
	alert("This has not been set up yet...");
}

window.anchorLink = {
	scrollIntoView: function (elementId) {
		var elem = document.getElementById(elementId);
		if (elem) {
			elem.scrollIntoView({ block: 'end', behavior: 'smooth' });
			window.location.hash = elementId;
		}
	}
}

function setTitle(title) {
	var args = title.split("|");
	var year;
	title = args[0];
	if (args.length > 0) {
		year = args[1].replace(/[^0-9]/g, "");
		if (!year) {
			var currentYear = new Date().getFullYear();
			var baseYear = parseInt(year, 10);
			if (baseYear > 1970) {
				var years = currentYear - baseYear;
				$("#years-exp").text("~" + years + " years");
			}
        }
    }
	$(".tech-title").text(title);
}

