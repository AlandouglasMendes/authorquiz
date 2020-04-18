import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import { shuffle, sample } from 'underscore';
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

function getTurnData(authors){
  const allBooks = authors.reduce(function (p, c, i){
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
    author.books.some((title) => 
    title === answer))
  }
}

const state = {
  turnData: getTurnData(authors),
  highlight: ''
}

function onAnswerSelected(answer){
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}
function render(){
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
  
}

render();
//registerServiceWorker();
