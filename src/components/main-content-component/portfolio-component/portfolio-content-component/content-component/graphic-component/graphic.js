import { Link } from "react-router-dom";
const Graphic = (props) => {
  return (
    <div className="item">
      <img src={props.image}></img>
      <Link to={props.link}>{props.name}</Link>
    </div>
  );
};

export default Graphic;
