var Rectangle = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

// Check if an x,y coordinate is inside the rectangle
Rectangle.prototype.isHitBy = function(x, y) {

  // If x or y are within the rectangle bounds, 
  // point is in the rectangle.
  return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
}

var rectangle = new Rectangle(660, 360, 160, 160);