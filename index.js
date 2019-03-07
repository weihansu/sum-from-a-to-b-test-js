
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN
  }
  return sum(fromN + 1, toN) + fromN
}

module.exports = sum;


// fromN + fromN(+1)
