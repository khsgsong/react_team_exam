import "./todoList.css";

const TodoList = (props) => {
  const todoList = props.todoList;
  const changeLike = props.changeLike;

  const deleteTodo = props.deleteTodo;
  return (
    <div className="e-list">
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
      <li className="elikes">
        <span
          className="material-icons like-icon"
          onClick={() => {
            changeLike(todo);
          }}
        >
          {todo.isLike === 0 ? "favorite_border" : "favorite"}
        </span>
      </li>

      <li className="etext">{todo.todoTitle}</li>

      <li className="edone">
        <span
          className="material-icons clear"
          onClick={() => {
            deleteTodo(todo.todoNo, index);
          }}
        >
          clear
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
