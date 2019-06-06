'use strict';

const Category = require('../src/models/categories')
const category = new Category;

const supergoose = require('./supergoose');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('catagory tester', () => {
  it('can post a new category', () => {
    let categoryObj = {name:'Fruit'};
    return category.post(categoryObj)
    .then(record => {
      Object.keys(categoryObj).forEach(key => {
        expect(record[key]).toEqual(categoryObj[key]);
      });
    });
  });
  it('can get() a category', () => {
    let categoryObj = {name:'Fruit'};
    return category.post(categoryObj)
    .then(record => {
      return category.get(record._id)
      .then(category => {
        Object.keys(categoryObj).forEach(key => {
          expect(category[0][key]).toEqual(categoryObj[key]);
        });
      });
    });
  });
  it('can update a category', () => {
    let categoryObj1 = {name: "Fruit"};
    let categoryObj2 = {name: "Vegitables"};
    return category.post(categoryObj1)
    .then (record => {
      return category.put()
    })
  });

  it ('can delete a category', () => {
    let categoryObj = {name: "Vegitables"};

  });

});