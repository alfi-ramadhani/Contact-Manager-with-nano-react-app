import React, { Component } from 'react';

class Test extends Component {

  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3 className="display-6">{title}</h3>
        <p className="lead">{body}</p>
      </div>
    );
  }
}

export default Test;