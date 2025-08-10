import React from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { LocaleMessage } from "../../internationalization/components";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Inject } from "react.di";
import styled from "styled-components";
import img from "../../../assets/svg/.png";
import SvgImg from "../SvgImg";
import { LocaleStore } from "../../internationalization";
import lang from "../../internationalization/LocaleStore/lang";

export interface FooterProps {
  isMobile?: boolean;
  id?: string;
}

const root = lang().footer;

@observer
export default class Footer extends React.Component<FooterProps, any> {

  static defaultProps = {
    className: "footer1",
    id: "footer_1_0",
    isMobile: false,
  };

  @Inject localeStore: LocaleStore;

  getLiChildren = (data, i) => {
    const links = data.contentLink;
    const content = data.content
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        const link = links[ii];
        const imgContent = isImg ? <img src={cItem} width="100%"/> : cItem;
        return (<li className={isImg ? "icon" : ""} key={ii}>
          {link.startsWith("/")
            ? <Link to={link}>{imgContent}</Link>
            : <a href={link} target="_blank">{imgContent}</a>
          }
        </li>);
      });
    return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
      <h2>{data.title}</h2>
      <ul>
        {content}
      </ul>
    </li>);
  }

  render() {
    const props = {...this.props};
    const isMobile = props.isMobile;
    delete props.isMobile;

    const get = (id: string) => {
      return this.localeStore.get(id);
    };

    const dataSource = [
      {
        title: get(root.contact),
        content: [
          "https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg",
        ],
        contentLink: [
          "https://github.com/wendy7756/AI-Asset-allocation",
        ],
      },
    ];

    return (
      <div className="footer1" style={{height: '100px', position: 'relative'}}>
        <div className="copyright" style={{
          width: '100%',
          height: '100px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2c2c2c'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999'
          }}>
            <LocaleMessage id={root.copyright}/>
            <a href="https://github.com/wendy7756/AI-Asset-allocation" target="_blank" style={{marginLeft: '10px', opacity: 0.7}}>
              <img src="https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg" width="20" height="20" alt="GitHub"/>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export const LogoContainer = styled.div`
  span {
    color: #ffffff;
    font-weight: bold;
    font-size: 21px;
  }
  img {
    margin-right: 8px;
    width: 45px;
    height: 41px;
  }
`;
