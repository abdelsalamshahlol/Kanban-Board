/*
	=========== Class Project ===========
	title: 						String
	desc: 						String
	created_at: 				Object
	isComplete: 				Boolean
	notes: 						Array
	-------------------------------------
	toggleStatus(): 			Undefined
	addNote(Object Note): 		Boolean
	removeNote(): 				Boolean
	-------------------------------------
*/
var Project = function(title, desc) {
	let project = {};

	project.title = title;
	project.desc = desc;
	project.created_at = new Date();
	project.isComplete = false;
	project.notes = [];


	return project;
}