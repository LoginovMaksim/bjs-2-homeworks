function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

// let student1 = new Student("Vasa", "men", 25);
// let student2 = new Student("Peta", "man", 23);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
      this.marks = mark;
    } else {
      for (let i of mark) {
        this.marks.push(i);
      }
    }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined){ 
      // console.log ("У этого студента нет оценок");
      result = "У этого студента нет оценок";
    } else {
      let sum = 0;
      for (let i of this.marks) {
        sum += i;
      }
        // console.log(average / this.marks.length);
        result = sum / this.marks.length;
    }
    return result;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}


// let student1 = new Student("Vasa", "men", 25);
// let student2 = new Student("Peta", "man", 23);

// function Student(name, gender, age) {
//   this.name = name;
//   this.gender = gender;
//   this.age = age;
// }

// Student.prototype.setSubject = function (subjectName) {
// this.subject = subjectName;
// }

// Student.prototype.addMark = function (mark) {
// if (this.marks === undefined) {
//   this.marks = [mark];
// }
// else {
//   this.marks.push(mark);
// }
// }

// Student.prototype.addMarks = function (...rest) {
// if (this.marks === undefined) {
//   this.marks = [...rest];
// }
// else {
//   this.marks.push(...rest);
// }
// }

// Student.prototype.getAverage = function () {
// let sum = 0;
// this.marks.forEach((mark) => {sum += parseInt(mark)});
// return sum / this.marks.length;  
// }

// Student.prototype.exclude = function (reason) {
// delete this.subject;
// delete this.marks;
// this.excluded = reason;
// }