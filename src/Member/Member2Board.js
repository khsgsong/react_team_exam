import "./member2Board.css";
import { useState } from "react";
import AddFrm from "../mbti/cmh/AddFrm";
import BoardList from "../mbti/cmh/BoardList";

const Member2Board = () => {
  let boardNo = 1;
  const [boardList, setBoardList] = useState([]);

  const changeLike = (board) => {
    const changeStatus = board.isLike === 0 ? 1 : 0;
    board.isLike = changeStatus;
    const newArr = [...boardList];
    setBoardList(newArr);
  };

  const checkDone = (board) => {
    board.isDone = 1;
    setBoardList([...boardList]);
  };

  const addBoard = (boardTitle) => {
    const board = {
      boardNo: boardNo++,
      boardTitle: boardTitle,
      isDone: 0,
      isLike: 0,
    };
    const newArr = [...boardList];
    newArr.push(board);
    setBoardList(newArr);
  };

  const deleteBoard = (boardNo, index) => {
    console.log("boarddoNo : " + boardNo);
    console.log("index : " + index);
    const newArr = boardList.filter((board) => {
      return board.boardNo !== boardNo;
    });
    setBoardList(newArr);
  };

  return (
    <>
      <AddFrm addBoard={addBoard} />
      <BoardList
        boardList={boardList}
        changeLike={changeLike}
        checkDone={checkDone}
        deleteBoard={deleteBoard}
      />
    </>
  );
};

export default Member2Board;
