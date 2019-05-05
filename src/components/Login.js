import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/Login.css';

export default class Login extends Component {
    render() {
        return (
            <div id="init">
                <form onSubmit={props.participantSubmit}>
                    <input type="text"
                        placeholder="Enter name here..."
                        id="participant-form" />
                </form>
            </div>
        );
    }

}

