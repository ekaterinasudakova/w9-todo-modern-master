'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The master todo list controller
 * Keeps all the items in an array, and updates the DOM as needed
 * 
 */
var TodoList = function () {
	function TodoList() {
		var _this = this;

		_classCallCheck(this, TodoList);

		this.items = [];
		this.$field = document.querySelector('.listInput');
		console.log(this.$field);

		this.$field.addEventListener('keydown', function () {
			if (event.which == 13 || event.keyCode == 13) {
				_this.items.push(new TodoItem(_this.$field.value));
				_this.$field.value = '';
				_this.updateView();
			}
		});
		window.addEventListener('itemChanged', this.updateView.bind(this));
	}

	_createClass(TodoList, [{
		key: 'updateView',
		value: function updateView() {
			var doneCounter = 0;
			for (var i = 0; i < this.items.length; i++) {
				console.log(this.items[i].$element);
				$todoUL.appendChild(this.items[i].$element);

				console.log(this.items[i].done);
				if (this.items[i].done === true) {
					console.log(doneCounter);
					doneCounter++;
				}
			}
			$total.innerHTML = this.items.length;
			console.log('done counter: ', doneCounter);
			$done.innerHTML = doneCounter;
		}
	}]);

	return TodoList;
}();

var $todoUL = document.querySelector('.todo ul');
var $total = document.querySelector('.total');
var $done = document.querySelector('.done');

/**
 * One todo list item
 * Keeps track of it's own state (text, done, etc)
 * Updates it's own internal DOM as needed
 */

var TodoItem = function () {
	function TodoItem(text) {
		_classCallCheck(this, TodoItem);

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
		console.log(this.$button);
		this.$button.addEventListener('click', this.toggleDone.bind(this));
		// $todoUL.appendChild( ... )
	}

	_createClass(TodoItem, [{
		key: 'toggleDone',
		value: function toggleDone() {
			this.done = !this.done;
			console.log(this);
			var event = new CustomEvent('itemChanged');
			window.dispatchEvent(event);
			this.updateView();
		}
	}, {
		key: 'updateView',
		value: function updateView() {
			if (this.done === true) {
				this.$element.classList.add('done');
				this.$button.innerHTML = "Undo";
			} else {
				this.$element.classList.remove('done');
			}
			this.$textEl.innerHTML = this.text;
		}
	}]);

	return TodoItem;
}();

var todoList = new TodoList();
var todoItem1 = new TodoItem('Milk');
var todoItem2 = new TodoItem('Eggs');
var todoItem3 = new TodoItem('Diapers');
//# sourceMappingURL=main.js.map
