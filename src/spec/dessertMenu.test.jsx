import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DessertFilterMenu from '../client/app/DessertFilterMenu';
import fakeMenus from './fakeData';

Enzyme.configure({ adapter: new Adapter() });


describe('Dessert/Filter menu Component', () => {
  let component = '';
  test('should render dessert menu correctly', () => {
    component = Enzyme.shallow(<DessertFilterMenu menu={fakeMenus.dessert} type={'dessert'} tag={'none'} />);
    expect(component).toMatchSnapshot();
  });

  test('should render a dietary filtered lunch menu correctly', () => {
    component = Enzyme.shallow(<DessertFilterMenu menu={fakeMenus.vegan} type={'lunch'} tag={'vegan'} />);
    expect(component).toMatchSnapshot();
  });
});
