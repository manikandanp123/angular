
// input: ABCDEFGH
// output: ABDCEFHG

// let input = "ABCDE";

// let a1 = [];
// for (let i = 0; i < input.length; i++) {
//   if (i % 2 == 0) {
//     let b1 = input.slice(i, i + 2);
//     a1.push(b1);
//   }

// }
// let res = [];
// for (let i = 0; i < a1.length; i++) {
//   if (i % 2 !== 0) {
//     let each = a1[i];
//     let ans = each[1] + each[0];
//     res.push(ans);
//   } else {
//     res.push(a1[i]);
//   }
// }

// console.log("res---", res.join(''));

let input = "ABCD";
// output = "ABDC"
let flag = true;
let ans = "";
let count = 0;

let d1 = "";
for (let i = 0; i < input.length; i++) {
  if (flag) {
    ans += input[i];
    count += 1;
  } else {
    d1 += input[i];
    count += 1;
  }
  if (count == 2) {
    if (flag) {
      flag = false;
      count = 0;
    } else {
      flag = true;
      ans += d1[1] + d1[0];
      count = 0;
      d1 = "";
    }
  }
}

console.log("ans---", ans);
