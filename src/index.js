import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, withRouter } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AddAuthorForm from './AddAuthorForm';
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

function resetState(){
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}



function reducer(state = {authors, turnData: getTurnData(authors), highlight:''}, action){
  switch(action.type){
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign({}, state, {highlight: isCorrect ? 'correct' : 'wrong'});
    case 'CONTINUE':
      return Object.assign({}, state, {
        highlight:'',
        turnData: getTurnData(state.authors)
      });
    default: return state;  
  }
  return state;
}

let store = Redux.createStore(reducer);




function App(){
  return <ReactRedux.Provider store={store}>
  <AuthorQuiz />
  </ReactRedux.Provider>;    
}

const AuthorWrapper = withRouter(({history}) =>
  <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }} />
);


  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={App} />
        <Route exact path='/add' component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>, 
    document.getElementById('root'));
  


//registerServiceWorker();
