import React, { Component } from 'react';
import Issues from './components/issues';
import './todolist.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itens: [],
      search: true,
      create: false,
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

  searchItem() {
    this.setState({
      search: true,
      create: false
    })
  }

  createItem() {
    this.setState({
      search: false,
      create: true
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
              <h1>OLAR</h1>
              <div className="row">
                <div className="col-6 buton-top">
                  <button className="btn btn-success" onClick={() => this.createItem()}>Create New Item</button>
                </div>
                <div className="col-6 buton-top">
                  <button className="btn btn-default" onClick={() => this.searchItem()}>Search Item</button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {
                    this.state.create ?
                      <form onSubmit={this.addItem} className="row">
                        <input ref={(a) => this._inputElement = a} type="text" className="form-control col-10" placeholder="Create Item"></input>
                        <button type="submit" className="btn btn-success col-2"> Add Item </button>
                      </form>
                      : null
                  }
                  {
                    this.state.search ?
                      <div className="row">
                        <input type="text" className="form-control col-12" placeholder="Seach Item" value={this.state.searchInput} onChange={this.updateSearch.bind(this)}></input>
                      </div>
                      : null
                  }
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
                  !this.state.itens ?
                    <p className="no-issue">You have no Issues</p>
                    : null
                }
                <Issues entries={this.state.itens} delete={this.deleteItem} editItem={this.editItem} />
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