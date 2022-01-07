const b = require("../jestTest.js");

describe('baseOfBase', () => {
    it('returns the perfect answer', () => {
        expect(b.baseOfBase()).toBe(42);
    });

    it.todo('returns another answer')
});