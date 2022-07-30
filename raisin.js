const raisinAlarm = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};
// As a stretch exercise, see if you can make a new function that supports arrays of arrays.
//  Your function should return an array of responses, instead of a single response.
//  You can add this new function to your existing raisin.js file.
// pair coded by @mustafa-bhm and @Sachieko
const raisinAlarmArray = function(cookies) {
  let returnArray = [];
  for (let array of cookies) {
    returnArray.push(raisinAlarm(array));
  }
  return returnArray;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
// Test for Stretch
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);