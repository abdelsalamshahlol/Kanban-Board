$(function() {
	var routes = {
		'/' : index,
		'/settings': settings,
	}

	function renderApp(){
		//This is temp using prepend
		$('body').find('#app').prepend(nav);
	}

	$('body').on('click', 'a', function(e) {
		e.preventDefault();
		let src = $(this);
		let href = src.attr('href');
		let html = routes[href];
		let title = src.data('name');

		// console.log(href , html , {routes:routes, page:routes[href]});
		//Do the navigation and store the path in the history
		window.history.pushState({}, title, href);

		$('body').find('#view').html(html);
	});

	renderApp();

	/*
		Event Listeners Probably should be somewhere else
	*/

	//Convert that to jQuery if possible
	window.onpopstate = function(e) {
		// alert('TTTTTTTTTTT')
		
	}
	// $('window').on('popstate', function(e) {
	// 	alert('sidls')
	// });
});