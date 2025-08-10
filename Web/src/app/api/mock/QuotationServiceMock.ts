import {StockQuotation} from "../../models/quotation/stock/StockQuotation";
import { Injectable } from "react.di";
import {QuotationService} from "../QuotationService";
import { StockDetailQuotation } from "../../models/quotation/stock/StockDetailQuotation";
import { BondQuotation } from "../../models/quotation/bond/BondQuotation";
import { GoodsQuotation } from "../../models/quotation/goods/GoodsQuotation";

import stockMock from "./mockStockQuotation.json";
import { News } from "../../models/quotation/news/News";
import { waitForMs } from "../../../utils/Wait";
import { mockComponent } from "react-dom/test-utils";

@Injectable
export class QuotationServiceMock extends QuotationService {

  async getNews(): Promise<News[]> {
    // await waitForMs(3000);
    return [
      { 
        time: "2024-12-10 15:30", 
        title: "Federal Reserve Maintains Interest Rates Amid Economic Uncertainty",
        content: "The Federal Reserve announced today that it will maintain the current federal funds rate at 5.25%-5.50% as policymakers assess ongoing economic conditions. Fed Chair Jerome Powell cited mixed economic signals, including robust job growth but slowing inflation trends. The decision comes as markets continue to navigate global trade tensions and domestic fiscal policy changes. Analysts expect the Fed to remain cautious in its approach, with potential rate adjustments dependent on upcoming employment and inflation data. The announcement has led to mixed reactions in equity markets, with financial sector stocks showing modest gains while technology shares declined slightly."
      },
      { 
        time: "2024-12-10 14:15", 
        title: "Tesla Announces Record-Breaking Q4 Vehicle Deliveries",
        content: "Tesla Inc. reported delivering 484,507 vehicles in the fourth quarter, exceeding analyst expectations by 12%. The electric vehicle manufacturer attributed the strong performance to increased production capacity at its Shanghai and Berlin facilities, as well as robust demand for the Model Y and Model 3. CEO Elon Musk highlighted the company's progress in autonomous driving technology and energy storage solutions. The delivery figures represent a 35% year-over-year increase, reinforcing Tesla's position as the world's leading electric vehicle manufacturer. Shares rose 8% in after-hours trading following the announcement."
      },
      { 
        time: "2024-12-10 13:45", 
        title: "Bitcoin Surges Past $48,000 on Institutional Adoption News",
        content: "Bitcoin reached $48,200 today, marking its highest level in six months, following announcements from several major financial institutions regarding cryptocurrency adoption. JPMorgan Chase revealed plans to expand its digital asset services, while Fidelity announced a new Bitcoin ETF offering. The surge was further supported by favorable regulatory comments from the SEC regarding cryptocurrency oversight. Trading volume increased significantly across major exchanges, with analysts noting strong institutional buying pressure. The broader cryptocurrency market also benefited, with Ethereum gaining 6% and other altcoins posting solid gains."
      },
      { 
        time: "2024-12-10 12:20", 
        title: "Apple Unveils Revolutionary AI-Powered Health Features",
        content: "Apple Inc. introduced groundbreaking health monitoring capabilities powered by advanced artificial intelligence during its latest product event. The new features include real-time blood glucose monitoring through the Apple Watch and predictive health analytics that can identify potential health issues before symptoms appear. The technology leverages machine learning algorithms trained on millions of health data points while maintaining strict privacy protections. Apple's stock gained 4% following the announcement, as investors recognized the potential market opportunity in personalized healthcare. The company expects to roll out these features globally by early 2025, pending regulatory approvals."
      },
      { 
        time: "2024-12-10 11:55", 
        title: "Global Supply Chain Disruptions Affect Major Retailers",
        content: "Several major retail chains, including Walmart and Target, reported supply chain challenges affecting inventory levels for the holiday season. The disruptions stem from ongoing port congestion, labor shortages in transportation, and extreme weather events affecting key shipping routes. Companies are implementing alternative sourcing strategies and increasing inventory buffers to mitigate impact. Retail analysts warn that consumers may face limited product availability and higher prices for certain categories. The situation has prompted renewed discussions about supply chain resilience and domestic manufacturing capabilities among policymakers and business leaders."
      },
      { 
        time: "2024-12-10 10:30", 
        title: "Microsoft Announces Major Cloud Infrastructure Expansion",
        content: "Microsoft Corporation unveiled plans for a $20 billion investment in cloud infrastructure over the next two years, including new data centers across emerging markets. The expansion aims to support growing demand for artificial intelligence services and cloud computing capabilities. CEO Satya Nadella emphasized the company's commitment to sustainable technology, noting that all new facilities will be powered by renewable energy. The investment is expected to create over 50,000 jobs globally and strengthen Microsoft's position against competitors like Amazon Web Services and Google Cloud. Shares rose 3% on the news, reaching a new 52-week high."
      }
    ];
  }

  async getStockQuotationData(): Promise<StockQuotation[]> {
    return stockMock;
  }

  async getBondQuotationData(): Promise<BondQuotation[]> {
    return stockMock;
  }

  /**
   * 得到一支股票标的信息
   * @param {string} quotaId 标的id
   * @returns {Promise<StockQuotation>} 标的信息
   */
  async getDetailStockQuotation(quotaId: string): Promise<StockDetailQuotation> {
    return {
      quotaId: "HK1810", // 标的合约代码
      quotaName: "小米集团", // 标的名称
      currentVolume: 16.50, // 现价
      rising: -1.79, // 涨幅：百分比
      upAndDown: 0.300, // 涨跌幅：百分比
      todayPrice: 16.800, // 今日开幅
      yesterdayPrice: 14.24,
      highest: 16.860, // 今日最高
      lowest: 16.380, // 今日最低
      totalVolume: 3.35, // 总成交额:亿
      totalQuantity: 2024.26, // 总成交量：万
      // totalMarketValue: 3725.31, // 总市值:亿
      // circulatedMarketValue: 3725.31, // 流通市值：亿,
      history: stockMock,
    };
  }

  async getGoodsQuotationData(): Promise<GoodsQuotation[]> {
    return stockMock;
  }
}
