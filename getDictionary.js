const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((r) => r.default),
  eng: () => import("./dictionaries/en.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
