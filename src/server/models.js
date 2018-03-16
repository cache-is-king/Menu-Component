const dbHelpers = require('../../db/dbHelpers');

module.exports = {
  menuType: (req, res) => {
    const { meal, id } = req.params;
    const queryObj = {
      name: id,
      query: `menu.${meal}`,
    };
    dbHelpers.find(queryObj, (err, result) => {
      res.send(result.menu[meal]);
    });
  },
  filterBy: (req, res) => {
    const { meal, tag, id } = req.params;
    const queryObj = {
      name: id,
      query: `menu.${meal}`,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const menu = result.menu[meal];
      const filteredMenu = menu.filter(item => item.tags === tag);
      res.send(filteredMenu);
    });
  },
};
