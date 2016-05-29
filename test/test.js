// chai assertion reference: http://chaijs.com/api/assert/

var assert = require('chai').assert;
//var BlackTriangle = require('../src/components/BlackTriangle.js');


describe('Units under test', function() {

  it('Should do the right thing', function () {
    assert.equal(-1, [1,2,3].indexOf(5));
  });

  it('Should work with ES6 features', function() {
    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    var result = [...myIterable];   // [1, 2, 3]
    assert.equal(result[1], 2);
  });

});