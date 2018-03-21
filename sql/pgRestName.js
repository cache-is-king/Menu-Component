const fs = require('fs');
const file = fs.createWriteStream(`./sql/restName.csv`);

function writeTenMillionTimes(file, encoding) {
  let i = -1;
  write();
  function write() {
    let ok = true;
    while (i < 10000000 && ok) {
      i++;
        let restName = `restaurant ${i}`;
      if (i === 10000000) {
        file.write(`${i}, ${restName}`+ '\n', encoding);
      } else {
        ok = file.write(`${i}, ${restName}`+ '\n', encoding);
      }
    }
    if (i < 10000000) {
      file.once('drain', write);
    }
  }
}

writeTenMillionTimes(file, 'utf8')