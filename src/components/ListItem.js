import React, { Component } from 'react';

export default class ListItem extends Component {

    render() {
        return (
            <div className="listItem">
                <img className="cover" src={this.props.data.img} alt={this.props.data.title} />
                <p>ID: {this.props.data.id} </p>
                <p>{this.props.data.title}</p>
                <button className="hidden" onClick={() => this.props.func(this.props.data._id)}> {this.props.type==="list"?"REMOVE" : "ADD"} </button>
            </div>
        )
    }
}