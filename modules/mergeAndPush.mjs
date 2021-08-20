/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
/* eslint-disable */
import mergeRemoteBranch from "../utils/mergeRemoteBranch.js";
import pushBranch from "../utils/pushBranch.js";
import runAsync from "../utils/base/runAsync.js";

const mergeAndPush = () => {
  const { config } = process.params;
  cd(config.directory);
  runAsync(
    `git add .`,
    {
      cmd: `git stash`,
      handleError: ({ stderr }) => {
        if (stderr.indexOf("You do not have the initial commit yet")) {
        }
      },
    },
    ...mergeRemoteBranch({
      branchList: config.branch.push,
      remoteName: config.remote.name,
    }),
    ...pushBranch({
      branchList: config.branch.push,
      remoteName: config.remote.name,
    }),
    `git checkout ${config.branch.mine}`,
    `git stash pop`,
    `git reset HEAD .`
  );
};
export default mergeAndPush;
