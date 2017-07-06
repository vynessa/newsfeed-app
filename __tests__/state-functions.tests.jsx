const expect = require('expect');

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('knows that 2 and 5 make 7', () => {
    expect(2 + 5).toBe(7);
  });
});
