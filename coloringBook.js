var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};


var btn1 = new Button({
    x: 100,
    y: 100,
    width:60,
    height:20,
    label: "Please click!"
});
btn1.draw();
mouseClicked = function() {
    if (btn1.isMouseInside()) {
        println("You made the right choice!");
    }
};
