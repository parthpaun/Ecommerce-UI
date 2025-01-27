export const getCurrentPage = (page) => {
  if (isNaN(page)) return 1;
  return Math.max(page, 1);
};

export const perPage = 6;

export const getFilterList = (val = "") => {
  return val?.split(",").filter(Boolean);
};

