/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";
const generateDocumnet = async (arr) => {
  let { result } = await inquirer.prompt([
    {
      type: "confirm",
      name: "result",
      message: "是否生成说明文件？",
      default: false,
    },
  ]);
  if (!result) {
    return;
  }
  const { directory = "." } = process.params;
  arr.map(({ alias, cmd, message }) => {
    fs.appendFile(
      path.resolve(directory, "alias.md"),
      `# git ${alias}\n\n> ${message}\n\n\`git ${cmd}\`\n\n`
    );
  });
};
export default generateDocumnet;
