#!/usr/bin/env zx
import config from "./base.config.js";
import mergeConfig from "../utils/base/mergeConfig.js";
export default mergeConfig(config, {
  ...{
    directory: "/Users/sftc/Documents/project/sc-bms",
    branch: {
      // 自己分支
      mine: "dev_zr",
      // 推送分支
      push: [["dev_zr", "release_v1.0.0"]],
    },
  },
});
