import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    status1: true,
    status2: false,
    status3: false,
  }

  changeColor = e => {
    setTimeout(()=>{
      this.setState({
        status1: true,
        status2: false,
        status3: false
      })
    }, 1000)

    setTimeout(()=>{
      this.setState({
        status1: false,
        status2: true,
        status3: false
      })
    }, 2000)
    setTimeout(()=>{
      this.setState({
        status2: false,
        status3: true
      })
    }, 3000)
  }

  render() {
    const { status1, status2, status3 } = this.state;
    return (
      <div className='app'>
        <div className="lights">
          <div className="light1" onClick={this.changeColor} style={{ backgroundColor: status1 === true ? "red" : null }}></div>
          <div className="light2" onClick={this.changeColor} style={{ backgroundColor: status2 === true ? "yellow" : null }} ></div>
          <div className="light3" onClick={this.changeColor} style={{ backgroundColor: status3 === true ? "green" : null }}></div>
        </div>
      </div>
    )
  }
}

export default App;
