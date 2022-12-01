function isPalindrome(word) {
 if (typeof word===`string`) {
  let backwardsWord = ``
  for (i = 0; i < word.length; i++) {
     char = word.charAt(i);
     backwardsWord = char+backwardsWord;
  }
   return word === backwardsWord? true : false
 } else {
    return false;
 }
}

/* 
  isPalindrome input something
  if arg is string continue, else : return false
  takes something and turns it into array
  takes array from beginning to end and adds each letter to existing array
  something === backwardsWordArray.toString()? true : false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
