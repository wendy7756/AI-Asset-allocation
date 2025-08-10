import React from "react";
import { InvReq } from "../../../../../models/invreq/InvReq";
import styled from "styled-components";
import {DataComponent} from "./DataComponent";
import {EarnAndRisk} from "../Overview/EarnAndRisk";
import {Col, Row, Button} from "antd";
import {CurrentPosition} from "./CurrentPosition";
import {LatestTransaction} from "./LatestTransaction";
import {AsyncComponent} from "../../../../../routing/AsyncComponent";
import { Inject } from "react.di";
import {InvreqServiceMock} from "../../../../../api/mock/InvreqServiceMock";
import { InvreqService } from "../../../../../api/InvreqService";
import { Link } from "react-router-dom";
import {QuotationService} from "../../../../../api/QuotationService";

interface Props {
  invreq: InvReq;
}

const Container = styled.div`
  //margin: 10px;
`;

export default class StockPage extends React.Component<Props, {}> {
  @Inject service: InvreqService;
  renderItem = async () => {
    const { invreqId } = this.props.invreq;
    const overviewData = await this.service.getStockOverviewData(invreqId);
    const tranData = await this.service.getTransactionLog(invreqId);
    const matchingData = await this.service.getDetailMatching(invreqId);

    return (
      <Container>
        <Row>
          <Col md={7} sm={24}>
            <DataComponent data={overviewData}/>
          </Col>
          <Col md={17} sm={24}>
            <CurrentPosition data={matchingData.filter((x) => x.type === "STOCK")}/>
          </Col>
        </Row>
        <LatestTransaction invreqId={invreqId} data={tranData}/>
      </Container>
    );
  }

  render() {
    return <AsyncComponent render={this.renderItem}/>;
  }
}
