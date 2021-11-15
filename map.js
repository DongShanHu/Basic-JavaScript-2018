let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
  console.log(("foreach  function", (arr[index] = num * 2)));
});

let doubled = arr.map((num) => {
  console.log("map function", num * 2);
});

// forEach() was more than 70% slower than map()

//forEach() may be preferable when you’re not trying to change the data in your array,
//but instead want to just do something with it — like saving it to a database or logging it ///:
let a = ["a", "b", "c", "d"];
a.forEach((letter) => {
  console.log(letter);
});
// a
// b
// c
// d
//map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map((num) => num * 2).filter((num) => num > 5);
console.log(arr3);
// arr2 = [6, 8, 10]
