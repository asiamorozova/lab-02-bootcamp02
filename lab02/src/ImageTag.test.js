import React from 'react';
import renderer from 'react-test-renderer';
import ImageTag from './ImageTag.js';


test('renders ImageTag.js correctly', () => {
    const imageTag = renderer
        .create(<ImageTag />)
        .toJSON();
    expect(imageTag).toMatchSnapshot();
});