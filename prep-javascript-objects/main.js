var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'baseball'
};
console.log(person);
var fullName = 'John ' + 'Smith';
var nameDeclare = "The person's full name is";
console.log(nameDeclare, fullName);
person.job = 'plumber';
person.previousJob = 'teacher';
var currentJob = 'plumber';
var currentJobDeclare = "The person's current job is";
console.log(currentJobDeclare, currentJob);
var previousJob = 'teacher';
var previousJobDeclare = "The person's previous job was";
console.log(previousJobDeclare, previousJob);
var completePerson = 'The complete person object:';
console.log(completePerson, person);
