import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

// actions.js
export const addResult = result => ({
  type: 'ADD_RESULT',
  result,
});

export const getMoves = () => async dispatch => {
  try {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&page=1';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addResult(responseBody));
  } catch {
    console.log('ERRRRRRROR!');
  }
};

// reducers.js
export const result = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return action.result.results;
    default:
      return state;
  }
};

export const reducers = combineReducers({ result });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
