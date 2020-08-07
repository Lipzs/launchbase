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

for (let i = 0; i < users.length; i++) {
  const usercheck = cssUserCheck(users[i]);

  if (usercheck) {
    console.log(`The user ${users[i].name} works with css`);
  };
};

function cssUserCheck(user) {
  for (technology of user.technologies) {
    if (technology == 'CSS') {
      return true;
    };
  };
};