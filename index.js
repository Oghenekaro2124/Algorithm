// const numbers = [10, 2, 3, 4, 2, 1, 9, 8, 5,7];
// const letters = ["b", "q", "d", "s", "j", "a", "l", "n", "i", "j"];

// // inbuilt sort method on array
// const sortedNumbers = numbers.sort ((a, b) => b-a);
// const sortedLetters = letters.sort();
// console.log(sortedNumbers);
// console.log(sortedLetters);


/** 
 * An algorithm that reads a sentence character by character and determines its length:
*/

function sentenceLength(sentence) {
    let length = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      length++;
    }
  
    return length;
  }

  // Example usage:
// const Sentence = "This is a sample sentence.";
// const length = sentenceLength(Sentence);
// console.log("Sentence length:", length);


  /**
   * An algorithm that determines The number of words in the sentence assuming that the words are separated
   *  by a single space
   */

  function countWords(sentence) {
    let wordCount = 0;
    let isWord = false;
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      if (char   
   === ' ') {
        if (isWord) {
          wordCount++;
          isWord = false;
        }
      } else {
        if (!isWord) {
          isWord = true;
        }
      }
    }
  
    if (isWord) {
      wordCount++;
    }
  
    return wordCount;
  }

// Example usage

//   const sentence = "This is a sample sentence.";
// const wordCount = countWords(sentence);
// console.log("Number of words:", wordCount);


/**
 * An alogrithm that determines The number of vowels in the sentence.
 */

function countVowels(sentence) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage:
// const sentence = "This is a sample sentence.";
// const vowelCount = countVowels(sentence);
// console.log("Number of vowels:", vowelCount);

// Using three variables as counters , making the last character a point , tretaing each character seperately

function analyzeSentence(sentence) {
  // Initialize counters
  let lengthCounter = 0;
  let wordCounter = 1;  // Start with 1 assuming the sentence has at least one word
  let vowelCounter = 0;

  // Define vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  // Process each character in the sentence except the last character (the period)
  for (let i = 0; i < sentence.length - 1; i++) {
      let char = sentence[i];

      // Increment the length counter for every character
      lengthCounter++;
      
      // Increment word count when a space is encountered
      if (char === ' ') {
          wordCounter++;
      }

      // Check if the character is a vowel
      if (vowels.has(char)) {
          vowelCounter++;
      }
  }

  // Output the results
  console.log(`Length: ${lengthCounter} characters`);
  console.log(`Words: ${wordCounter}`);
  console.log(`Vowels: ${vowelCounter}`);
}
