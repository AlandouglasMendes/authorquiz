import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
//import * as serviceWorker from './serviceWorker';

const authors = [
  {
  name: 'Mark Twain',
  imageUrl: 'images/authors/twain.jpg',
  imageSource: 'Wikipedia commons',
  books: ['The Adventures of Huckleberry-Finn']
},
{
  name: 'J. K. Rowling',
  imageUrl: 'images/authors/rowling.jpg',
  imageSource: 'Wikipedia commons',
  books: ['Harry potter series']
},
{
  name: 'Joseph Conrad',
  imageUrl: 'images/authors/conrad.jpg',
  imageSource: 'Wikipedia commons',
  books: ['Heart of darkness']
},
{
  name: 'Charles Dickens',
  imageUrl: 'images/authors/dickens.jpg',
  imageSource:'Wikipedia commons',
  books: ['A tale of Two Cities']
},
{
  name: 'Shakespeare',
  imageUrl: 'images/authors/shakespeare.jpg',
  imageSource: 'Wikipedia commons',
  books: 'Macbeth'
}
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books,
  }
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
//registerServiceWorker();
