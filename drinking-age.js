// Checks the given age to see whether it's legal to drink in the US or not.
// Returns true if the age is 21 years or older. Otherwise, returns false.
let result;
let age = 21;
function checkDrinkingAge(age) {
  // TODO: Implement this function.
  if (age >= 21) {
    return 'true';
  } else {
    return 'false';
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkDrinkingAge,
};
