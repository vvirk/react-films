import * as type from '../actions/actionTypes';

export const initialState = {
  items: [],
  sort: 'popularity',
  year: 2019,
  page: 1,
  totalPages: 1,
  active: true,
  id: 1,
  details: {},
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_RESULT:
      return {
        ...state,
        items: action.result.results,
        totalPages: action.result.total_pages,
      };
    case type.CHANGE_SORT:
      return { ...state, sort: action.valueSort };
    case type.CHANGE_YEAR:
      return { ...state, year: action.valueYear };
    case type.CHANGE_PAGE:
      return { ...state, page: action.page };
    case type.GET_ID:
      return { ...state, id: action.id };
    case type.ADD_DETAILS:
      return { ...state, details: action.details };
    default:
      return state;
  }
};
