import "../sites.scss";
import wizualne1 from "../../../assets/images/websites/wizualne/wizualne1.jpg";
import wizualne2 from "../../../assets/images/websites/wizualne/wizualne2.jpg";
import wizualne3 from "../../../assets/images/websites/wizualne/wizualne3.jpg";
import wizualne4 from "../../../assets/images/websites/wizualne/wizualne4.jpg";
import wizualne5 from "../../../assets/images/websites/wizualne/wizualne5.png";
import wizualne6 from "../../../assets/images/websites/wizualne/wizualne6.png";
import { Carousel } from "react-carousel-minimal";
const Wizualne = () => {
  const data = [
    {
      image: wizualne1,
      caption: "Strona główna",
    },
    {
      image: wizualne2,
      caption: "O nas",
    },
    {
      image: wizualne3,
      caption: "Blog",
    },

    {
      image: wizualne4,
      caption: "Portfolio",
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
        Strona internetowa <span className="teal">Wizualne Studio</span>
      </h1>
      <p>
        Strona firmowa prowadzonej przeze mnie w wolnym czasie działalności.
        Strona napisana przy użyciu Wordpress PHP. Chciałem, aby nie była to
        typowa strona internetowa, a zabawa. Pierwsze skrzypce grają w niej
        wrażenia wzrokowe.
      </p>
      <a target="_blank" href="https://wizualnestudio.pl">
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
        <img src={wizualne5}></img>
        <img src={wizualne6}></img>
      </div>
    </div>
  );
};

export default Wizualne;
