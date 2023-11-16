/* filename: complex_code.js */

// This code demonstrates a complex implementation of a sorting algorithm
// It uses the Merge Sort algorithm to sort an array of numbers in ascending order

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

const unsortedArray = [5, 3, 8, 1, 2, 9, 4, 7, 6];
const sortedArray = mergeSort(unsortedArray);

console.log('Sorted Array:', sortedArray);

// The code above implements the Merge Sort algorithm, which is a divide and conquer algorithm
// It sorts an array of numbers by dividing it into smaller arrays, sorting them individually
// and then merging them back together in the correct order

// The mergeSort function is a recursive function that splits the array into two halves
// and calls itself on each half until the base case (i.e., the array length is <= 1) is reached
// It then merges the sorted halves back together using the merge function

// The merge function takes two sorted arrays and compares their elements one by one
// It pushes the smaller element into a result array and removes it from the original array
// This process continues until one of the arrays is empty
// Finally, it concatenates the result array with the remaining elements of both arrays and returns the sorted result

// In the example above, an unsortedArray is provided and passed to the mergeSort function
// The sorted result is then logged to the console: [1, 2, 3, 4, 5, 6, 7, 8, 9]