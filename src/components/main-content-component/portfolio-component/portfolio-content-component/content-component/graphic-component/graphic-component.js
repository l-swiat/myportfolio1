import { Link } from "react-router-dom";
import Graphic from "./graphic";
import "../../../portfolio-component.scss";
const GraphicComponent = (props) => {
  return (
    <div className="mainContent">
      <div className="portfolio ">
        <h1>Portfolio</h1>
        <div className="categoryCheck">
          <Link to={"/portfolio"}>Web</Link>
          <Link to={"/portfolio/graphics"} className="teal">
            Grafika
          </Link>
        </div>
        <div className="portfolioItems">
          {props.graphics.map((graphic) => (
            <Graphic key={graphic.id} {...graphic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicComponent;
