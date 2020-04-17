import React from 'react';
import './App.css';
import './bootstrap.min.css';





function Hero (){
  return (<div className="jumbotron col-10 offset-1"  id='headTitle' >
            <h4>Author Quiz</h4>
            <p>Select the book written by the author shown!</p>
          </div>);
}
function Book({title}){
  return (<div className="answer">
      <h4>{title}</h4>
    </div>);
}


function Turn ({author, books}){
  return (<div className='row turn' style={{ background : 'white' }}>
    <div className='col-4 offset-1'>
      <img src={author.imageUrl} className="authorimage" alt="Author" />
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} />)}
    </div>
  </div>);  
}

function Continue(){
  return (<div></div>);
}

function Footer(){
  return(<div id='footer' className='row'>
          <p className="text-muted credit">All images are from <a href='https://commons.wikimedia.org/wiki/Main_Page'>Wikipedia Commons</a> and are in public domain.</p>
        </div>);
}

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid" >
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>);
}

export default AuthorQuiz;
