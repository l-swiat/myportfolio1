import "../sites.scss";
import swiatchrominska1 from "../../../assets/images/websites/swiatchrominska/swiatchrominska1.jpg";
import swiatchrominska2 from "../../../assets/images/websites/swiatchrominska/swiatchrominska2.jpg";
import swiatchrominska3 from "../../../assets/images/websites/swiatchrominska/swiatchrominska3.jpg";
import swiatchrominska4 from "../../../assets/images/websites/swiatchrominska/swiatchrominska4.jpg";
import swiatchrominska5 from "../../../assets/images/websites/swiatchrominska/swiatchrominska5.png";
import swiatchrominska6 from "../../../assets/images/websites/swiatchrominska/swiatchrominska6.png";
import { Carousel } from "react-carousel-minimal";
const SwiatChrominska = () => {
  const data = [
    {
      image: swiatchrominska1,
      caption: "Strona główna",
    },
    {
      image: swiatchrominska2,
      caption: "Kontakt",
    },
    {
      image: swiatchrominska3,
      caption: "Portfolio",
    },

    {
      image: swiatchrominska4,
      caption: "Aktualności",
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
        Strona internetowa <span className="teal">swiat-chrominska.art</span>
      </h1>
      <p>
        Strona internetowa oparta o Wordpress z dedykowanym napisanym od zera
        szablonem. Szablon zakłada interaktywność z kokpitem administracyjnym w
        każdym możliwym na stronie elemencie. Planowane otwarcie strony:
        Grudzień 2021.
      </p>
      <a target="_blank" href="https://swiat-chrominska.art">
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
        <img src={swiatchrominska5}></img>
        <img src={swiatchrominska6}></img>
      </div>
    </div>
  );
};

export default SwiatChrominska;
