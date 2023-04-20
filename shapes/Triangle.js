class Triangle {
    constructor() {
      this.color = 'black'; // Set default color to 'black'
    }
  
    // Set the color of the Triangle
    setColor(color) {
      this.color = color;
    }
  
    // Render the SVG for the Triangle
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  module.exports = Triangle;
