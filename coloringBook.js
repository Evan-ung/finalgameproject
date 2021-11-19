var currentScene = 0; // 0 = splash, 1 = freemode, 2 = coloring book select, 3-... = coloring book options
var currentColor = color(255,255,255);
var buttonColor = color(255,255,255);

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
    x: 133,
    y: 300,
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
    background(107, 233, 255);
    //Grass
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
        
    //Sun
        stroke(255, 162, 0);
        strokeWeight(3);
        ellipse(398, -1, 200, 200);
        fill(0, 0, 0);
    //Sun rays
        line(283, 21, 223, 43);
        line(312, 65, 260, 117);
        line(362, 108, 350, 151);
    //Butterfly
    var Butterfly = function(x, y, size) {
        noStroke();
        fill(251, 184, 255);
        ellipse(x+(size/100*35), y+(size/100*95), size/100*40, size/100*40);
        ellipse(x+(size/100*70), y+(size/100*95), size/100*40, size/100*40);
        ellipse(x+(size/100*69), y+(size/100*124), size/100*35, size/100*35);
        ellipse(x+(size/100*21), y+(size/100*124), size/100/35, size/100*35);
        fill(112, 52, 0);
        ellipse(x+(size/100*52), y+(size/100*113), size/100*13, size/100*50);
        //Butterfly's Eyes
            fill(255, 255, 255);
            ellipse(x+57, y+91, 9, 9);
            ellipse(x+47, y+91, 9, 9);
            fill(0, 0, 0);
            ellipse(x+57, y+91, 4, 5);
            ellipse(x+47, y+91, 4, 5);
    };
    Butterfly(164, 89, 100);
    //Title border
        fill(255, 255, 255);
        noStroke();
        quad(25, 45, 50, 80, 355, 80, 374, 45); 
        quad(25, 120, 50, 80, 355, 80, 374, 120); 
    //Title
        fill(0, 0, 0);
        textSize(46);
        text("Coloring Book", 60, 51);
        drawBitmojiDamien(367, 257, 81);
        drawBitmojiEvan(60, 346, 48);
        freeDrawButton.draw();
};


draw = function() {
    if(currentScene === 0){
        splashScreen();
    }
};
