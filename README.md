# Sentence Analysis Algorithms

This project contains several JavaScript functions for analyzing properties of sentences, such as their length, number of words, and number of vowels. The key functions implemented are:

- `sentenceLength(sentence)`: Calculates the length of a sentence character by character.
- `countWords(sentence)`: Determines the number of words in a sentence, assuming words are separated by a single space.
- `countVowels(sentence)`: Counts the number of vowels in a given sentence.
- `analyzeSentence(sentence)`: Analyzes a sentence to determine its length, word count, and number of vowels using three counters.

## Features

- Character by character analysis for accurate results.
- Functions to:
  - Count the number of characters in a sentence.
  - Count the number of words (assuming words are separated by single spaces).
  - Count the number of vowels.
  - Use multiple counters for simultaneous analysis.

## Algorithms

### 1. Sentence Length

The `sentenceLength(sentence)` function reads each character of the sentence and determines its length.

````javascript
function sentenceLength(sentence) {
  let length = 0;

  for (let i = 0; i < sentence.length; i++) {
    length++;
  }

  return length;
}


# For the work.js

# Insertion Sort Algorithm is used

This repository contains a JavaScript implementation of the **Insertion Sort** algorithm. Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms like quicksort or mergesort but has the advantage of simplicity.

## Features

- Sorts an array of numbers in ascending order.
- Implements the Insertion Sort algorithm, which has an average time complexity of O(n²).
- Works in-place, requiring only O(1) additional space.

## How It Works

Insertion Sort works by dividing the array into a sorted and an unsorted part. It iteratively takes elements from the unsorted part and places them in the correct position in the sorted part. This is done by comparing the current element (`key`) with each element in the sorted part and shifting them until the correct position is found.

## Algorithm

The algorithm iterates over the array starting from the second element, and for each element:
1. Stores the current value (`key`) that needs to be sorted.
2. Compares it with all previous elements to find its correct position.
3. Inserts the element into its correct position.

Here is the JavaScript implementation:

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than key, to one position ahead
    // of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place key in its correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);


````
