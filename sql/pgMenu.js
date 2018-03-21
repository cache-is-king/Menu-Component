const fs = require('fs');
const menuItems = require('../helpers/menuGenerator');
const file = fs.createWriteStream(`./sql/menu.csv`);

function writeTenMillionTimes(file, encoding) {
  let i = -1;
  write();
  function write() {
    let ok = true;
    while (i < 10000000 && ok) {
      i++;
      var primaryKey = i * 48;
      let randomLunchItem = menuItems.entreeMenuGen();
      let randomDinnerItem = menuItems.entreeMenuGen();
      let randomDessertItem = menuItems.dessertMenuGen()
      for (let j = 0; j < 20; j++){  
        
        let lunchItem = randomLunchItem[j].foodItem;
        let lunchPrice = randomLunchItem[j].cost;
        let lunchInput = `${primaryKey},${i},${lunchItem},lunch,${lunchPrice}\n`;
        primaryKey++;
        let dinnerItem = randomDinnerItem[j].foodItem;
        let dinnerPrice = randomDinnerItem[j].cost;
        let dinnerInput = `${primaryKey},${i},${dinnerItem},dinner,${dinnerPrice}\n`
        primaryKey++;
        let dessertInput = '';
        if (j < 8){
          let dessertItem = randomDessertItem[j].foodItem;
          let dessertPrice = randomDessertItem[j].cost;
          dessertInput = `${primaryKey},${i},${dessertItem},dessert,${dessertPrice}\n`
          primaryKey++;
        }
        let input = lunchInput + dinnerInput + dessertInput;

      if (i === 10000000) {
        file.write(input, encoding);
      } else {
        ok = file.write(input, encoding);
      }
      }
    }
    if (i < 10000000) {
      file.once('drain', write);
    }
  }
}

writeTenMillionTimes(file, 'utf8')