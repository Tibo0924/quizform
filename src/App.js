import React, { Component } from 'react';
import { v1 } from 'uuid';

import Form from './components/form';
import Images from './components/images';
import Comments from './components/comments';
import ReasonTags from './components/reasonTag';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      reasons: [],
    }
  };

  componentDidMount() {
    this.getTags();
  };

  getTags = () => {
    fetch('./example-tags')
      .then(res => res.json())
      .then(res => {
        const newState = res.values.map(reason => ({text: reason, id: v1()}));
        this.setState({ reasons: newState });
      });
  };
  
  addReason = (reason) => {
    const reasonObject = {
      text: reason,
      id: v1(),
    };
    this.setState({
      reasons: [...this.state.reasons, reasonObject]
    });
  };

  removeReason = (id) => {
    const newState = this.state.reasons.filter(reason => reason.id !== id)
    this.setState({
      reasons: newState,
    })
  };
  
  render() {
    const { reasons } = this.state;
    return (
      <div className="App" role="main">
        <Images />
        <Form addReason={this.addReason} />
        <ReasonTags
          removeReason={this.removeReason}
          reasons={reasons}
        />
        <Comments />
      </div>
    );
  }
}

export default App;