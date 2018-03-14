import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuItem from '../client/app/MenuItem';
import fakeMenus from './fakeData';

Enzyme.configure({ adapter: new Adapter() });

describe('MenuItem Component', () => {
  let component = '';
  test('should render single Menu Item component correctly', () => {
    component = Enzyme.shallow(<MenuItem item={fakeMenus.lunch[0]} />);
    expect(component).toMatchSnapshot();
  });
});
