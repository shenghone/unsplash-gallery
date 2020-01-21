import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const GridItem = ({ detail }) => {
  const [displayPhotagrapher, setDisplayPhotagrapher] = useState(false);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1
  });
  console.log(ref.current);
  useEffect(() => {
    if (inView) {
      gsap.set(entry.target, {
        css: {
          opacity: -2,
          filter: "blur(5px)",
          x: "-20px"
        }
      });
      gsap.to(entry.target, 1, {
        css: {
          opacity: 1,
          filter: "blur(0px)",
          x: "0px"
        }
      });
    }
  }, [inView, entry]);
  const handleToUnsplash = () => {
    window.open(detail.links.html, "_blank");
  };

  return (
    <GridItemWrapper
      onClick={() => handleToUnsplash()}
      onMouseEnter={() => setDisplayPhotagrapher(true)}
      onMouseLeave={() => setDisplayPhotagrapher(false)}
      ref={ref}
      width={detail.width}
      height={detail.height}
    >
      {displayPhotagrapher && (
        <PhotagrapherCard>
          <img
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            alt=""
            src={`${detail.user.profile_image.medium}`}
          />
          <p>{detail.user.name}</p>
        </PhotagrapherCard>
      )}
      <img src={detail.urls.small} alt={detail.ult_description} />
    </GridItemWrapper>
  );
};

const PhotagrapherCard = styled.div`
  position: absolute;
  width: 100%;
  height: 55px;
  box-sizing: border-box;
  background: rgba(228, 249, 255, 0.7);
  opacity: 0.86;
  top: 0;
  padding: 12px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 5% 95%;
  p {
    font-weight: 500;
    display: grid;
    margin: auto;
    text-shadow: 1px 1px 1px rgba(256, 256, 256, 0.4);
  }
`;

const GridItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  grid-row: ${({ width, height }) => {
      const hw = height / width;
      switch (Math.ceil(hw)) {
        case 1:
          return "span 1";
        case 2:
          return "span 2";
        case 3:
          return "span 3";
        case 4:
          return "span 4";
        case 5:
          return "span 5";
        default:
          return;
      }
    }}
    >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
    cursor: pointer;
  }
`;

export default GridItem;
