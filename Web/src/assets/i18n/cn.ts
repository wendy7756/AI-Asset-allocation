export default {
  common: {
    loading: "加载中",
    login: {
      needLogin: "请先登录",
      roleNotMatch: "权限不正确。需要权限：{expected}，实际权限：{actual}.",
    },
  },
  quotation: {
    news: "新闻",
    stock: "股票市场",
    bond: "债券市场",
    goods: "商品市场",
  },
  help: {
    tos: "使用条款",
    privacyPolicy: "隐私条款",
  },
  notification: {
    panelTitle: "通知",
    refresh: "刷新",
    none: "没有通知",
    preferenceEvaluation: {
      title: "进行投资偏好测试",
      content: "为了便于您得到适合您的投资偏好，请进行投资偏好测试。",
      readMore: "进行投资偏好测试",
    },
    others: {
      title: "通知",
    },
  },
  footer: {
    productDescription: "多资产量化投资系统",
    help: {
      title: "帮助",
      about: "关于",
      usage: "使用帮助",
    },
    contact: "联系我们",
    copyright: "© 2025 FinTech，保留所有权利。",
  },
  userCenter: {
    profile: {
      title: "个人信息",
      email: "邮箱",
      registerDate: "注册时间",
      citiAccount: {
        title: "绑定的花旗银行账户",
        none: "点击绑定",
      },
    },
    investmentPreference: {
      title: "理财偏好",
      edit: "编辑",
      submit: "提交",
      reset: "恢复",
      cancel: "取消",
      profit: "收益率",
      fluctuation: "波动率",
      evaluation: {
        help: "理财偏好问卷",
        title: "理财偏好问卷",
        submit: "提交",
      },
    },
  },
  loginModal: {
    title: "登录",
    username: "用户名",
    requireUsername: "请输入用户名",
    password: "密码",
    requirePassword: "请输入密码",
    login: "登录",
    forgetPassword: "忘记密码",
    remember: "记住我",
    cancel: "取消",
    register: "注册",
    error: {
      WrongCredential: "用户名或者密码错误",
      ServerError: "服务器出错，请稍候再试",
      NetworkError : "本地网络出错，请检查网络连接",
    },
  },
  emailValidationModal: {
    title: "验证电子邮箱",
    description: "要登录，您必须先验证您的电子邮箱。",
    inputCode: "请输入您的电子邮箱收到的验证码：",
    placeholder: "验证码",
    remember: "记住我",
    sendIndicator: {
      send: "发送验证邮件",
      sent: "邮件已经发送。需要重新发送请等待{seconds}秒。",
    },
    footer: {
      confirm: "确认并登录",
      cancel: "取消",
    },
    message: {
      success: "验证成功。",
      failure: "验证失败。",
    },
  },
  invreq: {
    list: {
      title: "资产账户列表",
      add: "新建",
      detail: "查看详情",
      invreq: "资产账户 {invreqId}",
      bought: {
        true: "已购买",
        false: "未购买",
      },
      recommended: "系统推荐",
    },
    detail: {
      bought: {
        [""]: "总体表现",
        position: {
          _root: "我的持仓",
          reallocation: "调仓记录",
          dailyPosition: "每日持仓",
        },
        transactions: "交易记录",
        setting: "账户设置",
        stock: {
          _root: "股票市场表现",
          perform: "业绩表现",
          attribute: "归因分析",
          scenario: "情景分析",
        },
        bond: {
          _root: "债券市场表现",
          credit: "信用债深度分析",
          rate: "利率债深度分析",
        },
        product: {
          _root: "商品市场表现",
          analysis: "商品市场深度分析",
        },
      },
    },
  },
  languageSelector: {
    loading: "加载中",
  },
  nav: {
    home: "主页",
    help: "帮助",
    invreq: "资产配置",
    login: "登录",
    logout: "登出",
    welcome: "{username}",
    selfCenter: "个人中心",
    navPoints: {
      "": "主页",
      "help": {
        _root: "帮助",
        about: "关于",
        tos: "使用条款",
        privacyPolicy: "隐私条款",
      },
      "portfolio": "资产配置",
      "register": "注册",
      "invreq": {
        _root: "资产配置需求",
        init: "初始化需求",
        account: "资产账户信息",
        bought: {
          overview: "总览",
          stock: {
            _root: "股票市场表现",
            perform: "业绩表现",
            attribute: "归因分析",
            scenario: "情景分析",
          },
          bond: {
            _root: "债券市场表现",
            credit: "信用债深度分析",
            rate: "利益债深度分析",
          },
          transaction: "交易记录",
          position: {
            _root: "我的持仓",
            reallocation: "调仓记录",
            dailyPosition: "每日持仓",
          },
          setting: "账户设置",
        },
      },
      "quotation": {
        _root: "市场行情查看",
        news: "新闻",
        stock: "股票",
        bond: "债券",
        goods: "商品",
      },
    },
    marketQuotation: "市场行情",
  },
  homePage: {
    title: "A+Quant人工智能资产管理",
    subtitle1: "智能投资组合优化与精准择时",
    subtitle2: "通过先进AI技术赋能智慧投资决策",
    loginButton: "登录以开始投资",
    startButton: "开始投资",
    features: {
      title: "系统特性",
      items: [
        {
          title: "多层次资产配置",
          description: "以经典Markowitz模型为依托，同时考虑风险收益，双管齐下；后续针对各市场特点继续优化，每种标的仔细考量，精心推荐。双重保障，层层递进，呈现更完美投资选择。"
        },
        {
          title: "基于量化择时的风险控制",
          description: "采用短线择时模型监控"优质股"，在过滤价格序列的噪声与长期趋势后，通过希尔伯特变换与傅立叶变换获得相位指标，抓住收益率拐点，获得稳健收益。"
        },
        {
          title: "用于预测的机器学习（LSTM）",
          description: "采用人工智能深度学习模型，运用前沿的LSTM长短期记忆神经网络，相比传统的时间序列预测模型，更精确高效地预测股票期权走势。"
        },
        {
          title: "基于花旗API的数据挖掘",
          description: "采用数据挖掘，发掘用户存于花旗银行API的有价值数据。考虑外生变量，生成优化后的集成变量。参考行业管理文件，生成优化指标，有效体现用户风险收益偏好。"
        },
        {
          title: "基于聚类算法的智能推荐",
          description: "聚类风险投资偏好相同的用户，精确推荐。采用可分布式计算的Kmeans++聚类算法，从容应对大数据。LOF算法剔除离群点，优化聚类结果。聚类中心自调整，模型自优化，使得我们的推荐越发精准。"
        },
        {
          title: "DCC-MIDAS模型的应用",
          description: "利用DCC-MIDAS模型估计商品市场中原油期货与现货的动态关联关系，其中GARCH模型的波动成分代替传统DCC模型中的固定成分，可以动态刻画两个市场之间的相关性并提高估计的有效性和消除估计的有偏性。"
        },
        {
          title: "经济政策不确定性因子（EPU）",
          description: "引入经济政策不确定性指数，定量刻画A股与商品市场受政策影响程度，对市场走势进行更为精准的预测。"
        },
        {
          title: "INE原油期货",
          description: "INE原油期货采用人民币计价，面对亚洲市场，同时采用中质含硫原油，全球原油产量的45%,其应用范围更为广泛。"
        }
      ]
    },
    process: {
      title: "系统流程",
      steps: [
        {
          name: "注册",
          description: "花旗银行会员，注册一个网站账户"
        },
        {
          name: "填写风险收益问卷",
          description: "得出用户的风险收益偏好"
        },
        {
          name: "查看市场行情",
          description: "在生成一个资产账户前，先了解市场行情"
        },
        {
          name: "创建资产账户",
          description: "通过四个指标生成一个千人千面的资产配置账户"
        },
        {
          name: "动态调整",
          description: "根据市场变化动态调整投资组合"
        }
      ]
    }
  },
  signIn: {
    title: "大类资产配置方案",
    feature1: "人工智能资产配置",
    feature2: "投资组合动态调整",
    feature3: "数据挖掘个性推荐",
    signPrompt: "注册新用户",
    username: "用户名",
    email: "邮箱",
    password: "密码",
    confirmPassword: "确认密码",
    protocolPrompt: "我已阅读并同意",
    protocol: "A+Quant用户服务协议",
    register: "注册",
    error: {
      check: "您未同意A+Quant服务协议",
      exists: {
        username: "您注册的用户名已存在",
        email: "您注册的Email已经存在",
      },
    },
  },
  invreqInit: {
    init: "初始化需求",
    mode: "模式",
    mode1: "自定义模式",
    mode2: "问卷模式",
    profit: "收益率（大于等于0且小于等于10%）",
    profitHint: "由于余额宝收益率3.439%左右。建议预期收益率不要超过8%。收益率过高会导致资金全部分配于股票市场，请谨慎考虑。",
    fluctuation: "波动率",
    amount: "金额",
    year: "年限",
    submit: "提交",
  },
  noInvreq: {
    predictProfit: "预期年化收益率",
    predictVar: "预期波动率",
    initTrans: "初始交易",
    backTestData: "回测数据",
  },
  accountSetting: {
    setting1: "计划交易时间",
    setting2: "在计划交易时间之前",
    setting2_2: "小时提醒我有交易",
    setting3_1: "交易额超过",
    setting3_2: "需要我手动确认",
    setting4_1: "若自消息发出超过",
    setting4_2: "小时未确认，自动",
    inputDefault: "一键输入默认值",
    cancel: "取消",
    complete: "完成",
  },
};
