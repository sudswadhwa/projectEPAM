import React from 'react';
import Home from './../components/home';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";
//import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('components --> home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
});
