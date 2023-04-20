const Square = require('../shapes/Square');


describe('Square', () => {
  test('setColor and render methods', () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual('<rect width="80" height="80" fill="green" />');
  });
});
