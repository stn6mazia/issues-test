import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import './components.scss';

class Issues extends Component {
  constructor(props) {
    super(props);

    this.createIssue = this.createIssue.bind(this);
  }

  createIssue(item) {
    return (
    <li class="issue-item" key={item.key}>
      <div className="row">
        <div className="col-10 issue-text">
          <p>{item.text}</p>
        </div>
        <div className="col-1 issue-status">
          <a onClick={() => item.status = false} className="no-decoration">
            <span class="fas fa-check check"></span>
          </a>
        </div>
        <div className="col-1 issue-status">
          <a onClick={() => this.delete(item.key)} className="no-decoration">
            <span class="fas fa-times x"></span>
          </a>
        </div>
      </div>
    </li>
    )
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    let todoEntries = this.props.entries;
    let itens = todoEntries.map(this.createIssue);

    return (
      <div className="issue-box">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="theList">
                {itens}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Issues;