export const yearTransform = data => {
  const date = new Date(data);
  return date.getFullYear();
};
