function findFloor(array, number, low = 0, high = array.length - 1) {
    if (low > high) return -1;
    if (number >= array[high]) return array[high];
    let middle = Math.floor((low + high) / 2)

    if (middle > 0 && array[middle - 1] <= number && number < array[middle]) {
        return array[middle - 1];
    }

    if (number < array[middle]) {
        return findFloor(array, number, low, middle - 1);
    }
  
    if (array[middle] === number) {
        return array[middle];
    }

    return findFloor(array, number, middle + 1, high)
}
  
module.exports = findFloor