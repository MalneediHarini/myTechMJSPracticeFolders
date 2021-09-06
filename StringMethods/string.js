// //String Property : length
var str = 'Good Morning';
        // 01234567891011
console.log('The Length of String = ' + str.length);


// //String Methods

// //toLowerCase()
console.log("Lowercase = " + str.toLowerCase());


// //toUpperCase()
console.log('UPPER CASE = ' + str.toLocaleUpperCase());


// //charAt(position)
console.log('The Character at one = ' + str.charAt(2)); //e
console.log('The Character is = ' + str.charAt(5));


// //indexOf(searchstring, position)
// //o.e finding string in a string
// //string starting from the given position and returns the position
// //where the match was found
console.log('The Index is = ' + str.indexOf('World'q));  
console.log('The Index is = ' + str.indexOf('world')); // -1 not found, the search is case sensitive

