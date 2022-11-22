// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg = 0;

  for (let i of arr) {
    sum = sum + i;
    if (i < -101 || i > 101) {
      return (`число ${i} превышает диапазон от -100 до 100`);
    } else {
      if (i > max) {max = i;} else if (i < min) {min = i}
    } 
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg};
}
 console.log (getArrayParams([5]));

// // Задание 2
function worker(arr) {
  let sum = 0;
    for (const i of arr) {
      sum += i;
    }
  return sum;
}

//console.log (`Работа функции worker: ${worker([1,2,3])}`);

function makeWork(arrOfArr, func) {

  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    maxFunc = func(arrOfArr[i]);

    if (max < maxFunc) { max = maxFunc};
}
  return max;
}

arrOfArr = [[0, 0, 0], [-1, -100]]

console.log(`Работы функции makeWork: ${makeWork(arrOfArr, worker)}`)

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0], raznoct = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

  for (let i of arr) {
      if (i > max) {max = i;} else if (i < min) {min = i}
  } 
  return raznoct = Math.abs(max - min);
}  

arrOfArr = [[-10, -20, -40], [10, 20, 30]];

console.log(`Работы функции makeWork: ${makeWork(arrOfArr, worker2)}`)
