/*
	Project: Kanban Board
	Developed by: Abdelsalam Shahlol
	Date: 10 Nov 2019
	
	=== Expected Results ===
	Single page application.
	Muliple pages with router.
	100% beat the challange and meet the purpose.

	=== Build Rules ===
	Only use HTML, CSS3, jQuery, and JavaScript ES5.
	Only 48 hours to develop.
	Not allowed to ask other developers to contribute.
*/

$(function() {
	var routes = {
		'/' : indexTemplate,
		'/project' : projectTemplate,
		'/settings': settingsTemplate,
	};

	var router = {
		current: '/',
		param : {}
	};

	// Render the app
	function renderApp(){
		//This is temp using prepend
		$('body').find('#app').prepend(nav);
		$('body').find('#app').append(footer);
		$('body').find('#app').append(modal);
		renderPage();
	}

	// Render the page
	function renderPage(title, href){
		// console.log(href , html , {routes:routes, page:routes[href]});
		// Do the navigation and store the path in the history
		let html = '';
		console.log({router})
		if(title !== undefined && href !== undefined){
			// remove parameters from the route
			// html = routes[href];
			// router.current = href;
			let _href = href;
			if(href.includes('?')){
				_href = href.substr(0, href.indexOf('?'));
			}
			let id = href.substr(href.indexOf('=') + 1);
			let withParam = href.substr(href.indexOf('?'));
			console.log({_href,id,withParam})

			html = routes[_href];
			router.current = href;
			router.param.id = id;
			window.history.pushState({id:id}, title, href);
		}
		else{
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
		updateProjectList();
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
		updateProjectList();

	});

	/* End Action Listeners Block */


	// Invoke render function
	renderApp();
});