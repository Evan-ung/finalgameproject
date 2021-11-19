var currentScene = 0; // 0 = splash, 1 = freemode, 2 = coloring book select, 3-... = coloring book options
var coloringState = 0;
var currentColor = color(255,255,255);
var ellipseSize = 10;

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
    fill(0,0,0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+ 10, this.y+this.height/4);
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
    text1:0,
    text2:0,
    text3:0,
    textSize:19,
    label: "    Free Draw"
});

var blueButton = new Button({
    x: 375,
    y: 50,
    width:60,
    height:20,
    color1:0,
    color2:0,
    color3:255,
    label: " "
});

var lightBlueButton = new Button({
    x: 375,
    y: 75,
    width:60,
    height:20,
    color1:0,
    color2:255,
    color3:255,
    label: " "
});

var redButton = new Button({
    x: 375,
    y: 100,
    width:60,
    height:20,
    color1:255,
    color2:0,
    color3:0,
    label: " "
});

var pinkButton = new Button({
    x: 375,
    y: 125,
    width:60,
    height:20,
    color1:255,
    color2:192,
    color3:203,
    label: " "
});
    
var yellowButton = new Button({
    x: 375,
    y: 150,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:0,
    label: " "
});

var orangeButton = new Button({
    x: 375,
    y: 175,
    width:60,
    height:20,
    color1:255,
    color2:165,
    color3:0,
    label: " "
});

var darkGreenButton = new Button({
    x: 375,
    y: 200,
    width:60,
    height:20,
    color1:0,
    color2:128,
    color3:0,
    label: " "
});

var lightGreenButton = new Button({
    x: 375,
    y: 225,
    width:60,
    height:20,
    color1:0,
    color2:255,
    color3:0,
    label: " "
});

var purpleButton = new Button({
    x: 375,
    y: 250,
    width:60,
    height:20,
    color1:238,
    color2:130,
    color3:238,
    label: " "
});

var brownButton = new Button ({
    x: 375,
    y: 275,
    width:60,
    height:20,
    color1:139,
    color2:69,
    color3:19,
    label: " "
});

var blackButton = new Button({
    x: 375,
    y: 300,
    width:60,
    height:20,
    color1:0,
    color2:0,
    color3:0,
    label: " "
});

mouseClicked = function() {
    if (freeDrawButton.isMouseInside() && currentScene === 0) {
        currentScene = 1;
    }
    if(blueButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(0,0,255);
    }
    if(lightBlueButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(0,255,255);
    }
    if(redButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(255,0,0);
    }
    if(pinkButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(255,192,203);
    }
    if(yellowButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(255,255,0);
    }
    if(orangeButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(255,165,0);
    }
    if(darkGreenButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(0,128,0);
    }
    if(lightGreenButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(0,255,0);
    }
    if(purpleButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(238,130,238);
    }
    if(brownButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(139,69,19);
    }
    if(blackButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(0,0,0);
    }

};

var splashScreen = function(){
    background(245, 215, 245);
    freeDrawButton.draw();
};

var freeModeScreen = function(){
    background(255,255,255);
    blueButton.draw();
    lightBlueButton.draw();
    redButton.draw();
    pinkButton.draw();
    yellowButton.draw();
    orangeButton.draw();
    darkGreenButton.draw();
    lightGreenButton.draw();
    purpleButton.draw();
    brownButton.draw();
    blackButton.draw();
};
draw = function() {
    if(currentScene === 0){
        splashScreen();
    }
    if(currentScene === 1 && coloringState === 0){
        coloringState = 1;
        freeModeScreen();
    }
    if (mouseIsPressed && coloringState === 1 && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6)){
        noStroke();
        fill(currentColor);
        ellipse(mouseX,mouseY,ellipseSize,ellipseSize);
    }
};
