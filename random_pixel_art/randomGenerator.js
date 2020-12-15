class RandomGenerator {
  constructor(grids,chance) {
    this.grids = grids;
    this.chance = chance;
  }

  generate() {
    for (var g = 0; g < this.grids.length; g++) {
      this.grids[g].clearGrid();
      var c = this.grids[g].chance;
      var xAmount = this.grids[g].xAmount;
      var yAmount = this.grids[g].yAmount;
      for (var i = 0; i < xAmount; i++) {
        for (var j = 0; j < yAmount; j++) {
          if(Math.random() < c) {
            this.grids[g].addPixel(i,j);
          }
        }
      }
    }
  }

}
