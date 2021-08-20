/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import inquirer from "inquirer";
import mergeAndPush from "./mergeAndPush.mjs";
import useAlias from "./useAlias/useAlias.mjs"

const main = async () => {
  const choices = [
    { name: "拉取->合并->提交", value: mergeAndPush },
    { name: "设置别名", value: useAlias }
  ];
  const { command } = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "请选择要执行的命令",
      choices,
    },
  ]);
  command();
};
export default main;
