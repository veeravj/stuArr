const student=[{name:'adhi',gender:'male'},{name:'ahamed',gender:'male'},{name:'rithu',gender:'female'},{name:'kalaivani',gender:'female'}];
//to print the female name
console.log(student.filter((check)=>(check.gender=='female')).map((name)=>(name.name)));
//to print number of male students
let mArr=student.filter((check)=>(check.gender=='male'));
console.log(mArr.length);
//to print the student name startswith 'a'
console.log(student.filter((toCheck)=>toCheck.name.startsWith('a')).map((name)=>name.name));