import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi.js';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// --- Thunks ---
export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());

    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
