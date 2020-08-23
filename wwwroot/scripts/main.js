$(document).ready(function(){
    
});

function showMenu() {
	if (menuData == "") return "";
	var obj = document.getElementById("responsive-menu");
	if (obj) {
		var oBuffer = ["<table id='mobile-menu' cellspacing='0' callpadding='0' border='0' width='100%'>"];
		var menu = menuData.split("~");
		for (var a=0;a<menu.length;a++) {
			oBuffer.push(menuItem(menu[a]));
		}
		oBuffer.push("</table>");
		
		
		obj.innerHTML = oBuffer.join("");
		$(obj).show();
		
	}
	
	function menuItem(sRaw) {
		var oLine = sRaw.split("|");
		return "<tr class='menurow'><td class='menucell' onclick=\"menuClick('menu-" + oLine[1] + "')\"><a id='menu-" + oLine[1] + "' class='no-underline' href='#" + oLine[1] + "'>" + oLine[0] + "</a></td></tr>";
	}
}

function menuClick(id) {
	var obj = document.getElementById(id);
	if (obj) {
		obj.click();
	}
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
		if (year != "") {
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

