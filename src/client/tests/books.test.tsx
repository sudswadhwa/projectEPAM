import React from 'react';
import BookList from './../components/books';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as ReactDOM from "react-dom";
//import { expect } from 'chai';

configure({ adapter: new Adapter() });

describe('components --> BookList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
  });
  it('should have h1', () => {
    const _wrapper = shallow(<BookList />)
    expect(_wrapper.find('h1')).toHaveLength(1)
  });
});
