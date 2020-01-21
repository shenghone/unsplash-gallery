import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import { gsap, TimelineMax } from "gsap";
import {
  SET_KEYWORD_ACTION,
  LOAD_SEARCH_DATA_ACTION,
  SET_SEARCH_DATA_ACTION,
  SET_RESULT_ERROR_ACTION
} from "../redux/actions";

const DescriptionWrapper = styled.section`
  position: relative;
  font-family: "Inria Serif", serif;
  width: 100vw;
  height: 100vh;
  min-height: 500px;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  overflow: hidden;
`;

const DescriptionInnerWrapper = styled.div`
  background: rgba(15, 171, 188);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  section {
    display: none;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "left right";

    section {
      box-sizing: border-box;
      padding: 1rem;
      display: block;
      grid-area: right;
      position: relative;
      width: 89%;
      height: 90%;
      border-radius: 4px;
    }
    h4 {
      grid-area: left;
    }
    img {
      cursor: pointer;
      position: relative;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      max-height: 100%;
      object-fit: cover;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    }
  }

  h4 {
    position: relative;
    align-self: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 0.5rem;
  }
  position: relative;
  display: grid;
  place-items: center;
  width: 94%;
  height: 85%;
  box-sizing: border-box;
  border-radius: 4px;
  input[type="text"] {
    position: relative;
    outline: none;
    border: 1.2px solid #e4f9ff;
    padding: 6px 8px;
    background: transparent;
  }
  button {
    cursor: pointer;
    padding: 7px 8px;

    background: #e4f9ff;
    color: #000;

    border: none;
    outline: none;
  }

  span {
    color: white;
  }
`;

const toWhite = keyframes`
    100%{
        color:white;
        transform: scale(1.2);
    }
`;

const NavArea = styled.div`
  min-width: 140px;
  display: flex;
  width: 100%;
  height: 100px;
  position: absolute;
  transform: translateY(-80%);
  align-self: center;
  justify-content: center;
  align-items: center;
  p {
    position: relative;
    margin: 0 1rem;
    font-size: 0.6rem;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      animation: ${toWhite} 1s forwards;
    }
  }

  @media (min-width: 960px) {
    grid-area: left;
  }
`;

const BlackEclips = styled.div`
  position: relative;

  background: rgba(0, 0, 0, 0.8);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const EclipsBlocker = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  left: 40%;
  bottom: 30%;
  background: rgba(15, 171, 188);
`;

const SubTitle = styled.div`
  display: grid;

  position: absolute;
  font-size: 0.65rem;
  color: #e4f9ff;
  letter-spacing: 2.5px;
  box-sizing: border-box;
  padding: 0 2rem;
  width: 80%;
  line-height: 1.3rem;
  margin-top: 150px;
  text-align: justify;

  font-family: "Playfair Display", serif;
  @media (min-width: 960px) {
    display: relative;
    height: 200px;
    grid-area: left;
    align-self: end;
  }
`;

const Description = React.memo(function({ defaultCover, ...rest }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const noResultMessage = useSelector(state => state.noResultMessage);
  const blockerRef = React.useRef(null);
  const shenghungRef = React.useRef(null);
  const getInspiredRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const sectionRef = React.useRef(null);
  const blackEclipsRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const pictures = useSelector(state => state.data);
  const CLEAR_SEARCH_DATA = () => dispatch(SET_SEARCH_DATA_ACTION([]));
  const CLEAR_ERROR_MESSAGE = () => dispatch(SET_RESULT_ERROR_ACTION(null));
  const SET_KEYWORD = payload => dispatch(SET_KEYWORD_ACTION(payload));
  const LOAD_SEARCH_DATA = () => dispatch(LOAD_SEARCH_DATA_ACTION());

  const [coverPicture, setCoverPicture] = React.useState(null);
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/about") {
      gsap.set(aboutRef.current, {
        opacity: 0,
        width: "0px"
      });
      gsap.to(aboutRef.current, 0.8, {
        opacity: 1,
        width: "100%"
      });
    } else if (location.pathname === "/author") {
      gsap.set(shenghungRef.current, {
        opacity: 0,
        width: "0px"
      });
      gsap.to(shenghungRef.current, 0.8, {
        opacity: 1,
        width: "100%"
      });
    } else if (location.pathname === "/") {
      gsap.set(getInspiredRef.current, {
        opacity: 0,
        width: "0px"
      });
      gsap.to(getInspiredRef.current, 0.8, {
        opacity: 1,
        width: "100%"
      });
    }
  }, [location.pathname]);
  useEffect(() => {
    gsap.set(sectionRef.current, {
      css: {
        x: "0px",
        filter: "none"
      }
    });
    gsap.from(sectionRef.current, 0.8, {
      css: {
        x: "20px",
        filter: "blur(8px)"
      }
    });
  }, [coverPicture]);
  const handleMoveAway = () => {
    gsap.set(blockerRef.current, {
      x: 0
    });

    gsap.to(blockerRef.current, 1.8, {
      x: "100%"
    });
    gsap.to(blackEclipsRef.current, 1.5, {
      css: {
        background: "rgba(256,256,256,1)"
      }
    });
  };
  const handleMoveBack = () => {
    gsap.to(blockerRef.current, 1.8, {
      x: "0"
    });
    gsap.to(blackEclipsRef.current, 1.6, {
      css: {
        background: "rgba(0,0,0,1)"
      }
    });
  };

  const shufflePicture = pics => {
    const newPicture = _.sample(pics);

    setCoverPicture(newPicture);
  };
  const handleTo = pathname => {
    SET_KEYWORD("");
    CLEAR_SEARCH_DATA();
    CLEAR_ERROR_MESSAGE();
    history.push(`/${pathname}`);
  };

  const handleChange = e => {
    SET_KEYWORD(e.target.value);
  };

  const handleSearch = () => {
    LOAD_SEARCH_DATA();
    const et = new TimelineMax();
    et.to(buttonRef.current, 0.2, {
      css: {
        scale: 1,
        opacity: 0.85
      }
    }).to(buttonRef.current, 0.2, {
      css: {
        scale: 1,
        opacity: 1
      }
    });
  };

  const handleShadow = () => {
    gsap.to(buttonRef.current, 0.8, {
      boxShadow: "2px 2px 2px rgba(0,0,0,0.6)"
    });
  };

  const handleButtonDefaultStyle = () => {
    gsap.to(buttonRef.current, 0.8, {
      boxShadow: "0px 0px 0px rgba(0,0,0,0.6)"
    });
  };

  const getTitle = ({ pathname }) => {
    if (pathname === "/") {
      return (
        <h4 style={{ position: "relative" }}>
          <p
            style={{
              position: "absolute",
              height: "1px",
              bottom: "-15px",
              opacity: "0",
              background: "#000"
            }}
            ref={getInspiredRef}
          ></p>
          <span>Get</span> inspired
        </h4>
      );
    } else if (pathname === "/author") {
      return (
        <h4 style={{ position: "relative" }}>
          <p
            style={{
              position: "absolute",

              height: "1px",
              bottom: "-15px",
              opacity: "0",
              background: "#000"
            }}
            ref={shenghungRef}
          ></p>
          <span>SHENG HUNG</span> TSAI
        </h4>
      );
    } else if (pathname === "/search") {
      return (
        <div style={{ position: "relative", marginTop: "8rem", zIndex: "4" }}>
          <input type="text" onChange={e => handleChange(e)} />
          <button
            onMouseEnter={handleShadow}
            onMouseLeave={handleButtonDefaultStyle}
            onClick={() => handleSearch()}
            ref={buttonRef}
          >
            search
          </button>
        </div>
      );
    } else if (pathname === "/about") {
      return (
        <h4 style={{ position: "relative" }}>
          <p
            style={{
              position: "absolute",

              height: "1px",
              bottom: "-15px",
              opacity: "0",
              background: "#000"
            }}
            ref={aboutRef}
          ></p>
          about
        </h4>
      );
    }
  };
  const handleToCoverPicture = () => {
    window.open(`${coverPicture.links.html}`, "_blank");
  };

  const getSubtitle = ({ pathname }) => {
    if (pathname === "/") {
      return (
        <p style={{ fontWeight: "1000" }}>
          To see and experience things so that some time in the future you can
          inspire people to do great things. To me, that's the purpose of life.
        </p>
      );
    } else if (pathname === "/author") {
      return (
        <p style={{ fontWeight: "1000" }}>
          Born and raised in Taiwan. Sheng-Hung Tsai moved to Canada in 2014. He
          is a creative thinker, a cat owner and a web developer. He loves all
          the beautiful things made with code. You can find him{" "}
          <a
            style={{ color: "#f8b400", textDecoration: "none" }}
            target="_blank"
            href="https://shenghone.now.sh/"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      );
    } else if (pathname === "/search") {
      if (noResultMessage) {
        return (
          <p
            style={{
              display: "grid",
              justifySelf: "center",
              transform: "translateY(2rem)",
              color: "#c72c41",
              fontWeight: "500",
              zIndex: "0"
            }}
          >
            {noResultMessage}
          </p>
        );
      }
    } else if (pathname === "/about") {
      return (
        <p
          style={{
            position: "relative",
            marginBottom: "3rem",
            fontWeight: "1000"
          }}
        >
          This project is an experiment on Redux-Saga, styled components and
          interception observer API. All the pictures come from{" "}
          <a
            style={{
              color: "#f8b400",
              textDecoration: "none"
            }}
            href="https://unsplash.com/"
          >
            Unsplash
          </a>
        </p>
      );
    }
    return;
  };
  useEffect(() => {
    if (pictures) {
      shufflePicture(pictures);
    }
  }, [pictures]);
  return (
    <DescriptionWrapper>
      <DescriptionInnerWrapper>
        <NavArea>
          <BlackEclips
            onMouseLeave={handleMoveBack}
            onMouseOver={handleMoveAway}
            ref={blackEclipsRef}
            onClick={() => shufflePicture(pictures)}
          >
            <EclipsBlocker ref={blockerRef} />
          </BlackEclips>
          <p onClick={() => handleTo("")}>home</p>
          <p onClick={() => handleTo("about")}>about</p>
          <p onClick={() => handleTo("search")}>search</p>
          <p onClick={() => handleTo("author")}>author</p>
        </NavArea>
        {getTitle(location)}
        <SubTitle>{getSubtitle(location)}</SubTitle>
        {coverPicture && (
          <section ref={sectionRef}>
            <img
              onClick={() => handleToCoverPicture()}
              src={coverPicture.urls.regular}
              alt={coverPicture.ult_discription}
            />
          </section>
        )}
      </DescriptionInnerWrapper>
    </DescriptionWrapper>
  );
});

export default Description;
