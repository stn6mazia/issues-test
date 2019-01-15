import React, { Component } from 'react';
import './components.scss';

class Issues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true,
      open: "#28a745",
      closed: "rgb(143, 143, 143)"
    }

    this.createIssue = this.createIssue.bind(this);
    this.update = this.update.bind(this);
  }

  setOpenIssue() {
    this.setState({
      pending: true
    })
    console.log(this.state.pending.value);
  }

  setclosedIssue() {
    this.setState({
      pending: false
    })
    console.log(this.state.pending.value);
  }

  createIssue(item) {
    return (
      <li className="issue-item" key={item.key}>
        <div className="row">
          <div className="col-1">
            {
              this.state.pending ?
                <div className="btn-group" data-toggle="buttons">
                  <button style={{ backgroundColor: this.state.open }} onClick={() => this.setclosedIssue()} className="btn btn-success btn-no-margin"></button>
                </div>
                : null
            }
            {
              !this.state.pending ?
                <div className="btn-group" data-toggle="buttons">
                  <button style={{ backgroundColor: this.state.closed }} onClick={() => this.setOpenIssue()} className="btn btn-success btn-no-margin"></button>
                </div>
                : null
            }
          </div>
          <div className="col-10 issue-text">
            {
              !this.state.editing && this.state.pending ?
                <p className="issue-title">{item.text}</p>
                : null
            }
            {
              !this.state.editing && !this.state.pending ?
                <p className="issue-title-risk">{item.text}</p>
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