const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
};

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

const higherCredit = getHigherTransactionByType('credit');
const higherDebit = getHigherTransactionByType('debit');

const avarage = getAvarageTransactionValue();

const count = getTransactionCount();

console.log(`User: ${user.name}`);
console.log('Highest transactions: ');
console.log(higherCredit);
console.log(higherDebit);
console.log(`Avarage Transaction Value: ${avarage}`);
console.log('All transactions: ');
console.log(count);
console.log(`Balance: ${user.balance}`);

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type == 'credit') {
    user.balance += transaction.value
  }
  else if (transaction.type == 'debit') {
    user.balance -= transaction.value
  };
};

function getHigherTransactionByType(type) {
  let higherTransaction = 0;
  let transactionIndex = 0;

  for (i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type == type) {
      if (user.transactions[i].value > higherTransaction) {
        higherTransaction = user.transactions[i].value;
        transactionIndex = i;
      };
    };
  };

  return user.transactions[transactionIndex]
};

function getAvarageTransactionValue() {
  let sumAllTransaction = 0;
  let avarageTransaction

  for (transaction of user.transactions) {
    sumAllTransaction += transaction.value;
  }

  avarageTransaction = sumAllTransaction / user.transactions.length;

  return avarageTransaction;
};

function getTransactionCount() {
  let typeCredit = 0;
  let typeDebit = 0;

  const result = { credit: 0, debit: 0 };

  for (transaction of user.transactions) {
    if (transaction.type == 'credit') {
      typeCredit++
    }
    else if (transaction.type == 'debit') {
      typeDebit++
    }
  }

  result.credit = typeCredit;
  result.debit = typeDebit;

  return result
};

