import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import {ManageCoursePage} from './ManageCoursePage';

function setup() {
  const props = {
    actions: {
      saveCourse: () => { return Promise.resolve(); }
    },
    course: {
      id: "",
      title: "",
      watchHref: "",
      authorId: "",
      length: "",
      category: ""
    },
    authors: []
  };

  return mount(<ManageCoursePage {...props}/>);
}

describe('ManageCoursePage', () => {
  it('sets error message when trying to save empty title', () => {
    const wrapper = setup();
    const saveBtn = wrapper.find('input').last();
    expect(saveBtn.prop('type')).toBe('submit');
    saveBtn.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
