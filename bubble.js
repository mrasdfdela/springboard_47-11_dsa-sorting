function bubbleSort(arr) {
  let sorted;
  let iterations = 0;
  do {
    sorted = true;
    for (let i = 0; i < arr.length - iterations; i++) {
      if (arr[i] > arr[i+1]) {
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
        sorted = false;
      };
    }
    iterations++;
  } while (sorted===false);
  return arr;
}

module.exports = bubbleSort;