function isPalindrome(word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2)).toLowerCase();
  let end = word.substring(len - Math.floor(len/2)).toLowerCase();
  //console.log(start, end);
  let flip = end.split('').reverse().join('');
  return(start === flip)
}
  // Write your algorithm here
  //takes in one string argument ''
  //return true // IF it reads the same forward -backwards
  //return true if not
/* 
  Add your pseudocode here
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
