import React from 'react';
import ReactDOM from 'react-dom';
import PsychoButton from 'index';

describe('<index />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PsychoButton />, div);
    });
});
