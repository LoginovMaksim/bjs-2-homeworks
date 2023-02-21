let funTest = cachingDecoratorNew(sum = (a, b) => a+b);

function cachingDecoratorNew(func) {
  console.log(func);
  return func;
}

// funTest(4,5);
// console.log(funTest);
console.log(funTest(5,5));


// function debounceDecoratorNew(func) {
//   // Ваш код
// }