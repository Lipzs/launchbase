const programmer = {
  name: 'Filipe',
  age: 19,
  technologies: [
    {
      name: 'C++',
      specialty: 'Desktop'
    },
    {
      name: 'Python',
      specialty: 'Data Science'
    },
    {
      name: 'JavaScript',
      specialty: 'Web/Mobile'
    }
  ]
};

const name = programmer.name;
const age = programmer.age;

const TechnologyName1 = programmer.technologies[0].name;
const TechnologySp1 = programmer.technologies[0].specialty;

console.log(`The user ${name} has ${age} years old and uses the ${TechnologyName1} technology with specialty in ${TechnologySp1}.`)