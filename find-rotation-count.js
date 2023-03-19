function findRotationCount(array, low = 0, high = array.length - 1) {
    if (high === low) return low;
    if (high < low) return 0;
    let middle = Math.floor((low + high) / 2)

    if (array[high] > array[middle]) {
        return findRotationCount(array, low, middle - 1);
    }

    if (middle > low && array[middle] < array[middle - 1]) {
        return middle;
    }
  
    if (middle < high && array[middle + 1] < array[middle]) {
      return middle + 1;
    }
  
    return findRotationCount(array, middle + 1, high);
}
  
module.exports = findRotationCount