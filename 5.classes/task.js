//Задание №1
class PrintEditionItem {

    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    
    fix(){
        this.state *= 1.5;
    }

    set state (getState) {
        if (getState < 0) {
            this._state = 0;
        } else if (getState > 100){
            this._state = 100;
        } else {
            this._state = getState;
        }
    }

    get state() {
        return this._state;
    }

}

let myBook = new PrintEditionItem ("Tolstoy", 2000, 200);
console.log(myBook);

class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// let erotica = new Magazine ("PlayBoy", 1998, 40);
// console.log(erotica);

class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// let newBook = new Book ("NewBook", "XZ", 1998, 40);
// console.log(newBook);

class NovelBook extends Book{
    type = "novel";
}

// let novel = new Book ("NovelBook", "XZ", 1998, 40);
// console.log(novel);

class FantasticBook extends Book{
    type = "fantastic";
}

// let fantasticBook = new Book ("FantasticBook", "XZ", 1998, 40);
// console.log(fantasticBook);

class DetectiveBook extends Book{
    type = "detective";
}


//Задание №2
class Library {
    constructor (name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result;
        for (const i of this.books) {
            if (i[type] === value) {
                result = i; // в качестве результата возвращаем сам объект, который получили в for(i of ...)
                break;
            } else {
                result = null;
            }
        }
        return result;
    }

    giveBookByName(bookName) {

        let findBook = this.findBookBy("name", bookName); // здесь мы записываем в переменную то что у нас получиться в "функции" методе findBookBy(type, value), что бы не переписывать повторяющийся код.
        if (findBook != null ) { // если метод findBookBy(type, value) не найдёт книгу, результатом его работы будет Null, поэтому мы запишем "!=null" (не равен Null);
            this.books.splice(this.books.indexOf(findBook), 1); //можно в методе пользоваться методом... хм... везде ли?
            return findBook;
        } else {
            return null;
        }

        // let result;
        // let count = 0;
        // for (const i of this.books) {
        //     if (i.name === bookName) {
        //         result = i;
        //         this.books.splice(count,1);
        //     } else {
        //         result = null;
        //     }
        //     count ++;
        // }
        // return result;
    }
}

// let libra = new Library ("Library");

// libra.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// libra.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// libra.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// libra.addBook(new Magazine("Мурзилка", 1924, 60));

// libra.addBook(libra);
// console.log (libra);

// let arr = [{name: "loh", type: "Full", adge: 26}, {name: "gopnik", type: "low-lvl"}];

// for (const i of arr) {
//     let t = "name";
//     console.log (i[t]); // вместо точки к ключам объекта можно обращаться через [] скобки !!!без точки!!!
// }


// задание №3
class Student {

    constructor (name) {
        this.name = name;
      }

      addMark (newMark, newSubject) {
        if (1 <= newMark && newMark <= 5) {
            if(this.subjectMarks === undefined){ 
                this.subjectMarks = [{mark: newMark, subject: newSubject}];
            } else {
                this.subjectMarks.push({mark: newMark, subject: newSubject});
            }
        } else {
            console.log ("Ошибка, оценка должна быть числом от 1 до 5");
            return "Ошибка, оценка должна быть числом от 1 до 5"; 
        }
      }

      getAverage () {
        let result;
        let sum = 0;
        if(this.subjectMarks === undefined){ 
            result = "У этого студента нет оценок";
          } else {
            for (let i of this.subjectMarks) {
              sum += i.mark;
            }
               result = sum / this.subjectMarks.length;
          }
          return result;
      }

      getAverageBySubject (subject) {
        let result;
        let counter = 0;
        let sum = 0;
        for (const i of this.subjectMarks) {
            if (i.subject === subject) {
                counter ++;
                sum += i.mark;
                result = sum / counter; 
            } else {
                result = "Несуществующий предмет";
            }
        }
        return result;
      }

      exclude (reason) {
        this.excluded = reason;
        delete this.subjectMarks;
        return reason;
      }

  }
