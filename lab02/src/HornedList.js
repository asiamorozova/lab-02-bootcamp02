import React, { Component } from 'react';
import Container from './ImageTag.js';
import images from './images.js';


export default class HornedList extends Component {

    state = { selected: null };
    render() {


        const imageNode = images.filter(image => {
            if (!this.state.selected) return true;
            return image.keyword === this.state.selected;

        })
            .map(image => <Container image={
                image} />);
        const handleChange = e => {
            this.setState({ selected: e.target.value });
        };
        console.log(imageNode)
        return (
            <>
                <section className="options">
                    <select className="creature-filter" onChange={handleChange}>
                        <option value="" defaultValue>
                            All
          </option>
                        <option value="narwhal">Narwhal</option>
                        <option value="unicorn">Unicorn</option>
                        <option value="rhino">Rhino</option>
                        <option value="unilego">Unilego</option>
                        <option value="triceratops">Triceratops</option><option value="markhor">Markhor</option><option value="mouflon">Mouflon</option><option value="addax">Addax</option><option value="chameleon">Chameleon</option><option value="lizard">Lizard</option><option value="dragon">Dragon</option>
                    </select>
                </section>
                <ul className="image">{imageNode}</ul>
            </>
        );

    }
}
