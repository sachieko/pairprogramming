// Poor Socrates
// Paircoded with @Sachieko and @sylvielcq
const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");
  // Store the original key values in 2 variables
  let key1Value = object1[key1];
  let key2Value = object2[key2];
  // Swap the values in
  object2[key2] = key1Value;
  object1[key1] = key2Value;

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });