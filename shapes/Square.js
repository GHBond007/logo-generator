class Square {
    constructor() {
      this.color = 'black'; // Set default color to 'black'
    }
  
    // Set the color of the Square
    setColor(color) {
      this.color = color;
    }
  
    // Render the SVG for the Square
    render() {
      return `<rect width="80" height="80" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;
