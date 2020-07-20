const users = [
  {
    name: 'Salvio',
    recipes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: 'Márcio',
    recipes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lúcia',
    recipes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

for (user of users) {
  const balance = calculateBalance(user.recipes, user.expenses);
  let balanceResult;

  if (balance < 0) {
    balanceResult = "NEGATIVE"
  } else {
    balanceResult = "POSITIVE"
  };

  console.log(`${user.name} has ${balanceResult} balance of ${balance}.`);
};

function calculateBalance(recipes, expenses) {
  let sumRecipes = sumNumbers(recipes);
  let sumExpenses = sumNumbers(expenses);

  let userBalance = sumRecipes - sumExpenses;
  userBalance = userBalance.toFixed(1);

  return userBalance;
};

function sumNumbers(numbers) {
  let sum = 0;

  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  };

  return sum;
};