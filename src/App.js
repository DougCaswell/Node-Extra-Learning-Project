import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List'
import axios from 'axios';

class App extends Component {
  constructor () {
    super()

    this.state = {
      userInput: '',
      url: '/api/items',
      list: [],
    }
  }

  updateUserInput(value) {
    this.setState({
      userInput: value
    })
  }

  componentDidMount() {
    axios.get( this.state.url ).then( res => {
      this.setState({ 
          list: res.data,
      });
    });
  }

  createItem(event) {
      let text = this.state.userInput;
      let promise = axios.post( this.state.url, {text} )
      promise.then( res => {
        console.log(res)
        this.setState({
          list: res.data, 
          userInput: ''
          });
      });
      event.preventDefault();
    }

  render() {
    return (
      <div>
        <div className="inputs">
          <form onSubmit={(event) => this.createItem(event)}>
            <input onChange={(event) => this.updateUserInput(event.target.value)} value={this.state.userInput} />
            <button onClick={(event) => this.createItem(event)} >add</button>
          </form>
        </div>
        <div className="List">
          <span><b>List</b></span>
          <List list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
