const person = {
    name: 'Dom',
    hobbies: [
        'Web Development',
        'Gardening',
        'Fixing Cars'
    ]
};
const assignPerson = person;
assignPerson.name = 'Bobo';
console.log(person.name);