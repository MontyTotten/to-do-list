var inputBox = document.querySelector('#inputBox');
var list = document.querySelector('.task-list');

inputBox.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		if (inputBox.value === '') {
			return;
		}
		format();
	}
});

var submit = document.querySelector('#submit');

submit.addEventListener('click' , function () {
	if (inputBox.value === '') {
		return;
	}
	format();
});


function format () {
	var buttonComplete = document.createElement('button'); // <button>
		// buttonComplete.innerHTML = '&#10003;';
		//buttonComplete.textContent = '\u2713';
		buttonComplete.classList.add('check');
		// Create the remove button
		var buttonRemove = document.createElement('button');
		buttonRemove.textContent = 'X';
		buttonRemove.classList.add('remove');
		// Create the list item
		var li = document.createElement('li');
		li.textContent = inputBox.value;
		// Append the children to the li
		li.appendChild(buttonComplete);
		li.appendChild(buttonRemove);
		// Append the li to the list
		list.appendChild(li);
		// Remove Button function 
		buttonRemove.addEventListener('click', function () {
			li.parentElement.removeChild(li);
		});
		// Complete button function
		buttonComplete.addEventListener('click', function () {
			//li.classList.add('.complete')
			li.classList.toggle('complete')
		});
		inputBox.value = '';
} 
		

var incompleteButton = document.querySelector('#incomplete')

incompleteButton.addEventListener('click', function () {
	// loop over the list's children (list items)
	// if the current list item is complete (has the class `.complete`) hide it
	// otherwise, show it
	list.classList.add('incomplete');
	list.classList.remove('complete');
	incompleteButton.classList.add('showing');
	allButton.classList.remove('showing');
	completedButton.classList.remove('showing');
});


var completedButton = document.querySelector('#complete')

completedButton.addEventListener('click', function () {
	list.classList.add('complete');
	list.classList.remove('incomplete');
	incompleteButton.classList.remove('showing');
	allButton.classList.remove('showing');
	completedButton.classList.add('showing');
});


var allButton = document.querySelector('#all')

allButton.addEventListener('click', function () {
	list.classList.remove('complete');
	list.classList.remove('incomplete');
	allButton.classList.add('showing');
	incompleteButton.classList.remove('showing');
	completedButton.classList.remove('showing');
});



