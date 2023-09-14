import { useState } from "react";
import "./member1Board.css";

const Member1Board = () => {
  let boardNo = 1;
  const [boardList, setBoardList] = useState([
    {
      boardNo: boardNo++,
      boardTitle: "ISTJ 최고!",
      isLike: 0,
    },
    {
      boardNo: boardNo++,
      boardTitle: "공감력은 부족하지만 사람은 괜찮아..",
      isLike: 0,
    },
    {
      boardNo: boardNo++,
      boardTitle: "계획충 싫음",
      isLike: 1,
    },
  ]);
  const changeLike = (board) => {
    const changeStatus = board.isLike === 0 ? 1 : 0;
    board.isLike = changeStatus;
    const newArr = [...boardList];
    setBoardList(newArr);
  };
  const addBoard = (boardTitle) => {
    const board = {
      boardNo: boardNo++,
      boardTitle: boardTitle,
      isLike: 0,
    };
    const newArr = [...boardList];
    newArr.push(board);
    setBoardList(newArr);
  };
  const deleteBoard = (boardNo) => {
    const newArr = boardList.filter((board) => {
      return board.boardNo !== boardNo;
    });
    setBoardList(newArr);
  };
  return (
    <div className="s-wrap">
      <div className="s-title">ISTJ 모여라</div>
      <InputBox addBoard={addBoard} />
      <ListBox
        boardList={boardList}
        changeLike={changeLike}
        deleteBoard={deleteBoard}
      />
    </div>
  );
};
//InputBox
const InputBox = (props) => {
  const addBoard = props.addBoard;
  const [boardTitle, setBoardTitle] = useState("");
  const regist = () => {
    if (boardTitle !== "") {
      addBoard(boardTitle);
      setBoardTitle("");
    }
  };
  const changeTitle = (e) => {
    const inputValue = e.currentTarget.value;
    setBoardTitle(inputValue);
  };
  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      regist();
    }
  };
  return (
    <div className="s-input-box">
      <input
        type="text"
        className="input"
        value={boardTitle}
        onChange={changeTitle}
        onKeyUp={enterCheck}
      ></input>
      <button className="add-btn" onClick={regist}>
        등록하기
      </button>
    </div>
  );
};
//ListBox
const ListBox = (props) => {
  const boardList = props.boardList;
  const changeLike = props.changeLike;
  const deleteBoard = props.deleteBoard;
  return (
    <div className="s-board-list">
      {boardList.map((board, index) => {
        return (
          <Board
            key={"board" + index}
            board={board}
            changeLike={changeLike}
            deleteBoard={deleteBoard}
          />
        );
      })}
    </div>
  );
};

const Board = (props) => {
  const board = props.board;
  const changeLike = props.changeLike;
  const deleteBoard = props.deleteBoard;
  return (
    <ul>
      <Likes isLike={board.isLike} changeLike={changeLike} board={board} />
      <li className="s-text">{board.boardTitle}</li>
      <IsDone board={board} deleteBoard={deleteBoard} />
    </ul>
  );
};

const Likes = (props) => {
  const isLike = props.isLike;
  const changeLike = props.changeLike;
  const board = props.board;
  return (
    <li className="s-likes">
      <span
        className="material-icons s-like-icon"
        onClick={() => {
          changeLike(board);
        }}
      >
        {isLike === 1 ? "favorite" : "favorite_border"}
      </span>
    </li>
  );
};

const IsDone = (props) => {
  const board = props.board;
  const deleteBoard = props.deleteBoard;
  return (
    <li className="s-done">
      <span
        className="material-icons s-remove-icon"
        onClick={() => {
          deleteBoard(board.boardNo);
        }}
      >
        delete_outline
      </span>
    </li>
  );
};

export default Member1Board;
