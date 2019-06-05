'use strict';

class Categories {

  constructor() {
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    
  }

  delete(_id) {
  }

}

module.exports = Categories;
