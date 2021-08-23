/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
// 推送分支 (列表内上一个分支推送到下一个分支)
const pushBranch = ({ branchList = [[]], remoteName = "origin" } = {}) => {
  return branchList
    .map((branchArr) => {
      let preBranch = "";
      return branchArr.reduce((result, branch, index) => {
        if (index === 0) {
          preBranch = branch;
          result.push(
            `git checkout ${branch}`,
            `git push ${remoteName} ${branch}`
          );
        } else {
          result.push(
            `git checkout ${branch}`,
            `git merge ${preBranch}`,
            `git push ${remoteName} ${branch}`,
            `git log --max-count=10 --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`
          );
          preBranch = branch;
        }
        return result;
      }, []);
    })
    .flat(Infinity);
};
export default pushBranch;
