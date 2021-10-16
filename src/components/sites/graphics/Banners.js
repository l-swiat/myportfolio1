import "../sites.scss";
import baner2 from "../../../assets/images/graphics/baner/baner2.png";
import baner3 from "../../../assets/images/graphics/baner/baner3.png";
import baner1 from "../../../assets/images/graphics/baner/baner1.png";
import baner4 from "../../../assets/images/graphics/baner/baner4.png";
import baner5 from "../../../assets/images/graphics/baner/baner5.png";
import baner6 from "../../../assets/images/graphics/baner/baner6.png";
import { Carousel } from "react-carousel-minimal";
const Banners = () => {
  const data = [
    {
      image: baner1,
      caption: "",
    },
    {
      image: baner2,
      caption: "",
    },
    {
      image: baner3,
      caption: "",
    },

    {
      image: baner4,
      caption: "",
    },
    {
      image: baner5,
      caption: "",
    },
    {
      image: baner6,
      caption: "",
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
        Banery instagramowe <span className="teal">bestbiuro.pl</span>
      </h1>
      <p>
        Banery instagramowe tworzone dla sklepu internetowego bestbiuro.pl
        cechują się minimalizmem, szczególną kolorystyką, w której dominuje
        jedna barwa oraz chwytliwym hasłem.
      </p>
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
        slideImageFit="contain"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default Banners;
