function getTotalBooksCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    total++;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    total++;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length ; i++) {
    const book = books[i];
    const borrow = book.borrows[0];
    if (!borrow.returned) {
      total++;
    }
  }
  return total;
}

function sortAndReturnTopFive (elements) {
  elements.sort((elementA, elementB) => elementB.count - elementA.count);
  elements.splice(5);
}

function getMostCommonGenres(books) {
  const result = books.reduce((accum, book) => {
    const genre = book.genre;
    const genreInfo = accum.find((bookGenre) => bookGenre.name === genre);

    if (!genreInfo) {
      const newGenreInfo = {
        name: genre,
        count: 1,
      };
      accum.push(newGenreInfo);
    } else {
      genreInfo.count++;
    }

    return accum;
  }, []);

  sortAndReturnTopFive(result);

  return result;
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };
    return popularityInfo;
  });

  sortAndReturnTopFive(result);

  return result;
}

function getBooksByAuthorId(books, author) {
  for (let i = 0 ; i < books.length ; i++) {
    const book = books[i];
    if (book.id === author.id) {
      return book;
    }
    else {
      console.log("Could not find book.");
    }
  }
}

function getMostPopularAuthors(books, authors) {
 
  const result = books.map((book) => {
    const author = authors.find((author) => {
      return author.id === book.authorId;
    });
    const authorName = `${author.name.first} ${author.name.last}`;
    const popularAuthors = {
      name: authorName,
      count: book.borrows.length,
    };

    return popularAuthors;
  });

  result.sort((authorA, authorB) => authorB.count - authorA.count);

  result.splice(5);

  return result;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
