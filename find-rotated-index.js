function findRotatedIndex(array, number) {
    var pivot = findPivot(array)
    if (pivot > 0 && number >= array[0] && number <= array[pivot - 1]) {
      return search(array, number, 0, pivot - 1);
    } else {
      return search(array, number, pivot, array.length - 1);
    }
}
  
  
function findPivot(array) {
    if (array.length === 1 || array[0] < array[array.length - 1]) return 0;
    var front = 0
    var end = array.length - 1;
    while (front <= end) {
      var middle = Math.floor((front + end) / 2);
      if (array[middle] > array[middle + 1]) return middle + 1
      else if (array[front] <= array[middle]) {
        front = middle + 1
      } else {
        end = middle - 1
      }
    }
}

function search(array, number, begin, end) {
    if (array.length === 0) return -1;
    if (number < array[begin] || number > array[end]) return -1;
  
    while (begin <= end) {
      var middle = Math.floor((begin + end) / 2);
      if (array[middle] === number) {
        return middle;
      } else if (number < array[middle]) {
        end = middle - 1;
      } else {
        begin = middle + 1;
      }
    }
    return -1;
}
  
module.exports = findRotatedIndex