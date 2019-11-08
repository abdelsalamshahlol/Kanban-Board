/*
	=========== Class Project ===========
	title: 						String
	id: 						Number
	desc: 						String
	created_at: 				Object
	isComplete: 				Boolean
	tasks: 						Array
	-------------------------------------
	toggleStatus(): 			Undefined
	addTask(Object Task): 		Boolean
	removeTask(): 				Boolean
	getTask(id): 				Object
	-------------------------------------
*/
var Project = function(title, desc) {
	let project = {};

	project.title = title;
	project.id = Math.floor(Math.random() * 1000);
	project.desc = desc;
	project.created_at = new Date();
	project.isComplete = false;
	project.tasks = [];
	//Methods
	project.toggleStatus = toggleStatus;
	project.addTask = addTask;
	project.removeTask = removeTask;
	project.getTask = getTask;

	return project;
}

// Function definations

var toggleStatus = function() {
	this.isComplete = !this.isComplete;
}

var addTask = function(task) {
	if(task !== undefined){
		this.tasks.push(task);

		return true;
	}

	return false;
}

var removeTask = function(task) {
	if(task !== undefined){
		let index = this.tasks.findIndex(function(_task) {
			return task.id === _task.id;
		});

		this.tasks.splice(index,1);

		return true;
	}

	return false;
}

var getTask = function(id) {
	if(id !== undefined){
		return this.tasks.find(function(_task) {
			return _task.id === id;
		});
	}
}