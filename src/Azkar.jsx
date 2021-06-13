import React, { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "./Azkar.css";
import Counter from "./components/Counter";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function Azkar({
  allAzkar,
  isDarkMode,
  enableDarkMode,
  disableDarkMode,
  history,
  seletedCategory,
}) {
  const [activeAzkar, setActiveAzkar] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [lengthOfAzkar, setLenghtOfAzkar] = useState(0);
  // const [darkMode, setDarkMode] = useState(isDarkMode)

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setLenghtOfAzkar(allAzkar.length);
  }, [allAzkar]);

  useEffect(() => {
    setActiveAzkar(allAzkar[activeIndex]);
  }, [activeIndex, allAzkar]);

  useEffect(() => {
    if (activeAzkar) {
      if (activeAzkar.repeat) {
        setCount(activeAzkar.repeat);
      } else {
        setCount(0);
      }
    }
  }, [activeAzkar]);

  const handleCount = () => {
    if (count > 0) {
      const cloneCount = count - 1;
      setCount(cloneCount);
    } else {
      setCount(0);
    }
  };

  const handleNext = () => {
    check();
    if (lengthOfAzkar > activeIndex) {
      setActiveIndex(activeIndex + 1);
    }
    setActiveAzkar(allAzkar[activeIndex]);
  };
  const handlePre = () => {
    if (lengthOfAzkar > activeIndex && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    setActiveAzkar(allAzkar[activeIndex]);
  };

  const check = () => {
    if (lengthOfAzkar <= activeIndex + 1) {
      history.replace("/done");
    }
    if (Object.keys(activeAzkar).length === 0) {
      history.replace("/done");
    }
  };
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      handlePre();
    }
  }

  if (!activeAzkar) {
    return <Redirect to="/" />;
  }

  return (
    <div className="azkar">
      <div className="azkar__head">
        <div className="azkar__head--left">
          <IconButton
            className="btm__skipIcon"
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon className="btm__skipIcon--back" />
          </IconButton>
          <div className="azkar__head--head">
            <h2>{seletedCategory.groupAzkarAr}</h2>
          </div>
        </div>

        <p>{lengthOfAzkar - activeIndex}</p>
        <IconButton className="azkar__head--icon">
          {isDarkMode ? (
            <Brightness7Icon onClick={disableDarkMode} className="sun" />
          ) : (
            <Brightness4Icon onClick={enableDarkMode} className="moon" />
          )}
        </IconButton>
      </div>
      <div
        className="azkar__main"
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchEnd={() => handleTouchEnd()}
        onTouchMove={(e) => handleTouchMove(e)}
      >
        <div className="azkar__main--top">
          <h2>{activeAzkar.arAzkar}</h2>
        </div>
        <div className="azkar__main--btm">
          <h3>{activeAzkar.arInfo}</h3>
        </div>
        <div className="azkar__main--top">
          <h2>{activeAzkar.enAzkar}</h2>
        </div>
        <div className="azkar__main--btm">
          <h3>{activeAzkar.enInfo}</h3>
        </div>
      </div>
      <div className="btm">
        {/* <p>({activeAzkar.count})</p> */}
        <IconButton className="btm__skipIcon">
          <SkipPreviousIcon
            onClick={handlePre}
            className="btm__skipIcon--pre"
          />
        </IconButton>
        <IconButton>
          <Counter count={count} handleCount={handleCount} />
        </IconButton>
        <IconButton className="btm__skipIcon">
          <SkipNextIcon onClick={handleNext} className="btm__skipIcon--next" />
        </IconButton>
      </div>
    </div>
  );
}

export default Azkar;
