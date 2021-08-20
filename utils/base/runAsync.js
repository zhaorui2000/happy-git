/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import { get, isObject, isString } from "lodash-es";

// 主运行方法
const runAsync = async (...ps) => {
  return ps.reduce((pre, cur) => {
    return pre.then(
      () =>
        new Promise((res, rej) => {
          console.log(`\n ${"".padEnd(80, "⭐️")} \n`);
          if (isString(cur)) {
            return $([`${cur}\n`])
              .then(res)
              .catch(rej);
          }
          if (isObject(cur)) {
            return $([`${get(cur, "cmd", "")}\n`])
              .then((value) => {
                get(cur, "callBack", () => {})(value);
                res();
              })
              .catch((e) => {
                get(cur, "handleError", rej)(e, res);
              });
          }
        })
    );
  }, Promise.resolve());
};
export default runAsync;