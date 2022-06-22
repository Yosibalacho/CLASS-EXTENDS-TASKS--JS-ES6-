class Student {
  constructor(name, grade, identify, studentLog) {
    this.name = name;
    this.grade = grade;
    this.identify = identify;
    this.studentLog();
  }
  studentLog() {
    console.log(Student);
  }
}

const yosi = new Student("yosi", 7, 324252);
const yoni = new Student("yoni", 4, 36333);
console.log(yosi);
console.log(yoni);

class CollegeStudent extends Student {}
const collegeStudent = new CollegeStudent();
console.log(collegeStudent);
class HighSchoolStudent extends Student {
  constructor(name, grade, identify, age, sport) {
    super(name, grade, identify);
    this.age = age;
    this.sport = sport;
  }
}
const highSchoolStudent = new HighSchoolStudent();
console.log(highSchoolStudent);
class Middle extends Student {}
const middleStudent = new Middle();
console.log(middleStudent);
