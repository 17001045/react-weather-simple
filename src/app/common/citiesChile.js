import cl from "./cl";

export const citiesChile = Array.from(cl).map((c) => c.city.toLowerCase());

export const getCity = (arr, name) => {
  const _arr = Array.from(arr);
  const _name = String(name).toLowerCase();
  return _arr.filter((n) => n.includes(_name));
};
