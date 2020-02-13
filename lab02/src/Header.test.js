import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js';


test('renders Header.js correctly', () => {
    const header = renderer
        .create(<Header />)
        .toJSON();
    expect(header).toMatchSnapshot();
});