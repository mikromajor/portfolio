import { PATH, ICONS_EXT } from "../constants";
export const requireImg = (fileName: string): string => {
  let icons = "";
  try {
    icons = require(`../${PATH}${fileName}${ICONS_EXT}`);
  } catch (e) {
    throw e;
  } finally {
    return icons;
  }
};
