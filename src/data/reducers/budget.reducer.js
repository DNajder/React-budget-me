import {
  LOADING_STATES,
  BUDGET_GET,
  BUDGET_GET_REQUEST,
  BUDGET_GET_SUCCESS,
  BUDGET_GET_FAILURE,
  BUDGET_CATEGORIES_GET_REQUEST,
  BUDGET_CATEGORIES_GET_SUCCESS,
  BUDGET_CATEGORIES_GET_FAILURE,
} from 'data/constans';

const initialState = {
  loadingState: {},
  budget: {},
  budgetedCategories: [],
}

function budget(state = initialState, action) {
  const newLoadingState = {...state.loadingState};
  // console.log(newLoadingState)

  switch (action.type) {
    case BUDGET_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        }
      }
    case BUDGET_GET_SUCCESS:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        budget: action.payload,
        loadingState: newLoadingState,
      }
    case BUDGET_GET_FAILURE:
      delete newLoadingState.BUDGET_GET_REQUEST;

      return {
        ...state,
        budgetC: {},
        loadingState: newLoadingState,
      }
    //------------------------------------------------
    case   BUDGET_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        }
      }
    case BUDGET_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.BUDGET_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        budgetedCategories: action.payload,
        loadingState: newLoadingState,
      }
    case BUDGET_CATEGORIES_GET_FAILURE:
      delete newLoadingState.BUDGET_CATEGORIES_GET_REQUEST;

      return {
        ...state,
        budgetedCategories: {},
        loadingState: newLoadingState,
      }
    default:
      return state;
  }
}

export default budget;