import { Modal, Button } from "antd";
import React from "react";
import {TransactionSetting} from "../Bought/Setting/TransactionSetting";
import {InvReq} from "../../../../models/invreq/InvReq";
import {AsyncComponent} from "../../../../routing/AsyncComponent";
import {BoughtTranSetting} from "../../../../models/invreq/Bought/BoughtTranSetting";
import {InvreqService} from "../../../../api/InvreqService";
import {Inject} from "react.di";
import { RouterStore } from "../../../../routing/RouterStore";

interface Props {
  invreq: InvReq;
  settingData: BoughtTranSetting;
  refreshOnBought(): void;
}

export default class SettingModalView extends React.Component<Props, {}> {

  @Inject invreqService: InvreqService;
  @Inject routerStore: RouterStore;

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = async (e) => {
    const { invreqId } = this.props.invreq;
    await this.invreqService.confirmPlanTran(invreqId);
    this.props.refreshOnBought();
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>我要买</Button>
        <Modal
          title="确认交易设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>请确认此资产账户的交易设置</p>
          <div style={{margin: "15px"}}>
            <TransactionSetting id={this.props.invreq.invreqId}
                              data={this.props.settingData}
                              beModified={false}
          />
          </div>
        </Modal>
      </div>
    );
  }
}
