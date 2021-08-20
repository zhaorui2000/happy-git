/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import { get, set, isObject, isUndefined } from "lodash-es";
// objB 合并入 objA
const mergeConfig = (objA = {}, objB = {}) => {
  const helper = (a, b, path = []) => {
    Object.entries(b).map(([key, value]) => {
      path = path.concat(key);
      if (isObject(value)) {
        if (isUndefined(get(a, key, undefined))) {
          set(a, path, value);
        } else {
          helper(get(a, key), value);
        }
      } else {
        set(a, key, value);
      }
    });
  };
  helper(objA, objB);
  return objA;
};
export default mergeConfig;