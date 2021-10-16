import "./App.scss";
import "./mobile.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BigImageComponent from "./components/big-image-component/big-image-component";
import MenuComponent from "./components/menu-component/menu-component";
import MainContentComponent from "./components/main-content-component/main-content-component";
import DebugHistory from "./debugHistory";
import { useEffect, useReducer } from "react";
import jobs from "./jobs";
import skills from "./skills";
import websites from "./websites";
import Virtal from "./components/sites/websites/Virtal";
import Wizualne from "./components/sites/websites/Wizualne";
import SwiatChrominska from "./components/sites/websites/SwiatChrominska";
import Unipack from "./components/sites/websites/Unipack";
import Bestbiuro from "./components/sites/websites/Bestbiuro";
import Malachite from "./components/sites/websites/Malachite";
import Banners from "./components/sites/graphics/Banners";
import Broshures from "./components/sites/graphics/Broshures";
import Perfekt from "./components/sites/graphics/Perfekt";
import Logos from "./components/sites/graphics/Logos";
import Catalog from "./components/sites/graphics/Catalog";
import Visualisation from "./components/sites/graphics/Visualisation";

import graphics from "./graphics";
import GraphicComponent from "./components/main-content-component/portfolio-component/portfolio-content-component/content-component/graphic-component/graphic-component";
import WebComponent from "./components/main-content-component/portfolio-component/portfolio-content-component/content-component/web-component/web-component";
const reducer = (state, action) => {
  switch (action.type) {
    case "aboutLink":
      return {
        ...state,
        aboutLink: (state.aboutLink = "activeIcon"),
        portfolioLink: (state.portfolioLink = "disactiveIcon"),
        skillsLink: (state.skillsLink = "disactiveIcon"),
        contactLink: (state.contactLink = "disactiveIcon"),
      };
    case "portfolioLink":
      return {
        ...state,
        aboutLink: (state.aboutLink = "disactiveIcon"),
        portfolioLink: (state.portfolioLink = "activeIcon"),
        skillsLink: (state.skillsLink = "disactiveIcon"),
        contactLink: (state.contactLink = "disactiveIcon"),
      };
    case "skillsLink":
      return {
        ...state,
        aboutLink: (state.aboutLink = "disactiveIcon"),
        portfolioLink: (state.portfolioLink = "disactiveIcon"),
        skillsLink: (state.skillsLink = "activeIcon"),
        contactLink: (state.contactLink = "disactiveIcon"),
      };
    case "contactLink":
      return {
        ...state,
        aboutLink: (state.aboutLink = "disactiveIcon"),
        portfolioLink: (state.portfolioLink = "disactiveIcon"),
        skillsLink: (state.skillsLink = "disactiveIcon"),
        contactLink: (state.contactLink = "activeIcon"),
      };
  }
};

const appState = {
  aboutLink: "disactiveIcon",
  skillsLink: "disactiveIcon",
  portfolioLink: "disactiveIcon",
  contactLink: "disactiveIcon",
};
function App(props) {
  const [state, dispatch] = useReducer(reducer, appState);
  const activeLink = () => {
    setTimeout(() => {
      const pageName = document.querySelector(".pageName");
      if (pageName.classList.contains("/portfolio")) {
        dispatch({ type: "portfolioLink" });
      } else if (pageName.classList.contains("/")) {
        dispatch({ type: "aboutLink" });
      } else if (pageName.classList.contains("/skills")) {
        dispatch({ type: "skillsLink" });
      } else if (pageName.classList.contains("/contact")) {
        dispatch({ type: "contactLink" });
      } else if (pageName.classList.contains("/portfolio/graphics")) {
        dispatch({ type: "portfolioLink" });
      }
    }, 10);
  };
  useEffect(() => {
    setTimeout(() => {
      const pageName = document.querySelector(".pageName");
      if (pageName.classList.contains("/portfolio")) {
        dispatch({ type: "portfolioLink" });
      } else if (pageName.classList.contains("/")) {
        dispatch({ type: "aboutLink" });
      } else if (pageName.classList.contains("/skills")) {
        dispatch({ type: "skillsLink" });
      } else if (pageName.classList.contains("/contact")) {
        dispatch({ type: "contactLink" });
      } else if (pageName.classList.contains("/portfolio/graphics")) {
        dispatch({ type: "portfolioLink" });
      }
    }, 10);
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/portfolio/graphics">
          <DebugHistory />
          <div className="App desktopApp">
            <div className="mainContentField">
              <MenuComponent
                aboutLink={state.aboutLink}
                skillsLink={state.skillsLink}
                portfolioLink={state.portfolioLink}
                contactLink={state.contactLink}
                activeLink={activeLink}
              />
              <BigImageComponent />

              <GraphicComponent graphics={graphics} />
            </div>
          </div>
          <div className="App mobileApp">
            <div className="mainContentField">
              <div className="mobile-row">
                <MenuComponent
                  aboutLink={state.aboutLink}
                  skillsLink={state.skillsLink}
                  portfolioLink={state.portfolioLink}
                  contactLink={state.contactLink}
                  activeLink={activeLink}
                />
                <div>
                  <BigImageComponent />

                  <GraphicComponent graphics={graphics} />
                </div>
              </div>
            </div>
          </div>
        </Route>{" "}
        <Route path="/portfolio">
          <DebugHistory />
          <div className="App desktopApp">
            <div className="mainContentField">
              <MenuComponent
                aboutLink={state.aboutLink}
                skillsLink={state.skillsLink}
                portfolioLink={state.portfolioLink}
                contactLink={state.contactLink}
                activeLink={activeLink}
              />
              <BigImageComponent />

              <WebComponent websites={websites} />
            </div>
          </div>
          <div className="App mobileApp">
            <div className="mainContentField">
              <div className="mobile-row">
                <MenuComponent
                  aboutLink={state.aboutLink}
                  skillsLink={state.skillsLink}
                  portfolioLink={state.portfolioLink}
                  contactLink={state.contactLink}
                  activeLink={activeLink}
                />
                <div>
                  <BigImageComponent />

                  <WebComponent websites={websites} />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/virtal">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Virtal />
            </div>
          </div>
        </Route>
        <Route exact path="/wizualnestudio">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Wizualne />
            </div>
          </div>
        </Route>
        <Route exact path="/swiatchrominska">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <SwiatChrominska />
            </div>
          </div>
        </Route>
        <Route exact path="/unipack">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Unipack />
            </div>
          </div>
        </Route>
        <Route exact path="/bestbiuro">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Bestbiuro />
            </div>
          </div>
        </Route>
        <Route exact path="/malachite">
          <DebugHistory />
          <div className="Ap site">
            <div className="mainContentField">
              <MenuComponent />
              <Malachite />
            </div>
          </div>
        </Route>
        <Route exact path="/baneryinstagramowe">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Banners />
            </div>
          </div>
        </Route>
        <Route exact path="/gazetkakwartalna">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Catalog />
            </div>
          </div>
        </Route>
        <Route exact path="/projektopakowan">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Perfekt />
            </div>
          </div>
        </Route>
        <Route exact path="/logotypy">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Logos />
            </div>
          </div>
        </Route>
        <Route exact path="/broszury">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Broshures />
            </div>
          </div>
        </Route>
        <Route exact path="/wizualizacje3d">
          <DebugHistory />
          <div className="App site">
            <div className="mainContentField">
              <MenuComponent />
              <Visualisation />
            </div>
          </div>
        </Route>
        <Route path="/">
          <DebugHistory />
          <div className="App desktopApp">
            <div className="mainContentField">
              <MenuComponent
                aboutLink={state.aboutLink}
                skillsLink={state.skillsLink}
                portfolioLink={state.portfolioLink}
                contactLink={state.contactLink}
                activeLink={activeLink}
              />
              <BigImageComponent />
              <MainContentComponent
                skills={skills}
                jobs={jobs}
                websites={websites}
                graphics={graphics}
              />
            </div>
          </div>
          <div className="App mobileApp">
            <div className="mainContentField">
              <div className="mobile-row">
                <MenuComponent
                  aboutLink={state.aboutLink}
                  skillsLink={state.skillsLink}
                  portfolioLink={state.portfolioLink}
                  contactLink={state.contactLink}
                  activeLink={activeLink}
                />
                <div>
                  {" "}
                  <BigImageComponent />
                  <MainContentComponent
                    skills={skills}
                    jobs={jobs}
                    websites={websites}
                    graphics={graphics}
                  />
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
