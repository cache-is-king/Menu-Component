const dbHelpers = require('../../db/dbHelpers');

module.exports = {
  menuType: (req, res) => {
    // res.set({ 'Access-Control-Allow-Origin': '*' });
    const { meal, id } = req.params;
    const queryObj = {
      id: id,
      query: `menu.${meal}`,
    };
    dbHelpers.find(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      res.send(resultObj.menu[meal]);
    });
  },
  filterBy: (req, res) => {
    // res.set({ 'Access-Control-Allow-Origin': '*' });
    const { meal, tag, id } = req.params;
    const queryObj = {
      id: id,
      query: `menu.${meal}`,
    };
    dbHelpers.findOne(queryObj, (err, result) => {
      const resultObj = result[0].toObject();
      const menu = resultObj.menu[meal];
      const filteredMenu = menu.filter(item => item.tags === tag);
      res.send(filteredMenu);
    });
  },
};
