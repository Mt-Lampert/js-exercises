const mr = require("../arrayMapReduce");

describe('Array.prototype.reduce', () => {
    it('sums up only the positive numbers', () => {
        expect(mr.sumOfPositives()).isEqual(42);
    });

    it('filters all positive numbers', () => {
        expect(mr.filteredPositives().length).toEqual(3);
    });

    it('filters the positive numbers and sums them up', () => {
        expect(mr.sumOfFilteredPositives()).isEqual(42);
    });
})
