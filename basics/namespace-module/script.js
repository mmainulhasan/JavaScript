// Creating & Namespacing modules
var ray = (function(){
	var DEFAULTS = {
		name: 'Mainul',
		age: '26',
		gender: 'Male',
		speed: 'normal'
	}

	return {
		speak: function(){
			// catched the pass information
			// console.log('hello');
			// here arguments[0] due to i pass only one argument
			// but in danger here user executing the function but doesn't pass anything
			// Set defaults value in one place
			// It's good idea to place the default values top of the script
			// DEFAULTS value will be even if the user doesn't sent value or arguments to the functions
			var firstArgument = arguments[0] || '';
			var name = firstArgument.name || DEFAULTS.name;
			var secondArgument = arguments[1] || '';
			var age = secondArgument.age || DEFAULTS.age;
			var gender = secondArgument.gender || DEFAULTS.gender;
			console.log(name + " " + age + " " + gender);
			return this;
		},
		run: function() {
			var myArguments = arguments[0] || '';
			var running = myArguments.speed || DEFAULTS.speed;
			console.log('running...' + running);
			return this;
		}
	};
})();