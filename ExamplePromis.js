var axios = Require('axios');

// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(33);
//       reject('City not found');
//     }, 2000);
//
//   });
// }
//
// getTempPromise('Cape Town').then(function (temp) {
//   console.log('Promise success', temp);
// },
//
// function (err) {
//   console.log('Error', err);
// });

function calculatePromise(x, y) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Number.isInteger(x) && Number.isInteger(y)) {
        resolve(x + y);
      }

      reject(x + ' + ' + y);
    }, 1000);

  });
}

calculatePromise(2, 'test').then(function (temp) {
  console.log('Calculated value is: ', temp);
},

function (err) {
  console.log('Cound not calculate: ', err);
});
