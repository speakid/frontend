import NavBar from "../../components/NavBar";
import {color_grey_ultra_light} from "../../constants/colors";
import {useEffect, useState} from "react";
import DefaultPage from "../../components/containers/DefaultPage";


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

const PersonalDefaultPage = ({children}) => {
    const { height, width } = useWindowDimensions();

    return(
        <DefaultPage>
            <div style={{
                width: width,
                minHeight: height,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <NavBar/>
                <div style={{padding: 25, display: "flex", flexDirection: "row", flexGrow:1, justifyContent: "space-around"}}>
                    {children}
                </div>
            </div>
        </DefaultPage>
    )
}

export default PersonalDefaultPage