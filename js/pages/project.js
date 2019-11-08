/*
	=== Project Page ===
*/

var projectTemplate = 
`
<section id="containment-div">
	<div class="container">
		<div class="row">
			<div class="col k-section bg-green no-gutter">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Back Log</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1 task-form" id="backlog-from">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="backLog-column"></div>
			</div>
			<div class="col k-section bg-orange no-gutter" id="sss">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Doing</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1 task-form" id="doing-form">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="doing-column"></div>						
			</div>
			<div class="col k-section bg-brown no-gutter">
				<div class="section-title mx-1">
					<h2 class="text-center text-white">Done</h2>
					<hr class="mt-1 divider">
				</div>
				<div class="container">
					<div class="row flex-center-content">
						<form class="w-75 mt-1 task-form" id="done-form">
							<div class="form-input-grp">
								<input class="input-field add-task-field" placeholder="Task" type="text" name="task">
                           		<div class="input-grp-append">
									<button title="Add task to list" class="btn btn-blue add-task-btn">
										<i class="fas fa-plus-square"></i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div id="done-column"></div>						
			</div>
		</div>
	</div>
</section>
`;

/*
	==== Methods ====
*/



$('body').on('submit', '.task-form', function(e) {
	e.preventDefault();

	let src = $(this);
	let project_id = location.search.substring(4);
	let project = getProject(project_id);
	let content = src.find('input').val();
	let order = project.tasks.length;
	let _location = '';

	console.log({f:getProject,project,project_id});

	if(src.attr('id') === 'backlog-from'){
		_location = 0;
	}else if(src.attr('id') === 'doing-form'){
		_location = 1;
	}else if(src.attr('id') === 'done-form'){
		_location = 2;
	}

	let task = new Task(content, _location, project_id, order);
	let result = project.addTask(task);

	if(result){
		let project_id = location.search.substring(4);
		let project = getProject(project_id);

		updateColumn(project, _location);
		showModal('Success', 'Task created', '!danger');
	}else{
		showModal('Error', 'An error occured!', 'danger');
	}

	console.log({projectCollec});
});


function updateColumn(project, _location) {
	let colSelector;

	let data = project.tasks.filter(function(val, key) {
		return val.location === _location ;
	});

	console.log({data});

	if(_location === 0){
		colSelector = '#backLog-column';
	}else if(_location === 1){
		colSelector = '#doing-column';
	}else{
		colSelector = '#done-column';
	}

	createTasksNode(data, colSelector);

	$('.sticky-note').draggable({
		// axis:"x", 
		containment: '#containment-div',
		stop: function(e, ui){
			console.log('stopped');
		}
	});
}

// function updateDoing(project) {

// }

function createTasksNode(tasks, target) {
	let html = ``;
	$(target).html('');

	for (var task of tasks){
	html += 
		`
		<div class="sticky-note mx-1">
			<div class="container">
				<div class="row">
					<a href="#" class="kill-anchor">
						<div class="col-1">
							<span class="d-flex flex-center flex-h-center h-100">
								<button titel="Delete task" class="btn btn-note-del"><i class="fas fa-trash-alt"></i></button>
							</span>
						</div>
						<div class="col">
							<p>${task.content}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
		`;
	}
	
	$('body').find(target).append(html);

	$('.k-section').droppable({
	accept:'.sticky-note',
	classes:{
		"ui-droppable-active": 'note-active',
		"ui-droppable-hover": 'note-hover'
	},
	drop: function(event, ui) {
		// $(this).find('.section-title').addClass('highlight-section');
		//Do something else with 
		console.log({event,ui});
	}
});
}
