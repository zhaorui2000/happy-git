/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */

import inquirer from "inquirer";
import path from "path";
import getConfig from "./utils/base/getConfig.js";
import { set } from "lodash-es";
import main from "./modules/main.mjs";
let choices = await fs.readdir(path.resolve(process.cwd(), "config"));
let { config } = await inquirer.prompt([
  {
    type: "list",
    name: "config",
    message: "请选择一个配置文件",
    choices,
  },
]);
set(process, "params.config", await getConfig(config));
main();
