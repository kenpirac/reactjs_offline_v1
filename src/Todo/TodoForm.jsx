import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function TodoForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    level: 1,
  });

  const dispatch = useDispatch();

  function handleChangeValue(e) {
    const key = e.target.name;
    let value = e.target.value;

    if (key === 'level') value = parseInt(value);

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(formData));
  }

  return (
    <div className="mb-3">
      <h2>Todo Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" name="name" value={formData.name} onChange={handleChangeValue} className="form-control" />
          <select name="level" onChange={handleChangeValue} className="form-select mx-2">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button className="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
