// 1 st variant to creat 2-D array
const M = 3, N = 4;

let arr = new Array(M);            // create empty 1-d array 
for (let i = 0; i < M; i++) {
    arr[i] = new Array(N);        // make very element array
}
 
console.log(arr);
// calculate sum of elements using reduce function

let res = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(res);
