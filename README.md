# AI-Fintech Asset Allocation System

English|[中文](README_CN.md)

## Project Overview

AI-Fintech is an intelligent asset allocation project based on machine learning and data mining, combining quantitative investment research with user financial management needs to provide professional and personalized asset allocation services.

The system analyzes users' expected returns and risk tolerance, combines investment periods and amounts, and uses the Markowitz model for optimization to allocate user assets to stock, bond, and commodity markets, minimizing risk while meeting yield requirements.

### Key Features

- **Intelligent Asset Allocation**: Risk-return optimization based on Markowitz model
- **Multi-factor Model**: Dynamic factor weight calculation for stock market
- **Risk Control**: Monitoring Hindenburg Omen and Economic Policy Uncertainty Index
- **Bond Analysis**: Hold-to-maturity strategy with third-party rating and financial analysis
- **Commodity Futures**: Crude oil futures analysis based on time series and DCC-MIDAS models
- **User Profiling**: User portraits based on preferences and Citibank API
- **Deep Analysis**: Performance analysis, attribution analysis, and scenario analysis

## Technology Stack

### Backend
- **Framework**: Flask + Flask-RESTplus
- **Database**: SQLite + SQLAlchemy
- **Machine Learning**: TensorFlow, Keras, Scikit-learn
- **Data Processing**: Pandas, NumPy, SciPy
- **Financial Data**: JQData SDK, Tushare
- **Optimization**: CVXOPT
- **Authentication**: PyJWT
- **API Documentation**: Swagger

### Frontend (Web)
- **Framework**: React 16.5+
- **State Management**: MobX
- **UI Components**: Ant Design
- **Charts**: BizCharts
- **Build Tool**: Webpack 4
- **Language**: TypeScript
- **Styling**: Less + Styled Components

## Project Structure

```
AI-Fintech-Asset-allocation/
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

# Install Python dependencies
pip install -r requirements.txt --user

# Start backend service
python run.py
```

The backend service will start at `http://localhost:5000`, API documentation available at `http://localhost:5000/api`.

#### 2. Start Frontend Service

```bash
# Enter Web directory
cd Web

# Install Node.js dependencies
npm install

# Start frontend development server
npm start
```

The frontend application will automatically open in the browser, typically at `http://localhost:3000`.

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
- Stock quotes
- Bond quotes
- Commodity quotes
- Financial news

## API Endpoints

The system provides complete RESTful APIs, main modules include:

- `/api/user` - User management
- `/api/invreq` - Investment requirements
- `/api/stock` - Stock analysis
- `/api/bonds` - Bond analysis
- `/api/goods` - Commodity analysis
- `/api/quotation` - Market data
- `/api/notification` - Notifications

For detailed API documentation, visit: `http://localhost:5000/api`

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
- Submit an Issue
- Email the project maintainers

---

**Disclaimer**: This project is for financial technology competition purposes only, intended for learning and research. Please consult professional investment advisors for actual investment decisions.
