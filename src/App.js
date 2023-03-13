import React from 'react';

import { About, Work, Skills, Header, Footer } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App;