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
    ...remoteBranch.map((item) => {
      return {
        cmd: `git merge ${remoteName}/${item} ${item}`,
        handleError: ({ stderr }, res) => {
          // 本地分支不存在
          if (/merge: \S+ - not something we can merge/.test(stderr)) {
            $`git checkout -t ${remoteName}/${item}`.then(res);
          }
        },
      };
    })
  );
};
export default pullAllBranch;
