/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import runAsync from "../../utils/base/runAsync.js";
import inquirer from "inquirer";
import options from "./list.js";
import generateDocumnet from "./generateDocumnet.js";

const useAlias = async () => {
  const getChoices = () =>
    options.map(({ message, alias, cmd }, index) => ({
      name: `【${alias}】${message}`,
      value: `${index}`,
    }));
  let { aliasList } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "aliasList",
      message: "请选择要使用的别名",
      choices: getChoices(),
    },
  ]);

  const docList = [];
  runAsync(
    ...aliasList.map((item) => {
      const { alias, cmd } = options[item];
      docList[docList.length] = options[item];
      return `git config --global alias.${alias} "${cmd}"`;
    })
  ).then(() => {
    generateDocumnet(docList);
  });
};
export default useAlias;
