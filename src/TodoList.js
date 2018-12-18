import React, { Component } from 'react';
import Issues from './components/issues';
import './todolist.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

  deleteItem(key) {
    let filteredItens = this.state.itens.filter((item) => {
      return (item.key !== key)
    });

    this.setState({
      itens: filteredItens
    })
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="container">
          <div className="row header">
            <div className="col-3"></div>
            <div className="col-6">
              <h1>OLAR</h1>
              <form onSubmit={this.addItem} className="row">
                <input ref={(a) => this._inputElement = a} type="text" className="form-control col-10" placeholder="create a Item"></input>
                <button type="submit" className="btn btn-primary col-2"> Add Item </button>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row content">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="issues-box">
                <Issues entries={this.state.itens} delete={this.deleteItem}/>
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