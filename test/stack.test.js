const assert = require('assert');
const Stack = require('../model/stack');

describe('Perform stack operations', () => {
    var stack;
    before(() => {
        stack = new Stack(3);
    });

    after(() => {
        delete stack;
    });

    it('should push 3 items to stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assert.equal(3, stack.display().length);
    });
    it('should return false as stack is overflowed', () => {
        var val = stack.push(4);
        assert.equal(false, val);
    });
    it('should pop num 3 from the stack', () => {
        var val = stack.pop();
        assert.equal(3, val);
    });
    it('should pop num 2 from the stack', () => {
        var val = stack.pop();
        assert.equal(2, val);
    });
    it('should pop num 1 from the stack', () => {
        var val = stack.pop();
        assert.equal(1, val);
    });
    it('should return null as stack is empty', () => {
        var val = stack.pop();
        assert.equal(null, val);
    });
});