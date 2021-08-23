/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import runAsync from "./base/runAsync.js";
const switchBranch = async (branch, { autoCreate = false } = {}) => {
  await runAsync({
    cmd: `git switch ${branch}`,
    handleError: ({ stderr }, res) => {
      if (/fatal: invalid reference: \S+/.test(stderr)) {
        // 分支不存在
        if (autoCreate) {
          runAsync(`git branch ${branch}`, `git switch ${branch}`);
        }
        res()
      }
    },
  });
};
export default switchBranch;
