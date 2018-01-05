var points = [];
var brain; 

function setup() {
	createCanvas(400,400);
	background(255);
	stroke(0);
	line(0,400,400,0);
	brain = new perceptron();
	
	for(var i = 0; i < 100; i++){
		points[i] = new pt();
		points[i].show();
		if(brain.guess(points[i]) === points[i].label){
			fill(0,255,0);
		}else{
			fill(255,0,0); // 
		}
		ellipse(points[i].pixelX(),points[i].pixelY(),4,4);
	}
	

}

function draw() {

	for(var i = 0; i < 100; i++){
		if(brain.guess(points[i]) === points[i].label){
			fill(0,255,0);
		}else{
			fill(255,0,0);
		}
		ellipse(points[i].pixelX(),points[i].pixelY(),4,4);
	}
	brain.drawLine();
}

function mouseClicked() {
	for(var i = 0; i < 100; i++){
		brain.train(points[i]);
	}

	console.log(brain.w1 + " " + brain.w2);

}

//Perceptron Object
function perceptron(){
	this.w1 = random(-50,50);
	this.w2 = random(-50,50);
	this.lr = 0.1;

	this.guess = function(a){
		var sum = a.x * this.w1 + a.y * this.w2;
		if(sum < 0){
			return -1;
		}else{
			return 1;
		}
	};

	this.train = function(a){
		var g = this.guess(a);
		var error = a.label - g;
		this.w1 = this.w1 + a.x * error * this.lr;
		this.w2 = this.w2 + a.y * error * this.lr;
	}

	this.currentLine = function(num){
		return -1 * (this.w1/this.w2) * num;
	}

	this.drawLine = function(){
		line(0,400-this.currentLine(0),400,400-this.currentLine(400))
	}

}

//Point Object works correctly
function pt(){
	this.x = random(400);
	this.y = random(400);

	if(this.y < this.x){
		this.label = -1;
	}else{
		this.label = 1;
	}

	this.pixelX = function(){
		return this.x;
	};
	this.pixelY = function(){
		return map(this.y,0,400,400,0);
	};
	this.show = function(){
		if(this.label > 0){
			stroke(0);
			fill(0);
		}else{
			stroke(0);
			noFill();
		}
		ellipse(this.pixelX(), this.pixelY(), 8, 8);
	};
}


