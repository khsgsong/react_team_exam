import "./enfpheader.css";
import { Link } from "react-router-dom";
const ENFPHeader = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">ENFP랑 친구할사람~!</Link>
      </h1>
      
    </header>
  );
};

export default ENFPHeader;