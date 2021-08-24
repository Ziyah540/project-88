var Canvas= new fabric.Canvas("myCanvas")

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromUrl("golf-h.png",function(Img){
		hol_obj= Img;
		hol_obj.scaleToWidth(50);
		hol_obj.scaleToHeight(50);
		hol_obj.scaleToHeight({
			top:hole_y,
			left:hole_x
		});
		Canvas.add(hol_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromUrl("ball.png",function(Img){
		ball_object = Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.scaleToHeight({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById(h3).innerHTML="You Have Hit the Goal!!!!!";
		document.getElementById("myCanvas").style.bordercolor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=0){
			ball_y=ball_y-block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow is pressed, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y=ball_y+block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When down arrow is pressed, X =  " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
		
				ball_x=ball_x+block_image_width;
				console.log("block image width = " + block_image_height);
				console.log("When left arrow is pressed, X =  " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
				ball_x=ball_y+block_image_width;
				console.log("block image width = " + block_image_height);
				console.log("When right arrow is pressed, X =  " + ball_x + " , Y = " + ball_y);
				canvas.remove(ball_object);
				new_image();
			
		}
	}
	
}

