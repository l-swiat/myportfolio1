import "../sites.scss";
import gazetka1 from "../../../assets/images/graphics/Gazetka/gaz1.jpg";
import gazetka2 from "../../../assets/images/graphics/Gazetka/gaz2.jpg";
import gazetka3 from "../../../assets/images/graphics/Gazetka/gaz3.jpg";
import gazetka4 from "../../../assets/images/graphics/Gazetka/gaz4.jpg";
import gazetka5 from "../../../assets/images/graphics/Gazetka/gaz5.jpg";
import gazetka6 from "../../../assets/images/graphics/Gazetka/gaz6.jpg";

const Catalog = () => {
  return (
    <div className="portfolioSite">
      <h1>
        Projekt katalogu kwartalnego <span className="teal">Biuro Bazar</span>
      </h1>
      <p>
        Jedna z najbardziej wymagających broszur, z którymi przyszło mi się
        zmierzyć. Gazetka opiewała na 25 stron z wieloma promocjami. Musiała być
        jednocześnie estetyczna jak i wypełniona po brzegi informacjami i
        promocjami. Ostateczny efekt przerósł oczekiwania wszystkich.
      </p>
      <div className="gallery">
        <img src={gazetka1}></img>
        <img src={gazetka2}></img>

        <img src={gazetka5}></img>
        <img src={gazetka6}></img>
        <img src={gazetka3}></img>
        <img src={gazetka4}></img>
      </div>
    </div>
  );
};

export default Catalog;
