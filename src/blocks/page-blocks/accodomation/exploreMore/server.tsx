"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./style.css";

type Slide = {
  title?: string;
  link?: string;
  image?: {
    url?: string;
    alt?: string;
  };
};

type Props = {
  heading: string;
  description?: string;
  slides: Slide[];
};

// Custom Arrow Components
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div onClick={onClick} className="ExplorePageLeftButton"></div>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="ExplorePageRightButton" onClick={onClick}></div>
);

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const ExploreMoreChennai: React.FC<Props> = ({ heading, description, slides }) => {
  return (
    <div className="exploreSldierBg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="exploreMoreSectionContent">
          <h4>{heading}</h4>
          {description && <p>{description}</p>}
        </div>
        <div className="exploreSldierSection">
          <Slider {...settings}>
            {slides.map((img, index) => (
              <div key={index} className="ExplorePageSliderImage">
                <a href={img.link || "#"} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    {img.image?.url && (
                      <Image
                        src={img.image.url}
                        alt={img.image.alt || `Slide ${index + 1}`}
                        width={400}
                        height={250}
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60px",
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                      }}
                    ></div>
                    <div className="titleTextExploreChennai">{img.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreChennai;
