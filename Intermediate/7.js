const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

function getBookTitle(bookId) {
    return books.find(book => book.id === bookId).title;
      }
//console.log(getBookTitle(3))

function getOldBooks() {
    return books.filter(book => book.year <= 1950)
}

//console.log(getOldBooks())

function addGenre(){
    return books.map((book) => {
      return { ...book, genre: "classic" };
    });
  };
const updatedBooks = addGenre(books);
//console.log(updatedBooks);

const getTitles = (authorInitial) => {
  const filteredBooks = books.filter((book) =>
    book.author.startsWith(authorInitial)
  );
  const bookTitles = filteredBooks.map((book) => book.title);

  return bookTitles;
};
//console.log(getTitles("A"))
