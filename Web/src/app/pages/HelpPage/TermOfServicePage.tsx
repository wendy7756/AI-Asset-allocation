import React from "react";

import TOS from "../../../assets/tos.md";
import TOSEn from "../../../assets/tos-en.md";
import styled from "styled-components";
import Markdown from "../../components/Markdown";
import { LocaleStore } from "../../internationalization/LocaleStore/LocaleStore";
import { Inject } from "react.di";
import { observer } from "mobx-react";

interface Props {

}

const Container = styled.div`
  background: white;
  padding: 32px;
  max-width: 800px;
  margin: 4px auto;
  font-family: "Times New Roman", Times, serif !important;
  line-height: 28px;
  
  h1, h2, h3 {
    color: #001529 !important;
    margin: 8px 0 !important;
    font-family: "Times New Roman", Times, serif !important;
  }
  
  p, li, div, span {
    font-family: "Times New Roman", Times, serif !important;
  }

`;

const InnerContainer = styled.div`

`;

@observer
export default class TermOfServicePage extends React.Component<Props, {}> {
  @Inject localeStore: LocaleStore;

  render() {
    const isEnglish = this.localeStore.currentLanguage && this.localeStore.currentLanguage.id === "en-US";
    const content = isEnglish ? TOSEn : TOS;
    
    return <Container>
      <Markdown content={content}/>
    </Container>;
  }
}
