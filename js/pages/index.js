/*
	=== Index Page ===
*/

var indexTemplate = 
`	<h1 class="text-center headings-style mt-2 app-hero">Kanban Board</h1>
		<section id="home-section">
			<div class="container">
				<div class="row">
					<div class="col">
						 <div class="container">
						 	<div class="col" id="projects-list-home">
								<h2 class="mx-1 headings-style">Projects</h2>
							</div>
						 </div>
					</div>
					<div class="col">
						<div class="container">
							<div class="col">
								<h2 class="mx-1 headings-style">New Project</h2>
								<form id="create-new-project">
									<div class="form-control">
										<label>Project Title</label>
										<input class="input-field" type="text" name="project-name">
									</div>
									<div class="form-control">
										<label>Project Description <small>(Optional)</small></label>
										<textarea class="input-field" name="project-desc"></textarea>
									</div>
									<button class="btn btn-blue mt-1">Save</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
	</section>`;


/*
	==== Methods ====
*/

$('body').on('submit', '#create-new-project', function(e) {
	e.preventDefault();

	let projectTitle = $(this).find('[name="project-name"]');
	let projectDesc = $(this).find('[name="project-desc"');

	if(projectTitle.val().length === 0){
		showErrors(projectTitle,'Project title required.');
		return false;
	}

	createProject(projectTitle.val(), projectDesc.val());
	projectTitle.val('');
	projectDesc.val('');
});


function updateProjectList() {
	let list = $('body').find('#projects-list-home > h2');
	list.html('');

	for(var project of projectCollec){
		// console.log(project)
		let html = 
			`
			<div class="project mx-1">
				<div class="container">
					<div class="row">
						<a href="/project?id=${project.id}" data-name='project' class="kill-anchor">
							<div class="col-1">
								<span class="d-flex flex-center">
									<i class="fas fa-tasks"></i>
								</span>
							</div>
							<div class="col">
								<h3>${project.title}</h3>
								<p>${project.desc}</p>
							</div>
						</a>
					</div>
				</div>
			</div>
			`;

		list.append(html).hide().fadeIn();
	}
}