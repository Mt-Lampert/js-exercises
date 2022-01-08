function sumOfPositives() {
  const myNumbers = [1, -4, 12, 0, -3, 29, -150];
  let result = myNumbers.reduce((currentResult, element) => {
    if (element > 0) {
      return currentResult + element;
    }
    // implicit else
    return currentResult;
  }, 0);
  return result;
}


function filteredPositives() {
  const myNumbers = [1, -4, 12, 0, -3, 29, -150];
  const result = myNumbers.filter(el => el > 0);
  return result;  
}


function sumOfFilteredPositives() {
  const myNumbers = [1, -4, 12, 0, -3, 29, -150];
  let result = myNumbers
    // alle Elemente > 0 herausfiltern
    .filter((element) => element > 0)
    // die gefilterten Elemente addieren
    .reduce((currentResult, element) => currentResult + element, 0);
  return result;
}

module.exports = {
  sumOfPositives,
  filteredPositives,
  sumOfFilteredPositives
};
