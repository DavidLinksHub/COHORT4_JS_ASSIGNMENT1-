//Array of objects
const students =[
    {name:"David", age: 20, grade:"A"},
    {name:"Frank", age: 21, grade:"B"},
    {name:"Chinedu", age: 22, grade:"A"},
    {name:"Chisom", age: 23, grade:"C"},
    {name:"Angela", age: 20, grade:"B"},
    {name:"Ella", age: 22, grade:"A"}
];
//function to filter students by grade
const filterByGrade = (students, grade) => {
    return students.filter(student => student.grade === grade);
}
//function to calculate the average age of students 
const averageAge = (students) => {
    if (students.length === 0)
        return 0;  //Avoid division By zero

//Using reduce to sum up all ages and dividing by number of students
const totalAge = students.reduce((sum,student)=> sum + student.age, 0);
return totalAge / students.length;
}

//To Test the filterByGrade function
console.log(filterByGrade(students, "A"));      /*Output: [ { name: 'David', age: 20, grade: 'A' },  
{ name: 'Chinedu', age: 22, grade: 'A' },{ name: 'Ella', age: 22, grade: 'A' } */  

//Test the averageAge Function
console.log(averageAge(students))     //Output: 21.33333

//Test averageAge on a filtered list of students with grade 'B'
const gradeBStudents = filterByGrade(students, "B");

console.log(averageAge(gradeBStudents));      //Output: 20.5