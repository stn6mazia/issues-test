import React, { Component } from 'react';

export class FooterButtons extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-primary">botão</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">botão</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">botão</button>
                    </div>
                </div>
            </div>
        );
    }
}