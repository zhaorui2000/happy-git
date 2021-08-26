/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import runAsync from "./base/runAsync.js";
const getAllRemoteBranch = async ({ remoteName = "origin" } = {}) => {
  let remoteBranch = [];
  await runAsync(`git fetch ${remoteName} -p`, {
    cmd: `git branch -r`,
    callBack: ({ stdout: result }, res) => {
      remoteBranch = result
        .replace(/( )|(\S+(?=\/)\/HEAD \-> )|(\S+(?=\/))\/|()/g, "")
        .split("\n")
        .slice(0, -1);
      res();
    },
  });
  return remoteBranch;
};
export default getAllRemoteBranch;
