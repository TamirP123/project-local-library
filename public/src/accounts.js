function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account.id === id) {
      return account;
    }
    else {
      console.log("Could not find this account");
    }
  }
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
);
return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const borrows = books[i].borrows.filter(borrow => borrow.id === account.id);
    total += borrows.length;
  }
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  // Filtering through books, checking if latest borrow matches account, add to array.
  const booksCheckedOut = books.filter(book => book.borrows[0].id === account.id && book.borrows[0].returned === false);
  // Transform result array,
  result = booksCheckedOut.map(book => {
    return {...book, author: authors.find(author => author.id === book.authorId)}
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
