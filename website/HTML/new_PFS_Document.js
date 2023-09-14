var paragraphParent = document.getElementById("paragraph2").parentElement;
if (paragraphParent.id.endsWith("container")) {
	var parentRegion = document.getElementById(paragraphParent.id).parentElement;
	parentRegion.style.webkitTextFillColor = "#ffffff";
	paragraphParent.style.webkitTextFillColor = "#ffffff";
}



