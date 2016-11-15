export const firstNameLastLetter = (firstAndLastNames) => {
  const spaceIndex = firstAndLastNames.indexOf(' ');
  if (spaceIndex === -1) { return firstAndLastNames }
  return `${firstAndLastNames.substr(0, spaceIndex + 2)}.`
};
