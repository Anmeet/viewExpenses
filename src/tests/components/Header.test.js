import React from 'react';
import {Header} from '../../components/Header';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout = {() => {}} />);
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find('h1').text()).toBe('Expensify');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

//Should call startLogout on buttonclick
test('should call start logout on button click', () => {
   const startLogout = jest.fn();
   const wrapper = shallow(<Header startLogout = {startLogout} />)
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled()
})

//login test file -> should call startLogin on button click