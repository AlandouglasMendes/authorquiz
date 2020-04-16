import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
//import * as serviceWorker from './serviceWorker';

const authors = [
  {
  name: 'Mark Twain',
  imageUrl: 'images/authos/marktwain.jpg',
  imageSource: 'Wikipedia commons',
  books: 'The Adventures of Huckleberry-Finn'
},
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books,
  }
}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
//registerServiceWorker();
