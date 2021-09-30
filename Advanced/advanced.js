/* Advanced
Book List

Create an external JSON file that will contain the data( e.g. 

  `{'title': 'Javascript for Dummies',
   'author': 'Dummy Dumb Dumb',
   'read': 'false'
  }`

Iterate through the array of books. 

For each book, create a <p> element with the book title and author and append it to the page.

Each book should have an image cover.

Change the style of the book depending on whether you have read it or not. */

var booksParsed = JSON.parse(books);

for (let book of booksParsed) {

    if(book.read == "true") {
        bgColor = "rgb(202, 252, 3)";
        info = "read true";
    } else {
        bgColor = "rgb(252, 90, 3)";
        info = "read false";
    }

    document.getElementById("demo").innerHTML += `
    <p class="book-container" style="box-shadow: 1px 1px 10px ${bgColor};">
    <img src="${book.img}" width="200" height="200">
    <br>
    <b>${book.title}</b> <br> <small>${book.author}</small>
    <span style="color:${bgColor};">${info}</span>
    </p> 
    `;
}