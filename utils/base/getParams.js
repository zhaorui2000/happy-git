/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import minimist from "minimist";
import {isUndefined} from "lodash-es"
const getParams = (key) => {
  if(isUndefined(key)){
    return minimist(process.argv.slice(2));
  }
  return minimist(process.argv.slice(2))[key];
};
export default getParams;