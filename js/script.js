// script.js - Carga dinámica de header, main y footer
function loadComponent(id, file) {
	fetch(file)
		.then(response => response.text())
		.then(html => {
			document.getElementById(id).innerHTML = html;
		});
}

window.onload = function() {
	loadComponent('header', 'header.html');
	loadComponent('main', 'main.html');
	loadComponent('footer', 'footer.html');
};
