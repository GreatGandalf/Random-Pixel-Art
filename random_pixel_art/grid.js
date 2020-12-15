class Grid {
  constructor(x,y,width,height,xAmount,yAmount,color,chance) {
    this.x = x;
    this.y = y;
    this.width = width;
		this.height = height;
    this.xAmount = xAmount;
    this.yAmount = yAmount;
    this.pixelWidth = width/xAmount;
    this.pixelHeight = height/yAmount;
    this.pixelGrid = [];
    this.color = color;
    this.chance = chance;
    this.fillPercentage = 0;
    this.clearGrid();
  }

  show() {
    fill(44, 58, 73);
    rect(this.x, this.y, this.width, this.height);
    this.showPixels();
    this.showText();
  }

  showPixels() {
    fill(this.color);
    for (var i = 0; i < this.pixelGrid.length; i++) {
      for (var j = 0; j < this.pixelGrid[i].length; j++) {
        if(this.pixelGrid[i][j] === 1) {
          rect(this.x+i*this.pixelWidth, this.y+j*this.pixelHeight, this.pixelWidth, this.pixelHeight);
        }
      }
    }
  }

  showText() {
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(236, 240, 241);
    this.calcPercentage();
    text(Math.floor(this.chance*100)/100 + " - " + Math.round(this.fillPercentage*1000)/1000, this.x+this.width/2, this.y-15);
  }

  calcPercentage() {
    this.fillPercentage = 0;
    var pixels = this.xAmount*this.yAmount;
    for (var i = 0; i < this.pixelGrid.length; i++) {
      for (var j = 0; j < this.pixelGrid[i].length; j++) {
        if(this.pixelGrid[i][j] === 1) {
          this.fillPercentage += 1/pixels;
        }
      }
    }
  }

  addPixel(x,y) {
    if(x < this.xAmount && y < this.yAmount) {
      this.pixelGrid[x][y] = 1;
    }
  }

  removePixel(x,y) {
    if(x < this.xAmount && y < this.yAmount) {
      this.pixelGrid[x][y] = 0;
    }
  }

  clearGrid() {
    this.grid = [];
    for (var i = 0; i < this.xAmount; i++) {
      this.row = [];
      for (var j = 0; j < this.yAmount; j++) {
        this.row.push(0);
      }
      this.grid.push(this.row);
    }
    this.pixelGrid = this.grid;
  }
}
