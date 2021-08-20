/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import path from "path";
const getConfig = async (name = "base.config.js") => {
  let result = {};
  try {
    result = (await import(
      `${path.resolve(process.cwd(), "config", name)}`
    )).default;
  } catch (e) {
    chalk.bold.red(e.message);
  }
  return result;
};
export default getConfig;
