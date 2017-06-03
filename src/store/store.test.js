import expect from 'expect';
import * as courseActions from '../actions/courseActions';
import rootReducer from '../reducers/index.js';
import initialState from '../reducers/initialState';
import {createStore} from 'redux';

describe('Store', () => {
  it('should handle creating courses', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = { id: "A", title: "A" };

    //act
    const action = courseActions.insertCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    expect(actual).toEqual(course);
  });
});
