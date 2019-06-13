import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const ADD_RESULT = 'ADD_RESULT';
export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_YEAR = 'CHANGE_YEAR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const addResult = result => ({
  type: ADD_RESULT,
  result,
});
export const changeSort = valueSort => ({
  type: CHANGE_SORT,
  valueSort,
});
export const changeYear = valueYear => ({
  type: CHANGE_YEAR,
  valueYear,
});
export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});

export const initialState = {
  items: [],
  sort: 'popularity',
  year: '2019',
  page: '1',
  total_pages: '',
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return { ...state, items: action.result.results, total_pages: action.result.total_pages };
    case 'CHANGE_SORT':
      return { ...state, sort: action.valueSort };
    case 'CHANGE_YEAR':
      return { ...state, year: action.valueYear };
    case 'CHANGE_PAGE':
      return { ...state, page: action.page };
    default:
      return state;
  }
};
export const apiUrl = 'https://api.themoviedb.org/3/';
export const getMoves = (sort, year, page) => async (dispatch) => {
  try {
    const url = `${apiUrl}discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=${sort}.desc&include_adult=false&include_video=false&page=${page}&year=${year}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addResult(responseBody));
  } catch {
    console.log('ERROR!');
  }
};
export function configureStore() {
  const store = createStore(data, initialState, applyMiddleware(thunk));
  return store;
}
export const store = configureStore();
