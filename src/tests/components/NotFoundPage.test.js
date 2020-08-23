import React from 'react';
import NotFound from '../../components/NotFoundPage';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFound />);
  expect(toJSON(wrapper)).toMatchSnapshot();


});
