$(function() {
	var routes = {
		'/' : index,
		'/project' : project,
		'/settings': settings,
	}

	// Render the app
	function renderApp(){
		//This is temp using prepend
		$('body').find('#app').prepend(nav);
		$('body').find('#app').append(footer);
		renderPage();
	}

	// Render the page
	function renderPage(title, href){
		// console.log(href , html , {routes:routes, page:routes[href]});
		// Do the navigation and store the path in the history
		let html = '';

		if(title !== undefined && href !== undefined){
			html = routes[href];
			window.history.pushState({}, title, href);
		}else{
			html = routes[window.location.pathname];
		}

		$('body').find('#view').html(html).hide().fadeIn('slow');
	}

	/* 
		Action Listeners Block 
		Event Listeners Probably should be somewhere else
	*/


	// List to Page pop state event
	// Convert that to jQuery if possible 
	window.onpopstate = function(e) {
		renderPage();
	}

	// Listen to anchor clicks
	$('body').on('click', 'a', function(e) {
		let src = $(this);
		// Check if its router related and prevent it
		if(!src.hasClass('dont-block')){
			e.preventDefault();
		}

		let href = src.attr('href');
		let title = src.data('name');
		console.log(href,title);
		renderPage(title, href);
	});

	/* End Action Listeners Block */


	// Invoke render function
	renderApp();
});