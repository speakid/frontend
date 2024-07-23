import { useState, useEffect } from 'react';
import {color_grey_dark, color_grey_light, color_grey_ultra_light} from "../../constants/colors";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const DefaultPage = ({children}) => {
  const { height, width } = useWindowDimensions();

  return (
    <div style={{
      minWidth: width,
      minHeight: height,
      // height: 1,
      boxSizing: "border-box",
      backgroundColor: color_grey_ultra_light
    }}>
        {children}
    </div>
  );
}

export default DefaultPage