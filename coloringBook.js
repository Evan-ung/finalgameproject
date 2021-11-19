var currentScene = 0; // 0 = splash, 1 = freemode, 2 = coloring book select, 3-... = coloring book options
var currentColor = color(255,255,255);
var buttonColor = color(255,255,255);

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color1 = config.color1 || 0;
    this.color2 = config.color2 || 0;
    this.color3 = config.color3 || 0;
};

Button.prototype.draw = function() {
    fill(this.color1,this.color2,this.color3);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+this.width/5, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};


var freeDrawButton = new Button({
    x: 100,
    y: 100,
    width:150,
    height:50,
    color1:255,
    color2:0,
    color3:0,
    label: "Free Draw"
});
mouseClicked = function() {
    if (freeDrawButton.isMouseInside()) {
        currentScene = 1;
    }
};

var splashScreen = function(){
    background(245, 215, 245);
    freeDrawButton.draw();
};
draw = function() {
    if(currentScene === 0){
        splashScreen();
    }
};
