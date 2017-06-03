import expect from 'expect';
import {mount, shallow} from 'enzyme';
import React from 'react';
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    course: {},
    errors: {},
    saving: saving,
    onChange: () => {},
    onSave: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('CourseForm', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Course');
  });

  it('save button labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe("Save");
  });

  it('save button labeled "Saving" when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe("Saving");
  });
});
