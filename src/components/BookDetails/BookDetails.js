import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import axios from 'axios';
import './BookDetails.css';


class BookDetails extends Component{
  constructor(){
    super();

    this.state= {
      book: {}
    }
  }

  componentWillMount(){
    axios.get(`/api/details/${this.props.match.params.id}`).then(response=> {
      this.setState({ book: response.data[0] });
    });
  }

  render(){
    const book= this.state.book;
    return(
      <div className='main-container'>
        <Navbar />
        {console.log('STATE', this.state.book)}
        <div className='main-body'>
          <div className='details-card'>
            <h1>DETAILS</h1>

            <div className='details-inner-card'>
              <div id='details-book-img' className='book-img' style={{ backgroundImage: `url(${ book.img_url })` }}></div>

              <div className='details-col'>
                <p><span className='details-title'>TITLE: </span> { book && book.title }</p>
                <p><span className='details-title'>AUTHOR: </span> { book && book.author }</p>
                <p><span className='details-title'>GENRE: </span> { book && book.genre }</p>
                <p><span className='details-title'>DESCRIPTION: </span></p>
                <p id='details-description'>{ book && book.description }</p>
              </div>

              <div className='btns-col'>
                <div className='details-btn-col'>
                  <button className='btn details-btn'>EDIT</button>
                  <button className='btn details-btn'>DELETE</button>
                </div>
                <button className='btn details-btn'>+ADD TO CART</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default BookDetails;
