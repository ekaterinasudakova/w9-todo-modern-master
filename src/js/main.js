/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
class TodoList {
	constructor() {
		
	}
}


let $todoUL = document.querySelector(`.todo ul`)


/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */
class TodoItem {
	constructor(text) {
		this.text = text;
		this.done = false;


		// $todoUL.appendChild( ... )
	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);