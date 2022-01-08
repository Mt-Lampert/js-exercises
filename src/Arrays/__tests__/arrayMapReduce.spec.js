const mr = require("../arrayMapReduce");

describe('Array.prototype.reduce', () => {
    it('sums up only the positive numbers', () => {
        expect(mr.sumOfPositives()).toBe(42);
    });

    it('filters the positive numbers and sums them up', () => {
        expect(mr.sumOfFilteredPositives()).toBe(42);
    });
})
