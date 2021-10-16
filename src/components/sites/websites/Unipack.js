import "../sites.scss";
import unipack2 from "../../../assets/images/websites/unipack/unipack2.jpg";
import unipack3 from "../../../assets/images/websites/unipack/unipack3.jpg";
import unipack1 from "../../../assets/images/websites/unipack/unipack1.jpg";
import unipack4 from "../../../assets/images/websites/unipack/unipack4.jpg";
import unipack5 from "../../../assets/images/websites/unipack/unipack5.png";
import unipack6 from "../../../assets/images/websites/unipack/unipack6.png";
import { Carousel } from "react-carousel-minimal";
const Unipack = () => {
  const data = [
    {
      image: unipack1,
      caption: "Strona główna",
    },
    {
      image: unipack2,
      caption: "Strona produktów",
    },
    {
      image: unipack3,
      caption: "Bądź eko",
    },

    {
      image: unipack4,
      caption: "Produkt",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="portfolioSite">
      <h1>
        Rebranding marki <span className="teal">Unipack</span>
      </h1>
      <p>
        Projekt zakładał całkowitą zmianę wyglądu dotychczasowej strony,
        przeniesienie na Wordpress Woocommerce oraz stworzenie dedykowanego
        edytowalnego szablonu według projektu graficznego.
      </p>
      <a target="_blank" href="https://unipack.pl">
        ZOBACZ STRONĘ
      </a>
      <Carousel
        data={data}
        time={10000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
      <div className="gallery">
        <img src={unipack5}></img>
        <img src={unipack6}></img>
      </div>
    </div>
  );
};

export default Unipack;
