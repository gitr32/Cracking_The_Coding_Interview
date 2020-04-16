const sortedSearchNoSize = (arr, target) => {
  let index = 1;
  const multiplier = 2;
  while (elementAt(arr, index * multiplier) && elementAt(arr, index * multiplier) < target) {
    index++;
  }

  index++;

  let left = 0;
  let right = index * multiplier;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (elementAt(arr, mid) === target) {
      return mid;
    }

    console.log(left, right, mid);
    if (!elementAt(arr, mid)) {
      right = mid - 1;
    } else if (elementAt(arr, mid) < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

function elementAt(arr, i) {
  return arr[i];
}

const arr = [1, 3, 4, 6, 7, 9, 10, 11];
const target = 7;

console.log(sortedSearchNoSize(arr, target));