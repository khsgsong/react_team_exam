const TodoList = (props) => {
  const todoList = props.todoList;
  const changeLike = props.changeLike;
  const deleteTodo = props.deleteTodo;
  const index = props.index;
  return (
    <div className="member5-list">
      {todoList.map((todo, index) => {
        return (
          <Todo
            key={"todo" + index}
            todo={todo}
            changeLike={changeLike}
            deleteTodo={deleteTodo}
            index={index}
          />
        );
      })}
    </div>
  );
};
const Todo = (props) => {
  const todo = props.todo;
  const changeLike = props.changeLike;
  const deleteTodo = props.deleteTodo;
  const index = props.index;
  return (
    <ul>
      <li className="likes">
        <span
          className="material-icons like-icon"
          onClick={() => {
            changeLike(todo);
          }}
        >
          {todo.isLike === 0 ? "favorite_border" : "favorite"}
        </span>
      </li>

      <li className="text">{todo.todoTitle}</li>

      <li className="done">
        <span
          className="material-icons remove-icon"
          onClick={() => {
            deleteTodo(todo.todoNo, index);
            console.log(deleteTodo);
          }}
        >
          delete_forever
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
