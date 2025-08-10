export default {
  common: {
    loading: "Loading",
    login: {
      needLogin: "Please login first",
      roleNotMatch: "Incorrect permissions. Required: {expected}, Actual: {actual}.",
    },
  },
  quotation: {
    news: "News",
    stock: "Stock Market",
    bond: "Bond Market",
    goods: "Commodity Market",
  },
  help: {
    tos: "Terms of Service",
    privacyPolicy: "Privacy Policy",
  },
  notification: {
    panelTitle: "Notifications",
    refresh: "Refresh",
    none: "No notifications",
    preferenceEvaluation: {
      title: "Take Investment Preference Test",
      content: "To help you get an investment preference that suits you, please take the investment preference test.",
      readMore: "Take Investment Preference Test",
    },
    others: {
      title: "Notifications",
    },
  },
  footer: {
    productDescription: "Multi-Asset Quantitative Investment System",
    help: {
      title: "Help",
      about: "About",
      usage: "User Guide",
    },
    contact: "Contact Us",
    copyright: "© 2025 FinTech, All rights reserved.",
  },
  userCenter: {
    profile: {
      title: "Profile",
      email: "Email",
      registerDate: "Registration Date",
      citiAccount: {
        title: "Linked Citibank Account",
        none: "Click to Link",
      },
    },
    investmentPreference: {
      title: "Investment Preference",
      edit: "Edit",
      submit: "Submit",
      reset: "Reset",
      cancel: "Cancel",
      profit: "Return Rate",
      fluctuation: "Volatility",
      evaluation: {
        help: "Investment Preference Questionnaire",
        title: "Investment Preference Questionnaire",
        submit: "Submit",
      },
    },
  },
  loginModal: {
    title: "Login",
    username: "Username",
    requireUsername: "Please enter username",
    password: "Password",
    requirePassword: "Please enter password",
    login: "Login",
    forgetPassword: "Forgot Password",
    remember: "Remember Me",
    cancel: "Cancel",
    register: "Register",
    error: {
      WrongCredential: "Incorrect username or password",
      ServerError: "Server error, please try again later",
      NetworkError: "Network error, please check your connection",
    },
  },
  emailValidationModal: {
    title: "Email Verification",
    description: "To log in, you must first verify your email address.",
    inputCode: "Please enter the verification code sent to your email:",
    placeholder: "Verification Code",
    remember: "Remember Me",
    sendIndicator: {
      send: "Send Verification Email",
      sent: "Email sent. Please wait {seconds} seconds before resending.",
    },
    footer: {
      confirm: "Confirm and Login",
      cancel: "Cancel",
    },
    message: {
      success: "Verification successful.",
      failure: "Verification failed.",
    },
  },
  invreq: {
    list: {
      title: "Asset Account List",
      add: "Create New",
      detail: "View Details",
      invreq: "Asset Account {invreqId}",
      bought: {
        true: "Purchased",
        false: "Not Purchased",
      },
      recommended: "System Recommended",
    },
    detail: {
      bought: {
        [""]: "Overall Performance",
        position: {
          _root: "My Positions",
          reallocation: "Rebalancing Records",
          dailyPosition: "Daily Positions",
        },
        transactions: "Transaction Records",
        setting: "Account Settings",
        stock: {
          _root: "Stock Market Performance",
          perform: "Performance Analysis",
          attribute: "Attribution Analysis",
          scenario: "Scenario Analysis",
        },
        bond: {
          _root: "Bond Market Performance",
          credit: "Credit Bond Analysis",
          rate: "Interest Rate Bond Analysis",
        },
        product: {
          _root: "Commodity Market Performance",
          analysis: "Commodity Market Analysis",
        },
      },
    },
  },
  languageSelector: {
    loading: "Loading",
  },
  nav: {
    home: "Home",
    help: "Help",
    invreq: "Asset Allocation",
    login: "Login",
    logout: "Logout",
    welcome: "{username}",
    selfCenter: "User Center",
    navPoints: {
      "": "Home",
      "help": {
        _root: "Help",
        about: "About",
        tos: "Terms of Service",
        privacyPolicy: "Privacy Policy",
      },
      "portfolio": "Asset Allocation",
      "register": "Register",
      "invreq": {
        _root: "Asset Allocation Requirements",
        init: "Initialize Requirements",
        account: "Asset Account Information",
        bought: {
          overview: "Overview",
          stock: {
            _root: "Stock Market Performance",
            perform: "Performance Analysis",
            attribute: "Attribution Analysis",
            scenario: "Scenario Analysis",
          },
          bond: {
            _root: "Bond Market Performance",
            credit: "Credit Bond Analysis",
            rate: "Interest Rate Bond Analysis",
          },
          transaction: "Transaction Records",
          position: {
            _root: "My Positions",
            reallocation: "Rebalancing Records",
            dailyPosition: "Daily Positions",
          },
          setting: "Account Settings",
        },
      },
      "quotation": {
        _root: "Market Quotations",
        news: "News",
        stock: "Stocks",
        bond: "Bonds",
        goods: "Commodities",
      },
    },
    marketQuotation: "Market Quotations",
  },
  homePage: {
    title: "A+Quant AI Asset Management",
    subtitle1: "Intelligent Portfolio Optimization with Precision Timing",
    subtitle2: "Empowering Smart Investment Decisions Through Advanced AI Technology",
    loginButton: "Get Started with AI Investing",
    startButton: "Explore Smart Portfolio",
    features: {
      title: "System Features",
      items: [
        {
          title: "Multi-level Asset Allocation",
          description: "Based on the classic Markowitz model, considering both risk and return with a dual approach. Further optimization for each market's characteristics, careful consideration of each target, and meticulous recommendations. Double guarantee, progressive layers, presenting better investment choices."
        },
        {
          title: "Quantitative Timing-Based Risk Control",
          description: "Using short-term timing models to monitor 'quality stocks', filtering noise and long-term trends from price series, obtaining phase indicators through Hilbert and Fourier transforms to capture return inflection points and achieve steady returns."
        },
        {
          title: "Machine Learning for Prediction (LSTM)",
          description: "Utilizing artificial intelligence deep learning models with cutting-edge LSTM long short-term memory neural networks, providing more accurate and efficient prediction of stock option trends compared to traditional time series forecasting models."
        },
        {
          title: "Data Mining Based on Citi API",
          description: "Using data mining to discover valuable data stored in users' Citibank API. Considering exogenous variables to generate optimized integrated variables. Referencing industry management files to generate optimization indicators that effectively reflect user risk-return preferences."
        },
        {
          title: "Intelligent Recommendations Based on Clustering Algorithms",
          description: "Clustering users with similar risk investment preferences for precise recommendations. Using distributed computing-capable Kmeans++ clustering algorithm to handle big data with ease. LOF algorithm removes outliers to optimize clustering results. Self-adjusting cluster centers and model self-optimization make our recommendations increasingly accurate."
        },
        {
          title: "Application of DCC-MIDAS Model",
          description: "Using the DCC-MIDAS model to estimate the dynamic correlation between crude oil futures and spot markets in commodity markets. The volatility component of the GARCH model replaces the fixed component in traditional DCC models, enabling dynamic characterization of correlations between two markets and improving estimation effectiveness while eliminating estimation bias."
        },
        {
          title: "Economic Policy Uncertainty (EPU) Factor",
          description: "Introducing economic policy uncertainty index to quantitatively characterize the degree of policy impact on A-shares and commodity markets, enabling more precise market trend predictions."
        },
        {
          title: "INE Crude Oil Futures",
          description: "INE crude oil futures are priced in RMB, targeting Asian markets, and use medium sour crude oil, representing 45% of global crude oil production with broader application scope."
        }
      ]
    },
    process: {
      title: "System Workflow",
      steps: [
        {
          name: "Registration",
          description: "Citibank member registration for a website account"
        },
        {
          name: "Risk-Return Questionnaire",
          description: "Determine user's risk-return preferences"
        },
        {
          name: "Market Quotations",
          description: "Understand market conditions before creating an asset account"
        },
        {
          name: "Create Asset Account",
          description: "Generate a personalized asset allocation account through four indicators"
        },
        {
          name: "Dynamic Adjustment",
          description: "Dynamically adjust investment portfolio based on market changes"
        }
      ]
    }
  },
  signIn: {
    title: "Multi-Asset Allocation Solution",
    feature1: "AI-Powered Asset Allocation",
    feature2: "Dynamic Portfolio Adjustment",
    feature3: "Data Mining Personalized Recommendations",
    signPrompt: "Register New User",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    protocolPrompt: "I have read and agree to the",
    protocol: "A+Quant User Service Agreement",
    register: "Register",
    error: {
      check: "You have not agreed to the A+Quant service agreement",
      exists: {
        username: "Username already exists",
        email: "Email already exists",
      },
    },
  },
  invreqInit: {
    init: "Initialize Requirements",
    mode: "Mode",
    mode1: "Custom Mode",
    mode2: "Questionnaire Mode",
    profit: "Return Rate (between 0% and 10%)",
    profitHint: "Since Yu'e Bao yields around 3.439%, we recommend not exceeding 8% expected return. High returns may allocate all funds to stock market, please consider carefully.",
    fluctuation: "Volatility",
    amount: "Amount",
    year: "Years",
    submit: "Submit",
  },
  noInvreq: {
    predictProfit: "Expected Annual Return",
    predictVar: "Expected Volatility",
    initTrans: "Initial Transaction",
    backTestData: "Backtest Data",
  },
  accountSetting: {
    setting1: "Planned Trading Time",
    setting2: "Remind me of transactions",
    setting2_2: "hours before planned trading time",
    setting3_1: "Transactions exceeding",
    setting3_2: "require manual confirmation",
    setting4_1: "If not confirmed within",
    setting4_2: "hours after notification, automatically",
    inputDefault: "Input Default Values",
    cancel: "Cancel",
    complete: "Complete",
  },
};
