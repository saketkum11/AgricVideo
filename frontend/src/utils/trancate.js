/* eslint-disable no-unused-vars */
export const trancate = (text) => {
  if (text)
    if (text.length > 15) {
      return `${text.slice(0, 30)} ....`;
    }
  return;
};
