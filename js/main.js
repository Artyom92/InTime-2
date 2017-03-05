// page init
$(function(){
	$('ul.fade-tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a',
		event: 'mouseenter'
	});
	$('ul.slide-tabset').contentTabs({
		addToParent: true,
		animSpeed: 500,
		effect: 'slide',
		tabLinks: 'a'
	});
	$('ul.multi-tabset').contentTabs({
		tabLinks: 'a'
	});
});