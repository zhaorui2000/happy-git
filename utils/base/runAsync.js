/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import { get, isFunction, isObject, isString } from "lodash-es";

// 主运行方法
const runAsync = async (...ps) => {
  return ps.reduce((pre, cur) => {
    return pre.then(
      () =>
        new Promise(async (res, rej) => {
          console.log(`\n ${"".padEnd(80, "⭐️")} \n`);
          const helper = (item) => {
            if (isString(item)) {
              return $([`${item}\n`])
                .then(res)
                .catch(rej);
            }
            if (isObject(item)) {
              return $([`${get(item, "cmd", "")}\n`])
                .then((value) => {
                  get(item, "callBack", () => {})(value, res, rej);
                })
                .catch((e) => {
                  get(item, "handleError", rej)(e, res);
                });
            }
            console.log(chalk.bold.red("不支持 'Object' 'String' 以外的参数类型"));
          };
          if (isFunction(cur)) {
            return helper(cur(await pre));
          } else {
            return helper(cur);
          }
        })
    );
  }, Promise.resolve());
};
export default runAsync;
