function merge(arr1, arr2) {
  let [idx1, idx2] = [0, 0];
  let arr = [];

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]){
      arr.push(arr1[idx1]);
      idx1++;
    } else {
      arr.push(arr2[idx2]);
      idx2++;
    }
  }
  const arrOther = idx1===arr1.length ? 
              arr2.slice(idx2) 
              : arr1.slice(idx1);
  return [...arr, ...arrOther];
}

function mergeSort(arr) {
  if (arr.length<=1) return arr;

  const mid = Math.floor(arr.length/2);
  let [arr1, arr2] = [arr.slice(0,mid), arr.slice(mid)];
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  
  return merge(arr1,arr2);
}

module.exports = { merge, mergeSort};