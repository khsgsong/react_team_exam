import "./boardList.css";

const BoardList = (props) => {
  const boardList = props.boardList;
  const changeLike = props.changeLike;
  const checkDone = props.checkDone;
  const deleteBoard = props.deleteBoard;
  return (
    <div className="board-list">
      {boardList.map((board, index) => {
        return (
          <Board
            key={"board" + index}
            board={board}
            changeLike={changeLike}
            checkDone={checkDone}
            deleteBoard={deleteBoard}
            index={index}
          />
        );
      })}
    </div>
  );
};

const Board = (props) => {
  const board = props.board;
  const changeLike = props.changeLike;
  const checkDone = props.checkDone;
  const deleteBoard = props.deleteBoard;
  const index = props.index;
  return (
    <ul>
      <li className="likes">
        <span
          className="material-icons like-icon"
          onClick={() => {
            changeLike(board);
          }}
        >
          {board.isLike === 0 ? "favorite_border" : "favorite"}
        </span>
      </li>
      {board.isDone === 0 ? (
        <li className="text">{board.boardTitle}</li>
      ) : (
        <li className="text done-text">{board.boardTitle}</li>
      )}
      <li className="done">
        {board.isDone === 0 ? (
          <span
            className="material-icons done-icon"
            onClick={() => {
              checkDone(board);
            }}
          >
            check_circle
          </span>
        ) : (
          ""
        )}

        <span
          className="material-icons remove-icon"
          onClick={() => {
            deleteBoard(board.boardNo, index);
          }}
        >
          delete
        </span>
      </li>
    </ul>
  );
};

export default BoardList;
