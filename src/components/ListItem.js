import React, { Component } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listItem">
                <img className="cover" src={this.props.data.img} alt={this.props.data.title} />
                <p>ID: {this.props.data.id} </p>
                <p>{this.props.data.title}</p>
                <button onClick={() => this.props.func(this.props.data._id)}> {this.props.type=="list"?"REMOVE" : "ADD"} </button>
            </div>
        )
    }
}