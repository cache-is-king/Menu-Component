const menuList = require('../../helpers/menuGenerator');

const entreeMenu = menuList.entreeMenuGen();
const [entreeItem] = entreeMenu;
const dessertMenu = menuList.dessertMenuGen();
const [dessertItem] = dessertMenu;

describe('function menu generator functions', () => {
  describe('entree generator func', () => {
    it('should be an array', () => {
      expect(Array.isArray(entreeMenu)).toBe(true);
    });

    it('should have a length of 20', () => {
      expect(entreeMenu.length).toEqual(20);
    });

    it('should contain objects with properties: foodItem, cost, tags', () => {
      expect(Object.keys(entreeItem).length).toEqual(3);
      expect(Object.keys(entreeItem)).toContain('foodItem');
      expect(Object.keys(entreeItem)).toContain('cost');
      expect(Object.keys(entreeItem)).toContain('tags');
    });

    it('should contain the correct value types for each property', () => {
      expect(typeof entreeItem.foodItem).toBe('string');
      expect(typeof entreeItem.cost).toBe('number');
      expect(typeof entreeItem.tags).toBe('string');
    });
  });

  describe('dessert generator func', () => {
    it('should be an array', () => {
      expect(Array.isArray(dessertMenu)).toBe(true);
    });

    it('should have a length of 8', () => {
      expect(dessertMenu.length).toEqual(8);
    });

    it('should contain objects with properties: foodItem, cost, tags', () => {
      const keys = Object.keys(dessertItem);
      expect(keys.length).toEqual(3);
      expect(keys).toContain('foodItem');
      expect(keys).toContain('cost');
      expect(keys).toContain('tags');
    });

    it('should contain the correct value types for each property', () => {
      expect(typeof dessertItem.foodItem).toBe('string');
      expect(typeof dessertItem.cost).toBe('number');
      expect(typeof dessertItem.tags).toBe('string');
    });
  });
});