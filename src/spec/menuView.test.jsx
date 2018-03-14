import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuView from '../client/app/MenuView';

Enzyme.configure({ adapter: new Adapter() });

describe('MenuView Component', () => {
  let component = '';
  beforeAll(() => { component = Enzyme.shallow(<MenuView id={90976} />); });
  test('should render correctly', () => {
    expect(Enzyme.shallow(<MenuView />)).toMatchSnapshot();
  });

  test('should set "MenuType" state property correctly', () => {
    component.instance().menuSelect({ target: { value: 'lunch' } });
    expect(component.state().menuType).toBe('lunch');
    expect(component.state().tag).toBe('none');
  });

  test('should set "tag" state property correctly', () => {
    component.instance().filterSelect({ target: { value: 'gluten-free' } });
    expect(component.state().tag).toBe('gluten-free');
    expect(component.state().tag).not.toBe('pescatarian');
  });

  // need to test ajax call here --  even though it is tested in db.test.js
});
