const assert = require('assert');
const expect = require('chai').expect;

require('../index');

describe('filterMap', () => {
  it('should be added to the array prototype', () => {
    expect(Array.prototype.filterMap).to.not.be.undefined;
  });
  it('should return an array', () => {
    const arr = [1, 2, 3].filterMap(x => x, x => true);
    assert(Array.isArray(arr));
  });
  it('should map each item of array', () => {
    const arr = [1, 2, 3].filterMap(x => x * 2, x => true);
    expect(arr).to.have.members([2, 4, 6]);
  });
  it('should filter values', () => {
    const arr = [1, 2, 3].filterMap(x => x, x => false);
    expect(arr).to.be.empty;
    const arr2 = [1, 2, 3].filterMap(x => x, x => x > 2);
    expect(arr2).to.have.members([3]);
  });
  it('should filter then map by default', () => {
    const arr = [1, 2, 3].filterMap(x => x * 2, x => x < 3);
    expect(arr).to.have.members([2, 4]);
  });
  it('should map then filter if leading set to false', () => {
    const arr = [1, 2, 3].filterMap(x => x * 2, x => x > 2, false);
    expect(arr).to.have.members([4, 6]);
  });
});

describe('everything', () => {
  it('is wonderful', () => {
    assert(true)
  })
})
