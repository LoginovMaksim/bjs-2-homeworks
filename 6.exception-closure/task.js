//Задача №1
function parseCount (string) {

    let pars = parseInt(string);
    if (pars !== pars) {
        throw new Error ("Невалидное значение");
    } else {
        return pars;
    }

}

function validateCount (string){

    try {
        return parseCount(string);
    } catch (error) {
        return error;
    }

}

//Задача №2
class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b <= c || a + c <= b || c + b <= a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        let p = (this.a + this.b + this.c) / 2;
        return +Math.sqrt((p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
    }
}

function getTriangle(a,b,c) {

    try {
        const triangle = new Triangle(a,b,c);
        return triangle;
    } catch (error) {
        return {
            getArea() {return "Ошибка! Треугольник не существует";}, 
            getPerimeter() {return "Ошибка! Треугольник не существует";}
        }
    }

}

// console.log ("Triangle 1: " + new Triangle(1,1,2));
// console.log ("Triangle 2: " + new Triangle(1,2,1));
// console.log ("Triangle 3: " + new Triangle(2,1,1));
// console.log ("Triangle 4: " + new Triangle(2,2,1));
// console.log ("Triangle 5: " + new Triangle(2,1,2));
// console.log ("Triangle 6: " + new Triangle(1,2,2));
// console.log ("Triangle 7: " + new Triangle(2,2,2));
let tr = new Triangle(2,2,2);