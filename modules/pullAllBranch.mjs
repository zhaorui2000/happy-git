/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */

import runAsync from "../utils/base/runAsync.js";
import getAllRemoteBranch from "../utils/getAllRemoteBranch.js";
const pullAllBranch = async () => {
  const { config } = process.params;
  const {
    remote: { name: remoteName },
  } = config;
  cd(config.directory);
  let remoteBranch = await getAllRemoteBranch({ remoteName });
  runAsync(
    ...remoteBranch.reduce((result, item) => {
      result[result.length] = {
        cmd: `git switch ${item}`,
        handleError: ({ stderr }, res) => {
          // 本地分支不存在
          if (/fatal: invalid reference: \S+/.test(stderr)) {
            runAsync(
              `git checkout -t ${remoteName}/${item}`,
              `git switch ${item}`
            ).then(res);
          }
        },
      };
      result[result.length] = `git merge ${remoteName}/${item}`;
      return result;
    }, [])
  );
};
export default pullAllBranch;
