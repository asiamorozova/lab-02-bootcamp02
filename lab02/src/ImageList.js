import React, { Component } from 'react';
import images from './images';



export default class ImageList extends Component {
render() {
    images.map((image)=>{
        return <li>
        <span>
            {image.url}
            {image.title}
            {image.description}
            number of horns {image.horns}
            {image.keyword}
            </span>   
    </li>

    })}}