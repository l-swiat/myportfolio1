import "../sites.scss";
import virtal1 from "../../../assets/images/websites/Virtal/virtal1.jpg";
import virtal2 from "../../../assets/images/websites/Virtal/virtal2.jpg";
import virtal3 from "../../../assets/images/websites/Virtal/virtal3.jpg";
import virtal4 from "../../../assets/images/websites/Virtal/virtal4.png";
import virtal5 from "../../../assets/images/websites/Virtal/virtal5.png";
import virtal6 from "../../../assets/images/websites/Virtal/virtal6.jpg";
import { Carousel } from "react-carousel-minimal";
const Virtal = () => {
  const data = [
    {
      image: virtal1,
      caption: "Strona główna",
    },
    {
      image: virtal2,
      caption: "Strona główna",
    },
    {
      image: virtal3,
      caption: "Stopka",
    },

    {
      image: virtal6,
      caption: "Blog",
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
        Strona internetowa <span className="teal">Virtal</span>
      </h1>
      <p>
        Strona internetowa dla Virtal to dedykowany w pełni interaktywny szablon
        Wordpress. Zakłada bardziej zaawansowane funkcje pomagające na
        nieskończone możliwości dodawania kolejnych treści, kompetencji czy
        kategorii, wyróżniania postów, a także wdrożenia strony do poprawnego
        SEO. Projekt ma też interesującą wartwę mobilną z dwuetapowym menu oraz
        przesuwnymi od prawej do lewej sekcjami na stronie głównej.
      </p>
      <a target="_blank" href="https://virtal.pl">
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
        <img src={virtal4}></img>
        <img src={virtal5}></img>
      </div>
    </div>
  );
};

export default Virtal;
