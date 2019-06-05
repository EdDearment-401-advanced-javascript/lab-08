'use strict';

const Category = require('../src/models/categories')
const category = new Category;

const supergoose = require('./supergoose');

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
    .then(product => {
      return category.get(product._id)
      .then(item => {
        Object.keys(categoryObj).forEach(key => {
          expect(category[0][key]).toEqual(obj[key]);
        });
      });
    });
  });
  it('can update a category', () => {
    
  });
  it ('can delete a category', () => {

  })
});