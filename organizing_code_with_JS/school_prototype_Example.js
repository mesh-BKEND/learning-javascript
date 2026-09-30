//defining the user constructor function
function user(name, age) {
  this.name = name;
  this.age = age;
}

user.prototype.info = function () {
  return `My name is ${this.name} and I am ${this.age} years old.`;
};

//defining the student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

Student.prototype.getGrade = function () {
  return `I am in grade ${this.grade}.`;
};

//defining the teacher constructor function
function Teacher(name, age, subject) {
  this.name = name;
  this.age = age;
  this.subject = subject;
}

Teacher.prototype.getSubject = function () {
  return `I teach ${this.subject}.`;
};

//defining staff constructor function
function Staff(name, age, role) {
  this.name = name;
  this.age = age;
  this.role = role;
}

Staff.prototype.getRole = function () {
  return `I work as a ${this.role}.`;
};

//making the student inherit from user
Object.setPrototypeOf(Student.prototype, user.prototype);

//making the teacher inherit from user
Object.setPrototypeOf(Teacher.prototype, user.prototype);

//making the staff inherit from user
Object.setPrototypeOf(Staff.prototype, user.prototype);

const student1 = new Student("meshack magara", 29, "A");
const teacher1 = new Teacher("Jones Katiku", 48, "Computer Science");
const staff1 = new Staff("James Njoroge", 40, "cleaner");

console.log(student1.info());
console.log(student1.getGrade());
console.log(Object.getPrototypeOf(student1));

console.log(teacher1.info());
console.log(teacher1.getSubject());
console.log(Object.getPrototypeOf(teacher1));

console.log(staff1.info());
console.log(staff1.getRole());
console.log(Object.getPrototypeOf(staff1));
