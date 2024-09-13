const createBook = document.getElementById('createBook');
const form = document.querySelector('.form');
const author = document.getElementById('author');
const title = document.getElementById('title');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const create = document.getElementById('create');
const library = document.getElementById('library')

const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary (){
    myLibrary.push(new Book(author.value, title.value, pages.value, read.checked))
    console.log(myLibrary)
};

createBook.addEventListener('click', () => {
    form.style.cssText = 'display: block'
    author.value = '';
    title.value = '';
    pages.value = '';
    read.checked = '';
});

create.addEventListener('click', () => {
    addBookToLibrary()
    form.style.cssText = 'display: none';

    const book = document.createElement('div');
    book.classList.add('book');
    book.innerHTML = `
    <h3>${author.value}</h3>
    <p>${title.value}</p>
    <p>${pages.value}</p>
    <button>${read.checked}</button>
    `
    library.appendChild(book)
});