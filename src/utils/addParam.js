import queryString from 'query-string';
import history from '../history';

export function addParam(obj, key, value, ...other) {
  const params = obj;
  params[key] = value;
  params[other[0]] = [other[1]];
  const str = `/?${queryString.stringify(params)}`;
  return history.push(str);
}

export default addParam;

/*
export function addParam(obj, key, value, ...other) {
  const params = obj;
  params[key] = value;
  params[other[0]] = [other[1]];
  const str = `/?${queryString.stringify(params)}`;
  return history.push(str);
}
*/
