class Circle {
    constructor() {
      this.color = 'black'; // Set default color to 'black'
    }
  
    // Set the color of the Circle
    setColor(color) {
      this.color = color;
    }
  
    // Render the SVG for the Circle
    render() {
      return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;
