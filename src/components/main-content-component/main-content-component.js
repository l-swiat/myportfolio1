import "./main-content-component.scss";
import AboutMeComponent from "./about-me-component/about-me-component";
import ContactMe from "./contact-me-component/contact-me-component";

import SkillsComponent from "./skills-component/skills-component";
import { Route, Switch } from "react-router";
const MainContentComponent = (props) => {
  return (
    <div className="mainContent">
      <Switch>
        <Route exact path="/">
          <AboutMeComponent />
        </Route>
        <Route exact path="/contact">
          <ContactMe />
        </Route>

        <Route exact path="/skills">
          <SkillsComponent jobs={props.jobs} skills={props.skills} />
        </Route>
      </Switch>
    </div>
  );
};

export default MainContentComponent;
