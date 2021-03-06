// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0, arr2.length);
  newArr.splice(n, 0, ...arr1);
  console.log(newArr);
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//return [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1) 
//return ["a", 1, 2, "b"]