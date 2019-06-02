import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const ADD_RESULT = 'ADD_RESULT';
export const CHANGE_SORT = 'CHANGE_SORT';

export const addResult = result => ({
  type: ADD_RESULT,
  result,
});
export const changeSort = valueSort => ({
  type: CHANGE_SORT,
  valueSort,
});
export const initialState = {
  items: [],
  sort: 'popularity',
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return { ...state, items: action.result.results };
    case 'CHANGE_SORT':
      return { ...state, sort: action.valueSort };
    default:
      return state;
  }
};
export const getMoves = sort => async (dispatch) => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=${sort}.desc&include_adult=false&include_video=false&page=1`;
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
