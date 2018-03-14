import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EntreeMenu from '../client/app/EntreeMenu';
import fakeMenus from './fakeData';

Enzyme.configure({ adapter: new Adapter() });

describe('EntreeMenu Component', () => {
  let component = '';
  test('should render entree lunch menu correctly', () => {
    component = Enzyme.shallow(<EntreeMenu menu={fakeMenus.lunch} type={'lunch'} tag={'none'} />);
    expect(component).toMatchSnapshot();
  });
});
