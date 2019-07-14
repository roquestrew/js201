// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

// chaining methods: split into array, reverse array, and join array back into string

function reverse(string) {
    return string.split('').reverse().join('')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

// chaining again: splitting into array, using sort method to sort array items by length, returning first array item

function findLongestWord(sentence) {
    return (sentence.split(' ').sort( function(a,b) { return b.length - a.length }))[0]
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// create array of words
// replace words using regex that joins array with pipes
// replace extra spaces

function nicer(dirtySentence) {
    let forbiddenWords = ['heck', 'darn', 'dang', 'crappy']
    let forbiddenRegex = new RegExp(forbiddenWords.join('|'), 'g')
    let sentenceWithSpace = dirtySentence.replace(forbiddenRegex, '');
    let cleanSentence =  sentenceWithSpace.replace(/\s\s+/g,' ');
    return cleanSentence;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

// console.log("sentenceArray[" + i + "]: " + capitalizedArray[i])
// console.log("word: " + word)
// console.log("sentenceArray[" + i + "]: " + capitalizedArray[i])
// console.log("word.charAt(0).toUpperCase(): " + word.charAt(0).toUpperCase())
// console.log("word.slice(1): " + word.slice(1))
// console.log("~~~~~~~~~~~~~~~~~~~")
        

function capitalizeAll (sentence) {

    var sentenceArray = sentence.split(' ')
	var capitalizedArray = []

    sentenceArray.forEach( (word, i) => {
		capitalizedArray[i] = word.charAt(0).toUpperCase() + word.substring(1)
    }) 

    return capitalizedArray.join(' ')

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// Example 1 by Amanda
// see MDN String for methods
// approaches: FOR loop, WHILE loop, REGEX

// function split(string, delimiter){
//     var results = []
//     var delimiterLength = delimiter.length
//     for(var index=0; index < string.length; index++) {
//         let characters == string.substr(index, delimiterLength)
//         // let chunkStart = 
//         // let chunkEnd
//         // console.log(characters, index)
//         if (character === delimiter) {
//             console.log(string.substr(0, index))
//         }
//     }
// }

function split(string,delimiter){

    var splitArray = []

    // Loop while a delimiter can be found
	while((delimiterNext = string.indexOf(delimiter)) > 0 ){
	//	console.log("Adding next item",string.slice(0,delimiterNext))
		splitArray.push(string.slice(0,delimiterNext))
        string = string.slice(delimiterNext + delimiter.length)

    }

    // No delimiter found, so add remaining string to splitArray
	// console.log("Adding final item", string)
	splitArray.push(string)

    return splitArray
}

console.log(split('a-b-c', '-')) // --> ['a', 'b', 'c']
console.log(split('APPLExxBANANAxxCHERRYxxBLUE', 'xx')) // --> ['APPLE', 'BANANA', 'CHERRY']
console.log(split('xyz', 'r')) // --> ['xyz']






