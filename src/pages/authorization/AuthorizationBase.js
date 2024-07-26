import Header from "../../components/blocks/Header";
import authorizationImage from "../../images/Экран авторизации.svg";

import Footer from "../../components/blocks/Footer";
import DefaultPage from "../../components/containers/DefaultPage";
import { useWindowDimensions } from "../../utils";

const AuthorizationBase = ({children, image = authorizationImage}) => {
    const { height, width } = useWindowDimensions();
    
    return (
        <DefaultPage>
          <div style={{
              display: "flex",
              flexDirection: "column",
              height: height,
              width: width,
              gap: 60,
              justifyContent: "space-between",
              boxSizing: "border-box",
          }}>
              <Header/>
              <div style={{flexGrow: 1, display: "flex", justifyContent: "space-around", boxSizing: "border-box",}}>
                  <div style={{
                      borderRadius: 20
                  }}>
                    <img src={image} style={{
                          borderRadius: 20,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                      }}/>
                  </div>
                  {children}
              </div>
              <Footer/>
          </div>
      </DefaultPage>
    )
}

export default AuthorizationBase