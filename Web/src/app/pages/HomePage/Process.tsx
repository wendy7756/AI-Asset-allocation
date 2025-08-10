import React from "react";
import BigContainer from "./BigContainer";
import G6 from "@antv/g6";
import "@antv/g6/build/plugin.tool.tooltip";
import "@antv/g6/build/plugin.layout.dagre";
import { range } from "../../../utils/Range";
import MediaQuery from "react-responsive";
import { Timeline, Popover } from "antd";
import styled from "styled-components";
import CenterContainer from "./CenterContainer";
import HorizontalTimeline from "react-horizontal-timeline";
import { LocaleMessage } from "../../internationalization/components";
import lang from "../../internationalization/LocaleStore/lang";

interface Props {

}

// Process data is now loaded from internationalization

G6.registerNode("rect", {
  draw(item) {
    const group = item.getGraphicGroup();
    const html = G6.Util.createDOM(
      `<div class="ant-card ant-card-bordered" style="width: 300px;"><div class="ant-card-body"><p>${item.name}</p></div></div>`,
    );
    return group.addShape("dom", {
      attrs: {
        x: 0,
        y: 0,
        width: 300,
        height: 88.75,
        html,
      },
    });
  },
});

function PopoverCard(content: string) {
  return `<div class="ant-popover-content">
<div class="ant-popover-arrow"></div><div class="ant-popover-inner"><div><div class="ant-popover-inner-content"><div><p>${content}</p></div></div></div></div></div>`;
}

// const data = {
//   nodes: [{
//     id: "node1",
//     x: 100,
//     y: 200,
//   }, {
//     id: "node2",
//     x: 300,
//     y: 200,
//   }],
//   edges: [{
//     id: "edge1",
//     target: "node2",
//     source: "node1",
//   }],
// };

const Container = styled.div`

  #vertical {
    display: block;
  }
  
  #horizontal {
    display: none;
  }

  @media (min-width: 600px) {
    #vertical {
      display: none;
    }
    
    #horizontal {
      display: block;
    }
  }
`;

function createGraph(isVertical: boolean) {
  const graph = new G6.Graph({
    container: isVertical ? "vertical" : "horizontal",
    height: 450, // 画布高
    fitView: "tc",
    renderer: "svg",
    plugins: [
      new G6.Plugins["tool.tooltip"]({
        getTooltip({item}) {
          const model = item.getModel();
          return PopoverCard(model.description);
        },
      }),
      isVertical ? new G6.Plugins["layout.dagre"]() : null,
    ].filter((x) => !!x),
    defaultIntersectBox: "rect", // 使用矩形包围盒,
  });

  graph.edge({
    style: {
      endArrow: true,
    },
  });

  graph.node({
    shape: "rect",
    label(model) {
      return model.name;
    },

  });

  graph.on("afterchangesize", (e) => {
    graph.setFitView("tc");
  });

  graph.read(data);

  // return graph;
}

// export default class Process extends React.Component<Props> {
//
//   // componentDidMount() {
//   //
//   //   createGraph(true);
//   //   createGraph(false);
//   //
//   // }
//
//   // componentWillUnmount() {
//   //
//   // }
//
//   render() {
//     return <BigContainer title={"系统流程"}>
//       {/*<Container>*/}
//         {/*<div id={"vertical"}/>*/}
//         {/*<div id={"horizontal"}/>*/}
//       {/*</Container>*/}
//       <CenterContainer>
//       <Timeline>
//         { data.nodes.map((x, i) => (
//           <Timeline.Item key={i}>
//             <Popover content={<p>{x.description}</p>} placement={"right"}>
//               <p>{x.name}</p>
//             </Popover>
//           </Timeline.Item>
//         ))}
//       </Timeline>
//       </CenterContainer>
//     </BigContainer>;
//   }
//
// }

interface State {
  index: number;
}

// getLabel and dummyDate are now defined inside render method

export default class Process extends React.PureComponent<{}, State> {

  state = {
    index: 0,

  };

  indexClick = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const {index} = this.state;
    const simpleSteps = [
      {name: "Registration", description: "Citibank member registration for a website account"},
      {name: "Risk-Return Questionnaire", description: "Determine user's risk-return preferences"},
      {name: "Market Quotations", description: "Understand market conditions before creating an asset account"},
      {name: "Create Asset Account", description: "Generate a personalized asset allocation account through four indicators"},
      {name: "Dynamic Adjustment", description: "Dynamically adjust investment portfolio based on market changes"}
    ];
    const dummyDate = simpleSteps.map((x, i) => `1900-01-0${i + 1}`);
    
    const getLabel = (date: string, index: number) => {
      return <Popover content={<p>{simpleSteps[index].description}</p>} placement={"top"}>
        {simpleSteps[index].name}
      </Popover>;
    };
    
    return <div style={{paddingTop: "20px", paddingBottom: "40px"}}>
    <BigContainer title={<LocaleMessage id={lang().homePage.process.title}/>}>
      <div style={{width: "100%", height: "120px", marginLeft: "auto", marginRight: "auto", maxWidth: "1250px", overflow: "visible"
      }}>

        <HorizontalTimeline
          index={index}
          indexClick={this.indexClick}
          values={dummyDate}
          getLabel={getLabel}
          isOpenEnding={false}
          isOpenBeginning={false}
          labelWidth={120}
          // linePadding={32}
          styles={{background: "#f8f8f8", foreground: "#4190FD", outline: "#dfdfdf"}}
        />
      </div>
      <div className="text-center">
      {/* any arbitrary component can go here */}
      <p>{simpleSteps[index].description}</p>
      </div>
    </BigContainer></div>;
  }
}
