const users = [
  {
    name: 'Carlos',
    technologies: ['HTML', 'CSS']
  },
  {
    name: 'Jasmine',
    technologies: ['JavaScript', 'CSS']
  },
  {
    name: 'Tuane',
    technologies: ['HTML', 'Node.js']
  }
];

for (let user of users) {
  console.log(`${user.name} trabalha com ${user.technologies[0]}, ${user.technologies[1]}.`);
}