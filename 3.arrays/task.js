function compareArrays(arr1, arr2) {
  let result;
  // return result = arr1.join(',') === arr2.join(','); //var1
  // return result = (JSON.stringify(arr1) === JSON.stringify(arr2)); //var2
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item % 3 == 0).filter(item => item >= 0).map(item => item * 10);;

  return resultArr; // array
}

// let arr1 = [1,2];
// let arr2 = [1,3,3];

// console.log(arr1.every((value, index) => {
//   console.log(`Значение value: ${value} Индекс: ${index}`)
//   console.log(`Значение arr1: ${arr1[value]} Индекс: ${arr1[index]}`)
//   console.log(`Значение arr2: ${arr2[value]} Индекс: ${arr2[index]}`)
//   return value === arr2[index]}));

// let max = (a, b) => a > b ? a : b;
// console.log(max(1,-2))
