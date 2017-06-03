import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function insertCourseSuccess(course) {
  return { type: types.INSERT_COURSE_SUCCESS, course };
}
export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

// --- Thunks ---
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());

    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());

    return courseApi.saveCourse(course).then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(insertCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
