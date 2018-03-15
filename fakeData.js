const faker = require('faker');
const fs = require('fs');
const menuItems = require('./helpers/menuGenerator');
const file = fs.createWriteStream(`./output.json`);

function writeOneMillionTimes(file, encoding) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      const restName = faker.lorem.word() + ' restaurant ' + i;
      const dataPoints = {  id: i, 
                        name: restName, 
                        menu:{
                          lunch: menuItems.entreeMenuGen(),
                          dinner: menuItems.entreeMenuGen(),
                          dessert: menuItems.dessertMenuGen(),
                        } 
                      }
      if (i === 0) {
        file.write(JSON.stringify(dataPoints)+ '\n', encoding);
      } else {
        ok = file.write(JSON.stringify(dataPoints)+ '\n', encoding);
      }
    }
    if (i > 0) {
      file.once('drain', write);
    }
  }
}
writeOneMillionTimes(file, 'utf8')
