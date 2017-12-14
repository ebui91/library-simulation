import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import Browsing from './components/Browsing/Browsing.js';
import BookDetails from './components/BookDetails/BookDetails.js';

export default(
  <BrowserRouter>
    <div>
      <Route component= { Browsing } path='/browsing' />
      <Route component= { BookDetails } path='/details/:id' />
    </div>
  </BrowserRouter>
)
