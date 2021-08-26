/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */

import runAsync from "../utils/base/runAsync.js";
import getAllRemoteBranch from "../utils/getAllRemoteBranch.js";
import getCurrentBranch from "../utils/getCurrentBranch.js";
import switchBranch from "../utils/switchBranch.js";
import stashUnstage from "../utils/stashUnstage.js";
const pullAllBranch = async () => {
  const { config } = process.params;
  const {
    remote: { name: remoteName },
  } = config;
  cd(config.directory);
  const remoteBranch = await getAllRemoteBranch({ remoteName });
  const currentBranch = await getCurrentBranch();
  await runAsync(
    ...await stashUnstage(
      ...remoteBranch.reduce((result, item) => {
        result[result.length] = async () => {
          await switchBranch(item, { autoCreate: true });
        };
        result[result.length] = `git merge ${remoteName}/${item}`;
        return result;
      }, []),
      async () => {
        await switchBranch(currentBranch, { autoCreate: false });
      }
    )
  );
};
export default pullAllBranch;
