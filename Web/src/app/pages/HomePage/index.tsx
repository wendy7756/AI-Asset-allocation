import React from "react";
import { Link } from "react-router-dom";
import Particles from "../../components/Particles";
import { layoutConstants } from "../../layouts/components/constants";
import styled from "styled-components";
import Features from "./Features";
import Process from "./Process";
import background from "../../../assets/background/1.png";
import { Row, Col, Divider, Button } from "antd";
import CenterContainer from "./CenterContainer";

import { UiStore } from "../../stores/UiStore";
import { Inject } from "react.di";
import { UserStore } from "../../stores/UserStore";
import { RouterStore } from "../../routing/RouterStore";
import { observer } from "mobx-react";
import { LocaleMessage } from "../../internationalization/components";
import lang from "../../internationalization/LocaleStore/lang";

interface Props {

}

const HomePageContainer = styled.div`
min-height: 800px;
`;

const titleShowcaseHeight = 500;

const BannerContainer = styled.div`
  position: relative;
  height: ${titleShowcaseHeight}px;
  width: 100%;
  background-color: ${layoutConstants.headerBackgrounColor};
`;

const ParticlesContainer = styled.div`
  position: absolute;
  height: ${titleShowcaseHeight}px;
  width: 100%;
  
  z-index: 3;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  height: ${titleShowcaseHeight}px;
  width: 100%;
  
  & > img {
    float: right;
    height: ${titleShowcaseHeight}px;
   
  }
  
  z-index: 1;
`;

const TitleShowcase = styled(CenterContainer)`
  height: ${titleShowcaseHeight}px;
  width: 100%;
  color: white;
  //z-index: 3;
`;

const TitleContent = styled.div`
  line-height: 1.4;
  
  h1 {
    font-size: 36px;
    font-family: "Times New Roman", Times, serif !important;
    font-weight: bold;
    margin: 0;
  }
  
  h2 {
    font-family: "Times New Roman", Times, serif !important;
    margin: 0;
  }
  
  h3 {
    font-family: "Times New Roman", Times, serif !important;
    margin: 0;
  }
  
  button {
    font-family: "Times New Roman", Times, serif !important;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(79, 143, 255, 0.6) !important;
    }
  }
`;

@observer
export default class HomePage extends React.Component<Props, {}> {

  @Inject uiStore: UiStore;
  @Inject userStore: UserStore;
  @Inject routerStore: RouterStore;

  onLogin = () => {
    if (this.userStore.loggedIn) {
      this.routerStore.jumpTo("/invreq");
    } else {
      this.uiStore.toggleLoginModalShown();
    }
  };

  render() {
    const homePageLang = lang().homePage;
    
    return <HomePageContainer>
      <BannerContainer>
        <BackgroundContainer>
          <img src={background}/>
        </BackgroundContainer>
        <ParticlesContainer>
          <Particles marginTop={layoutConstants.headerHeight}
                     height={titleShowcaseHeight + layoutConstants.headerHeight}
          />
        </ParticlesContainer>
        <Row style={{zIndex: 5}}>
          <Col xs={24} md={12}>
            <TitleShowcase>
              <TitleContent>
                <h1 style={{ color: "white", marginBottom: "20px" }}>
                  <LocaleMessage id={homePageLang.title}/>
                </h1>
                <h2 style={{ color: "white", fontSize: "20px", fontWeight: "500", marginBottom: "12px" }}>
                  <LocaleMessage id={homePageLang.subtitle1}/>
                </h2>
                <h3 style={{ color: "#b8c8d8", fontSize: "16px", fontWeight: "400", marginBottom: "30px", lineHeight: "1.5" }}>
                  <LocaleMessage id={homePageLang.subtitle2}/>
                </h3>
                <Button size={"large"} type={"primary"} onClick={this.onLogin} style={{ 
                  fontSize: "16px", 
                  height: "50px", 
                  padding: "0 32px", 
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #4f8fff 0%, #1976d2 100%)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(79, 143, 255, 0.4)"
                }}>
                  <LocaleMessage id={this.userStore.loggedIn 
                    ? homePageLang.startButton 
                    : homePageLang.loginButton}/>
                </Button>
              </TitleContent>
            </TitleShowcase>
          </Col>
        </Row>

      </BannerContainer>

      <Features/>
      <Process/>
    </HomePageContainer>;
  }
}
