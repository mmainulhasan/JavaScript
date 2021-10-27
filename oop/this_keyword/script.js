/*John is running fast because he is trying to catch the train 
Notice we use "this" just as we used "he" in the example sentence earlier?:​
We could have also written this:​​*/
  
  var person = {
  	firstName: "Penelope",
  	lastName: "Barrymore",
  	fullName: function () {
	        console.log(this.firstName + " " + this.lastName);
	       console.log(person.firstName + " " + person.lastName);
	}
}

console.log(person.fullName());