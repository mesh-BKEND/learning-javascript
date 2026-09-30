function Book(title, author, numberOfPages, hasRead) {
  if (!new.target) {
    throw Error(
      "you cannot call the constructor function without the 'new' keyword",
    );
  }
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.hasRead = hasRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${hasRead}`;
  };
}

const book = new Book("The Hobbit", "J.R.R. Tolkien", 299, "not read");
console.log(book.info());
