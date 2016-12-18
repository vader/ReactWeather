var names = ['Shawn', 'Ahmad', 'Raghu'];
// names.forEach(function (name) {
//   console.log('forEachName', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// });
//
// names.forEach((name) => console.log('arrow', name));
//
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('shawn'));

// var person = {
//   name: 'Shawn',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(`Hello ${this.name} how are you doing? Say hi to ${name}`);
//     });
//   },
// };
//
// person.greet();
// function add(a, b) {
//   return a + b;
// };

var add = (a, b) => a + b;

var add2 = ((a , b) => {
  return a + b;
});

console.log(add(1, 4));
console.log(add(8, 4));
console.log(add2(1, 4));
console.log(add2(8, 4));
