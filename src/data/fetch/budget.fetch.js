export const fetchBudget = (id) => {
 return fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`)
};
export const fetchBudgetCategories = (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);
};
