export const fetchAllCategories = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`);
};