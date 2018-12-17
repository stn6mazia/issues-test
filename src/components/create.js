import React, { Component } from 'react';


export class Create extends Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.addItem}>
                    <div className="row">
                        <div className="col-10">
                            <input type="text" className="input" placeholder="create a new Issue"></input>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success" type="submit">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}