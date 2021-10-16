import { Link } from "react-router-dom";
const Web = (props) => {
  return (
    <div className="item">
      <img src={props.image}></img>
      <Link to={props.link}>{props.name}</Link>
    </div>
  );
};

export default Web;
