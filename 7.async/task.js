class AlarmClock {

  constructor (alarmCollection, timerId) {
      this.alarmCollection = [];
      this.timerId = null;
  }

  addClock(timeAlarm, action, id) {

      if(typeof id != 'number') {
        throw new Error('id не указан');
      }

      for (const alarmObject of this.alarmCollection) {
				
        if(alarmObject.id === id){
          return console.error('id существует');
        }

      }

      // let arrTime = timeAlarm.split(':');

      // if((arrTime.length > 2) || (0 > arrTime[0]) || (arrTime[0] > 23) || (0 > arrTime[1]) || (arrTime[1] > 59)) {
      //   throw new Error("Введён не верный формат времени. Пример: \"23:59\"");            
      // }

      // let currentDate = new Date().getTime();//получение мс в тек дате
      
      // let alarmTime = new Date().setHours(arrTime[0],arrTime[1]);
      
      // if (currentDate > alarmTime) {
      //   setTimeout(action, (alarmTime + 86400000) - currentDate);
      //   console.log()
      // } else {
      //   setTimeout(action, alarmTime - currentDate);        
      // }

			this.alarmCollection.push({timeAlarm, action, id});       
  };

	removeClock(id){
		let alarmCollectionLength = this.alarmCollection.length;

		this.alarmCollection = this.alarmCollection.filter(i => i.id !== id);

		if (alarmCollectionLength === this.alarmCollection.length) {
			console.log('Будильника с таким ID не существует.');
		} else {
			console.log('Будильник успешно удалён.');
		}
	}

	getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
		hour: "2-digit",
		minute: "2-digit",
		});
	}

    	start() {
		let checkClock = (call) => {
            let alarmTime = this.getCurrentFormattedTime();
            if (call.timeAlarm === alarmTime) {
             call.action();
            }
        }

        if (this.timerId === null) {
            console.log('я тут');
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item));
            }, 2000);
            console.log(this.timerId);
        }
	}

}

let pr = new AlarmClock;
pr.addClock("00:12", () => console.log("Work 1"),1);
pr.addClock("09:01", () => console.log("Work 2"),2);
pr.addClock("09:01", () => console.log("Work 3"),3);
pr.addClock("09:01", () => console.log("Work 4"),4);
pr.addClock("09:01", () => console.log("Work 5"),5);
console.table(pr.alarmCollection);
pr.removeClock(6);
console.table(pr.alarmCollection);
console.log(pr.getCurrentFormattedTime());
pr.start();



// function myGetTime(miliSec) {
//   let allMinute = Math.round(miliSec / 60000);
//   if (allMinute >= 60) {
//      hour = Math.floor(allMinute / 60);
//      minute = allMinute - (hour*60); 
//   } else {
//     hour = 0;
//     minute = allMinute;
//   }
//   return (`${hour}:${minute}`);
// }

// myGetTime(3600000);

// class AlarmClock {
// 	constructor () {
// 		this.alarmCollection = [],
// 		this.timerId = null
// 	}
// 	addClock(time, callback, id) {
// 			// debugger;
//         if (!id) {
//             throw new Error("Параметр id не передан");
//         }
//         if (this.alarmCollection.some(alarm => alarm.id === id)) {
//            return console.error("Такой будильник уже существует");
//         }
//          this.alarmCollection.push({id, time, callback});
//     }
//     removeClock (id) {
//         let inputArrLength = this.alarmCollection.length;
//         this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
//         let outputArrLength = this.alarmCollection.length;
//         return outputArrLength < inputArrLength;
//     }

// 	getCurrentFormattedTime() {
//         return new Date().toLocaleTimeString("ru-Ru", {
// 			hour: "2-digit",
// 			minute: "2-digit",
// 		});
// 	}

// 	start() {
// 		let checkClock = (alarm) => {
//             let alarmTime = this.getCurrentFormattedTime();
//             if (alarm.time === alarmTime) {
//              alarm.callback();
//             }
//         }
//         if (!this.timerId) {
//             this.timerId = setInterval(() => {
//                 this.alarmCollection.forEach(alarm => checkClock(alarm));
//             }, 1000);
//         }
// 	}

// 	stop() {
// 		if (!this.timerId) {
//             clearInterval(this.timerId);
//             this.timerId = null;
//         }
// 	}

// 	printAlarms() {
// 	     this.alarmCollection.forEach(alarm => console.log(alarm.id + ":" + alarm.time));
// 	}

// 	clearAlarms() {
// 		this.stop();
// 		this.alarmCollection = [];
// 	}

// }

// let pr = new AlarmClock;
// pr.addClock("17:34", () => console.log("Work 1"),1);
// pr.addClock("09:01", () => console.log("Work 2"),2);
// pr.addClock("09:01", () => console.log("Work 3"),3);
// pr.addClock("09:01", () => console.log("Work 4"),4);
// pr.addClock("09:01", () => console.log("Work 5"),5);
// console.table(pr.alarmCollection);
// console.log(pr.removeClock(6));
// console.table(pr.alarmCollection);
// console.log(pr.getCurrentFormattedTime());
// console.log(pr.start());









/* Пример работы метода .filter

let rrrr = {alarmCollection: [
    {timeAlarm: '08:00', action: 0, id: 1},
    {timeAlarm: '08:10', action: 0, id: 2},
    {timeAlarm: '08:20', action: 0, id: 3},
    {timeAlarm: '08:30', action: 0, id: 1}
], key2: 0};

// for (let i = 0; i < rrrr.alarmCollection.length; i++) {
//     if (rrrr.alarmCollection[i].id === 2) {
//         rrrr.alarmCollection.splice(i, 1);
//     }
// }

// console.table(rrrr.alarmCollection);

// let mFilter = rrrr.alarmCollection.filter(i => i.id != 1); //стрелочная функция

let mFilter = rrrr.alarmCollection.filter(function(i) { // через простую функцию
    if (i.id != 1) {
        return i;
    }
});

console.table(mFilter);*/

/* пример метода .forEach
let arr = ["Яблоко", "Апельсин", "Груша"];
let arr1 = ["Яблоко1", "Апельсин1", "Груша1", "Банан1"];

// Перебор масива через простой for
for (let index = 0; index < arr.length; index++) { 
    console.log( index + ": " + arr[index] +" (массив:" + arr + ")" );
}

// Перебор масива через метод .forEach с использованием простой функции
arr.forEach(function(item, i) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});

// Тоже только со стрелочной функцией
arr.forEach((item, i) => {
    console.log( i + ": " + item +" (массив:" + arr + ")" );
}); */

// let classAlarm = {alarmCollection: [
//     {timeAlarm: '08:00', action: "call 1", id: 1},
//     {timeAlarm: '08:10', action: "call 2", id: 2},
//     {timeAlarm: '08:20', action: "call 3", id: 3},
//     {timeAlarm: '08:30', action: "call 4", id: 1}
// ], key2: 0};

// classAlarm.alarmCollection.forEach(item => console.log(item.action));   

