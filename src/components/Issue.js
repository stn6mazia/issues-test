import React, { Component } from 'react';
import './components.scss';

export class Issue extends Component {
    render() {
        return (
            <div className="container">
                <div className="issue-box row">
                    <div className="col-12">
                        <div className="row issue-content">
                            <div className="col-2"><input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input> </div>
                            <div className="col-8"><p className="issue-title">Titulo</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}