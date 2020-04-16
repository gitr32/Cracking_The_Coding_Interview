const modifiedBinarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[right] < arr[left] && (target > arr[right] || arr[mid - 1] > target)) {
      right = mid - 1;
    } else {
      if (target <= arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

const input = [23, 25, 1, 2, 3, 4, 5, 7, 8, 9, 14, 15, 16, 18, 19];
const target = 19;
console.log(modifiedBinarySearch(input, target));