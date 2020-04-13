function quickSort(arr, left = 0, right = arr.length - 1) {
  const index = partition(arr, left, right);
  console.log(left, right, index);
  if (left < index - 1) {
    quickSort(arr, left, index - 1)
  }

  if (index < right) {
    quickSort(arr, index, right);
  }
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let currentLeft = left;
  let currentRight = right;
  console.log(`Partition: ${currentLeft}: ${currentRight}`);
  while (currentLeft <= currentRight) {
    while (arr[currentLeft] < pivot) {
      currentLeft += 1;
    }

    while (arr[currentRight] > pivot) {
      currentRight -= 1;
    }

    console.log(`${currentLeft}, ${currentRight}`)

    if (currentLeft <= currentRight) {
      swap(arr, currentLeft, currentRight);
      currentRight -= 1;
      currentLeft += 1;
    }
  }

  return currentLeft;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}


const arr = [0, 9, 3, 5, 3];
quickSort(arr);
console.log(arr);