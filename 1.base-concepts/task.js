"use strict";

function solveEquation(a, b, c) {
  let arr;
  
  // код для задачи №1 писать здесь
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let sqr = -b / (2 * a);
    arr = [sqr];
  } else {
    let sqr1 = (-b + Math.sqrt(d) ) / (2 * a);
    let sqr2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr = [sqr1, sqr2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  if (isFinite(percent) === false) {
    totalAmount= `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isFinite(contribution) === false) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isFinite(amount) === false) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  else {
    let s = amount - contribution;
    let dateNew = (new Date());
    let p = (percent/100) / 12; 
    let n = Math.round((date - dateNew)/2629746000);
    let Payment = s * (p + (p / (((1 + p)**n) - 1)));
    totalAmount = Number((Payment*n).toFixed(2));
  };
  
  return totalAmount;
}