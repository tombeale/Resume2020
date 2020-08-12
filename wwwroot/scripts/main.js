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
		// This function is called from the AnchorLink component using JavaScript interop.
		// It will try to find an element using the ID given to the function, and scroll that
		// element into view, if an element is found.
		var elem = document.getElementById(elementId);
		if (elem) {
			elem.scrollIntoView();
			window.location.hash = elementId;
		}
	}
}