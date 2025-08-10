# A+Quant AI Asset Management System

English|[中文](README_CN.md)

## Project Overview

A+Quant is an intelligent asset allocation system powered by artificial intelligence and quantitative analysis. The platform combines advanced machine learning algorithms with comprehensive financial data analysis to provide personalized investment portfolio optimization and precision timing strategies.

The system features a modern English interface with professional-grade investment tools, offering intelligent portfolio optimization, risk-return analysis, and real-time market insights to help users make informed investment decisions.

### Key Features

- **Multi-level Asset Allocation**: Based on the classic Markowitz model with dual risk-return approach. Optimizes for market characteristics with careful target consideration and meticulous recommendations.
- **Quantitative Timing-Based Risk Control**: Monitors quality stocks using short-term timing models. Filters noise through Hilbert and Fourier transforms to capture return inflection points.
- **Machine Learning for Prediction (LSTM)**: Utilizes cutting-edge LSTM neural networks for deep learning. Provides more accurate stock option trend predictions than traditional models.
- **Data Mining Based on Citi API**: Discovers valuable data from users' Citibank API. Generates optimized variables and indicators that reflect user risk-return preferences.
- **Intelligent Recommendations Based on Clustering**: Clusters users with similar risk preferences using Kmeans++ algorithm. LOF removes outliers while self-adjusting centers improve accuracy.
- **Application of DCC-MIDAS Model**: Estimates dynamic correlation between crude oil futures and spot markets. GARCH volatility components improve estimation effectiveness.
- **Economic Policy Uncertainty (EPU) Factor**: Quantifies policy impact on A-shares and commodity markets using uncertainty index for precise trend predictions.
- **INE Crude Oil Futures**: RMB-priced futures targeting Asian markets with medium sour crude oil, representing 45% of global production.
- **Modern English Interface**: Complete English localization with Times New Roman typography for professional presentation.
- **Real-time Financial News**: Curated English financial news from major markets and institutions.

## Technology Stack

### Backend
- **Framework**: Flask + Flask-RESTx (updated from Flask-RESTplus)
- **Database**: SQLite + SQLAlchemy
- **Machine Learning**: TensorFlow, Keras, Scikit-learn
- **Data Processing**: Pandas, NumPy, SciPy
- **Financial Data**: JQData SDK, Tushare
- **Optimization**: CVXOPT
- **Authentication**: PyJWT
- **API Documentation**: Swagger
- **Python Version**: 3.7+ (with compatibility fixes for newer versions)

### Frontend (Web)
- **Framework**: React 16.5+ with TypeScript
- **State Management**: MobX with dependency injection
- **UI Components**: Ant Design
- **Charts**: BizCharts, G6 graph visualization
- **Build Tool**: Webpack 4 with legacy OpenSSL support
- **Language**: TypeScript with English localization (i18n)
- **Styling**: Less + Styled Components
- **Fonts**: Times New Roman for professional English typography
- **Timeline**: HorizontalTimeline component for workflow display

## Project Structure

```
AI-Asset-allocation/
├── Backend/                    # Backend service
│   ├── bl/                    # Business logic layer
│   │   ├── allocation/        # Asset allocation algorithms
│   │   ├── bonds/             # Bond analysis
│   │   ├── goods/             # Commodity analysis
│   │   ├── stock/             # Stock analysis
│   │   └── user/              # User management
│   ├── dao/                   # Data access layer
│   ├── model/                 # Data models
│   ├── routers/               # API routes
│   ├── utils/                 # Utility classes
│   ├── data/                  # Data files
│   ├── requirements.txt       # Python dependencies
│   └── run.py                # Startup file
├── Web/                       # Frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/          # API services
│   │   │   ├── components/   # Common components
│   │   │   ├── pages/        # Page components
│   │   │   ├── models/       # Data models
│   │   │   ├── stores/       # State management
│   │   │   └── layouts/      # Layout components
│   │   └── assets/           # Static resources
│   ├── package.json          # Node.js dependencies
│   └── webpack.config.js     # Webpack configuration
├── Integration test.pdf       # Integration test documentation
├── Interface-class test.pdf   # Interface class test documentation
├── Software Requirements Specification.pdf  # Software requirements specification
├── software launch manual.pdf  # Software launch manual
└── README.md                 # Project documentation
```

## Quick Start

### Prerequisites

- Python 3.7+
- Node.js 10+
- npm/yarn

### Installation & Running

#### 1. Start Backend Service

```bash
# Enter Backend directory
cd Backend

# Install Python dependencies (use pip3 for Python 3)
pip3 install -r requirements.txt --user

# Start backend service (runs on port 8000)
python3 run.py
```

The backend service will start at `http://localhost:8000`, API documentation available at `http://localhost:8000/api`.

**Note**: The backend has been configured to run on port 8000 instead of the default 5000 to avoid conflicts with system services.

#### 2. Start Frontend Service

```bash
# Enter Web directory
cd Web

# Install Node.js dependencies
npm install

# Start frontend development server (with Node.js legacy OpenSSL support)
NODE_OPTIONS="--openssl-legacy-provider" npm start
```

The frontend application will automatically open in the browser at `http://localhost:3000`.

**Note**: The `NODE_OPTIONS="--openssl-legacy-provider"` flag is required for compatibility with older Webpack versions in Node.js 17+.

## Feature Modules

### 1. User Management
- User registration/login
- Investment preference assessment
- Citibank account binding
- User profiling analysis

### 2. Asset Allocation
- Investment requirement analysis
- Intelligent asset allocation algorithms
- Risk-return optimization
- Allocation scheme recommendations

### 3. Investment Analysis
- **Stock Analysis**: Multi-factor model, attribute analysis, performance analysis, scenario analysis
- **Bond Analysis**: Interest rate bonds, credit bonds, duration analysis
- **Commodity Analysis**: Crude oil futures, correlation analysis, technical analysis

### 4. Portfolio Management
- Position monitoring
- Rebalancing alerts
- Transaction records
- Return analysis

### 5. Market Data
- Real-time stock quotations
- Bond market data
- Commodity futures prices
- English financial news feed
- Market trend analysis

## API Endpoints

The system provides complete RESTful APIs, main modules include:

- `/api/user` - User management
- `/api/invreq` - Investment requirements
- `/api/stock` - Stock analysis
- `/api/bonds` - Bond analysis
- `/api/goods` - Commodity analysis
- `/api/quotation` - Market data
- `/api/notification` - Notifications

For detailed API documentation, visit: `http://localhost:8000/api`

## Data Sources

- **Stock Data**: JQData, Tushare
- **Bond Data**: Shanghai Clearing House
- **Commodity Data**: Futures exchanges
- **Macro Data**: National Bureau of Statistics, Central Bank
- **News Data**: Financial media APIs

## Core Algorithms

### Asset Allocation Algorithms
- Markowitz mean-variance model
- Black-Litterman model
- Risk parity model

### Stock Selection Algorithms
- Multi-factor model
- Dynamic factor weight adjustment
- Timing strategies

### Risk Control
- Hindenburg Omen indicator
- Economic Policy Uncertainty Index
- VaR risk measurement

### Machine Learning
- User clustering analysis
- LOF outlier detection
- Time series forecasting

## Recent Updates & Improvements

### English Localization (Latest)
- **Complete English Interface**: All user-facing text has been translated to English
- **Professional Typography**: Times New Roman font applied throughout the application
- **Optimized Content**: Enhanced homepage copy with professional investment terminology
- **English News Feed**: Financial news now displays in English with current market updates
- **Localized Help Pages**: Terms of Service and Privacy Policy available in English

### Technical Improvements
- **Dependency Updates**: Migrated from Flask-RESTplus to Flask-RESTx for better compatibility
- **Port Configuration**: Backend now runs on port 8000 to avoid system conflicts
- **Node.js Compatibility**: Added OpenSSL legacy provider support for modern Node.js versions
- **Enhanced UI Components**: Improved homepage layout with optimized spacing and modern design
- **System Workflow**: Visual timeline component with professional styling

### Bug Fixes
- Fixed Python dependency conflicts for modern environments
- Resolved JQData authentication issues for local development
- Improved markdown file loading for help pages
- Enhanced CSS styling for consistent typography

## Documentation

For detailed development documentation, please refer to:
- [Software Requirements Specification](Software%20Requirements%20Specification.pdf)
- [Software Launch Manual](software%20launch%20manual.pdf)
- [Integration Test Documentation](Integration%20test.pdf)
- [Interface Class Test Documentation](Interface-class%20test.pdf)

## License

This project is licensed under the Apache 2.0 License.

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## Contact

For questions or suggestions, please contact us through:
- Submit an Issue on GitHub: [https://github.com/wendy7756/AI-Asset-allocation](https://github.com/wendy7756/AI-Asset-allocation)
- Email the project maintainers

## System Workflow

The A+Quant system follows a 5-step workflow:

1. **Registration** - Citibank member registration for a website account
2. **Risk-Return Questionnaire** - Determine user's risk-return preferences  
3. **Market Quotations** - Understand market conditions before creating an asset account
4. **Create Asset Account** - Generate a personalized asset allocation account through four indicators
5. **Dynamic Adjustment** - Dynamically adjust investment portfolio based on market changes

---

**Disclaimer**: This project is for financial technology research and educational purposes. The English interface and professional presentation are designed for international academic and professional evaluation. Please consult professional investment advisors for actual investment decisions.
