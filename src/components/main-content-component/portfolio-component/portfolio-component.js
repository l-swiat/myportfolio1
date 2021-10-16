import "./portfolio-component.scss";

import GraphicComponent from "./portfolio-content-component/content-component/graphic-component/graphic-component";
import WebComponent from "./portfolio-content-component/content-component/web-component/web-component";
import { BrowserRouter as Switch, Route } from "react-router-dom";
const PortfolioComponent = (props) => {
  return (
    <Switch>
      <Route exact path="/portfolio/graphics">
        <GraphicComponent graphics={props.graphics} />
      </Route>
      <Route exact path="/portfolio/websites">
        <WebComponent websites={props.websites} />
      </Route>
      <Route exact path="/portfolio">
        <WebComponent websites={props.websites} />
      </Route>
    </Switch>
  );
};

export default PortfolioComponent;
