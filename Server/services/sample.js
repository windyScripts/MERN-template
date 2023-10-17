import Sample from "../models/sample";

export const findOne = function(params) {
    return   Sample.findOne(params);
  };
  
export const findAll = function(params, sortParams = null) {
    return Sample.find(params).sort(sortParams);
  };
  
export const create = function(params) {
    const sample = new Sample(params);
    return sample.save();
  };