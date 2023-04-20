const Circle = require('../shapes/Circle');


describe('Circle', () => {
  test('setColor and render methods', () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="red" />');
  });
});
