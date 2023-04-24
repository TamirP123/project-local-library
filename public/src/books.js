function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      return author;
    }
    else {
      console.log("Could not find this author");
    }
  }
}

function findBookById(books, id) {
  for (let i = 0 ; i < books.length ; i++) {
    const book = books[i];
    if (book.id === id) {
      return book;
    }
    else {
      console.log("Could not find book.");
    }
  }
}


function partitionBooksByBorrowedStatus(books) {
  let booksArray = [];
  let booksCheckedOut = [];
  let booksReturned = [];
  // Filter out books that are checked out.
  for (let i = 0; i < books.length ; i++) {
    const book = books[i];
    const borrow = book.borrows[0];
    if (borrow.returned) {
      booksReturned.push(book);
    }
    else {
      booksCheckedOut.push(book);
    }
  }
  // Push to the array
  booksArray.push(booksCheckedOut);
  // Filter out books that have been returned
  // Push to the array
  booksArray.push(booksReturned);
  
  return booksArray;
}

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

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;

  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });

  result.splice(10);

  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
