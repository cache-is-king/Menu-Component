const fs = require('fs');
const file = fs.createWriteStream(`./sql/tags.csv`);

function writeTenMillionTimes(file, encoding) {
  let i = -1;
  write();
  function write() {
    let ok = true;
    while (i < 10000000 && ok) {
      i++;
      let primaryKey = i * 48;
      for (let j = 0; j < 48; j++){
        let menu_id = i;
        let vegan = Math.random() > .8;
        let gluten = Math.random() > .8;
        let vegetarian = Math.random() > .8;
        let input = `${primaryKey},${menu_id},${vegan},${gluten},${vegetarian}\n`
        primaryKey++;
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