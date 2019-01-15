import React, { Component } from 'react';
import Issues from './components/issues';
import './todolist.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: [],
      create: true,
      open: "",
      closed: "",
      allIssues: "#28a745",
      openedIssues: "",
      closedIssues: "",
      searchInput: ''
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }


  addItem(e) {
    if (this._inputElement.value !== '') {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        status: true
      };

      this.setState((prevState) => {
        return {
          itens: prevState.itens.concat(newItem)
        }
      });

      this._inputElement.value = '';

      e.preventDefault();
    }
  }

  editItem(newValue) {
    let itemKey = this.state.itens.find(item => item.key)
    itemKey.text = newValue;
    this.setState({
      itemKey
    });
  }

  createItem() {
    this.setState({
      search: true,
      create: false
    })
  }

  deleteItem(key) {
    let filteredItens = this.state.itens.filter((item) => {
      return (item.key !== key)
    });

    this.setState({
      itens: filteredItens
    })
  }

  updateSearch(evt) {
    this.setState({
      searchInput: evt.target.value.substr(0, 20)
    });
  }

  seeAllIssues() {
    this.setState({
      allIssues: "#28a745",
      openedIssues: "rgb(143, 143, 143)",
      closedIssues: "rgb(143, 143, 143)"
    })
  }

  seeOpenedIssues() {
    this.setState({
      allIssues: "rgb(143, 143, 143)",
      openedIssues: "#28a745",
      closedIssues: "rgb(143, 143, 143)"
    })
  }

  seeClosedIssues() {
    this.setState({
      allIssues: "rgb(143, 143, 143)",
      openedIssues: "rgb(143, 143, 143)",
      closedIssues: "#28a745"
    })
  }

  render() {
    let filteredItems = this.state.itens.filter(
      (item) => {
        return item.text.indexOf(this.state.searchInput) !== -1;
      }
    )
    return (
      <div className="todoListMain">
        <div className="container">
          <div className="row header">
            <div className="col-3"></div>
            <div className="col-6">
              <h1 className="title">Your Kamban</h1>
              <div className="row">
                <div className="col-12">
                  <form onSubmit={this.addItem} className="row">
                    <input ref={(a) => this._inputElement = a} type="text" className="col-12 create-input" placeholder="Create Item"></input>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row content">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="issues-box">
                {
                  this.state.itens.length === 0 ?
                    <p className="no-issue">You have no Issues</p>
                    : null
                }
                <Issues entries={this.state.itens} delete={this.deleteItem} editItem={this.editItem} />
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row buttons-section">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <div className="button-left">
                    <button style={{backgroundColor: this.state.allIssues}} onClick={() => this.seeAllIssues()} className="btn btn-black">All Issues</button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="button">
                    <button style={{backgroundColor: this.state.openedIssues}} onClick={() => this.seeOpenedIssues()} className="btn btn-black">Open</button>
                  </div>
                </div>
                <div className="col-4">
                  <div className="button-right">
                    <button style={{backgroundColor: this.state.closedIssues}} onClick={() => this.seeClosedIssues()} className="btn btn-black">Closed</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;