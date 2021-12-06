import React from 'react';
import ReactDOM from 'react-dom';
import Mentees from './Mentees';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mentees />, div);
  ReactDOM.unmountComponentAtNode(div);
});
