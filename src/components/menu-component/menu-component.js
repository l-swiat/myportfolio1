import "./menu-component.scss";
import { Link } from "react-router-dom";

const MenuComponent = (props) => {
  return (
    <div className="mainMenu">
      <div className="menuBurger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <nav>
        <Link to={"/"}>
          <svg
            onClick={props.activeLink}
            className={`icon ${props.aboutLink}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </Link>
        <Link to={"/skills"}>
          <svg
            onClick={props.activeLink}
            className={`icon ${props.skillsLink}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
          </svg>
        </Link>
        <Link to={"/portfolio"}>
          <svg
            onClick={props.activeLink}
            className={`icon ${props.portfolioLink}`}
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
          >
            <rect fill="none" height="24" width="24" />
            <path d="M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,20H6V4h5v7l2.5-1.5L16,11V4h2V20 z M13.62,13.5L17,18H7l2.38-3.17L11,17L13.62,13.5z" />
          </svg>
        </Link>
        <Link to={"/contact"}>
          <svg
            onClick={props.activeLink}
            className={`icon ${props.contactLink}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
        </Link>
        <Link className="cv" to="files/CV.pdf" target="_blank">
          <strong> CV </strong>
        </Link>
      </nav>
    </div>
  );
};

export default MenuComponent;
