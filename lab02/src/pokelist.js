import React, { Component } from 'react';

export default class Container extends Component {
    render() {
        return <li>
            <div className="title-container">
                <h2>{this.props.pokemon.pokemon}</h2></div>
            <p className="description-container">Type:{this.props.pokemon.type_1}</p>
            <p className="">Number of Horns: {this.props.image.horns}</p>
            <div className="">
                <img
                    alt={this.props.image.url}
                    src={this.props.image.url} />
            </div>
        </li>

    }
}
© 2020 GitHub, Inc.