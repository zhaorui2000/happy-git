/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */

import runAsync from "./base/runAsync.js";

const stashUnstage = async (...cmdList) => {
  let noPop = false;
  await runAsync({
    cmd: `git stash`,
    callBack: ({ stdout }, res) => {
      if (/No local changes to save/.test(stdout)) {
        noPop = true;
      }
      res();
    },
  });
  return cmdList.concat(noPop ? [] : [`git stash pop`, `git reset HEAD .`]);
};
export default stashUnstage;
