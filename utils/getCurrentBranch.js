/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */

import runAsync from "./base/runAsync.js";
const getCurrentBranch = async () => {
  let result = "";
  await runAsync({
    cmd: `git branch | grep "*"`,
    callBack: ({ stdout }, res) => {
      result = stdout.slice(2);
      res();
    },
  });
  return result;
};
export default getCurrentBranch;
