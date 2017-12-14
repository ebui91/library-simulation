import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Browsing.css';


class Browsing extends Component{
  constructor(){
    super();

    this.state={
      bookList: []
    }
  }

  componentWillMount(){
    axios.get('/api/books').then(response=> {
      this.setState({ bookList: response.data });
      console.log(response.data);
    });
  }

  render(){
    const books= this.state.bookList.map((book, index)=> {
      return(
        <Link to={`/details/${ book.id }`} key={ index }>
          <div className='book-card'>
            <div className='book-img' style={{ backgroundImage: `url(${ book.img_url })` }}></div>

            <div className='book-info'>
              <h1>{ book.title }</h1>
              <p><span className='small-text'>by </span>{ book.author }</p>
            </div>

            <div className='card-right'>
              <p>IN STOCK: { book.instock ? 'Yes' : 'No'}</p>
              <button className='btn details-btn'>DETAILS</button>
            </div>
          </div>
        </Link>
      )
    });

    return(
      <div className='main-container'>
        <Navbar />
        <div className='main-body'>
          <div className='main-card'>
            { books }
          </div>
        </div>
      </div>
    )
  }
}

export default Browsing;
