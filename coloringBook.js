var currentScene = 0; // 0 = splash, 1 = freemode, 2 = coloring book select, 3-... = coloring book options // 
var coloringState = 0; //0 coloring does not work, 1 coloring does work
var currentColor = color(255,255,255); //current color of the ellipses
var ellipseSize = 0; //current size of the ellipses

//Evan's Bitmoji
var drawBitmojiHead = function(bitmojiX, bitmojiY, bitmojiHeight){
        //head
            noStroke();
            fill(235, 204, 171);
            ellipse(bitmojiX, bitmojiY-(bitmojiHeight/100*-5), bitmojiHeight/100*83, bitmojiHeight/100*89);
        //hair
            fill(0, 0, 0);
            quad(bitmojiX+(bitmojiHeight/100*38), bitmojiY, bitmojiX+(bitmojiHeight/100*38), bitmojiY-(bitmojiHeight/100*16), bitmojiX+(bitmojiHeight/100*41),                    bitmojiY-(bitmojiHeight/100*16), bitmojiX+(bitmojiHeight/100*43), bitmojiY+(bitmojiHeight/100*4));
            quad(bitmojiX-(bitmojiHeight/100*37), bitmojiY+(bitmojiHeight/100*12), bitmojiX-(bitmojiHeight/100*45), bitmojiY-(bitmojiHeight/100*21), bitmojiX-(bitmojiHeight/100*8), bitmojiY-(bitmojiHeight/100*21), bitmojiX-(bitmojiHeight/100*37), bitmojiY-(bitmojiHeight/100*22));
        //ears
            fill(235, 204, 171);
            ellipse(bitmojiX+(bitmojiHeight/100*37), bitmojiY+(bitmojiHeight/100*11), (bitmojiHeight/100*15), (bitmojiHeight/100*23));
            ellipse(bitmojiX-(bitmojiHeight/100*38), bitmojiY+(bitmojiHeight/100*11),              bitmojiHeight/100*15, bitmojiHeight/100*23);
        //neck
            noStroke();
            fill(235, 204, 171);
            rect(bitmojiX-(bitmojiHeight/100*14), bitmojiY+(bitmojiHeight/100*29), (bitmojiHeight/100*30), (bitmojiHeight/100*30));
         //hat
            noStroke();
            fill(0, 0, 0);
            quad(bitmojiX+(bitmojiHeight/100*28), bitmojiY-(bitmojiHeight/100*40), bitmojiX-(bitmojiHeight/100*26), bitmojiY-(bitmojiHeight/100*40), bitmojiX-(bitmojiHeight/100*46), bitmojiY-(bitmojiHeight/100*20), bitmojiX+(bitmojiHeight/100*44),bitmojiY-(bitmojiHeight/100*19));
            ellipse(bitmojiX, bitmojiY-(bitmojiHeight/100*29), (bitmojiHeight/100*52), (bitmojiHeight/100*18));
            fill(77, 77, 77);
            ellipse(bitmojiX, bitmojiY-(bitmojiHeight/100*17), (bitmojiHeight/100*92), (bitmojiHeight/100*17));
            fill(219, 177, 9);
            ellipse(bitmojiX, bitmojiY-(bitmojiHeight/100*14), (bitmojiHeight/100*84), (bitmojiHeight/100*18));
        //logo
            fill(250, 238, 0); 
            ellipse(bitmojiX-(bitmojiHeight/100*1), bitmojiY-(bitmojiHeight/100*34), (bitmojiHeight/100*16), (bitmojiHeight/100*10));
            fill(245, 245, 245);
            ellipse(bitmojiX-(bitmojiHeight/100*1), bitmojiY-(bitmojiHeight/100*31), (bitmojiHeight/100*20), (bitmojiHeight/100*6));
            fill(235, 204, 171);
            ellipse(bitmojiX, bitmojiY-(bitmojiHeight/100*9), (bitmojiHeight/100*77), (bitmojiHeight/100*20));
         //mouth
            stroke(0, 0, 0);
            strokeWeight((bitmojiHeight/100*1));
            fill(250, 250, 250);
            ellipse(bitmojiX+(bitmojiHeight/100*1), bitmojiY+(bitmojiHeight/100*25), (bitmojiHeight/100*35), (bitmojiHeight/100*21));
            line(bitmojiX-(bitmojiHeight/100*17), bitmojiY+(bitmojiHeight/100*26), bitmojiX+(bitmojiHeight/100*17), bitmojiY+(bitmojiHeight/100*26));
            noStroke();
            fill(235, 204, 171);
            rect(bitmojiX-(bitmojiHeight/100*18), bitmojiY, (bitmojiHeight/100*42), (bitmojiHeight/100*26));
            stroke(0, 0, 0);
            line(bitmojiX+(bitmojiHeight/100*2), bitmojiY+(bitmojiHeight/100*6), bitmojiX+(bitmojiHeight/100*6), bitmojiY+(bitmojiHeight/100*17));
            line(bitmojiX-(bitmojiHeight/100*2), bitmojiY+(bitmojiHeight/100*17), bitmojiX+(bitmojiHeight/100*6), bitmojiY+(bitmojiHeight/100*17));
        //eyebrows
            strokeWeight((bitmojiHeight/100*3));
            stroke(0, 0, 0);
            line(bitmojiX-(bitmojiHeight/100*30), bitmojiY-(bitmojiHeight/100*7), bitmojiX-(bitmojiHeight/100*5), bitmojiY-(bitmojiHeight/100*10));
            line(bitmojiX+(bitmojiHeight/100*5), bitmojiY-(bitmojiHeight/100*10), bitmojiX+(bitmojiHeight/100*30), bitmojiY-(bitmojiHeight/100*8));
        //eye back
            noStroke();
            fill(255, 255, 255);
            ellipse(bitmojiX-(bitmojiHeight/100*16), bitmojiY+(bitmojiHeight/100*4), (bitmojiHeight/100*20), (bitmojiHeight/100*12));
            ellipse(bitmojiX+(bitmojiHeight/100*16), bitmojiY+(bitmojiHeight/100*4), (bitmojiHeight/100*20), (bitmojiHeight/100*12));
            fill(71, 49, 9);
        //pupil
            ellipse(bitmojiX+(bitmojiHeight/100*16), bitmojiY+(bitmojiHeight/100*4), (bitmojiHeight/100*10), (bitmojiHeight/100*11));
            ellipse(bitmojiX-(bitmojiHeight/100*16), bitmojiY+(bitmojiHeight/100*4), (bitmojiHeight/100*10), (bitmojiHeight/100*11));
    };
        
var drawBitmojiBody = function(bitmojiX, bitmojiY, bitmojiHeight)
    {
        //shirt
            fill(0, 11, 135);
            quad(bitmojiX+(bitmojiHeight/100*43), bitmojiY+(bitmojiHeight/100*89), bitmojiX+(bitmojiHeight/100*73), bitmojiY+(bitmojiHeight/100*90), bitmojiX+(bitmojiHeight/100*65), bitmojiY+(bitmojiHeight/100*63), bitmojiX+(bitmojiHeight/100*33), bitmojiY+(bitmojiHeight/100*58));
            quad(bitmojiX-(bitmojiHeight/100*78), bitmojiY+(bitmojiHeight/100*89), bitmojiX-(bitmojiHeight/100*38), bitmojiY+(bitmojiHeight/100*90), bitmojiX-(bitmojiHeight/100*37), bitmojiY+(bitmojiHeight/100*58), bitmojiX-(bitmojiHeight/100*68), bitmojiY+(bitmojiHeight/100*64));
            ellipse(bitmojiX, bitmojiY+(bitmojiHeight/100*64), (bitmojiHeight/100*103), (bitmojiHeight/100*17));
            rect(bitmojiX-(bitmojiHeight/100*47), bitmojiY+(bitmojiHeight/100*65), (bitmojiHeight/100*93), (bitmojiHeight/100*45));
        //design
            fill(227, 67, 242);
            rect(bitmojiX+(bitmojiHeight/100*17), bitmojiY+(bitmojiHeight/100*88), (bitmojiHeight/100*18), (bitmojiHeight/100*8));
            triangle(bitmojiX+(bitmojiHeight/100*7), bitmojiY+(bitmojiHeight/100*95), bitmojiX+(bitmojiHeight/100*16), bitmojiY+(bitmojiHeight/100*92), bitmojiX+(bitmojiHeight/100*7), bitmojiY+(bitmojiHeight/100*88));
            noStroke();
            fill(235, 204, 171);
            ellipse(bitmojiX+(bitmojiHeight/100*1), bitmojiY+(bitmojiHeight/100*58), (bitmojiHeight/100*30), (bitmojiHeight/100*36));
            fill(0, 0, 0);
            ellipse(bitmojiX-(bitmojiHeight/100*6), bitmojiY+(bitmojiHeight/100*64), (bitmojiHeight/100*5), (bitmojiHeight/100*4));
            fill(255, 255, 255);
            textSize((bitmojiHeight/100*30));
            text("EU", bitmojiX-(bitmojiHeight/100*39), bitmojiY+(bitmojiHeight/100*83), (bitmojiHeight/100*83), (bitmojiHeight/100*100));
        // arms
            fill(219, 191, 149);
            rect(bitmojiX-(bitmojiHeight/100*72), bitmojiY+(bitmojiHeight/100*87), (bitmojiHeight/100*23), (bitmojiHeight/100*23));
            rect(bitmojiX+(bitmojiHeight/100*47), bitmojiY+(bitmojiHeight/100*87), (bitmojiHeight/100*23), (bitmojiHeight/100*23));
};
var drawBitmojiEvan = function(bitmojiX, bitmojiY, bitmojiHeight)
{
drawBitmojiHead(bitmojiX,bitmojiY,bitmojiHeight);
drawBitmojiBody(bitmojiX,bitmojiY,bitmojiHeight);
};

//Damien's Bitmoji
var bitmojiFace = function(bmX,bmY,bmH){

    noStroke();
    fill(255, 224, 180); // Skin color
    ellipse(bmX,bmY,bmH/150*79,bmH/150*100); // Face shape
    fill(0, 0, 0); // Eye color
    ellipse(bmX-bmH/150*17,bmY-bmH/150*13,bmH/150*10,bmH/150*10); // Left eye
    ellipse(bmX+bmH/150*13,bmY-bmH/150*13,bmH/150*10,bmH/150*10); // Right eye
    fill(84, 42, 14); // Eye Color
    ellipse(bmX-bmH/150*17,bmY-bmH/150*13,bmH/150*4,bmH/150*4); // Left eye
    ellipse(bmX+bmH/150*13,bmY-bmH/150*13,bmH/150*4,bmH/150*4); // Right eye
    stroke(0,0,0); // Black line for nose
    strokeWeight(bmH/150*1);
    fill(255,224,180); // Skin color
    bezier(bmX,bmY,bmX+bmH/150*21,bmY+bmH/150*22,bmX-bmH/150*8,bmY+bmH/150*20,bmX-bmH      /150*4,bmY+bmH/150*15); // Nose
    stroke(0, 0, 0); // Smile outline
    strokeWeight(bmH/150*2); // Thickness of smile outline
    fill(255, 224, 180); // Skin color
    arc(bmX+bmH/150*1,bmY+bmH/150*20,bmH/150*38,bmH/150*27,38,145); // Smile
};

var bitmojiHead = function(bmX,bmY,bmH){
    noStroke();
    fill(181, 101, 29); // Hair color
    ellipse(bmX,bmY-bmH/150*40,bmH/150*70,bmH/150*26); // Top hair
    arc(bmX-bmH/150*28,bmY-bmH/150*50,bmH/150*144,bmH/150*100,96,109); // Left hair
    arc(bmX+bmH/150*26,bmY-bmH/150*50,bmH/150*118,bmH/150*96,70,85); // Right hair
    
    stroke(0, 0, 0);
    fill(0,0,0); // Hat color
    strokeWeight(bmH/150*10); // Line thickness
    line(bmX-bmH/150*32,bmY-bmH/150*40,bmX+bmH/150*31,bmY-bmH/150*39); // Hat Line
    arc(bmX,bmY-bmH/150*41,bmH/150*63,bmH/150*54,-178,0); // Top of Hat
    fill(255,255,255); // Color of hat hole
    arc(bmX,bmY-bmH/150*41,bmH/150*30,bmH/150*32,-178,0); // Hole  in hat
    fill(181, 101, 29); // Hair color
    noStroke();
    arc(bmX,bmY-bmH/150*41,bmH/150*24,bmH/150*14,-178,0); // Hair poking through hat
};

var bitmojiBody = function(bmX,bmY,bmH){
    fill(128,128,128); // Shirt Color
    noStroke();
    quad(bmX-bmH/150*64,bmY+bmH/150*49,bmX+bmH/150*65,bmY+bmH/150*48,bmX,bmY+bmH/150       *131,bmX,bmY+bmH/150*131); // Shirt
    fill(21, 255, 255); // Initials color
    textSize(bmH/150*40); // Initials Size
    text("DL",bmX-bmH/150*27,bmY+bmH/150*90); // Initials Text
};

var drawBitmojiDamien = function(bmX,bmY,bmH){
    bitmojiFace(bmX,bmY,bmH);
    bitmojiHead(bmX,bmY,bmH);
    bitmojiBody(bmX,bmY,bmH);
};

//khan button class with modifications for button color
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

//button variables
var freeDrawButton = new Button({
    x: 133,
    y: 280,
    width:150,
    height:50,
    color1:255,
    color2:134,
    color3:0,
    label: "    Free Draw"
});

var coloringMode = new Button({
    x: 133,
    y: 220,
    width:150,
    height:50,
    color1:255,
    color2:0,
    color3:0,
    label: "Coloring Pages"
});

var helpButton = new Button({
    x: 170,
    y: 340,
    width:81,
    height:50,
    color1:255,
    color2:264,
    color3:0,
    label: "  Help"
});

var nextDrawing = new Button({
    x: 350,
    y: 177,
    width:30,
    height:50,
    color1:255,
    color2:0,
    color3:0,
    label: ">"
});

var confirmDrawingButton = new Button({
    x: 161,
    y: 318,
    width:90,
    height:50,
    color1:255,
    color2:0,
    color3:0,
    label: "Confirm"
});

var thickness3Button = new Button({
    x: 375,
    y: 30,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:255,
    label: " "
});

var thickness6Button = new Button({
    x: 375,
    y: 55,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:255,
    label: " "
});

var thickness9Button = new Button({
    x: 375,
    y: 80,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:255,
    label: " "
});

var thickness15Button = new Button({
    x: 375,
    y: 105,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:255,
    label: " "
});

var blueButton = new Button({
    x: 375,
    y: 130,
    width:60,
    height:20,
    color1:0,
    color2:0,
    color3:255,
    label: " "
});

var lightBlueButton = new Button({
    x: 375,
    y: 155,
    width:60,
    height:20,
    color1:0,
    color2:255,
    color3:255,
    label: " "
});

var redButton = new Button({
    x: 375,
    y: 180,
    width:60,
    height:20,
    color1:255,
    color2:0,
    color3:0,
    label: " "
});

var pinkButton = new Button({
    x: 375,
    y: 205,
    width:60,
    height:20,
    color1:255,
    color2:192,
    color3:203,
    label: " "
});
    
var yellowButton = new Button({
    x: 375,
    y: 230,
    width:60,
    height:20,
    color1:255,
    color2:255,
    color3:0,
    label: " "
});

var orangeButton = new Button({
    x: 375,
    y: 255,
    width:60,
    height:20,
    color1:255,
    color2:165,
    color3:0,
    label: " "
});

var darkGreenButton = new Button({
    x: 375,
    y: 280,
    width:60,
    height:20,
    color1:0,
    color2:128,
    color3:0,
    label: " "
});

var lightGreenButton = new Button({
    x: 375,
    y: 305,
    width:60,
    height:20,
    color1:0,
    color2:255,
    color3:0,
    label: " "
});

var purpleButton = new Button({
    x: 375,
    y: 330,
    width:60,
    height:20,
    color1:238,
    color2:130,
    color3:238,
    label: " "
});

var brownButton = new Button ({
    x: 375,
    y: 355,
    width:60,
    height:20,
    color1:139,
    color2:69,
    color3:19,
    label: " "
});

var blackButton = new Button({
    x: 375,
    y: 380,
    width:60,
    height:20,
    color1:0,
    color2:0,
    color3:0,
    label: " "
});

var homeButton = new Button({
    x: 0,
    y: 0,
    width:90,
    height:29,
    color1:255,
    color2:215,
    color3:0,
    label: "  Home"
});

var eraseButton = new Button({
    x: 90,
    y: 0,
    width:90,
    height:29,
    color1:255,
    color2:182,
    color3:193,
    label: "  Erase"
});

var clearButton = new Button ({
    x: 180,
    y: 0,
    width:90,
    height:29,
    color1:255,
    color2:182,
    color3:193,
    label: "  Clear"
});

var finishButton = new Button ({
    x: 270,
    y: 0,
    width:90,
    height:29,
    color1:255,
    color2:215,
    color3:0,
    label: "  Finish"
    
});

//constructor for ellipses that are being drawn
var Ellipse = function(x,y,color,size){
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
};

Ellipse.prototype.draw = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
};

//stores ellipses that the user draws on the freemode page
var freeModeDrawing = [];

mouseClicked = function() {
    
    if (freeDrawButton.isMouseInside() && currentScene === 0) {
        currentScene = 1;
    }
    if (coloringMode.isMouseInside() && currentScene === 0) {
        currentScene = 2;
    }
    if (helpButton.isMouseInside() && currentScene === 0) {
        currentScene = 7;    
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
    if(thickness3Button.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        ellipseSize = 3;
    }
    if(thickness6Button.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        ellipseSize = 6;
    }
    if(thickness9Button.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        ellipseSize = 9;
    }
    if(thickness15Button.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        ellipseSize = 15;
    }
    if(eraseButton.isMouseInside() && (currentScene === 1 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        currentColor = color(255,255,255);
    }
    if(clearButton.isMouseInside() && currentScene === 1 && coloringState === 1){
        currentScene = 1;
        coloringState = 0;
        freeModeDrawing.splice(0,freeModeDrawing.length);
    }
    if (homeButton.isMouseInside() && (currentScene === 1 || currentScene ===2 || currentScene === 3 || currentScene === 4 || currentScene === 5 || currentScene === 6) && coloringState === 1){
        ellipseSize = 0;
        currentScene = 0;
    }

};

var allColoringButtons = function (){
    thickness3Button.draw();
    thickness6Button.draw();
    thickness9Button.draw();
    thickness15Button.draw();
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
    eraseButton.draw();
    clearButton.draw();
    finishButton.draw();
    homeButton.draw();
    fill(0,0,0);
    ellipse(390,40,3,3);
    ellipse(390,65,6,6);
    ellipse(390,90,9,9);
    ellipse(390,115,15,15);
};

var splashScreen = function(){
    background(107, 233, 255);
    //Grass
    var Grass = function() {
        fill(0, 224, 116);
        noStroke();
        ellipse(110, 345, 305, 217);
        ellipse(260, 405, 396, 217);
        fill(209, 139, 0);
        ellipse(132, 430, 258, 349);
        fill(0, 224, 116);
        ellipse(55, 430, 258, 349);
        ellipse(208, 540, 513, 337);
        fill(255, 213, 0);
    };
        
    //Sun
    var Sun = function (){
        stroke(255, 162, 0);
        strokeWeight(3);
        ellipse(398, -1, 200, 200);
        fill(0, 0, 0);
    //Sun rays
        line(283, 21, 223, 43);
        line(312, 65, 260, 117);
        line(362, 108, 350, 151);
    };
    //Butterfly
    var Butterfly = function(x, y, size) {
        noStroke();
        fill(251, 184, 255);
        ellipse(x+(size/100*35), y+(size/100*95), size/100*40, size/100*40);
        ellipse(x+(size/100*70), y+(size/100*95), size/100*40, size/100*40);
        ellipse(x+(size/100*70), y+(size/100*124), size/100*35, size/100*35);
        ellipse(x+(size/100*35), y+(size/100*124), size/100*35, size/100*35);
        fill(112, 52, 0);
        ellipse(x+(size/100*52), y+(size/100*113), size/100*13, size/100*50);
        //Butterfly's Eyes
            fill(255, 255, 255);
            ellipse(x+(size/100*57), y+(size/100*91), 9, 9);
            ellipse(x+(size/100*47), y+(size/100*91), 9, 9);
            fill(0, 0, 0);
            ellipse(x+(size/100*57), y+(size/100*91), 4, 5);
            ellipse(x+(size/100*47), y+(size/100*91), 4, 5);
    };
    Butterfly(125, 99, 80);
    Butterfly(50, 214, 53);
    Butterfly(293, 166, 53);
    
    
    
    //Title border
    var Title = function() {
        fill(255, 255, 255);
        noStroke();
        quad(25, 45, 50, 80, 355, 80, 374, 45); 
        quad(25, 120, 50, 80, 355, 80, 374, 120); 
    //Title
        fill(0, 0, 0);
        textSize(46);
        text("Coloring Book", 60, 53);
    };
    //Calling functions
    Grass();
    Sun();
    Title();
    drawBitmojiDamien(367, 257, 81);
    drawBitmojiEvan(60, 346, 48);

    //calling buttons
    strokeWeight(1);
    stroke(0,0,0);
    freeDrawButton.draw();
    coloringMode.draw();
    helpButton.draw();
};

var freeModeScreen = function(){
    background(255,255,255);
    stroke(0,0,0);
    allColoringButtons();
    fill(255,255,255);
    rect(0,30,375,369);
};

var helpScreen = function(){
      background(16, 53, 163);
        //About Me
      fill(255, 255, 255);
       rect(20, 20, 362, 168);
      fill(0, 0, 0);
      textSize(30);
      text("About our app", 103, 21);
      textSize(18);
      text("       This is a drawing app created by \n                  Evan and Damien. \nIt features a free draw and a coloring mode. \n The program will also save your progress!! \n            Start drawing by selecting a \n                  brush size and color.", 29, 55);
     
      //Free Draw Mode
      fill(255, 255, 255);
      rect(20, 198, 168, 173);
      fill(0, 0, 0);
      textSize(25);
      text("FreeDraw", 54, 200);
      textSize(15);
      text("         In this mode \n you can draw whatever \n    your heart desires!\n      There are many \n   colors to select from.\n You also have 3 brush\n   sizes to choose from", 24, 237);
      //Coloring mode
        fill(255, 255, 255);
        rect(207, 197, 168, 173);
        fill(0, 0, 0);
        textSize(25);
        text("Color Mode", 228, 200);
        textSize(15);
        text("         In this mode \n     you can choose\n from the various images \n    we have provided.\n Your colorings will also \n be saved if you choose \n to color another picture.     ", 209, 237);
};

var coloringBookSelect = function(){
    background(255, 255, 255);
    textSize(21);
    text("Select what you would like to draw! ", 43, 36);
    nextDrawing.draw();
    confirmDrawingButton.draw();
    homeButton.draw();
    
};


draw = function() {
    //draws the initial splash screen/home screen
    if(currentScene === 0){
        splashScreen();
        coloringState = 0;
    }
    if(currentScene === 7){
        helpScreen();
        coloringState = 0;
    }
    //draws the coloring book select screen
    if(currentScene === 2){
        coloringBookSelect();
        coloringState = 0;
    }
    //creates the freemode screen
    if(currentScene === 1 && coloringState === 0){
        coloringState = 1;
        freeModeScreen();
        //draws anything the user did not delete previously in the freemode section
        for(var i = 0; i < freeModeDrawing.length; ++i){
            freeModeDrawing[i].draw();
        }
    }
    //draws/erases in the drawing box 
    if (mouseIsPressed && coloringState === 1 && currentScene === 1 && mouseX < 375 && mouseX > 0 && mouseY < 400 && mouseY > 34){
        noStroke();
        fill(currentColor);
        ellipse(mouseX,mouseY,ellipseSize,ellipseSize);
        //pushes in every ellipse drawn into the freeMode save array  
        for(var i = 0; i < 1; i++){
            freeModeDrawing.push(new Ellipse(mouseX,mouseY,currentColor,ellipseSize));
            
        }
    }
};
