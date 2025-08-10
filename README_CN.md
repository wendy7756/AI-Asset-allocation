# AI-Fintech 智能资产配置系统

中文 | [English](README.md) 

## 项目简介

AI-Fintech是一个基于机器学习和数据挖掘的智能资产配置项目，结合定量投资研究和用户财务管理需求，为用户提供专业化、个性化的资产配置服务。

系统通过分析用户的预期收益和风险承受能力，结合投资期限和投资金额，运用马科维茨模型优化配置，将用户资产分配到股票、债券和商品市场，在满足收益需求的同时最小化风险。

### 核心特性

- **智能资产配置**: 基于马科维茨模型的风险-收益优化
- **多因子模型**: 股票市场采用多因子模型，动态计算因子权重
- **风险控制**: 监控兴登堡凶兆和经济政策不确定性指数
- **债券分析**: 采用持有到期策略，结合第三方机构评级和财报分析
- **商品期货**: 基于时间序列模型和DCC-MIDAS模型分析原油期货
- **用户画像**: 基于用户偏好和花旗银行API构建用户画像
- **深度分析**: 提供绩效分析、归因分析和情景分析

## 技术架构

### 后端 (Backend)
- **框架**: Flask + Flask-RESTplus
- **数据库**: SQLite + SQLAlchemy
- **机器学习**: TensorFlow, Keras, Scikit-learn
- **数据处理**: Pandas, NumPy, SciPy
- **金融数据**: JQData SDK, Tushare
- **优化求解**: CVXOPT
- **认证**: PyJWT
- **API文档**: Swagger

### 前端 (Web)
- **框架**: React 16.5+
- **状态管理**: MobX
- **UI组件**: Ant Design
- **图表库**: BizCharts
- **构建工具**: Webpack 4
- **开发语言**: TypeScript
- **样式**: Less + Styled Components

## 项目结构

```
AI-Fintech-Asset-allocation/
├── Backend/                    # 后端服务
│   ├── bl/                    # 业务逻辑层
│   │   ├── allocation/        # 资产配置算法
│   │   ├── bonds/             # 债券分析
│   │   ├── goods/             # 商品分析
│   │   ├── stock/             # 股票分析
│   │   └── user/              # 用户管理
│   ├── dao/                   # 数据访问层
│   ├── model/                 # 数据模型
│   ├── routers/               # API路由
│   ├── utils/                 # 工具类
│   ├── data/                  # 数据文件
│   ├── requirements.txt       # Python依赖
│   └── run.py                # 启动文件
├── Web/                       # 前端应用
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/          # API服务
│   │   │   ├── components/   # 公共组件
│   │   │   ├── pages/        # 页面组件
│   │   │   ├── models/       # 数据模型
│   │   │   ├── stores/       # 状态管理
│   │   │   └── layouts/      # 布局组件
│   │   └── assets/           # 静态资源
│   ├── package.json          # Node.js依赖
│   └── webpack.config.js     # Webpack配置
├── Integration test.pdf       # 集成测试文档
├── Interface-class test.pdf   # 接口类测试文档
├── Software Requirements Specification.pdf  # 软件需求规格说明书
├── software launch manual.pdf  # 软件启动手册
└── README.md                 # 项目说明
```

## 快速开始

### 环境要求

- Python 3.7+
- Node.js 10+
- npm/yarn

### 安装与运行

#### 1. 启动后端服务

```bash
# 进入Backend目录
cd Backend

# 安装Python依赖
pip install -r requirements.txt --user

# 启动后端服务
python run.py
```

后端服务将在 `http://localhost:5000` 启动，API文档可在 `http://localhost:5000/api` 查看。

#### 2. 启动前端服务

```bash
# 进入Web目录
cd Web

# 安装Node.js依赖
npm install

# 启动前端开发服务器
npm start
```

前端应用将自动在浏览器中打开，通常地址为 `http://localhost:3000`。

## 功能模块

### 1. 用户管理
- 用户注册/登录
- 投资偏好评估
- 花旗银行账户绑定
- 用户画像分析

### 2. 资产配置
- 投资需求分析
- 智能资产配置算法
- 风险-收益优化
- 配置方案推荐

### 3. 投资分析
- **股票分析**: 多因子模型、属性分析、绩效分析、情景分析
- **债券分析**: 利率债券、信用债券、久期分析
- **商品分析**: 原油期货、相关性分析、技术分析

### 4. 组合管理
- 持仓监控
- 再平衡提醒
- 交易记录
- 收益分析

### 5. 行情数据
- 股票行情
- 债券行情
- 商品行情
- 财经新闻

## API接口

系统提供完整的RESTful API，主要模块包括：

- `/api/user` - 用户管理
- `/api/invreq` - 投资需求
- `/api/stock` - 股票分析
- `/api/bonds` - 债券分析
- `/api/goods` - 商品分析
- `/api/quotation` - 行情数据
- `/api/notification` - 消息通知

详细的API文档请访问：`http://localhost:5000/api`

## 数据来源

- **股票数据**: 聚宽(JQData)、Tushare
- **债券数据**: 上海清算所
- **商品数据**: 期货交易所
- **宏观数据**: 统计局、央行
- **新闻数据**: 财经媒体API

## 核心算法

### 资产配置算法
- 马科维茨均值-方差模型
- Black-Litterman模型
- 风险平价模型

### 股票选择算法
- 多因子模型
- 因子权重动态调整
- 择时策略

### 风险控制
- 兴登堡凶兆指标
- 经济政策不确定性指数
- VaR风险度量

### 机器学习
- 用户聚类分析
- LOF离群点检测
- 时间序列预测

## 开发文档

详细的开发文档请参考：
- [软件需求规格说明书](Software%20Requirements%20Specification.pdf)
- [软件启动手册](software%20launch%20manual.pdf)
- [集成测试文档](Integration%20test.pdf)
- [接口类测试文档](Interface-class%20test.pdf)

## 许可证

本项目采用Apache 2.0许可证。

## 贡献指南

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 联系我们

如有问题或建议，请通过以下方式联系：
- 提交Issue
- 发送邮件至项目维护者

---

**注意**: 本项目为金融科技竞赛项目，仅供学习和研究使用。实际投资决策请咨询专业的投资顾问。 