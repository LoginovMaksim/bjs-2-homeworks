// // Калькулятор заказов. Реалезован в виде класса CalcPrint, (пример записи класса в переменную в консоли браузера или в VSC: let zakaz = new CalcPrint())
// // в который входят методы:
// //   1. addPosition(height, width, amount, material) height - высота файла, width - ширина файла, amount - количество копий (штук), material - название материала.
// // Пример использования в консоле браузера или в VSC: zakaz.addPosition(3, 6, 1, 'evro').
// //   2. addPrice - в разработке.

// class CalcPrint { //Объевляем класс с именем "CalcPrint" 

//     constructor () { // Оставим конструктор пустым, все значения будем получать из методов.
//         this.positions = []; //Создадим пустой массив для хранения данных о нашем заказе, данные будут записываться в этот массив в виде объектов, из метода "addPosition".
//         this.price = []; //Создадим пустой массив для хранения данных о нашем прайсе, данные будут записываться в этот массив в виде объектов, из метода "addPrice".
//         this.sumAllZakaza = 0; //Создадим ещё одно совйство в которое будем суммировать стоимость всех заказов.
//     }

//     addPosition(height, width, amount, material) { //Создадим метод с именем "addPosition" и параметрами. См. описание выше.

//         onlyPositiveNumbers(4, height, width, amount); //Вызовем написанную нами функцию "onlyPositiveNumbers", для проверки вводимых чисел. Функция подробно расписанна ниже.
        
//         //Т.к. значение "material", у нас вводится в виде строки "zakaz1.addPosition(3, 6, 1, 'evro')", нам нужно из массива "this.price" получить по введённому значению 'evro' его стоимость.
        
//         let priceMaterial = 0; //Объявим переменную в которой будет храниться полученная из массива "this.price" стоимость. 

//         for (const i of this.price) { //Т.к. "this.price" это массив состоящий из объектов нам необходимо перебрать его весь с помощью "for of" получая в переменную "i" объект {name: 'evro', priceName: 250}.         
//             if (material === i.name) { //Получив в переменную "i" объект {name: 'evro', priceName: 250}, по ключю "name:" проверим равно ли его значение "'evro'" параметру "material" метода addPosition "zakaz1.addPosition(3, 6, 1, 'evro')".
//                 priceMaterial = i.priceName; //И если значения равны, то получим по ключю "priceName:" его значение, которое переприсвоем переменной "priceMaterial".
//             }
//         }

//         let sumZakaza = height*width*amount*priceMaterial; //Получив все нужные данные в числовом типе, перемножим их, получив стоимость заказа. Результат запишем в новую переменную.
        
//         console.log(`Стоимость заказа ${height} x ${width} x ${amount}шт, на материале ${material} = ${sumZakaza} рублей.` ); //Выведем наш результат в консоль, т.к. пока не куда выводить =)
        
//         this.positions.push({height: height, width: width, amount: amount, material: material, priceMaterial: priceMaterial, sumZakaza: sumZakaza}); //Все наши полученные данные (высота, ширина, количество, материал, стоимость материала, стоимость этого заказа) передадим в виде объекта в массив "this.positions".

//         this.sumAllZakaza += sumZakaza; //Т.к. заказ у нас может быть не один, а мы хотим получить сумму всех заказов, к переменной "this.sumAllZakaza" будем прибавлять стоимость текущего заказа.
//         // При каждом вызове метода "zakaz1.addPosition(3, 6, 1, 'evro')" у нас в свойстве "this.sumAllZakaza" будет сумироваться новый вызов с сохранённым значением. Т.е. при первом вызове метода "zakaz1.addPosition(1, 1, 1, 'evro')" стоимость заказа у нас будет равна 1, и свойство "this.sumAllZakaza = 0;" станет равно 1,
//         // при вызове метода второй раз "zakaz1.addPosition(2, 2, 1, 'evro')" стоимость заказа будет равна 4. Т.к. "this.sumAllZakaza" уже равен 1, то вот этим "this.sumAllZakaza += sumZakaza;" мы прибавим 1 + 4 и получим 5.
//         console.log(`Сумма всего заказа = ${this.sumAllZakaza} рублей`); //Выведем наш результат в консоль, т.к. пока не куда выводить =) 
//     }
    
//     addPrice(...arr) {this.price = arr} //Добавление прайса для материалов, пока в разработке.
// }

// //Все эти команды можно выполнять в консоли браузера.
// let zakaz1 = new CalcPrint(); //В переменную "zakaz1" присвоим наш класс, вся прелесть классов в том, что можно создать любую переменную и присвоить ей этот же класс, но при помощи параметров (у нас их тут нет), или методов, изменить свойства класса в новой переменной на новые значения.
// zakaz1.addPrice({name: 'evro', priceName: 250}, {name: 'chaina', priceName: 200}, {name: 'gloss', priceName: 300}); //Создаём наш прайс в виде объекта. В разработек! Тестовые данные!
// zakaz1.addPosition(3, 6, 1, 'evro'); //Т.к. переменной "zakaz1" присвоен класс "CalcPrint()", то у этой переменной, через точку, мы можем вызвать метод "addPosition(3, 6, 1, 'evro')" с параметрами. Который переведёт 'evro' в число, посчитает стоимость заказа, посчитает общую стоимость всех заказов, добавит объект с данными в массив "this.positions" и переприсвоит значение у "this.sumAllZakaza".
// zakaz1.addPosition(1, 2, 5, 'chaina'); //Новый вызов добавит ещё один объект в массив "this.positions", и переприсвоит значение у "this.sumAllZakaza", на новое. 
// zakaz1.addPosition(0.3, 0.5, 500, 'gloss');
// console.log(zakaz1); //Просто вывод в консоль всего класса.

// //Функция позволяет вводить только положительные числовые значения, с заданным количеством символов. Можно использовать в любых программах для проверки вводимых цисел.
// //maxNumder - параметр задающий максимальное количество вводимых символов в параметре "...testСislo". Пример: onlyPositiveNumbers(4, 11111, 2) - вызов функции выдаст ошибку и укажет место не верного ввода "11111".
// //...testСislo - параметр принимающий любое количество чисел. См. пример выше.

// function onlyPositiveNumbers(maxNumder, ...testСislo) { // Создаём функцию, с именем "onlyPositiveNumbers", и двумя параметрами (заметка: не даёт создать рест оперетор "..." перед параметром).

//     if (testСislo.length != 0){ //Т.к. "..." создаёт массив, проверяем что бы он не был пустым, тоесть не равнялся нулю "!=0". Иначе выводим ошибку.

//         for (const i of testСislo) { //Т.к. "..." создаёт массив, и количество значений больше нуля, то будем перебирать массив с помощью "for of" сразу получая значение в переменную "i".

//             if (i <= 0 || typeof i === "undefined" || i.toString().length > maxNumder || typeof i != "number" || isNaN(i) === true) { //Проверяем переменную "i" на 0, undefined, не число (!= "number"), NaN, и преобразовав переменную "i" в строку "i.toString()", а строка это почти массив, узнаем длинну массива, и если она больше "maxNumder" (i.toString().length > maxNumder), выдаем ошибку.
//                 throw new Error (`Пожалуйста введите число "${i}" больше нуля для всех значений. Но не более ${maxNumder} символа(ов)`) //Вывод ошибки.
//             }

//         }

//     } else {throw new Error ("Пожалуйста введите число.")} //Вывод ошибки.
// }

let max = 0;
let arr = [0,1,2,3,4,5,6,7,8,9];

for (let i = 0; i < 10; i++){

    let a = Math.floor(Math.random() * 10);

    if (a > max) {
        max = a;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a) {
            arr.splice(i,1);
        }
    }
    
    console.log (`Число: ${a}`);
}
console.log (`Максимальное число: ${max}`);
console.log (`Числа которые не вывел рандом: ${arr}`);


