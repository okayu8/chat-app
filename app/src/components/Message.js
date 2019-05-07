import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/Message.css';

export default class Message extends Component {
    render() {
        return (
            <div className="message" >
                <div className="message-top">
                    <span className="client-name">{this.props.message.name}</span>
                    <span className="timestamp">{this.props.message.timestamp}</span>
                </div>
                <div className="message-text">
                    {this.props.message.text}
                </div>
            </div>
        );
    }
}

