// FIBONACCI

//recursive
// const stored = [];
// function fibArray(num) {
//   console.log("this was printed recursively");
//   if (num === 0) {
//     return stored.push(fib(num));
//   }
//   function fib(n) {
//     if (n < 2) {
//       return n;
//     }
//     return fib(n - 1) + fib(n - 2);
//   }
//   stored.push(fib(num));
//   return fibArray(num - 1);
// }

// fibArray(7);
// console.log(stored);

// // iterative
// function fibLoop(n) {
//   let fibArray = [];
//   let f1 = 0;
//   let f2 = 1;
//   let sum = 0;

//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       fibArray.push(0);
//     } else if (i === 1) {
//       newN = 1;
//       fibArray.push(1);
//     } else {
//       sum = f2 + f1;
//       fibArray.push(sum);
//       f1 = f2;
//       f2 = sum;
//     }
//   }
//   console.log(fibArray);
// }

// fibLoop(7);

// MERGE SORT

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] === right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numsArray = [3, 2, 1, 13, 8, 5, 0, 1, 10];

const mergeSorted = mergeSort(numsArray);
console.log(mergeSorted);
