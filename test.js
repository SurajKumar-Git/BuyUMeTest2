function rotateArray(arr, k) {
  let n = arr.length;
  for (let i = k % n, j = 0; j < n; i++, j++) {
    console.log(arr[i % n]);
  }
}

rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
