document.querySelector('.grid').addEventListener('click', function(e) {
	// This is nice for debugging 
	// Catch the event which was happened after clicking
	// console.log(e);
	// console.log(e.target);
	// console.dir(e.target);
	if(e.target.tagName === 'IMG'){
		// console.log(this);
		// Calculate how many element inside this object i.e grid
		var howmany = this.querySelectorAll('li').length;
		if(howmany > 1) {
			var removeTarget = e.target.parentNode;
			// Remove an element from its parent without specifying the parent element
			removeTarget.parentNode.removeChild(removeTarget);
		} else {
			var photoTitle = e.target.alt;
			document.querySelector('#art p').innerHTML = "<p>You've picked: " + photoTitle + "</p>";
		} //howmany
	} //check to see that I clicked on IMG only
}, false); // false means event registered in bubbling phase & if true then event registered in the capturing phase