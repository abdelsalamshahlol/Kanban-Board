/*
	=========== Class Task ===========
	content: 					String
	id: 						Number
	location: 					Number
	created_at: 				Object
	project_id: 				Number
	order: 						Number
	isComplete: 				Boolean
	-------------------------------------
	updateLocation(location): 	Boolean
	changeOrder(order): 		Boolean
	changeStatus(): 			Undefined
	-------------------------------------

	=== Notes ===

	Location => refers to the location at the board.
	Reference table:
				-----------------------------
				|	Location 	|	Value	|
				-----------------------------
				|	Backlog		|	0		|
				|	Doing		|	1		|
				|	Done		|	2		|
				----------------------------- 	

	Order => refers to the task place at the list of tasks.
	
*/

var Task = function(content, location, project_id, order) {
	let task = {};

	task.content = content;
	task.id = Math.floor(Math.random() * 1000);
	task.location = location === undefined ? 0 : location;
	task.created_at = new Date();
	task.project_id = project_id;
	task.order = order === undefined ? 0 : order;
	task.isComplete = false;
	// Methods
	task.updateLocation = updateLocation;
	task.changeOrder = changeOrder;
	task.changeStatus = changeStatus;

	return task;
}

// Function definations

var updateLocation = function(_location) {
	if(_location !== undefined && typeof _location === 'number' && _location >= 0 && _location <= 2){
		this.location = _location;

		return true;
	}

	return false;
}

var changeOrder = function(_order) {
	if(_order !== undefined && typeof _order === 'number'){
		this.order = _order;

		return true;
	}

	return false;
}

var changeStatus = function() {
	this.isComplete = !this.isComplete;
}