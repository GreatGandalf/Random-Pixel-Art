class Mirror {
  constructor(grids) {
    this.grids = grids;
  }

  horizontaly() {
    for (var g = 0; g < this.grids.length; g++) {
      var xAmount = this.grids[g].xAmount;
      var yAmount = this.grids[g].yAmount;
      var pixelGrid = this.grids[g].pixelGrid;
      var maxX = Math.floor(this.grids[g].xAmount/2);
      for (var i = 0; i < maxX; i++) {
        for (var j = 0; j < pixelGrid[i].length; j++) {
          pixelGrid[yAmount-1-i][j] = pixelGrid[i][j];
        }
      }
    }
  }

  vertically() {

  }
}
