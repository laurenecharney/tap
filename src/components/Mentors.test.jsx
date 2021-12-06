import React from 'react';
import ReactDOM from 'react-dom';
import Mentors from './Mentors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mentors />, div);
  ReactDOM.unmountComponentAtNode(div);
});
