/* You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
E.g. 
N = 10, K = 3
Arr = [1,2,3,4,5,6,7,8,9,10]
after K rotations
Arr = [4,5,6,7,8,9,10,1,2,3]

NOTE:
Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.
You can use any editor of your choice.
*/

function rotateArray(arr, k) {
  let n = arr.length;
  for (let i = k % n, j = 0; j < n; i++, j++) {
    console.log(arr[i % n]);
  }
}

rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
