const drinks = [
  { name: "coffee", price: 2.49 },
  { name: "lemonade", price: 3.99 },
  { name: "lime", price: 2.99 },
];

/**
 * Sortiert die Drinks nach ihrem Preis
 * 
 * @returns das sortierte 'drinks'-Array
 */
function sortDrinksByPrice() {
  drinks.sort((previous, next) => {
    if (previous.price > next.price) return 1;
    else if (previous.price < next.price) return -1;

    // implicit else
    return 0;
  });
  return drinks;
}

/**
 * Sortiert die Drinks nach ihrem Namen
 * 
 * @returns das sortierte 'drinks'-Array
 */
 function sortDrinksByName() {
    drinks.sort((previous, next) => {
      if (previous.name > next.name) return 1;
      else if (previous.name < next.name) return -1;
  
      // implicit else
      return 0;
    });
    return drinks;
  }

module.exports = {
  sortDrinksByPrice,
  sortDrinksByName
};
