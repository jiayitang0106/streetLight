import React from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';


class App extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return(
      <div>
        <nav className='nav-bar'>
          <div className='nav-icon'><i class="material-icons">menu</i></div>
          <ul className='nav-items'>
            <li>HOME</li>

            <li>LIFESTYLE</li>
            <li>TECHNOLOGY</li>
            <li>VIDEO</li>
            <li>TRAVEL</li>
            <li>FEATUREAS</li>
          </ul>
        </nav>
        <div className='images'>
          <img src={image1} alt='ppl'/>
          <img src={image2} alt='sport'/>
          <img src={image3} alt='man'/>
        </div>
      </div>

    )
  }
}

export default App;
