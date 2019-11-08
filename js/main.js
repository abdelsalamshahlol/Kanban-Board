$(function() {
	var routes = {
		'/' : index,
		'project' : project,
		'/settings': settings,
	}

	// Render the app
	function renderApp(){
		//This is temp using prepend
		$('body').find('#app').prepend(nav);
		$('body').find('#app').append(footer);
		renderPage();
	}

	/* 
		Action Listeners Block 
		Event Listeners Probably should be somewhere else
	*/

	//Convert that to jQuery if possible [Unfinished]
	// On page pop state change the content
	window.onpopstate = function(e) {
		renderPage();
	}

	function renderPage(title, href){
		// console.log(href , html , {routes:routes, page:routes[href]});
		//Do the navigation and store the path in the history
		let html = '';

		if(title !== undefined && href !== undefined){
			html = routes[href];
			window.history.pushState({}, title, href);
		}else{
			html = routes[window.location.pathname];
			// console.log(window.location.pathname)
		}

		$('body').find('#view').html(html);
	}

	$('body').on('click', 'a', function(e) {
		let src = $(this);
		// Check if its router related and prevent it
		if(!src.hasClass('dont-block')){
			e.preventDefault();
		}

		let href = src.attr('href');
		let title = src.data('name');

		renderPage(title, href);
	});

	/* / Action Listeners Block */


	// Invoke render function
	renderApp();
});