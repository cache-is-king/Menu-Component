import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuSelector from '../client/app/MenuSelector';
import fakeMenus from './fakeData';

Enzyme.configure({ adapter: new Adapter() });

describe('MenuSelector Component', () => {
  let component = '';
  test('should render lunch EntreeMenu correctly', () => {
    component = Enzyme.shallow(<MenuSelector menu={fakeMenus.lunch} type={'lunch'} tag={'none'} />);
    expect(component).toMatchSnapshot();
  });

  test('should render dinner EntreeMenu component correctly', () => {
    component = Enzyme.shallow(<MenuSelector menu={fakeMenus.lunch} type={'dinner'} tag={'none'} />);
    expect(component).toMatchSnapshot();
  });

test('should render dessert Menu component correctly', () => {
    component = Enzyme.shallow(<MenuSelector menu={fakeMenus.dessert} type={'dessert'} tag={'none'} />);
    expect(component).toMatchSnapshot();
  });

  test('should render filtered Menu component correctly', () => {
    component = Enzyme.shallow(<MenuSelector menu={fakeMenus.vegan} type={'dinner'} tag={'vegan'} />);
    expect(component).toMatchSnapshot();
  });
});
