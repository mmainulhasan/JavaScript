$("document").ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();

	//Lets save the cell width in a variable for easy control
	var cw = 10;
	
	//Lets paint the canvas now
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, w, h);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, w, h);
	
	//Lets create the snake now
	var snake_array; //an array of cells to make up the snake

	create_snake();

	function create_snake()
	{
		var length = 5;//Length of the snake
		snake_array=[];//Empty array to start with
		for(var i=length-1;i>=0;i--)
		{
			//This will create a horizontal snake strating from the top left
			snake_array.push({x:i,y:0});
		}
		// alert(snake_array);
		// document.write(snake_array);
	}

	//Lets paint the snake now
	function paint()
	{
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
				//Lets paint 10px wide cells
				ctx.fillStyle = "blue";
				ctx.fillRect(c.x*cw, c.y*cw, cw, cw);
				ctx.strokeStyle = "white";
				ctx.strokeRect(c.x*cw, c.y*cw, cw, cw);
			}
		}
		//Lets move the snake now using a timer which will
		game_loop = setInterval(paint, 60);

});