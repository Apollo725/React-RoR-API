export const getShortenName = (name = '') => {
  const matches = name.match(/\b(\w)/g);
  if (matches) return matches.join('');

  return name;
}
