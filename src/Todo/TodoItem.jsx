import { useDispatch } from 'react-redux';
import { deleteTodo } from './todoSlice';

function TodoItem(props) {
  const { data } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(data.id));
  };
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.level}</td>
      <td>
        <button className="btn btn-sm btn-warning me-2">Edit</button>
        <button className="btn btn-sm btn-danger me-2" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
