import React from 'react';
import renderer from 'react-test-renderer';
import HornedList  from './HornedList.js';


test('renders HornedList.js correctly', () => {
    const imageList = renderer
        .create(<HornedList />)
        .toJSON();
    expect(imageList).toMatchSnapshot();
});