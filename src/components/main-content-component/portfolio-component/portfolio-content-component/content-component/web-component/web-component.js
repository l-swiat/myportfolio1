import { Link } from "react-router-dom";
import Web from "./web";
import "../../../portfolio-component.scss";
const WebComponent = (props) => {
  return (
    <div className="mainContent">
      <div className="portfolio ">
        <h1>Portfolio</h1>
        <div className="categoryCheck">
          <Link to={"/portfolio/websites"} className="teal">
            Web
          </Link>
          <Link to={"/portfolio/graphics"}>Grafika</Link>
        </div>
        <div className="portfolioItems">
          {props.websites.map((web) => (
            <Web key={web.id} {...web} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebComponent;
