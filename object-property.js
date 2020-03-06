const students = [
    {id: 22, name: 'rohim'},
    {id: 24, name: 'korim'},
    {id: 43, name: 'kamal'},
    {id: 54, name: 'jamal'}
];

const names = students.map( s => s.name)
const ids = students.map(s => s.id)

const idFilter = students.filter( s => s.id >= 24);
console.log(idFilter);
// console.log(ids);