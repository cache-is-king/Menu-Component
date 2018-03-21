const fs = require('fs');
const mongoose = require('mongoose');
const { exec } = require('child_process');
const menuItems = require('./helpers/menuGenerator');
const file = fs.createWriteStream(`./output.json`);

const restaurantSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  menu: {
    lunch: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
    dinner: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
    dessert: [{
      foodItem: String,
      cost: Number,
      tags: String,
    }],
  },
}).index({ name: 1 });

const Restaurantmenu = mongoose.model('restaurantmenu', restaurantSchema)

Restaurantmenu.init().then(() => mongoose.disconnect);

function writeTenMillionTimes(file, encoding) {
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    while (i > 0 && ok) {
      i--;
      const restName ="restaurant " + i;
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
        const command = "mongoimport -d silverspoon -c restaurantmenus --file output.json --port 27017 --numInsertionWorkers 8";
        exec(command);
      } else {
        ok = file.write(JSON.stringify(dataPoints)+ '\n', encoding);
      }
    }
    if (i > 0) {
      file.once('drain', write);
    }
  }
}
writeTenMillionTimes(file, 'utf8')
