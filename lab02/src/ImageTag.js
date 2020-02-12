import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return <li>
            <div className="title-container">
                <h2>{this.props.image.title}</h2></div>
            <p className="description-container">{this.props.image.description}</p>
            <p className="horns-container">Number of Horns: {this.props.image.horns}</p>
            <div className="image-container">
                <img
                    alt={this.props.image.url}
                    src={this.props.image.url} />
            </div>
        </li>

    }
}