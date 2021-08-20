/*
 * @Author: Rui Zhao
 * @LastEditors: Rui Zhao
 */
import path from "path";
import consola from "consola";
const getConfig = async (name = "base.config.js") => {
  let result = {};
  try {
    result = (await import(
      `${path.resolve(process.cwd(), "config", name)}`
    )).default;
  } catch (e) {
    consola.error(e.message);
  }
  return result;
};
export default getConfig;
