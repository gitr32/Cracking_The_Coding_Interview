const sortedMerge = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[0]) {
      arr1.splice(i, 0, arr2.shift())
    }
  }

  if (arr2.length > 0) {
    return arr1.concat(arr2)
  }

  return arr1;
}


const arrToMerge = [0, 3, 5, 8, 9, 10]
const arrToBeMerged = [0, 4, 6, 8]

console.log(sortedMerge(arrToMerge, arrToBeMerged));