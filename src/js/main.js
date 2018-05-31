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

		this.$element = document.createElement('li');
		this.$textEl = document.createElement('p');
		this.$textEl.innerHTML = this.text;
		this.$button = document.createElement('button');
		this.$button.innerHTML = "Complete";

		this.$element.appendChild(this.$button);
		this.$element.appendChild(this.$textEl);
		$todoUL.appendChild(this.$element);

		
		


		// $todoUL.appendChild( ... )
	}

	updateView(){
		if(this.$element.done === true){
			this.$element.classList.add('done');
		} else{
			this.$element.classList.remove('done');
		}
		this.$textEl.innerHTML = this.text;

	}
}


let todoList = new TodoList();
let todoItem1 = new TodoItem(`Milk`);
let todoItem2 = new TodoItem(`Eggs`);
let todoItem3 = new TodoItem(`Diapers`);