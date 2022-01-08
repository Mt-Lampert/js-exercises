const as = require("../arraySorting.js");

describe("Array Sorting", () => {
  it("sorts drinks by price", () => {
    const result = as.sortDrinksByPrice();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toBe("coffee");
    expect(result[1].name).toBe("lime");
    expect(result[2].name).toBe("lemonade");
  });

  it("sorts drinks by name", () => {
    const result = as.sortDrinksByName();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name).toBe("coffee");
    expect(result[1].name).toBe("lemonade");
    expect(result[2].name).toBe("lime");
  });
});
