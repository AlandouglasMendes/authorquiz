import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types'





function Hero (){
  return (<div className="jumbotron col-10 offset-1"  id='headTitle' >
            <h4>Author Quiz</h4>
            <p>Select the book written by the author shown!</p>
          </div>);
}

const Book = ({title, onClick}) => (
  <div className="book" onClick={() => onClick(title)}>
    <h4 className="book-title">{title}</h4>
  </div>
);


function Turn ({author, books, highlight, onAnswerSelected}){
  
  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };

    return mapping[highlight]; 
  }
  
  
  return (<div className='row turn' style={{ backgroundColor : highlightToBgColor(highlight) }}>
    <div className='col-4 offset-1'>
      <img src={author.imageUrl} className="authorimage" alt="Author" />
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
    </div>
  </div>);  
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string,
};

function Continue(){
  return (<div></div>);
}

function Footer(){
  return(<div id='footer' className='row'>
          <p className="text-muted credit">All images are from <a href='https://commons.wikimedia.org/wiki/Main_Page'>Wikipedia Commons</a> and are in public domain.</p>
        </div>);
}

function AuthorQuiz({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid" >
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <p><Link to='/add'>Add an Author</Link> </p>
      <Footer />
    </div>);
}

export default AuthorQuiz;
