import * as type from '../actions/actionTypes';

export const initialState = {
  items: [],
  totalPages: 1,
  details: {},
  isFetching: false,
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_RESULT:
      return {
        ...state,
        items: action.result.results,
        totalPages: action.result.total_pages,
      };
    case type.ADD_DETAILS:
      return { ...state, details: action.details };
    case type.TOGGLE_IS_FETSHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
