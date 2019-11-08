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

// Disable anchor

$('body').on('click', '.kill-anchor', function(e){
	e.preventDefault();
}); 

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

function getProject(id){
	return projectCollec.find(function(project) {
		return project.id === parseInt(id);
	});
}

/*
	======== End Core Functions ========
*/