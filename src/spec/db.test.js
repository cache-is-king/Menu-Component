const sampleData = require('../../data/sampleData');
const db = require('../../db/dbHelpers');
const mongoose = require('mongoose');

describe('database helpers - save and find', () => {
  beforeAll(() => mongoose.connect('mongodb://localhost/silverspoon'));
  afterAll(() => mongoose.disconnect());

  // it('should save all data items to test database', (done) => {
  //   expect.assertions(1);
  //   db.find({ query: '{}' }, (err, docs) => {
  //     if (err) { throw err; }
  //     expect(docs.length).toBe(119);
  //     done();
  //   });
  // });

  // nb: the sample data contains a duplication of the restaurant with id: 89104
  it('should not save duplicate restaurants', async (done) => {
    expect.assertions(1);
    db.find({ name: 'voluptatum restaurant 9999000' }, (err, docs) => {
      if (err) { throw err; }
      expect(docs.menu.lunch[0].cost).toBe(10);
      done();
    });
  });

  // it('should not insert duplicate restaurants when the same object is saved', async (done) => {
  //   expect.assertions(1);
  //   db.save({ data: sampleData, model: db.Restaurant }, (result) => {
  //     if (result) {
  //       db.find({ query: '{}' }, (err, docs) => {
  //         if (err) { throw err; }
  //         console.log(docs.length);
  //         expect(docs.length).toBe(119);
  //         done();
  //       });
  //     }
  //   });
  // });

//   it('should return specified data fields only', (done) => {
//     expect.assertions(4);
//     db.find({ query: 'menu.dinner' }, (err, docs) => {
//       if (err) { throw err; }
//       const docsObj = docs[0].toObject();
//       expect(docs.length).toBe(1);
//       expect(docs[0].id).toBe(90976);
//       expect(Object.keys(docsObj)).toEqual(expect.arrayContaining(['menu', 'id', '_id']));
//       expect(Object.keys(docsObj.menu)).toEqual(expect.arrayContaining(['dinner']));
//       done();
//     });
//   });
});
