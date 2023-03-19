function countZeroes(array) {
  let zero = findZero(array)
  if (zero === -1) return 0;
  return array.length - zero
}

function findZero(array, low = 0, high = array.length - 1) {
  if (high >= low) {
    let middle = low + Math.floor((high - low) / 2)
    if ((middle === 0 || array[middle - 1] === 1) && array[middle] === 0) {
      return middle;
    } else if (array[middle] === 1) {
      return findZero(array, middle + 1, high)
    }
    return findZero(array, low, middle - 1)
  }
  return -1;
}

module.exports = countZeroes