
debugger;
// console.log(a);
// console.log(b);
// console.log(c);

var a1 = function (a, b) {
  return a + b;
}

var a5 = setTimeout(() => {
  console.log("1");
}, 500);

var a6 = setTimeout(() => {
  console.log("2");
}, 100);

var a7 = setTimeout(() => {
  console.log("3");
}, 1000);

var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c);




// function abc(arr) {
//   // console.log("abc", a, b, c);
//   if (arr) {
//     let r1 = [];
//     for (let i of arr) {
//       r1.push(function () { return i * 2 })
//     }
//     // console.log("r1----", r1);
//     return r1;
//   } else {
//     let b = 100;
//     function a123() {
//       let b = 50;
//       console.log("a123", b);
//     }
//     a123();
//     return a1;
//   }
// }

// var n1 = abc();
// console.log(n1());
// console.log(n1(5, 5));

// var x1 = abc([1, 2, 3, 4]);
// console.log(x1[0]());
// console.log(x1[1]());
// console.log(x1[2]());
