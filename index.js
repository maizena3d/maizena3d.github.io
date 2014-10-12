$(document).ready(function () {
	$('.navbar li > a[href="' + document.location.pathname + '"]').parent().addClass('active');
});