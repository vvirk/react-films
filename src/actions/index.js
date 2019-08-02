import * as type from './actionTypes';
import history from '../history';

export const addResult = result => ({
  type: type.ADD_RESULT,
  result,
});
export const changeSort = valueSort => ({
  type: type.CHANGE_SORT,
  valueSort,
});
export const changeYear = valueYear => ({
  type: type.CHANGE_YEAR,
  valueYear,
});
export const changePage = page => ({
  type: type.CHANGE_PAGE,
  page,
});
export const apiUrl = 'https://api.themoviedb.org/3/';
export const getMoves = (sort = 'popularity', year = 2019, page = 1) => async (dispatch) => {
  try {
    const params = `?sort_by=${sort}&page=${page}&year=${year}`;
    const url = `${apiUrl}discover/movie?api_key=60c4a3ee893cd1db3cfe5838953ce4c1&language=en-US&sort_by=${sort}.desc&page=${page}&year=${year}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addResult(responseBody));
    history.push(params);
  } catch {
    console.log('ERROR!');
  }
};
export const getId = id => ({
  type: type.GET_ID,
  id,
});

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
  } catch {
    console.log('ERROR!');
  }
};
