export const capitalize = (arrayStr: string[]) => {
  const result = arrayStr.map(str => str?.charAt(0)?.toUpperCase() + str?.slice(1));
  return result.join(" ");
};

export const toConstantCase = (str: string) => {
  return str?.replace(/\s/g, "_").toUpperCase();
};
/// normalize status to remove spaces and underscores and convert to lowercase
export const normalizeStatus = (status: string) => {
  return status
    ?.replace(/([\s_])/g, "")
    .toLowerCase()
    .trim();
};
/**
 *  Compare two status and return true/false if they are equal or not regardless of space and underscore and case
 * @param status1 might be enum or display text of enum ( i.e wihtout space and underscore)
 * @param status2 might be enum or display text of enum ( i.e wihtout space and underscore)
 * @returns true/false
 */
export const areStatuesEqual = (status1: string, status2: string) => {
  return normalizeStatus(status1) === normalizeStatus(status2);
};
