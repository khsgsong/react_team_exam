import "./boardList.css";

const BoardList = (props) => {
  const boardList = props.boardList;
  return (
    <div className="board-list">
      {boardList.map((board, index) => {
        return <Board key={"board" + index} board={board} />;
      })}
    </div>
  );
};

const Board = (props) => {
  const board = props.board;
  return (
    <ul>
      <li className="likes"></li>
    </ul>
  );
};

export default BoardList;
