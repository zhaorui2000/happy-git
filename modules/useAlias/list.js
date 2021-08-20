/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
export default [
  {
    message: "简短状态展示",
    alias: "st",
    cmd: `status -sb`,
  },
  {
    message: "查看最后一次提交",
    alias: "last",
    cmd: `log -1 HEAD --stat`,
  },
  {
    message: "提交",
    alias: "cm",
    cmd: `commit -m`,
  },
  {
    message: "优雅log信息",
    alias: "lg",
    cmd: `log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit`,
  },
  {
    message: "查看全局配置",
    alias: "gl",
    cmd: `config --global -l`,
  },
  {
    message: "创建一个新的不存在的分支",
    alias: "cob",
    cmd: `checkout -b`,
  },
  {
    message: "checkout 命令",
    alias: "ck",
    cmd: `diff --cached`,
  },
  {
    message: "暂存区文件变动",
    alias: "dc",
    cmd: `diff --cached`,
  },
  {
    message: "branch 命令",
    alias: "b",
    cmd: `branch`,
  },
];