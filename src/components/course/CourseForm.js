import React, { PropTypes } from 'react';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, errors, saving}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId} />
      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />
      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length} />
      <input
        type="submit"
        value={saving ? "Saving" : "Save"}
        disabled={saving}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool.isRequired
};

export default CourseForm;
