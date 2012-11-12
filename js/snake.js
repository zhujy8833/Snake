(function(){
	var canvas = $('#playground')[0] || undefined,
		context = canvas.getContext('2d'),
		snake_array = [],
		snake_color = "red",
		snake_size = 5,
		direction_arr = ['left','right','up','down'],
		score = 0;
	var cell_width = 10,
	    canvas_width = canvas.width,
	    canvas_height = canvas.height;
	var default_direction = direction_arr[1];	
	
	//functions	
	var init = function(){
		   // context.fillStyle = "white";
		  //context.fillRect();
			generate_snake();
			paint();
		    
		},
	
		paint = function(){
			  //paint canvas
		      context.fillStyle = "white";
		      context.fillRect(0,0,canvas_width,canvas_height);
		      //draw border 
		      context.strokeStyle = "black";
		      context.strokeRect(0,0,canvas_width, canvas_height);
		      
		      //paint snake body
		      context.fillStyle = "blue";
		      for(var i =0; i < snake_array.length; i++){
		      	 context.fillRect(snake_array[i].x*cell_width, snake_array[i].y*cell_width ,cell_width,cell_width);
		      }
		      
		},
	
		generate_snake = function(){
			for(var i=0;i<snake_size;i++){
				snake_array.push({
					x: i,
					y: 0
				});
			}
		}
	
	init();
	
})();

/*
var Snake = {
	canvas : $('#playground')[0] || undefined,
	snake_body : 5, //the initial snake length
	context
};

Snake.generate_snake = function(){
	
}

Snake.paint = function(){
	
}

Snake.update_score = function(){
	
}
*/