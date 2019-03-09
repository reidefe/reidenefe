import React, { Component } from 'react';


import TopNav from './menu';
import FirstNav from './FirstNav';
import SecNav from './secnav';
import Banner from './banner';






class Homepage extends Component {
  render() {
    return (
      
        <div>
          <SecNav/>
          <FirstNav/>
          <TopNav/>
          <Banner/>
        </div>
   
    );
  }
}

export default Homepage;
