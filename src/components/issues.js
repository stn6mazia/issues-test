import React, { Component } from 'react';
import './components.scss';

class Issues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      done: false
    }

    this.createIssue = this.createIssue.bind(this);
    this.update = this.update.bind(this);
  }

  createIssue(item) {
    return (
      <li className="issue-item" key={item.key}>
        <div className="row">
          <div className="col-9 issue-text">
            {
              !this.state.editing ?
                <p>{item.text}</p>
                : null
            }
            {
              this.state.editing ?
                <form onSubmit={this.update}>
                  <div className="row">
                    <div className="col-10">
                      <input className="form-control editing" type="text" defaultValue={item.text} ref={(value) => this.input = value} />
                    </div>
                    <div className="col-2">
                      <button className="btn btn-success" type="submit" onClick={this.update} >Save</button>
                    </div>
                  </div>
                </form>
                : null
            }
          </div>
          <div className="col-1 issue-status">
            {
              !this.state.editing ?
                <a onClick={() => this.edit()} className="no-decoration">
                  <span class="fas fa-pencil-alt edit"></span>
                </a>
                : null
            }
          </div>
          <div className="col-1 issue-status">
            {
              !this.state.done ?
                <a onClick={() => {
                  item.status = false;
                  this.changeStatus()
                  }} className="no-decoration">
                  <span class="fas fa-check check"></span>
                </a>
                : null
            }
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

  edit() {
    this.setState({
      editing: true
    });
  }

  changeStatus() {
    this.setState({
      done: true
    });
  }

  update(e) {
    e.preventDefault();
    this.setState({
      editing: false
    })
    this.props.editItem(this.input.value)
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