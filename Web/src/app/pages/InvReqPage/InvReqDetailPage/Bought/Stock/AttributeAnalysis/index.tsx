import React from "react";
import styled from "styled-components";
import {Row, Col} from "antd";
import {ConfigChart} from "./ConfigChart";
import {ConfigForm} from "./ConfigForm";
import {ExposeChart} from "./ExposeChart";
import {ExplainForm} from "./ExplainForm";
import {PreferChart} from "./PreferChart";
import {PreferForm} from "./PreferForm";
import {AsyncComponent} from "../../../../../../routing/AsyncComponent";
import {InvReq} from "../../../../../../models/invreq/InvReq";
import {Inject} from "react.di";
import {StockAnalysisService} from "../../../../../../api/StockAnalysisService";

interface Props {
  invreq: InvReq;
}

const Container = styled.div`
  //margin: 10px;
`;

export default class AttributeAnalysis extends React.Component<Props, {}> {
  @Inject service: StockAnalysisService;

  renderItem = async () => {

    const InvreqId = this.props.invreq.invreqId;
    const attributeData = await this.service.getReason(InvreqId);

    return (
      <Container>
        <ConfigChart data={attributeData.styleConfigChart}/>
        <ConfigForm data={attributeData.styleConfigForm}/>
        <Row>
          <Col md={15} sm={24}>
            <ExposeChart  exposeChart={attributeData.styleExposeChart}/>
          </Col>
          <Col md={9} sm={24}>
            <ExplainForm data={attributeData.styleExplainForm}/>
          </Col>
        </Row>
        <PreferChart preferChart={attributeData.preferAndContributionChart}/>
        <PreferForm data={attributeData.preferForm}/>
      </Container>
    );
  }

  render() {
    return <AsyncComponent render={this.renderItem}/>;
  }
}
