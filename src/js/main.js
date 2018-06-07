/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
class TodoList {
	constructor() {
		this.items = [];
		this.$field = document.querySelector('.listInput');
		console.log(this.$field);

		this.$field.addEventListener('keydown',() => {
			if(event.which == 13 || event.keyCode == 13){
				this.items.push(new TodoItem (this.$field.value));
				this.$field.value = '';
				this.updateView();
			}
		} )
		window.addEventListener('itemChanged', this.updateView.bind(this));
	}
	updateView(){
		var doneCounter = 0;
		for (var i = 0; i < this.items.length; i++) {
			console.log( this.items[i].$element )
			$todoUL.appendChild(this.items[i].$element);
			
			console.log(this.items[i].done)
			if(this.items[i].done === true){
				console.log(doneCounter);
				doneCounter++;
			}
		}
		$total.innerHTML = this.items.length; 
		console.log(`done counter: `, doneCounter);
		$done.innerHTML = doneCounter; 

	}
}


let $todoUL = document.querySelector(`.todo ul`);
let $total = document.querySelector(`.total`);
let $done = document.querySelector(`.done`);


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
		// $todoUL.appendChild(this.$element);	
		console.log(this.$button)
		this.$button.addEventListener('click',this.toggleDone.bind(this));
		// $todoUL.appendChild( ... )
	}

	toggleDone(){
		this.done = !this.done;
		console.log(this);
		var event = new CustomEvent ('itemChanged');
		window.dispatchEvent(event);
		this.updateView();
	}

	updateView(){
		if(this.done === true){
			this.$element.classList.add('done');
			this.$button.innerHTML = "Undo";
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