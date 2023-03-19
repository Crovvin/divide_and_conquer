function sortedFrequency(array, number) {
    let first = findFirst(array, number);
    if (first == -1) return first;
    let last = findLast(array, number);
    return last - first + 1;
}
  
function findFirst(array, number, low = 0, high = array.length - 1) {
    if (high >= low) {
      let middle = Math.floor((low + high) / 2)
      if ((middle === 0 || number > array[middle - 1]) && array[middle] === number) {
        return middle;
      } else if (number > array[middle]) {
        return findFirst(array, number, middle + 1, high)
      } else {
        return findFirst(array, number, low, middle - 1)
      }
    }
    return -1
}
  
function findLast(array, number, low = 0, high = array.length - 1) {
    if (high >= low) {
      let middle = Math.floor((low + high) / 2)
      if ((middle === array.length - 1 || number < array[middle + 1]) && array[middle] === number) {
        return middle;
      } else if (number < array[middle]) {
        return findLast(array, number, low, middle - 1)
      } else {
        return findLast(array, number, middle + 1, high)
      }
    }
    return -1
}
  
module.exports = sortedFrequency