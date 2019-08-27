import * as type from './actionTypes';

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});

export const addResult = result => ({
  type: type.ADD_RESULT,
  result,
});

export const apiUrl = 'https://api.themoviedb.org/3/';
export const getMoves = (sort = 'popularity', year = 2019, page = 1) => async (dispatch) => {
  try {
    const url = `${apiUrl}discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=${sort}.desc&page=${page}&year=${year}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addResult(responseBody));
    dispatch(toggleIsFetching(false));
  } catch (e) { console.log(e); }
};

export const addDetails = details => ({
  type: type.ADD_DETAILS,
  details,
});

export const getDetails = id => async (dispatch) => {
  try {
    const url = `${apiUrl}movie/${id}?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addDetails(responseBody));
    dispatch(toggleIsFetching(false));
  } catch (e) { console.log(e); }
};
