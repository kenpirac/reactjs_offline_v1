import { useSelector } from 'react-redux';
import TableSkeleton from '../TableSkeleton';
import TodoItem from './TodoItem';

function TodoList(props) {
  const todos = useSelector((state) => state.TODO.list);

  return (
    <>
      <h2>Todo List</h2>
      <TableSkeleton />
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem key={todo.id} data={todo} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
