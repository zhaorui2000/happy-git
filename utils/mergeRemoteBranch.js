/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import runAsync from "./base/runAsync.js";
const mergeRemoteBranch = ({ branchList = [[]], remoteName = "origin" }) => {
  let arr = [...new Set(branchList.flat(Infinity))];
  return arr.flat(Infinity).reduce(
    (result, branch) => {
      result.push(`git checkout ${branch}`, {
        cmd: `git merge ${remoteName}/${branch}`,
        handleError: ({ stderr = "" }, callBack) => {
          // case : 远程分支没有找到
          if (stderr.indexOf("not something we can merge") !== -1) {
            runAsync({
              cmd: `git push --set-upstream ${remoteName} ${branch}`,
              callBack,
            });
          }
        },
      });
      return result;
    },
    [`git fetch -p ${remoteName}`]
  );
};
export default mergeRemoteBranch;
