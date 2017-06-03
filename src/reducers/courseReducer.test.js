import expect from 'expect';
import * as types from '../actions/actionTypes';
import * as courseActions from '../actions/courseActions';
import courseReducer from './courseReducer';

describe('Course Reducer', () => {
  it('should add course when passed INSERT_COURSE_SUCCESS', () => {
    //arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = courseActions.insertCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];

    const course = {id: 'B', title: 'New Title'};
    const action = courseActions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 'A');

    // assert
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
