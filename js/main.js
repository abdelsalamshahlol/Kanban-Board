var projectCollec = [];

/*
	======== Misc Functions ========
*/

// Show errors
function showErrors(element, text) {
	element.addClass('has-error');
	element.parent().append(`<small class="text-warning">${text}</small>`)
	.hide().fadeIn();
}

// Modal control
function showModal(title, content, type){
	let modal = $('.modal'); 
	let modalBody = $(modal).find('#modal-body');
	let color = type === 'danger' ? 'bg-danger' : 'bg-sucess';

	modalBody.find('h3').html(title).addClass(color);
	modalBody.find('p').html(content);
	modal.hide().fadeIn('slow');

	console.log('aaaaaaaaaaa')
	// Sorry but I want to use ES6 to save the lexical scope using arrow functions
	setTimeout(()=> {
		modal.fadeOut('slow');
	},9000);
}

/*
	======== End Misc Functions ========
*/


/*
	======== Core Functions ========
*/

function createProject(title, desc) {
	let project = new Project(title, desc);

	projectCollec.push(project);
	showModal('Success', 'Project created', '!danger');
	updateProjectList();
}

/*
	======== End Core Functions ========
*/