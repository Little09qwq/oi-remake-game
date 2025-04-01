const moodLimit = 32;

// 初始化游戏状态
let debugmode = false;
let timePoints = 24; // 剩余时间点
let mood = 10; // 当前心态
let currentProblem = 1; // 当前题目
let totalProblems = 0; // 总题目数
let remainingPoints = 15; // 剩余天赋点改为15点
let remainingAbilityPoints = 10; // 剩余能力点
let currentContestName = "NOIP普及组"; // 当前比赛名称

// 角色数值
let playerStats = {
  dp: 0, // 动态规划 (0-20)
  ds: 0, // 数据结构 (0-20)
  string: 0, // 字符串 (0-20)
  graph: 0, // 图论 (0-20)
  combinatorics: 0, // 组合计数 (0-20)
  geometry: 0, // 计算几何 (0-20)
  linearalgebra: 0, // 线性代数 (0-20)
  thinking: 0, // 思维 (0-20)
  coding: 0, // 代码 (0-20)
  carefulness: 0, // 细心 (0-20)
  determination: 500, // 决心
  quickness: 0, // 迅捷 (0-20)
  mental: 0, // 心理素质 (0-20)
  culture: 0, // 文化课 (0-20)
  experience: 0, // 经验 (0-10) - 增加查看模糊题目数据的概率
  isProvincialTeamA: false, // 记录是否为省队A队
  cspScore: 0, // CSP-S比赛成绩
  noipScore: 0, // NOIP比赛成绩
  prevScore: 0, // 省选Day1成绩
  isProvincialTeam: false, // 记录是否进入省队
  prevScore1: 0, // CTT Day1成绩
  prevScore2: 0, // CTT Day2成绩
  prevScore3: 0, // CTT Day3成绩
  noiScore0: 0, // NOI Day0成绩
  isTrainingTeam: false, // 记录是否进入集训队
  isCandidateTeam: false, // 记录是否进入候选队
  isNationalTeam: false, // 记录是否进入国家队
  isIOIgold: false,// 记录是否IOI Au
  isIOIchampion: false, // 记录是否IOI Champion
  tempScore: 0, // 临时分数
  achievements: [], // 用于存储成就记录
  extraMoodDrop: 0, // 额外心态下降值
  isUOJAdmin: false, // 记录是否为UOJ管理员
  isLOJAdmin: false, // 记录是否为LOJ管理员
  isCodeforcesAdmin: false, // 记录是否为Codeforces管理员
  isAtcoderAdmin: false, // 记录是否为Atcoder管理员
  isVJudgeAdmin: false, // 记录是否为VJudge管理员
  isQOJAdmin: false, // 记录是否为 QOJ 管理员
  isUCupAdmin: false, // 记录是否为 UCup 管理员
  isPjudgeAdmin: false, // 记录是否为 Pjudge 管理员
  isLuoguAdmin: false, // 记录是否为 Luogu 管理员
};

// 比赛配置
const contestConfigs = {
  1: { // CSP-S
    name: "CSP-S",
    problemRanges: [
      { minLevel: 1, maxLevel: 3 },
      { minLevel: 2, maxLevel: 4 },
      { minLevel: 3, maxLevel: 5 },
      { minLevel: 3, maxLevel: 6 }
    ],
    timePoints: 21
  },
  2: { // NOIP
    name: "NOIP",
    problemRanges: [
      { minLevel: 2, maxLevel: 4 },
      { minLevel: 3, maxLevel: 4 },
      { minLevel: 4, maxLevel: 6 },
      { minLevel: 5, maxLevel: 7 }
    ],
    timePoints: 24
  },
  3: { // WC
    name: "WC",
    problemRanges: [
      { minLevel: 3, maxLevel: 6 },
      { minLevel: 6, maxLevel: 8 },
      { minLevel: 8, maxLevel: 10 }
    ],
    timePoints: 30
  },
  4: { // 省选Day1
    name: "省选Day1",
    problemRanges: [
      { minLevel: 4, maxLevel: 5 },
      { minLevel: 6, maxLevel: 7 },
      { minLevel: 8, maxLevel: 9 }
    ],
    timePoints: 27
  },
  5: { // 省选Day2
    name: "省选Day2",
    problemRanges: [
      { minLevel: 4, maxLevel: 6 },
      { minLevel: 6, maxLevel: 7 },
      { minLevel: 8, maxLevel: 9 }
    ],
    timePoints: 27
  },
  6: { // APIO
    name: "APIO",
    problemRanges: [
      { minLevel: 4, maxLevel: 8 },
      { minLevel: 4, maxLevel: 8 },
      { minLevel: 4, maxLevel: 8 }
    ],
    timePoints: 30,
    isIOI: true
  },
  7: { // NOI Day1
    name: "NOI Day1",
    problemRanges: [
      { minLevel: 5, maxLevel: 7 },
      { minLevel: 7, maxLevel: 8 },
      { minLevel: 8, maxLevel: 11 }
    ],
    timePoints: 30
  },
  8: { // NOI Day2
    name: "NOI Day2",
    problemRanges: [
      { minLevel: 5, maxLevel: 7 },
      { minLevel: 6, maxLevel: 9 },
      { minLevel: 8, maxLevel: 11 }
    ],
    timePoints: 30
  },
  9: { // CTT Day1
    name: "CTT Day1",
    problemRanges: [
      { minLevel: 8, maxLevel: 11 },
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 8, maxLevel: 11 }
    ],
    timePoints: 30,
    isIOI: true
  },
  10: { // CTT Day2
    name: "CTT Day2",
    problemRanges: [
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 8, maxLevel: 11 },
      { minLevel: 7, maxLevel: 11 }
    ],
    timePoints: 30,
    isIOI: true
  },
  11: { // CTT Day3
    name: "CTT Day3",
    problemRanges: [
      { minLevel: 8, maxLevel: 11 },
      { minLevel: 7, maxLevel: 11 },
      { minLevel: 7, maxLevel: 11 }
    ],
    timePoints: 30,
    isIOI: true
  },
  12: { // CTT Day4
    name: "CTT Day4",
    problemRanges: [
      { minLevel: 8, maxLevel: 11 },
      { minLevel: 7, maxLevel: 11 },
      { minLevel: 8, maxLevel: 11 }
    ],
    timePoints: 30,
    isIOI: true
  },
  13: { // CTS Day1
    name: "CTS Day1",
    problemRanges: [
      { minLevel: 10, maxLevel: 12 },
      { minLevel: 11, maxLevel: 12 },
      { minLevel: 10, maxLevel: 12 }
    ],
    timePoints: 30,
    isIOI: true
  },
  14: { // CTS Day2
    name: "CTS Day2",
    problemRanges: [
      { minLevel: 10, maxLevel: 12 },
      { minLevel: 11, maxLevel: 12 },
      { minLevel: 10, maxLevel: 12 }
    ],
    timePoints: 30,
    isIOI: true
  },
  15: { // IOI Day1
    name: "IOI Day1",
    problemRanges: [
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 8, maxLevel: 10 }
    ],
    timePoints: 30,
    isIOI: true
  },
  16: { // IOI Day2
    name: "IOI Day2",
    problemRanges: [
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 7, maxLevel: 10 },
      { minLevel: 8, maxLevel: 10 }
    ],
    timePoints: 30,
    isIOI: true
  },
  101: {
    name: "NOI Day0",
    problemRanges: [
      { minLevel: 1000, maxLevel: 1000 }
    ],
    timePoints: 3,
    isIOI: true
  }
  
};

// 从指定难度区间随机选择一道题目
function selectProblemFromRange(minLevel, maxLevel) {
  let availableProblems = [];

  // 收集指定难度区间内的所有题目
  for (let level = minLevel; level <= maxLevel; level++) {
    if (problemPoolByLevel[level]) {
      availableProblems = availableProblems.concat(
        problemPoolByLevel[level].map(problem => ({
          ...problem,
          level: level
        }))
      );
    }
  }

  // 随机选择一道题目
  const selectedProblem = availableProblems[Math.floor(Math.random() * availableProblems.length)];
  
  
  return selectedProblem;
}

// 创建一个提交答案题
function createSubmitAnswerProblem(level) {
  // 根据难度调整初始最大分数范围
  const initialMaxScore = Math.max(0, Math.min(100, 30 + level * 5));
  
  // 创建提交答案题目
  return {
    name: "提交答案题",
    isSubmitAnswer: true,
    level: level,
    parts: [
      {
        // 设置初始分数为0，将在首次提交时更新
        score: 0,
        // 不需要思考和代码，但保留基础属性防止报错
        thinking: 0,
        coding: 0,
        dp: 0,
        ds: 0,
        adhoc: 0,
        inspire: 0,
        blur: 0
      }
    ]
  };
}

// 从指定难度区间随机选择一道 IOI 题目
function selectIOIProblemFromRange(minLevel, maxLevel, limitParts) {
  let availableProblems = [];

  // 收集指定难度区间内的所有题目
  for (let level = minLevel; level <= maxLevel; level++) {
    if (problemPoolByLevel[level]) {
      availableProblems = availableProblems.concat(
        problemPoolByLevel[level].map(problem => ({
          ...problem,
          level: level
        }))
      );
    }
  }

  // 随机选择一道题目
  const selectedProblem = availableProblems[Math.floor(Math.random() * availableProblems.length)];
  
  
  // 创建一个问题的副本，以便我们可以修改它
  const problem = JSON.parse(JSON.stringify(selectedProblem));
  
  // 限制问题的特定部分
  if (problem && problem.parts) {
    // 处理每个部分分
    for (let i = 0; i < problem.parts.length; i++) {
      const part = problem.parts[i];
      
      // 如果 ds 部分大于 5，则限制为 5
      if (part.ds && part.ds > 5) {
        if (part.coding) {
          part.coding += (part.ds - 5) / 2;
        } else {
          part.coding = (part.ds - 5) / 2;
        }
        part.ds = 5;
      }
      
      // 如果 combinatorics 部分大于 5，增加 construction 而不是 combinatorics
      if (part.combinatorics && part.combinatorics > 5) {
        if (part.construction) {
          part.construction += part.combinatorics;
        } else {
          part.construction = part.combinatorics;
        }
        part.combinatorics = 0;
      }
      
      // 如果 polynomial 部分大于 0，则设置为 0
      if (part.polynomial && part.polynomial > 0) {
        part.polynomial = 0;
      }

      // 如果 string 部分大于 0，增加到 dp 而不是 string
      if (part.string && part.string > 0) {
        part.dp += part.string;
        part.string = 0;
      }
      
      // 如果 gametheory 部分大于 0，增加到 construction 和 thinking
      if (part.gametheory && part.gametheory > 0) {
        if (part.construction) {
          part.construction += part.gametheory;
        } else {
          part.construction = part.gametheory;
        }
        part.thinking += part.gametheory;
        part.gametheory = 0;
      }
    }
  }
  
  // 如果限制部分数量，则创建新对象
  if (limitParts && problem.parts.length > limitParts) {
    return {
      ...problem,
      parts: problem.parts.slice(0, limitParts)
    };
  }
  
  return problem;
}

// 修改 startNOIPTest 函数，添加商店价格初始化
function startNOIPTest() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("pre-story-panel").style.display = "block";
  document.getElementById("log-panel").style.display = "none";

  // 设置测试模式的剧情
  document.getElementById("pre-story-title").textContent = "NOIP测试模式";
  document.getElementById("pre-story-content").innerHTML = `
              <p>欢迎进入NOIP测试模式！</p>
              <p>这是一个简化的测试版本，你可以快速体验游戏的核心玩法。</p>
              <p>你将直接进入NOIP普及组比赛，体验完整的比赛流程。</p>
              <p>现在，你需要分配你的天赋点，为比赛做好准备。</p>
          `;

  // 重置游戏状态
  timePoints = 24;
  mood = 10;
  currentProblem = 1;
  totalProblems = 0;
  remainingPoints = 15;
  remainingAbilityPoints = 10;
  currentContestName = "NOIP普及组";

  // 重置玩家属性
  playerStats = {
    dp: 0,
    ds: 0,
    string: 0,
    graph: 0,
    combinatorics: 0,
    geometry: 0,
    linearalgebra: 0,
    thinking: 0,
    coding: 0,
    carefulness: 0,
    experience: 0,
    determination: 500,
    achievements: [] // 添加achievements数组初始化
  };

  // 重置商店价格
  currentShopPrices = {
    "思维提升": 200,
    "代码提升": 200,
    "细心提升": 200,
    "随机提升": 150,
    "心态恢复": 500,
    "全面提升": 1000,
    "速度提升": 1000,
    "心理素质提升": 1000
  };

  // 清空日志
  gameLog = [];
  document.getElementById("log").innerHTML = "";
}

let problems = []; // 当前比赛的题目
let subProblems = []; // 每个题目的部分分
let thinkProgress = []; // 每个部分分的思考进度
let codeProgress = []; // 每个部分分的代码进度
let isCodeComplete = []; // 每个部分分的代码是否完成
let errorRates = []; // 存储每个部分分的固定对拍失败概率
let hasCheckedSubProblem = []; // 存储每个部分分是否已经被对拍过

// 游戏日志
let gameLog = [];

// 添加商品价格增长配置
const shopPriceIncrements = {
  easy: {
    "思维提升": 100,
    "代码提升": 100,
    "细心提升": 100,
    "随机提升": 100,
    "心态恢复": 200,
    "全面提升": 500,
    "速度提升": 1000,
    "心理素质提升": 1000
  },
  normal: {
    "思维提升": 200,
    "代码提升": 200,
    "细心提升": 200,
    "随机提升": 100,
    "心态恢复": 200,
    "全面提升": 500,
    "速度提升": 1000,
    "心理素质提升": 1000
  },
  hard: {
    "思维提升": 300,
    "代码提升": 300,
    "细心提升": 300,
    "随机提升": 200,
    "心态恢复": 200,
    "全面提升": 750,
    "速度提升": 1500,
    "心理素质提升": 2000
  },
  expert: {
    "思维提升": 500,
    "代码提升": 500,
    "细心提升": 500,
    "随机提升": 500,
    "心态恢复": 500,
    "全面提升": 1000,
    "速度提升": 2000,
    "心理素质提升": 3000
  }
};

// 添加商品当前价格记录
let currentShopPrices = {
  "思维提升": 500,
  "代码提升": 500,
  "细心提升": 500,
  "随机提升": 500,
  "心态恢复": 500,
  "全面提升": 1000,
  "速度提升": 2500,
  "心理素质提升": 2500
};

// 事件系统配置
const eventSystem = {
  // 训练事件配置
  training: {
    "偷学": {
      title: "偷学",
      description: "在其他人摸鱼摆烂的时候，你却在偷偷学习。这样的学习方式也许会带来一些效果？你其实并不知道，你只是觉得在其他人休息的时候学习，会更有动力。这也是你引以为傲的一点。",
      options: [
        { text: "偷学被同学发现，被迫中断学习", effects: { mood: -1 } },
        { text: "偷学了一些线性代数", effects: { linearalgebra: 1, mood : -1 } },
        { text: "偷学了一些计算几何", effects: { geometry: 1, mood : -1 } },
        { text: "偷学了一些字符串", effects: { string: 1, mood : -1 } },
        { text: "偷学了一些文化课", effects: { culture: 1, mood : -1 } }
      ],
      optionsToShow: 1
    },
    "休息": {
      title: "休息",
      description: "竞赛生的生活非常忙碌，适当的休息也许可以让你更好地调整心态，迎接接下来的挑战。你期待着有个好梦，便躺在了床上。",
      options: [
        { text: "在床上躺着使你感到非常舒适，你很快就睡着了，至于虚幻的梦你醒来时已经记不清了", effects: { mood: 2 } },
        { text: "在床上躺着使你感到非常舒适，你很快就睡着了，至于虚幻的梦你醒来时已经记不清了", effects: { mood: 1 } },
        { text: "在梦里你梦到了很多：喜欢的女孩，曾经的老友，还有你那未完成的梦想", effects: { determination: 500 } },
        { text: "在梦里你梦到了很多：喜欢的女孩，曾经的老友，还有你那未完成的梦想", effects: { determination: 1000 } },
        { text: "渐入梦境之时，你带上了你所有的决心……", effects: {}, nextEvent: "决心商店" },
        { text: "你被楼下的七八岁的小孩吵的无法安然入睡，这让你感到更加烦躁", effects: { mood: -1 } },
        { text: "你做了恐怖的噩梦，感到更焦虑了，这让你感到更加烦躁", effects: { mood: -2 } }
      ],
      optionsToShow: 1
    },
    "打隔膜": {
      title: "打隔膜",
      description: "竞赛生的快乐来源之一，当然是打隔膜。你和你的朋友们一起在机房打隔膜，在享受着游戏的乐趣的同时，又要避开教练的视线——你的学长曾因为在机房打隔膜被教练抓到，然后被罚写检讨并被轰出了机房。",
      options: [
        { text: "轻轻松松带飞全场，你感受到了游戏带来的快感", effects: { mood: 2 } },
        { text: "经过激烈的厮杀后，勉强获胜——这确实缓解了一些压力", effects: { mood: 1 } },
        { text: "打隔膜给你带来了必胜的决心：我在 OI 上也一定会赢！", effects: { determination: 1000 } },
        { text: "被对面虐，心态爆炸。连开了五把却怎么都赢不了，你开始怀疑自己的实力", effects: { mood: -1 } },
        { text: "你在打隔膜时候被抓，跟学长一样地，被罚写检讨并被轰出了机房", effects: { mood: -2 } }
      ],
      optionsToShow: 1
    },
    "摸鱼": {
      title: "摸鱼",
      description: "日常训练给你带来了巨大的压力，你决定在训练期间暂时放松一下，舒缓一下心情。总不会真的有学习机器，连摸鱼的时间都没有吧？",
      options: [
        { text: "刷了会手机，时间就过去了", effects: {} },
        { text: "去床上休息一下，缓解一下压力", effects: {}, nextEvent: "休息" },
        { text: "朋友都在旁边：为什么不一起打隔膜？", effects: {}, nextEvent: "打隔膜" }
      ],
      optionsToShow: 3
    },
    "出游": {
      title: "出游",
      description: "竞赛生都是一些死宅，即使有空的时间也都是待在机房里。然而机房的气氛确实比较压抑，而且平时你也没有时间出去走走，那为什么不去感受一下外面的世界呢？",
      options: [
        { text: "你偶然遇上黄昏和晚霞：在另一个我不学 OI 的世界里，我此时会在做什么？", effects: {mood: -1} },
        { text: "你在湖边的咖啡厅遇到了一位学长，你回心转意决定跟他学习一会", effects: {}, nextEvent: "偷学" },
        { text: "原本只想开开心心地溜达，怎料天下大雨，你被淋成了落汤鸡", effects: { mood: -2 } },
        { text: "后来你才知道：生活不只眼前的 OI，还有诗和远方", effects: { mood: 1 } }
      ],
      optionsToShow: 1
    },
    "遗忘": {
      title: "遗忘",
      description: "一些知识总会在不知不觉中遗忘，就如同历史的长河终究会把你我淹没。——希望大家一直记得我，希望大家永远忘了我。",
      options: [
        { text: "忘记动态规划", effects: { dp: -2 } },
        { text: "忘记数据结构", effects: { ds: -2 } },
        { text: "忘记字符串", effects: { string: -2 } },
        { text: "忘记图论", effects: { graph: -2 } },
        { text: "忘记组合计数", effects: { combinatorics: -2 } },
        { text: "忘记计算几何", effects: { geometry: -2 } },
        { text: "忘记线性代数", effects: { linearalgebra: -2 } },
        { text: "忘记数论", effects: { numbertheory: -2 } },
        { text: "忘记博弈论", effects: { gametheory: -2 } },
        { text: "忘记构造", effects: { construction: -2 } },
        { text: "忘记多项式", effects: { polynomial: -2 } },
        { text: "忘记数学", effects: { linearalgebra: -2, combinatorics: -2, numbertheory: -2, polynomial: -2, gametheory: -2 } },
        { text: "忘记文化课", effects: { culture: -2 } },

        { text: "忘记怎么写代码", effects: { coding: -1 } },
        { text: "忘记如何管理情绪", effects: { mental: -1 } },
        { text: "忘记所有", effects: { dp: -1, ds: -1, string: -1, graph: -1, combinatorics: -1, geometry: -1, linearalgebra: -1, numbertheory: -1, gametheory: -1, construction: -1, polynomial: -1, culture: -1 } }
      ],
      optionsToShow: 3
    },
    "焦虑": {
      title: "焦虑",
      description: "长期的高压生活，你总会陷入焦虑。一次次的挫折后，你开始怀疑自己是否真的适合 OI，是否真的有天赋。你觉得自己不再是三年前那个充满梦想和决心的自己了。但是走到这一步，你已经没有退路了。",
      options: [
        { text: "有时候你开始思考人生的意义：我到底在追求什么？——可惜你找不到答案", effects: { mood: -2 } },
        { text: "你开始轻微抑郁，你总觉得自己的努力没有意义，但也没有解决的办法，只能反复内耗", effects: { mood: -3 } },
        { text: "在焦虑中，你开始选择遗忘，选择逃避，选择放弃", effects: {}, nextEvent: "遗忘" },
        { text: "你在一次次的焦虑中，变得更没有底气和决心", effects: { determination: -500 } }
      ],
      optionsToShow: 2
    },
    "长期训练": {
      title: "长期训练",
      description: "你很幸运地进入到了最好的高中，这里有着最好的师资力量，最好的学习氛围，最好的竞赛氛围。你开始进行长期训练，水平很快得到了提升。",
      options: [
        { text: "综合训练", effects: { dp: 1, ds: 1, string: 1, graph: 1, combinatorics: 1, geometry: 1, linearalgebra: 1, gametheory: 1, construction: 1, polynomial: 1, numbertheory: 1 } },
        { text: "动态规划专项训练", effects: { dp: 6 } },
        { text: "数据结构专项训练", effects: { ds: 6 } },
        { text: "字符串专项训练", effects: { string: 6 } },
        { text: "图论专项训练", effects: { graph: 6 } },
        { text: "计算几何专项训练", effects: { geometry: 4, ds: 2 } },
        { text: "多项式专项训练", effects: { polynomial: 8 } },
        { text: "数论专项训练", effects: { numbertheory: 8 } },
        { text: "博弈论专项训练", effects: { gametheory: 8 } },
        { text: "构造专项训练", effects: { construction: 8 } },
        { text: "数学专项训练", effects: { linearalgebra: 3, combinatorics: 3, polynomial: 3, numbertheory: 3 } },
        { text: "文化课训练", effects: { culture: 4 } }
      ],
      optionsToShow: 6
    },
    "提升训练": {
      title: "提升训练",
      description: "人们只有会利用时间，才能真正地提升自己。你在碎片的时间里反复训练，水平也许会得到略微的提升——当然，你也可以选择摸鱼。",
      options: [
        { text: "动态规划专项训练", effects: { dp: 2 } },
        { text: "数据结构专项训练", effects: { ds: 2 } },
        { text: "字符串专项训练", effects: { string: 2 } },
        { text: "图论专项训练", effects: { graph: 2 } },
        { text: "组合计数专项训练", effects: { combinatorics: 2 } },
        { text: "计算几何专项训练", effects: { geometry: 2 } },
        { text: "线性代数专项训练", effects: { linearalgebra: 2 } },
        { text: "数论专项训练", effects: { numbertheory: 2 } },
        { text: "博弈论专项训练", effects: { gametheory: 2 } },
        { text: "构造专项训练", effects: { construction: 2 } },
        { text: "多项式专项训练", effects: { polynomial: 2 } },
        { text: "数学专项训练", effects: { linearalgebra: 1, combinatorics: 1, numbertheory: 1 } },
        { text: "文化课训练", effects: { culture: 1 } },
        { text: "训练不如摸鱼", effects: {}, nextEvent: "摸鱼" }
      ],
      optionsToShow: 4
    },
    "比赛训练": {
      title: "比赛训练",
      description: "教练告诉你，比赛是检验你水平的最好方式。你开始参加比赛，你希望能在平时的比赛中找到自己的不足，并加以改进。这也许会给你正式的比赛带来帮助。",
      options: [
        { text: "按照教练推荐的，参加校内模拟赛", effects: {}, nextEvent: "模拟赛" },
        { text: "你注意到一些网站上也有比赛资源，也许可以打洛谷月赛", effects: {}, nextEvent: "月赛" },
        { text: "你注意到一些网站上也有比赛资源，也许可以打 Petrozavodsk Camp", effects: {}, nextEvent: "PTZ" },
        { text: "你偶然听说了 Codeforces，大家都说这里的题目质量很高，你决定去参加一下他们的比赛", effects: {}, nextEvent: "Codeforces" },
        { text: "你偶然听说了 Atcoder，大家都说这里的题目质量很高，你决定去参加一下他们的比赛", effects: {}, nextEvent: "Atcoder" },
        { text: "你偶然听说了 UOJ，大家都说这里的题目质量很高，你决定去参加一下他们的比赛", effects: {}, nextEvent: "UOJ" },
        { text: "你偶然听说了 LOJ，大家都说这里的题目质量很高，你决定去参加一下他们的比赛", effects: {}, nextEvent: "LOJ" },
        { text: "你偶然听说了 Universal Cup，大家都说这里的题目质量很高，你决定去参加一下他们的比赛", effects: {}, nextEvent: "UCup" },
        { text: "打比赛不如摸鱼", effects: {}, nextEvent: "摸鱼" }
      ],
      optionsToShow: 3
    },
    "决心商店": {
      title: "决心商店",
      description: "在梦境中，你到了一个神秘的商店。商店的老板告诉你，只要你愿意，你就可以用你的决心来提升你的能力。但也许你需要先慎重地考虑一下，你到底需要什么。每次购买后，商品的价格都会上涨。",
      isShop: true,
      options: [
        { text: "思维提升", effects: { thinking: 1 }, cost: 300, description: "花费300点决心提升1点思维能力（下次购买费用+200）" },
        { text: "代码提升", effects: { coding: 1 }, cost: 300, description: "花费300点决心提升1点代码能力（下次购买费用+200）" },
        { text: "细心提升", effects: { carefulness: 1 }, cost: 300, description: "花费300点决心提升1点细心（下次购买费用+200）" },
        { text: "随机提升", effects: { random: ["dp", "ds", "string", "graph", "combinatorics", "geometry", "linearalgebra", "numbertheory", "gametheory", "construction", "polynomial"] }, cost: 150, description: "花费300点决心随机提升一项算法能力（下次购买费用+200）" },
        { text: "心态恢复", effects: { mood: 3 }, cost: 500, description: "花费500点决心提升3点心态（下次购买费用+100）" },
        { text: "全面提升", effects: { dp: 1, ds: 1, string: 1, graph: 1, combinatorics: 1, geometry: 1, linearalgebra: 1, numbertheory: 1, gametheory: 1, construction: 1, polynomial: 1 }, cost: 1000, description: "花费1000点决心提升所有算法能力（下次购买费用+1000）" },
        { text: "速度提升", effects: { quickness: 1 }, cost: 1500, description: "花费1500点决心提升1点迅捷（下次购买费用+3000）" },
        { text: "心理素质提升", effects: { mental: 1 }, cost: 1500, description: "花费1500点决心提升1点心理素质（下次购买费用+5000）" },
        { text: "放弃购买", effects: {}, description: "离开商店" }
      ],
      optionsToShow: 5
    },
    "好比赛": {
      title: "比赛",
      description: "你对这场比赛的质量十分满意，这确实是一场出的相当不错的比赛。不过他相当大的难度，让你感到有些力不从心。",
      options: [
        { text: "得到提升", effects: { thinking: 2 } },
        { text: "得到提升", effects: { coding: 2 } },
        { text: "得到提升", effects: { ds: 2 } },
        { text: "得到提升", effects: { dp: 2 } },
        { text: "得到提升", effects: { string: 2 } },
        { text: "得到提升", effects: { graph: 2 } },
        { text: "得到提升", effects: { combinatorics: 2 } },
        { text: "得到提升", effects: { geometry: 2 } },
        { text: "得到提升", effects: { linearalgebra: 2 } },
        { text: "得到提升", effects: { numbertheory: 2 } },
        { text: "得到提升", effects: { gametheory: 2 } },
        { text: "得到提升", effects: { construction: 2 } },
        { text: "得到提升", effects: { polynomial: 2 } },
        { text: "在做比赛的时候，你更加坚定了你的决心", effects: { determination: 500 } },
        { text: "你觉得这不是你的正常发挥，你还能做的更好", effects: {}, nextEvent: "焦虑" }
      ],
      optionsToShow: 1
    },
    "正常比赛": {
      title: "比赛",
      description: "这场比赛的质量还算中等，并没有到值得夸赞的地步，但你也许能从中获得一些启发，也可能因为打的不够好而陷入焦虑。",
      options: [
        { text: "得到提升", effects: { thinking: 1 } },
        { text: "得到提升", effects: { coding: 1 } },
        { text: "得到提升", effects: { ds: 1 } },
        { text: "得到提升", effects: { dp: 1 } },
        { text: "得到提升", effects: { string: 1 } },
        { text: "得到提升", effects: { graph: 1 } },
        { text: "得到提升", effects: { combinatorics: 1 } },
        { text: "得到提升", effects: { geometry: 1 } },
        { text: "得到提升", effects: { linearalgebra: 1 } },
        { text: "得到提升", effects: { numbertheory: 1 } },
        { text: "得到提升", effects: { gametheory: 1 } },
        { text: "得到提升", effects: { construction: 1 } },
        { text: "得到提升", effects: { polynomial: 1 } },
        { text: "在做比赛的时候，你更加坚定了你的决心", effects: { determination: 200 } },
        { text: "做完比赛你改变了看法：你觉得做这种比赛就是在浪费时间", effects: { mood: -1 } },
        { text: "做完比赛你只觉得平平无奇，并没有带来什么实际效果", effects: {} },
        { text: "你觉得这不是你的正常发挥，你还能做的更好", effects: {}, nextEvent: "焦虑" }
      ],
      optionsToShow: 1
    },
    "烂比赛": {
      title: "比赛",
      description: "你意识到这是一场极其糟糕的比赛！你坚持认为这场比赛就是垃圾中的王者，不仅浪费时间还搞人心态。",
      options: [
        { text: "尽管如此，你还是从中得到了一些提升", effects: { ds: 1 } },
        { text: "尽管如此，你还是从中得到了一些提升", effects: { geometry: 1 } },
        { text: "尽管如此，你还是从中得到了一些提升", effects: { linearalgebra: 1 } },
        { text: "尽管如此，你还是从中得到了一些提升", effects: { numbertheory: 1 } },
        { text: "建议不会出题就不要出比赛，出题人纯纯智障", effects: { mood: -2 } },
        { text: "好比赛，下次别出了", effects: { mood: -1 } },
        { text: "虽然很垃圾但也就这样，这不会影响什么事", effects: {} },
        { text: "这是不是我的问题？如果真正的比赛也是这样的，那我该怎么办？", effects: {}, nextEvent: "焦虑" },
        { text: "我再也不会笑了", effects: { determination: -300 } },
        { text: "做这场比赛不如去看奶龙大战暴暴龙", effects: { determination: -500 } }, 
        { text: "出题人，****", effects: { determination: -1000 } }
      ],
      optionsToShow: 1
    },
    "娱乐时间": {
      title: "娱乐时间",
      description: "每天反复想题写题的生活一定是很压抑的，你决定利用好你的娱乐时间，做一些你觉得有意义的事情。",
      options: [
        { text: "你趁其他人娱乐，想要偷学一会", effects: {}, nextEvent: "偷学" },
        { text: "你困得不行了，为什么不休息一会", effects: {}, nextEvent: "休息" },
        { text: "年少不知摸鱼好", effects: {}, nextEvent: "摸鱼" },
        { text: "打隔膜是一种很好的娱乐方式", effects: {}, nextEvent: "打隔膜" },
        { text: "有空的时候多去看看世界，看看大自然", effects: {}, nextEvent: "出游" },
        { text: "该去摸鱼，看看网友们都写了什么", effects: {}, nextEvent: "阅读博客" }
      ],
      optionsToShow: 3
    },
    "模拟赛": {
      title: "模拟赛",
      description: "你参加了一场校内模拟赛...",
      options: [
        {
          text: "必须认真打好每一个部分分",
          effects: { coding: 1, experience: 1 },
          nextEventProbability: {
            "好比赛": 0.1,
            "正常比赛": 0.2,
            "烂比赛": 0.7
          }
        },
        {
          text: "随便做做也许会稍微有点提升",
          effects: { random: ["linearalgebra", "geometry", "string", "combinatorics", "experience"] }
        },
        { text: "有这时间不如打打隔膜", effects: {}, nextEvent: "打隔膜" }
      ],
      optionsToShow: 3
    },
    "月赛": {
      title: "月赛",
      description: "你参加了一场洛谷月赛...",
      options: [
        {
          text: "必须认真打好每一个部分分",
          nextEventProbability: {
            "好比赛": 0.05,
            "正常比赛": 0.15,
            "烂比赛": 0.8
          }
        },
        { text: "有这时间不如打打隔膜", effects: {}, nextEvent: "打隔膜" },
        { text: "边做边摸鱼真是一件美妙的事情", effects: {}, nextEvent: "摸鱼" },
        { text: "做了一半你决定摆了", effects: {} }
      ],
      optionsToShow: 3
    },

    "UCup": {
      title: "Universal Cup",
      description: "你参加了一场 Universal Cup 比赛...",
      
      options: [
        {
          text: "我要去找个队友，一起参赛",
          effects: {mood: 2},
          nextEventProbability: {
            "好比赛": 0.5,
            "正常比赛": 0.35,
            "烂比赛": 0.15
          }
        },
        {
          text: "我要来单挑 ucup，努力加训",
          effects: {coding: 1},
          nextEventProbability: {
            "好比赛": 0.5,
            "正常比赛": 0.35,
            "烂比赛": 0.15
          }
        },
        { text: "边做边摸鱼真是一件美妙的事情", effects: {}, nextEvent: "摸鱼" },
        { text: "做了一半你决定摆了", effects: {} }
      ],
      optionsToShow: 3
    },
    "PTZ": {
      title: "Petrozavodsk Camp",
      description: "你参加了一场 Petrozavodsk Camp 比赛...",

      options: [
        {
          text: "我要去找个队友，一起参赛",
          effects: {mood: 3},
          nextEventProbability: {
            "好比赛": 0.4,
            "正常比赛": 0.5,
            "烂比赛": 0.1
          }
        },
        {
          text: "我要来单挑 PTZ Camp，努力加训",
          effects: {coding: 1},
          nextEventProbability: {
            "好比赛": 0.4,
            "正常比赛": 0.5,
            "烂比赛": 0.1
          }
        },
        { text: "边做边摸鱼真是一件美妙的事情", effects: {}, nextEvent: "摸鱼" },
        { text: "做了一半你决定摆了", effects: {} }
      ],
    },

    "看不懂": {
      title: "看不懂这些东西",
      description: "这也太难了，完全不能理解，你决定放弃。",
      options: [
        { text: "我再也不会笑了", effects: { determination: -300 } },
        { text: "自己这么笨，是不是要完蛋了", effects: { mood: -2 } },
        { text: "为什么我要学 OI 啊？？", effects: { mood: -3 } },
      ],
      optionsToShow: 1
    },

    "学会Elegia": {
      title: "学习了 Elegia 的博客",
      description: "你学习了 Elegia 的博客，你发现他的博客写的非常棒，你爱上了这些科技，决定以后多学习学习他的博客。",
      options: [
        { text: "得到提升", effects: { linearalgebra: 8 } },
        { text: "得到提升", effects: { polynomial: 8 } },
        { text: "得到提升", effects: { numbertheory: 8 } },
        { text: "得到提升", effects: { graph: 2 } },
        { text: "得到提升", effects: { combinatorics: 4 } },
      ],
      optionsToShow: 1
    },
    "学会zhoukangyang": {
      title: "学会zhoukangyang",
      description: "你学会了zhoukangyang的博客，你惊讶的发现，原来OI还可以这么有趣，你决定以后多学习学习他的博客。",
      options: [
        { text: "得到提升", effects: { thinking : 2 } },
        { text: "得到提升", effects: { thinking : 1, dp : 2 } },
        { text: "得到提升", effects: { thinking : 1, graph : 2 } },
        { text: "得到提升", effects: { thinking : 1, numbertheory : 4 } },
        { text: "得到提升", effects: { thinking : 1, ds : 2 } },
      ],
      optionsToShow: 1
    },
    "学会skip2004": {
      title: "学会skip2004",
      description: "你学会了skip2004的博客，发现了很多写代码的小技巧，现在你充满了力量！！",
      options: [
        { text: "得到提升", effects: { coding : 1 } },
        { text: "得到提升", effects: { ds : 2 } },
        { text: "得到提升", effects: { carefulness : 1 } },
      ],
      optionsToShow: 1
    },
    "学会Crysfly": {
      title: "学会Crysfly",
      description: "你阅读了Crysfly的博客，你很喜欢 xy 语语录，你觉得非常有趣。",
      options: [
        { text: "得到提升", effects: { mood: 3 } },
      ],
      optionsToShow: 1
    },
    "学会dottle": {
      title: "学会dottle",
      description: "你阅读了dottle的博客，你很喜欢他的这些文学作品，你的内心产生了一丝触动。",
      options: [
        { text: "得到提升", effects: { mood: 2 } },
        { text: "得到提升", effects: { mood: 1, thinking: 1 } },
        { text: "得到提升", effects: { mental: 1 } },
      ],
      optionsToShow: 1
    },
    "学会最新科技": {
      title: "学会最新科技",
      description: "你阅读了arXiv上的最新文章，你发现了一些新的科技，但你不知道除了把他们搬到联考还能干些什么。",
      options: [
        { text: "得到提升", effects: { thinking: 3, combinatorics: 6 } },
        { text: "得到提升", effects: { thinking: 3, numbertheory: 6 } },
        { text: "得到提升", effects: { thinking: 3, gametheory: 6 } },
        { text: "得到提升", effects: { thinking: 3, graph: 4 } },
      ],

      optionsToShow: 1
    },
    "学会dXqwq": {
      title: "学会dXqwq",
      description: "你阅读了dXqwq的推文后，他爱上了与你聊天，并向你传授了 OI 技巧",
      options: [
        { text: "得到提升", effects: { ds: 4 } },
      ],
    },
    "学会adamant": {
      title: "学会adamant",
      description: "你阅读了adamant的博客，学到了一些奇奇怪怪的东西。",
      options: [
        { text: "得到提升", effects: { numbertheory: 4 } },
        { text: "得到提升", effects: { linearalgebra: 4 } },
        { text: "得到提升", effects: { polynomial: 4 } },
        

      ],

      optionsToShow: 1
    },
    "学会号妈培训": {
      title: "学会号妈培训",
      description: "你阅读了号妈培训的博客，感慨到：铜鼓我的努力，我也可以变得比他们更加厉害。",
      options: [
        { text: "得到提升", effects: { determination: 1000, mood : 1 } },
      ],
    },
    "学会djq_cpp": {
      title: "学会djq_cpp",
      description: "你阅读了djq_cpp的课件，这道题好像很有意思！",
      options: [
        { text: "得到提升", effects: { combinatorics: 2 } },
        { text: "得到提升", effects: { ds: 2 } },
        { text: "得到提升", effects: { linearalgebra: 2 } },
        { text: "得到提升", effects: { numbertheory: 2 } },
        { text: "得到提升", effects: { graph: 2 } },
      ],
    },
    "学会xudyh": {
      title: "学会xudyh",
      description: "你阅读了xudyh的课件，尽管非常难懂，你花了很久才理解这是在写什么，但是你学到了很多东西。",
      options: [
        { text: "得到提升", effects: { combinatorics: 3 } },
        { text: "得到提升", effects: { ds: 3 } },
        { text: "得到提升", effects: { linearalgebra: 3 } },
        { text: "得到提升", effects: { numbertheory: 3 } },
        { text: "得到提升", effects: { geometry: 3 } },
        { text: "得到提升", effects: { string: 3 } },
      ],
    },
    "学会VFleaKing": {
      title: "学会VFleaKing",
      description: "你阅读了VFleaKing的博客，你非常喜欢 “四色的 NOI”这篇博客，你感受到了新的力量，并决定以后多多参加 UOJ 的比赛",
      options: [
        { text: "得到提升", effects: { mood: 2 } },
      ],
    },
    "抑郁": {
      title: "抑郁",
      description: "完成阅读后，你感到非常的抑郁，感到人生无比艰难，不知所措",
      options: [
        { text: "哎", effects: { mood: -2 } },
      ],
    },
    "阅读博客": {
      title: "阅读博客",
      description: "你选择阅读网友留下的文字，汲取一些知识",
      options: [
        {
          text: "阅读 Elegia 的博客",
          getNextEventProbability: function() {
            // 基础成功率为0.1，每点polynomial属性、linearalgebra 属性与 combinatorics 属性 增加0.05的成功率，最高0.7
            const baseSuccessRate = 0.1;
            const polynomialBonus = Math.min(0.6, (playerStats.polynomial || 0) * 0.05);
            const linearalgebraBonus = Math.min(0.6, (playerStats.linearalgebra || 0) * 0.05);
            const combinatoricsBonus = Math.min(0.6, (playerStats.combinatorics || 0) * 0.05);
            const successRate = Math.min(0.7, baseSuccessRate + polynomialBonus + linearalgebraBonus + combinatoricsBonus);
            
            return {
              "看不懂": 1 - successRate,
              "学会Elegia": successRate
            };
          }
        },
        {
          text: "阅读 zhoukangyang 的博客",
          nextEventProbability: {
            "看不懂": 0.3,
            "学会zhoukangyang": 0.7
          }
        },
        {
          text: "阅读 skip2004 的博客",
          nextEventProbability: {
            "看不懂": 0.15,
            "学会skip2004": 0.85
          }
        },
        {
          text: "阅读 Crysfly 的博客",
          nextEventProbability: {
            "看不懂": 0.0,
            "学会Crysfly": 1.0
          }
        },
        {
          text: "阅读 dottle 的博客",
          getNextEventProbability: function() {
            // 基础成功率为0.5，每点文化课属性增加 0.1，最高0.95
            const baseSuccessRate = 0.5;
            const cultureBonus = Math.min(0.95, (playerStats.culture || 0) * 0.1);
            const successRate = Math.min(0.95, baseSuccessRate + cultureBonus);
            
            return {
              "看不懂": 1 - successRate,
              "学会dottle": successRate
            };
          }
        },
        {
          text: "阅读 dXqwq 的 X",
          nextEventProbability: {
            "抑郁": 0.5,
            "学会dXqwq": 0.5
          }
        },
        {
          text: "阅读 djq_cpp 的课件",
          nextEventProbability: {
            "看不懂": 0.2,
            "学会djq_cpp": 0.8
          }
        },
        {
          text: "阅读 xudyh 的课件",
          nextEventProbability: {
            "看不懂": 0.7,
            "学会xudyh": 0.3
          }
        },
        {
          text: "阅读 VFleaKing 的博客",
          nextEventProbability: {
            "看不懂": 0.1,
            "学会VFleaKing": 0.9
          }
        },
        {
          text: "阅读 arXiv 上的最新文章",
          nextEventProbability: {
            "看不懂": 0.8,
            "学会最新科技": 0.2
          }
        },
        {
          text: "阅读 adamant 的博客",
          nextEventProbability: {
            "看不懂": 0.3,
            "学会adamant": 0.7
          }
        },
        {
          text: "阅读 号妈培训 的博客",
          nextEventProbability: {
            "抑郁": 0.5,
            "学会号妈培训": 0.5
          }
        },
      ],
      optionsToShow: 3
    },
    "Codeforces": {
      title: "Codeforces",
      description: "你参加了一场 Codeforces 比赛...",
      options: [
        {
          text: "认真打好每一题，必须全神贯注！",
          effects: { thinking: 1 },
          nextEventProbability: {
            "好比赛": 0.3,
            "正常比赛": 0.6,
            "烂比赛": 0.1
          }
        },
        {
          text: "随便做做，别把 rating 看的太重了",
          probabilityEffects: [
            { probability: 0.5, effects: { thinking: 1 } },
            { probability: 0.5, effects: { mood: -1 } }
          ]
        },
        { text: "你发现第一题做不出来，放弃就不会掉分", effects: {} }
      ],
      optionsToShow: 3
    },
    "Atcoder": {
      title: "Atcoder",
      description: "你参加了一场 Atcoder 比赛...",
      options: [
        {
          text: "认真打好每一题，必须全神贯注！",
          effects: { thinking: 1 },
          nextEventProbability: {
            "好比赛": 0.65,
            "正常比赛": 0.3,
            "烂比赛": 0.05
          }
        },
        {
          text: "随便做做，别把 rating 看的太重了",
          probabilityEffects: [
            { probability: 0.6, effects: { thinking: 1 } },
            { probability: 0.4, effects: { mood: -1 } }
          ]
        },
        { text: "你发现第一题做不出来，放弃也会掉分", effects: { mood: -1 } }
      ],
      optionsToShow: 3
    },
    "UOJ": {
      title: "UOJ",
      description: "你参加了一场 UOJ 比赛...",
      options: [
        { 
          text: "认真打好每一题，必须全神贯注！",
          effects: { carefulness: 1 },
          nextEventProbability: {
            "好比赛": 0.55,
            "正常比赛": 0.3,
            "烂比赛": 0.15
          } },
        { text: "随便做做，别把 rating 看的太重了", effects: { thinking: 1 } },
        { text: "你发现第一题做不出来，放弃也会掉分", effects: { mood: -1 } }
      ],
      optionsToShow: 3
    },
    "LOJ": {
      title: "LOJ",
      description: "LOJ 现在根本没有比赛！你感到很难过，很气愤！",
      options: [
        { text: "真是气死我了！", effects: { mood: -1 } },
      ],
    },
    "赛前一天": {
      title: "赛前一天",
      description: "不知不觉已经到了比赛前的最后一天，你不再希望提升你的能力，你只祈祷在比赛中取得一个好成绩——那么现在做什么，才能带来好运呢？",
      options: [
        { text: "缓和心态", effects: { mood: 8 }, description: "调整心态到恰好为 8" },
        { text: "放松一下", effects: { mood: 2 }, description: "心态+2" },
        { text: "渐入梦境", effects: {}, nextEvent: "决心商店", description: "进入决心商店" },
        { text: "提升训练", effects: {}, nextEvent: "提升训练", description: "进行提升训练" },
        { text: "休息一下", effects: {}, nextEvent: "休息", description: "休息" }
      ],
      optionsToShow: 5
    },
    "步入高二": {
      title: "步入高二",
      description: "时光飞逝，转眼间你已经升入高二。新的学年带来了新的挑战，你需要在OI和文化课之间找到平衡。你的决心依然坚定，但你也意识到时间变得更加宝贵。",
      options: [
        { text: "专注OI", effects: { determination: 2000, culture: -2 }, description: "你决定继续专注于OI，为接下来的比赛做准备" },
        { text: "均衡发展", effects: { determination: 1000, culture: 2, mood: 1 }, description: "你试图在OI和文化课之间找到平衡" },
        { text: "感到迷茫", effects: { determination: -200, mood: -2 }, nextEvent: "焦虑", description: "面对繁重的学业压力，你开始质疑自己的选择" },
        { text: "重整旗鼓", effects: { determination: 500, thinking: 1, coding: 1 }, description: "新的学年给了你新的动力，你决定以更好的状态面对挑战" }
      ],
      optionsToShow: 2
    },
    "成为 UOJ 管理员": {
      title: "UOJ 管理员",
      description: "你成为了 UOJ 的管理员！你选择投入时间，为 UOJ 的发展贡献自己的力量。",
      options: [
        { text: "好", effects: { mood: 2, isUOJAdmin: true } },
      ],
    },
    "UOJ管理员": {
      title: "UOJ 管理员招募",
      description: "你听说 UOJ 正在招募下一届管理员！刚好，作为获得了保送资格的集训队选手，你有充分多的时间参与 UOJ 的管理工作。你想要成为 UOJ 的管理员吗？",
      options: [
        { text: "成为管理员", effects: { }, nextEvent: "UOJ管理员", description: "成为 UOJ 管理员" },
        { text: "不感兴趣", effects: {} },
      ],
    },
    "LOJ管理员": {
      title: "LOJ 管理员招募",
      description: "你听说 LOJ 正在招募下一届管理员！刚好，作为获得了保送资格的集训队选手，你有充分多的时间参与 LOJ 的管理工作。你想要成为 LOJ 的管理员吗？",
      options: [
        { text: "成为管理员", effects: { isLOJAdmin: true } },
        { text: "不感兴趣", effects: {} },
      ],
    }
  }
};

// 记录最近的操作
let lastActions = [];
let currentCodeProgress = 0;
let isEventActive = false; // 是否正在显示事件

// 记录日志
function logEvent(message, type = 'normal') {
  // 确保message是字符串
  message = String(message || '');

  let color = '#000000'; // 默认黑色
  let prefix = '';

  switch (type) {
    case 'event':
      prefix = '【事件】';
      break;
    case 'think':
      prefix = '【思考】';
      break;
    case 'code':
      prefix = '【代码】';
      break;
    case 'check':
      prefix = '【对拍】';
      break;
  }

  const formattedMessage = `<p style="color: ${color}">${prefix} ${message}</p>`;
  gameLog.push(formattedMessage);
  // 移除最大条目限制
  const logPanel = document.getElementById("log");
  logPanel.innerHTML = gameLog.join("");
  // 使用 setTimeout 确保在 DOM 更新后再滚动
  setTimeout(() => {
    logPanel.scrollTop = logPanel.scrollHeight;
  }, 0);
}

// 显示事件
function showEvent(event, problemIndex, subProblemIndex) {
  isEventActive = true;
  document.getElementById('event-title').textContent = event.name;
  document.getElementById('event-description').textContent = event.description;

  // 执行效果并获取结果
  const stats = {
    lastActions,
    mood,
    codeProgress: codeProgress[problemIndex][subProblemIndex]
  };
  const effect = event.effect(stats);

  // 更新状态
  mood = stats.mood;
  codeProgress[problemIndex][subProblemIndex] = stats.codeProgress;
  currentCodeProgress = stats.codeProgress;

  // 显示效果
  document.getElementById('event-effect').textContent = effect;
  document.getElementById('event-panel').style.display = 'flex';

  // 记录事件到日志
  logEvent(event.name, 'event');
  logEvent(event.description, 'event');
  logEvent(effect, 'event');

  // 更新界面显示
  updateStatus();
  document.getElementById("player-mood").textContent = mood;
}

// 关闭事件
function closeEvent() {
  isEventActive = false;
  document.getElementById('event-panel').style.display = 'none';
}

// 比赛中的随机事件配置
const randomEvents = [
  {
    name: "心态爆炸",
    description: "连续失败让你感到沮丧...",
    effect: (stats) => {
      stats.mood = Math.max(0, stats.mood - 1);
      return "心态值-1";
    },
    condition: (stats) => {
      // 连续三次相同操作时触发
      const consecutiveActions = stats.lastActions.slice(-3);
      return consecutiveActions.length === 3 &&
        consecutiveActions.every(action => action === consecutiveActions[0]);
    },
    probability: 0.05
  },
  {
    name: "灵光一闪",
    description: "突然想到了一个好方法！",
    effect: (stats) => {
      stats.mood = Math.min(moodLimit, stats.mood + 1);
      return "心态值+1";
    },
    condition: (stats) => {
      // 思考进度超过一半时有机会触发
      const recentActions = stats.lastActions.slice(-1);
      return recentActions.every(action => action === 'think') && stats.thinkProgress > calculateThinkTime(stats.currentSubProblem) / 2;
    },
    probability: 0.03
  },
  {
    name: "代码bug",
    description: "写着写着发现之前的代码有问题...",
    effect: (stats) => {
      stats.codeProgress = Math.max(0, stats.codeProgress - 1);
      return "代码进度-1";
    },
    condition: (stats) => {
      // 代码进度超过一半且最近操作都是写代码时触发
      const recentActions = stats.lastActions.slice(-2);
      return stats.codeProgress > calculateCodeTime(stats.currentSubProblem) / 2 &&
        recentActions.every(action => action === 'code');
    },
    probability: 0.03
  },
  {
    name: "键盘故障",
    description: "键盘突然有点不太灵了...",
    effect: (stats) => {
      stats.mood = Math.max(0, stats.mood - 1);
      return "心态值-1";
    },
    condition: (stats) => {
      // 连续写代码时触发
      const recentActions = stats.lastActions.slice(-2);
      return recentActions.every(action => action === 'code');
    },
    probability: 0.02
  },
  {
    name: "监考老师巡视",
    description: "监考老师正在经过你的座位...",
    effect: (stats) => {
      stats.mood = Math.max(0, stats.mood - 1);
      return "心态值-1";
    },
    condition: (stats) => true, // 任何时候都可能触发
    probability: 0.01
  }
];

// 触发随机事件
function triggerRandomEvent(problemIndex, subProblemIndex) {
  if (timePoints <= 0 || isEventActive) return;

  const stats = {
    lastActions,
    mood,
    codeProgress: codeProgress[problemIndex][subProblemIndex],
    thinkProgress: thinkProgress[problemIndex][subProblemIndex],
    currentSubProblem: subProblems[problemIndex][subProblemIndex]
  };

  // 随机打乱事件顺序，确保每次只触发一个事件
  const shuffledEvents = [...randomEvents].sort(() => Math.random() - 0.5);

  for (const event of shuffledEvents) {
    if (event.condition(stats) && Math.random() < event.probability) {
      // 显示事件面板
      document.getElementById('event-title').textContent = event.name;
      document.getElementById('event-description').textContent = event.description;

      // 应用效果
      const effectResult = event.effect(stats);
      document.getElementById('event-effect').textContent = effectResult;

      // 更新实际状态
      mood = stats.mood;
      codeProgress[problemIndex][subProblemIndex] = stats.codeProgress;

      // 显示事件面板
      document.getElementById("event-panel").style.display = "flex";
      isEventActive = true;

      // 记录事件到日志
      logEvent(`触发突发事件：${event.name}`, 'event');
      logEvent(event.description, 'event');
      logEvent(effectResult, 'event');
      logEvent(`当前心态值：${mood}`, 'event');

      // 更新显示
      updateStatus();
      return;
    }
  }
}

// 剧情配置
const storyConfigs = {
  1: {
    title: "NOIP",
    content: "今天是NOIP复赛的日子，你坐在机房里，看着屏幕上的题目。作为一名OI选手，你需要在有限的时间内完成这些题目。合理分配时间，发挥你的算法专精，争取获得好成绩！"
  },
  2: {
    title: "省选模拟赛",
    content: "这是一场省选模拟赛，题目难度比NOIP更高。你需要更加谨慎地思考，合理利用你的算法专精。记住，细节决定成败！"
  },
  3: {
    title: "集训队选拔",
    content: "这是集训队选拔赛，竞争异常激烈。每个题目都需要你全力以赴，发挥出最佳水平。你的算法专精将是你最强大的武器！"
  }
};

// 更新页面状态
function updateStatus() {
  document.getElementById("time-points").textContent = timePoints;
  // 添加对 problems 数组的检查
  if (problems && problems.length > 0 && currentProblem > 0) {
    document.getElementById("current-problem").textContent = `T${currentProblem} (${problems[currentProblem - 1].name})`;
  } else {
    document.getElementById("current-problem").textContent = "未开始";
  }

const difficultyNames = {
    'easy': '简单',
    'normal': '普通',
    'hard': '困难',
    'expert': '专家'
  };
  const difficultyColors = {
    'easy': '#28a745',    // 绿色
    'normal': '#17a2b8',  // 青色
    'hard': '#ffc107',    // 黄色
    'expert': '#dc3545'   // 红色
  };
  document.getElementById("player-stats-panel").querySelector("h3").innerHTML = 
    `玩家属性 <br> <span style="color: ${difficultyColors[gameDifficulty]}; font-size: 0.9em;">[${difficultyNames[gameDifficulty]}难度]</span>`;


  document.getElementById("player-determination").textContent = playerStats.determination;
  document.getElementById("player-mood").textContent = mood;
  document.getElementById("player-dp").textContent = playerStats.dp;
  document.getElementById("player-ds").textContent = playerStats.ds;
  document.getElementById("player-string").textContent = playerStats.string;
  document.getElementById("player-graph").textContent = playerStats.graph;
  document.getElementById("player-combinatorics").textContent = playerStats.combinatorics;
  document.getElementById("player-geometry").textContent = playerStats.geometry;
  document.getElementById("player-linearalgebra").textContent = playerStats.linearalgebra;
  document.getElementById("player-gametheory").textContent = playerStats.gametheory;
  document.getElementById("player-construction").textContent = playerStats.construction;
  document.getElementById("player-polynomial").textContent = playerStats.polynomial;
  document.getElementById("player-numbertheory").textContent = playerStats.numbertheory;
  document.getElementById("player-experience").textContent = playerStats.experience;
  document.getElementById("player-thinking").textContent = playerStats.thinking;
  document.getElementById("player-coding").textContent = playerStats.coding;

  // 更新隐藏属性的显示状态
  const carefulnessStat = document.getElementById("carefulness-stat");
  const quicknessStat = document.getElementById("quickness-stat");
  const mentalStat = document.getElementById("mental-stat");
  const cultureStat = document.getElementById("culture-stat");

  if (playerStats.carefulness > 0) {
    carefulnessStat.style.display = "block";
    document.getElementById("player-carefulness").textContent = playerStats.carefulness;
  } else {
    carefulnessStat.style.display = "none";
  }

  if (playerStats.quickness > 0) {
    quicknessStat.style.display = "block";
    document.getElementById("player-quickness").textContent = playerStats.quickness;
  } else {
    quicknessStat.style.display = "none";
  }

  if (playerStats.mental > 0) {
    mentalStat.style.display = "block";
    document.getElementById("player-mental").textContent = playerStats.mental;
  } else {
    mentalStat.style.display = "none";
  }

  if (playerStats.culture > 0) {
    cultureStat.style.display = "block";
    document.getElementById("player-culture").textContent = playerStats.culture;
  } else {
    cultureStat.style.display = "none";
  }

  updateSubProblems();

  // 检查是否达到满分（只检查每道题的最后一个部分分）
  if (timePoints > 0) {
    let isFullScore = true;
    for (let i = 0; i < totalProblems; i++) {
      const lastSubProblemIndex = subProblems[i].length - 1;
      if (!isCodeComplete[i][lastSubProblemIndex]) {
        isFullScore = false;
        break;
      }
    }

    // 如果达到满分，显示提前离场按钮
    const actionsDiv = document.querySelector('.actions');
    // 移除所有已存在的"查看结果"和"提前离场"按钮
    const existingButtons = actionsDiv.querySelectorAll('button[onclick="showResults"], #leave-early-btn');
    existingButtons.forEach(button => button.remove());

    if (isFullScore || debugmode == true) {
      // 只在没有提前离场按钮时才添加
      if (!document.getElementById('leave-early-btn')) {
        const leaveButton = document.createElement('button');
        leaveButton.id = 'leave-early-btn';
        leaveButton.className = 'btn blue';
        leaveButton.textContent = '提前离场';
        leaveButton.onclick = () => {
          timePoints = 0;
          leaveButton.style.display = 'none';
          updateStatus();
        };
        actionsDiv.appendChild(leaveButton);
      }
    }
  } else if (timePoints === 0) {
    // 只在时间用完时显示查看结果按钮
    const actionsDiv = document.querySelector('.actions');
    // 移除所有已存在的"查看结果"按钮
    const existingResultButtons = actionsDiv.querySelectorAll('.view-results-btn');
    existingResultButtons.forEach(button => button.remove());

    // 只在没有"查看结果"按钮时才添加
    if (!document.querySelector('.view-results-btn')) {
      const resultButton = document.createElement('button');
      resultButton.className = 'btn purple view-results-btn';
      resultButton.textContent = '查看结果';
      resultButton.onclick = showResults;
      actionsDiv.appendChild(resultButton);
    }
  }
}

// 更新部分分
function updateSubProblems() {
  const subProblemPanel = document.getElementById("sub-problems");
  subProblemPanel.innerHTML = "";

  // 获取当前比赛配置
  const currentContest = Object.values(contestConfigs).find(config => config.name === currentContestName);
  const isIOIContest = currentContest && currentContest.isIOI;

  // 添加检查，确保 subProblems 数组存在且有当前题目的部分分
  if (!subProblems || !subProblems[currentProblem - 1]) {
    return; // 如果没有部分分数据，直接返回
  }

  const subProblemList = subProblems[currentProblem - 1];
  
  // 检查是否是提交答案题（通过检查问题属性）
  const currentProblemIndex = currentProblem - 1;
  const currentProblemObj = problems[currentProblemIndex];
  const isSubmitAnswerProblem = currentProblemObj && currentProblemObj.isSubmitAnswer;
  
  if (isSubmitAnswerProblem) {
    // 提交答案题的特殊处理 - 只有一个提交按钮
    const subProblemDiv = document.createElement("div");
    subProblemDiv.className = "sub-problem";
    
    // 获取当前最高分
    const currentHighestScore = isCodeComplete[currentProblemIndex][0] ? subProblems[currentProblemIndex][0].score : 0;
    
    subProblemDiv.innerHTML = `
                <h4>提交答案题 (最高分数: 100)</h4>
                <p>这是一道提交答案题，每次提交会获得一个随机分数。</p>
                <button class="btn purple" onclick="submitAnswerProblem(${currentProblemIndex})" ${timePoints > 0 ? '' : 'disabled'}>提交答案 (消耗1个时间点)</button>
                <p>当前最高得分: <span style="color: green;">${currentHighestScore}</span></p>
            `;
    
    subProblemPanel.appendChild(subProblemDiv);
    return;
  }
  
  // 原有的非提交答案题处理逻辑
  subProblemList.forEach((subProblem, index) => {
    const subProblemDiv = document.createElement("div");
    subProblemDiv.className = "sub-problem";
    if (thinkProgress[currentProblem - 1][index] >= calculateThinkTime(subProblem)) thinkProgress[currentProblem - 1][index] = calculateThinkTime(subProblem);

    // 构建属性显示字符串
    const attributes = [];
    // 计算经验值影响的概率 (0-100%)
    const revealProbability = Math.min(Math.sqrt(playerStats.experience) * 25, 100);
    
    // 检查是否应该根据经验值显示属性，即使题目是模糊的
    const shouldRevealAttribute = () => {
      return Math.random() * 100 <= revealProbability;
    };
    
    if (subProblem.dp > 0) attributes.push(`<span title="需要动态规划相关知识，数值越高难度越大">动态规划: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.dp}</span>`);
    if (subProblem.ds > 0) attributes.push(`<span title="需要数据结构相关知识，数值越高难度越大">数据结构: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.ds}</span>`);
    if (subProblem.string > 0) attributes.push(`<span title="需要字符串算法相关知识，数值越高难度越大">字符串: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.string}</span>`);
    if (subProblem.graph > 0) attributes.push(`<span title="需要图论相关知识，数值越高难度越大">图论: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.graph}</span>`);
    if (subProblem.combinatorics > 0) attributes.push(`<span title="需要组合计数相关知识，数值越高难度越大">组合计数: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.combinatorics}</span>`);
    if (subProblem.geometry > 0) attributes.push(`<span title="需要计算几何相关知识，数值越高难度越大">计算几何: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.geometry}</span>`);
    if (subProblem.linearalgebra > 0) attributes.push(`<span title="需要线性代数相关知识，数值越高难度越大">线性代数: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.linearalgebra}</span>`);
    if (subProblem.gametheory > 0) attributes.push(`<span title="需要博弈论相关知识，数值越高难度越大">博弈论: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.gametheory}</span>`);
    if (subProblem.construction > 0) attributes.push(`<span title="需要构造相关知识，数值越高难度越大">构造: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.construction}</span>`);
    if (subProblem.polynomial > 0) attributes.push(`<span title="需要多项式相关知识，数值越高难度越大">多项式: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.polynomial}</span>`);
    if (subProblem.numbertheory > 0) attributes.push(`<span title="需要数论相关知识，数值越高难度越大">数论: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.numbertheory}</span>`);
    if (subProblem.adhoc > 0) attributes.push(`<span title="需要特殊解法，数值越高难度越大">Adhoc: ${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : subProblem.adhoc}</span>`);
    if (subProblem.thinking > 0) attributes.push(`<span title="题目思维难度，影响思考成功率">思维: ${subProblem.thinking}</span>`);
    if (subProblem.coding > 0) attributes.push(`<span title="代码实现难度，影响写代码所需时间">代码: ${subProblem.coding}</span>`);
    if (subProblem.detail > 0) attributes.push(`<span title="代码细节要求，影响代码实现成功率">细节: ${subProblem.detail}</span>`);
    if (subProblem.trap > 0) attributes.push(`<span title="题目中的陷阱数量，增加代码出错概率">陷阱: ${subProblem.trap}</span>`);
    if (subProblem.independent > 0) attributes.push(`<span title="独立部分分的思考进度不会影响其他部分分">独立: ${subProblem.independent}</span>`);
    if (subProblem.heat > 0) attributes.push(`<span title="无效思考或无效代码会导致心态下降的程度">红温: ${subProblem.heat}</span>`);
    if (subProblem.blur > 0) attributes.push(`<span title="题目难度未知，需要思考后才能显示">模糊: ${subProblem.blur}</span>`);
    if (subProblem.fallback > 0) attributes.push(`<span title="对拍失败时额外回退代码进度的值">回退: ${subProblem.fallback}</span>`);
    if (subProblem.inspire > 0) attributes.push(`<span title="代码完成时提升心态的值">激励: ${subProblem.inspire}</span>`);

    subProblemDiv.innerHTML = `
                  <h4>部分分 ${index + 1} (分数: ${subProblem.score})</h4>
                  <p>${attributes.join(', ')}</p>
                  <button class="blue ${thinkProgress[currentProblem - 1][index] >= calculateThinkTime(subProblem) ? 'completed' : ''}" onclick="thinkSubProblem(${currentProblem - 1}, ${index})" ${(isCodeComplete[currentProblem - 1][index] || thinkProgress[currentProblem - 1][index] >= calculateThinkTime(subProblem)) ? 'disabled' : ''}>思考 (<span>${thinkProgress[currentProblem - 1][index]}/${(subProblem.blur && thinkProgress[currentProblem - 1][index] < calculateThinkTime(subProblem) && !shouldRevealAttribute()) ? '?' : calculateThinkTime(subProblem)}</span>, 成功率: <span>${Math.round(calculateThinkSuccessRate(subProblem) * 100)}%</span>)</button>
                  <button class="blue ${codeProgress[currentProblem - 1][index] >= calculateCodeTime(subProblem) ? 'completed' : ''}" onclick="writeCodeSubProblem(${currentProblem - 1}, ${index})" ${thinkProgress[currentProblem - 1][index] >= calculateThinkTime(subProblem) && !isCodeComplete[currentProblem - 1][index] && codeProgress[currentProblem - 1][index] < calculateCodeTime(subProblem) ? '' : 'disabled'}>写代码 (<span>${codeProgress[currentProblem - 1][index]}/${calculateCodeTime(subProblem)}</span>, 成功率: <span>${Math.round(calculateCodeSuccessRate(subProblem) * 100)}%</span>)</button>
                  <button class="btn ${isIOIContest ? 'purple' : 'blue'} ${isCodeComplete[currentProblem - 1][index] ? 'completed' : ''}" onclick="checkCodeSubProblem(${currentProblem - 1}, ${index})" ${codeProgress[currentProblem - 1][index] >= calculateCodeTime(subProblem) && !isCodeComplete[currentProblem - 1][index] && (isIOIContest || timePoints > 0) ? '' : 'disabled'}>${isIOIContest ? '提交' : '对拍'} (出错概率: <span>${errorRates[currentProblem - 1][index] >= 0 ? `${Math.round(errorRates[currentProblem - 1][index] * 100)}` : '?'}%</span>)</button>
                  ${(!isIOIContest && codeProgress[currentProblem - 1][index] >= calculateCodeTime(subProblem)) || (isIOIContest && isCodeComplete[currentProblem - 1][index]) ? '<p style="color: green;">已完成</p>' : ''}
              `;
    subProblemPanel.appendChild(subProblemDiv);
  });
}

// 计算思考时间
function calculateThinkTime(subProblem) {
  let thinkTime = 1;
  if (debugmode == true) return thinkTime;
  thinkTime += Math.pow(Math.max(0, subProblem.dp - mapAttributeValue(playerStats.dp)), 2);
  thinkTime += Math.pow(Math.max(0, subProblem.graph - mapAttributeValue(playerStats.graph)), 2);
  thinkTime += Math.pow(Math.max(0, subProblem.combinatorics - mapAttributeValue(playerStats.combinatorics)), 2);
  thinkTime += Math.pow(Math.max(0, (subProblem.linearalgebra || 0) - mapAttributeValue(playerStats.linearalgebra || 0)), 2);
  thinkTime += Math.pow(Math.max(0, (subProblem.gametheory || 0) - mapAttributeValue(playerStats.gametheory || 0)), 2);
  thinkTime += Math.pow(Math.max(0, (subProblem.construction || 0) - mapAttributeValue(playerStats.construction || 0)), 2);
  thinkTime += Math.pow(Math.max(0, (subProblem.polynomial || 0) - mapAttributeValue(playerStats.polynomial || 0)), 2);
  thinkTime += Math.pow(Math.max(0, (subProblem.numbertheory || 0) - mapAttributeValue(playerStats.numbertheory || 0)), 2);
 
  thinkTime += Math.max(0, subProblem.ds - mapAttributeValue(playerStats.ds));
  thinkTime += Math.max(0, subProblem.string - mapAttributeValue(playerStats.string));

  thinkTime += subProblem.adhoc;


  // 迅捷属性影响思考时间
  if (playerStats.quickness > 0) {
    thinkTime = Math.max(1, thinkTime - playerStats.quickness);
  }
  return thinkTime;
}

// 计算代码时间
function calculateCodeTime(subProblem) {
  if (debugmode == true) return 1;
  let codeTime = subProblem.coding;
  codeTime += Math.pow(Math.max(0, (subProblem.geometry || 0) - mapAttributeValue(playerStats.geometry || 0)), 2);
  codeTime += Math.pow(Math.max(0, subProblem.ds - mapAttributeValue(playerStats.ds)), 2);
  codeTime += Math.pow(Math.max(0, subProblem.string - mapAttributeValue(playerStats.string)), 2);

  codeTime += Math.max(0, subProblem.dp - mapAttributeValue(playerStats.dp));
  codeTime += Math.max(0, subProblem.graph - mapAttributeValue(playerStats.graph));
  codeTime += Math.max(0, subProblem.combinatorics - mapAttributeValue(playerStats.combinatorics));
  codeTime += Math.max(0, (subProblem.linearalgebra || 0) - mapAttributeValue(playerStats.linearalgebra || 0));
  codeTime += Math.max(0, (subProblem.gametheory || 0) - mapAttributeValue(playerStats.gametheory || 0));
  codeTime += Math.max(0, (subProblem.construction || 0) - mapAttributeValue(playerStats.construction || 0));
  codeTime += Math.max(0, (subProblem.polynomial || 0) - mapAttributeValue(playerStats.polynomial || 0));
  codeTime += Math.max(0, (subProblem.numbertheory || 0) - mapAttributeValue(playerStats.numbertheory || 0));

  if (playerStats.coding > 0) {
    codeTime = Math.max(1, codeTime - playerStats.coding);
  }

  return codeTime;
}

// 计算思考成功概率
function calculateThinkSuccessRate(subProblem) {
  // 根据难度调整基础成功率
  let baseProb;
  switch(gameDifficulty) {
    case 'easy':
      baseProb = 0.9; // 简单难度90%基础成功率
      break;
    case 'normal':
      baseProb = 0.85; // 普通难度85%基础成功率
      break;
    case 'hard':
      baseProb = 0.8; // 困难难度80%基础成功率
      break;
    case 'expert':
      baseProb = 0.75; // 专家难度75%基础成功率
      break;
    default:
      baseProb = 0.8; // 默认80%基础成功率
  }
  
  if (debugmode == true) return 1;
  // 思维能力影响（每差1点降低7.5%）
  baseProb -= Math.max(0, subProblem.thinking - mapAttributeValue(playerStats.thinking)) * 0.075;
  // 心态影响（每差1点降低x^2%）

  baseProb += playerStats.carefulness * 0.05; // 每点细心增加 5%

  baseProb -= Math.pow(Math.max(10 - mood, 0), 2) * 0.01;
  return Math.max(0.01, Math.min(0.99, baseProb)); // 限制概率在1%-99%之间
}

// 计算写代码成功概率
function calculateCodeSuccessRate(subProblem) {
  // 根据难度调整基础成功率
  let baseProb;
  switch(gameDifficulty) {
    case 'easy':
      baseProb = 0.9; // 简单难度90%基础成功率
      break;
    case 'normal':
      baseProb = 0.85; // 普通难度85%基础成功率
      break;
    case 'hard':
      baseProb = 0.8; // 困难难度80%基础成功率
      break;
    case 'expert':
      baseProb = 0.75; // 专家难度75%基础成功率
      break;
    default:
      baseProb = 0.8; // 默认80%基础成功率
  }
  
  if (debugmode == true) return 1;
  // 心态影响（每差1点降低x^2%）
  baseProb -= Math.pow(Math.max(10 - mood, 0), 2) * 0.01;

  baseProb += playerStats.carefulness * 0.05; // 每点细心增加 5%
  // 细节影响（每差1点降低3%）
  baseProb -= Math.max(0, subProblem.detail - mapAttributeValue(playerStats.coding)) * 0.05;
  return Math.max(0.01, Math.min(0.99, baseProb)); // 限制概率在1%-99%之间
}

// 计算代码出错概率
function calculateErrorRate(subProblem) {
  // 根据难度调整基础出错概率
  let baseProb;
  switch(gameDifficulty) {
    case 'easy':
      baseProb = 0.1; // 简单难度10%基础出错概率
      break;
    case 'normal':
      baseProb = 0.2; // 普通难度20%基础出错概率
      break;
    case 'hard':
      baseProb = 0.3; // 困难难度30%基础出错概率
      break;
    case 'expert':
      baseProb = 0.4; // 专家难度40%基础出错概率
      break;
    default:
      baseProb = 0.2; // 默认20%基础出错概率
  }
  
  if (debugmode == true) return 0;
  baseProb += subProblem.trap * 0.05; // 每个陷阱增加5%
  baseProb -= playerStats.carefulness * 0.03; // 每点细心降低3%
  baseProb += Math.pow(Math.max(10 - mood, 0), 2) * 0.01; // 心态影响
  return Math.max(0, Math.min(0.8, baseProb)); // 限制在0%-80%之间
}

function proceedToAllocation() {
  document.getElementById("pre-story-panel").style.display = "none";
  document.getElementById("allocate-panel").style.display = "block";
  document.getElementById("log-panel").style.display = "none";
  
  // 更新天赋点显示
  document.getElementById("remaining-points").textContent = remainingPoints;
  document.getElementById("remaining-ability-points").textContent = remainingAbilityPoints;
}

function startStory(storyIndex) {
  document.getElementById("story-panel").style.display = "block";
  document.getElementById("allocate-panel").style.display = "none";
  document.getElementById("log-panel").style.display = "block"; // 显示日志面板，因为已进入游戏阶段

  // 根据storyIndex获取对应的剧情配置
  const storyConfig = storyConfigs[storyIndex] || storyConfigs[1]; // 如果没有对应的配置，默认使用第一个

  // 更新剧情面板内容
  document.querySelector("#story-panel h2").textContent = storyConfig.title;
  document.querySelector("#story-panel p").textContent = storyConfig.content;

  // 添加游戏开始的日志
  logEvent("游戏开始！", 'normal');
  logEvent("你已完成天赋分配，即将开始NOIP比赛。", 'normal');
}

function startGame() {
  document.getElementById("allocate-panel").style.display = "none";
  document.getElementById("game-interface").style.display = "block";
  document.getElementById("story-panel").style.display = "none";
  document.getElementById("log-panel").style.display = "block";

  // 根据心理素质计算心态下降
  let moodDrop = 1 + extraMoodDrop; // 基础心态下降值
  if (playerStats.mental > 0) {
    moodDrop = Math.max(moodDrop - playerStats.mental, 0);
  }
  mood = Math.max(0, mood - moodDrop);

  // 添加NOIP开始的日志
  logEvent("NOIP正式开始！", 'normal');
  logEvent("你坐在考场中，深吸一口气，准备迎接挑战...", 'normal');
  logEvent(`进入考场，心态值-${moodDrop}，当前心态值：${mood}`, 'normal');
  logEvent("请合理分配时间，仔细思考每个部分分。", 'normal');

  // 更新心态值显示
  document.getElementById("player-mood").textContent = mood;

  updateStatus();
}

// 确认天赋点分配
function confirmAllocation() {
  // 获取知识点输入
  const knowledgeInputs = {
    dp: document.getElementById("dp").value,
    ds: document.getElementById("ds").value,
    string: document.getElementById("string").value,
    graph: document.getElementById("graph").value,
    combinatorics: document.getElementById("combinatorics").value,
    geometry: document.getElementById("geometry").value,
    linearalgebra: document.getElementById("linearalgebra").value,
    gametheory: document.getElementById("gametheory").value,
    construction: document.getElementById("construction").value,
    polynomial: document.getElementById("polynomial").value,
    numbertheory: document.getElementById("numbertheory").value
  };

  // 获取能力点输入
  const abilityInputs = {
    thinking: document.getElementById("thinking").value,
    coding: document.getElementById("coding").value,
    carefulness: document.getElementById("carefulness").value,
    experience: document.getElementById("experience").value,
    quickness: document.getElementById("quickness").value,
    mental: document.getElementById("mental").value
  };

  // 检查所有知识点输入是否为空或只包含空格
  for (const [key, value] of Object.entries(knowledgeInputs)) {
    if (!value || value.trim() === "") {
      alert(`${getStatName(key)}不能为空！`);
      return;
    }
  }

  // 检查所有能力点输入是否为空或只包含空格
  for (const [key, value] of Object.entries(abilityInputs)) {
    if (!value || value.trim() === "") {
      alert(`${getStatName(key)}不能为空！`);
      return;
    }
  }

  // 检查所有知识点输入是否为整数
  const knowledgeValues = {};
  for (const [key, value] of Object.entries(knowledgeInputs)) {
    const num = parseInt(value);
    if (isNaN(num) || !Number.isInteger(num) || num.toString() !== value.trim()) {
      alert(`${getStatName(key)}必须是整数！`);
      return;
    }
    knowledgeValues[key] = num;
  }

  // 检查所有能力点输入是否为整数
  const abilityValues = {};
  for (const [key, value] of Object.entries(abilityInputs)) {
    const num = parseInt(value);
    if (isNaN(num) || !Number.isInteger(num) || num.toString() !== value.trim()) {
      alert(`${getStatName(key)}必须是整数！`);
      return;
    }
    abilityValues[key] = num;
  }

  // 检查知识点输入是否在有效范围内
  for (const [key, value] of Object.entries(knowledgeValues)) {
    if (value < 0 || value > 20) {
      alert(`${getStatName(key)}必须在 0-20 之间！`);
      return;
    }
  }

  // 检查能力点输入是否在有效范围内
  for (const [key, value] of Object.entries(abilityValues)) {
    if (value < 0 || value > 10) {
      alert(`${getStatName(key)}必须在 0-10 之间！`);
      return;
    }
  }

  // 计算知识点总和
  const knowledgeTotal = Object.values(knowledgeValues).reduce((sum, val) => sum + val, 0);
  if (knowledgeTotal > remainingPoints && debugmode == false) {
    alert("知识点分配超过限制！");
    return;
  }

  // 计算能力点总和
  const abilityTotal = Object.values(abilityValues).reduce((sum, val) => sum + val, 0);
  if (abilityTotal > remainingAbilityPoints && debugmode == false) {
    alert("能力点分配超过限制！");
    return;
  }

  // 检查是否分配完所有知识点
  if (knowledgeTotal < remainingPoints) {
    alert("请分配完所有知识点！");
    return;
  }

  // 检查是否分配完所有能力点
  if (abilityTotal < remainingAbilityPoints) {
    alert("请分配完所有能力点！");
    return;
  }

  // 分配知识点
  playerStats.dp = knowledgeValues.dp;
  playerStats.ds = knowledgeValues.ds;
  playerStats.string = knowledgeValues.string;
  playerStats.graph = knowledgeValues.graph;
  playerStats.combinatorics = knowledgeValues.combinatorics;
  playerStats.geometry = knowledgeValues.geometry;
  playerStats.linearalgebra = knowledgeValues.linearalgebra;
  playerStats.gametheory = knowledgeValues.gametheory;
  playerStats.construction = knowledgeValues.construction;
  playerStats.polynomial = knowledgeValues.polynomial;
  playerStats.numbertheory = knowledgeValues.numbertheory;
  
  // 分配能力点
  playerStats.thinking = abilityValues.thinking;
  playerStats.coding = abilityValues.coding;
  playerStats.carefulness = abilityValues.carefulness;
  playerStats.experience = abilityValues.experience;
  playerStats.quickness = abilityValues.quickness;
  playerStats.mental = abilityValues.mental;
  
  // 设置其他属性初始值为0
  playerStats.culture = 0;

  // 显示玩家属性面板并更新数值
  document.getElementById("player-stats-panel").style.display = "block";
  document.getElementById("player-dp").textContent = playerStats.dp;
  document.getElementById("player-ds").textContent = playerStats.ds;
  document.getElementById("player-string").textContent = playerStats.string;
  document.getElementById("player-graph").textContent = playerStats.graph;
  document.getElementById("player-combinatorics").textContent = playerStats.combinatorics;
  document.getElementById("player-geometry").textContent = playerStats.geometry;
  document.getElementById("player-linearalgebra").textContent = playerStats.linearalgebra;
  document.getElementById("player-gametheory").textContent = playerStats.gametheory;
  document.getElementById("player-construction").textContent = playerStats.construction;
  document.getElementById("player-polynomial").textContent = playerStats.polynomial;
  document.getElementById("player-numbertheory").textContent = playerStats.numbertheory;
  document.getElementById("player-experience").textContent = playerStats.experience;
  document.getElementById("player-thinking").textContent = playerStats.thinking;
  document.getElementById("player-coding").textContent = playerStats.coding;
  document.getElementById("player-carefulness").textContent = playerStats.carefulness;
  document.getElementById("player-mood").textContent = mood;
  document.getElementById("player-mental").textContent = playerStats.mental;

  // 进入训练事件阶段而不是直接开始故事

  startTrainingEvents(7);
}

// 切换题目
function switchProblem() {
  currentProblem = (currentProblem % totalProblems) + 1;
  updateStatus();
}

// 切换到上一题
function prevProblem() {
  currentProblem = currentProblem > 1 ? currentProblem - 1 : totalProblems;
  updateStatus();
}

// 切换到下一题
function nextProblem() {
  currentProblem = currentProblem < totalProblems ? currentProblem + 1 : 1;
  updateStatus();
}

// 思考部分分
function thinkSubProblem(problemIndex, subProblemIndex) {
  if (timePoints <= 0) {
    alert("时间点不足，无法思考！");
    return;
  }

  const subProblem = subProblems[problemIndex][subProblemIndex];
  let invalidThinkProb = 0;

  // 计算无效思考概率
  invalidThinkProb = 1 - calculateThinkSuccessRate(subProblem);

  // 判断是否无效思考
  if (Math.random() < invalidThinkProb) {
    logEvent(`T${problemIndex + 1} 部分分 ${subProblemIndex + 1} 思考无效，未取得进展！`, 'think');
    // 根据红温值降低心态
    if (subProblem.heat > 0) {
      let moodDrop = Math.floor(Math.random() * (subProblem.heat + 1));
      if (moodDrop > 0) {
        if (playerStats.mental > 0) {
          moodDrop = Math.max(moodDrop - playerStats.mental, 0);
        }
        mood = Math.max(0, mood - moodDrop);
        logEvent(`由于红温效应，心态值降低${moodDrop}点！`, 'think');
        document.getElementById("player-mood").textContent = mood;
      }

    }
  } else {
    thinkProgress[problemIndex][subProblemIndex] += 1;
    logEvent(`T${problemIndex + 1} 部分分 ${subProblemIndex + 1} 思考成功！`, 'think');

    // 如果是非独立部分分，更新所有分数小于它的非独立部分分
    if (subProblem.independent === 0) {
      for (let i = 0; i < subProblemIndex; i++) {
        if (subProblems[problemIndex][i].independent === 0) {
          thinkProgress[problemIndex][i] += 1;
          logEvent(`T${problemIndex + 1} 部分分 ${i + 1} 因非独立关系，思考进度 +1！`, 'think');
        }
      }
    }
  }

  // 记录操作并触发随机事件
  lastActions.push('think');
  if (lastActions.length > 5) lastActions.shift();
  triggerRandomEvent(problemIndex, subProblemIndex);
  document.getElementById("player-mood").textContent = mood;

  timePoints -= 1;
  updateStatus();
}

// 写代码部分分
function writeCodeSubProblem(problemIndex, subProblemIndex) {
  if (timePoints <= 0) {
    alert("时间点不足，无法写代码！");
    return;
  }

  const subProblem = subProblems[problemIndex][subProblemIndex];
  let invalidCodeProb = 1 - calculateCodeSuccessRate(subProblem);

  // 判断是否无效代码
  if (Math.random() < invalidCodeProb) {
    logEvent(`T${problemIndex + 1} 部分分 ${subProblemIndex + 1} 写代码无效，未取得进展！`, 'code');
    // 根据红温值降低心态
    if (subProblem.heat > 0) {
      let moodDrop = subProblem.heat;
      if (playerStats.mental > 0) {
        moodDrop = Math.max(moodDrop - playerStats.mental, 0);
      }
      mood = Math.max(0, mood - moodDrop);
      logEvent(`由于红温效应，心态值降低${moodDrop}点！`, 'code');
      document.getElementById("player-mood").textContent = mood;
    }
  } else {
    codeProgress[problemIndex][subProblemIndex] += 1;
    currentCodeProgress = codeProgress[problemIndex][subProblemIndex];
    logEvent(`T${problemIndex + 1} 部分分 ${subProblemIndex + 1} 写代码成功！`, 'code');

    // 如果代码刚好完成，计算并存储对拍失败概率
    if (codeProgress[problemIndex][subProblemIndex] === calculateCodeTime(subProblem)) {
      errorRates[problemIndex][subProblemIndex] = calculateErrorRate(subProblem);
    }
  }

  // 记录操作并触发随机事件
  lastActions.push('code');
  if (lastActions.length > 5) lastActions.shift();
  triggerRandomEvent(problemIndex, subProblemIndex);
  document.getElementById("player-mood").textContent = mood;

  timePoints -= 1;
  updateStatus();

  // 如果代码完成且有激励效果
  if (codeProgress[problemIndex][subProblemIndex] >= calculateCodeTime(subProblem)) {
    // 如果代码完成且有激励效果
    if (subProblem.inspire > 0) {
      let moodGain = subProblem.inspire;
      mood = Math.min(moodLimit, mood + moodGain);
      logEvent(`完成代码带来了激励效果，心态值提升${moodGain}点！`, 'code');
      document.getElementById("player-mood").textContent = mood;
    }
  }
}

// 对拍部分分
function checkCodeSubProblem(problemIndex, subProblemIndex) {
  // 获取当前比赛配置
  const currentContest = Object.values(contestConfigs).find(config => config.name === currentContestName);
  const isIOIContest = currentContest && currentContest.isIOI;
   
  const problem = problems[problemIndex];
   
  // 如果是提交答案题，则调用专门的函数处理
  if (problem && problem.isSubmitAnswer) {
    submitAnswerProblem(problemIndex);
    return;
  }
   
  if (!isIOIContest && timePoints <= 0) {
    alert("时间点不足！");
    return;
  }

  // 在非 IOI 赛制下消耗时间点，仅在第一次对拍时消耗
  if (!isIOIContest && !hasCheckedSubProblem[problemIndex][subProblemIndex]) {
    timePoints--;
    hasCheckedSubProblem[problemIndex][subProblemIndex] = true;
    logEvent(`消耗了 1 个时间点，剩余 ${timePoints} 个时间点`, 'check');
  } else if (!isIOIContest) {
    logEvent(`重新对拍，不消耗时间点`, 'check');
  }
  
  lastActions.push('check');
  if (lastActions.length > 5) lastActions.shift();

  // 记录对拍/提交操作到日志
  logEvent(`${isIOIContest ? '提交' : '对拍'}第 ${problemIndex + 1} 题的第 ${subProblemIndex + 1} 个部分`, 'check');
  
  // 获取当前部分分的错误率
  const errorRate = errorRates[problemIndex][subProblemIndex];
  const random = Math.random();

  // 记录随机数和错误率到日志，方便调试
  logEvent(`调试信息：随机数=${random.toFixed(3)}，错误率=${errorRate.toFixed(3)}`, 'check');

  if (random < errorRate) {
    // 对拍/提交失败
    const subProblem = subProblems[problemIndex][subProblemIndex];
    const fallbackAmount = subProblem.fallback + 1;
    codeProgress[problemIndex][subProblemIndex] = Math.max(0, codeProgress[problemIndex][subProblemIndex] - fallbackAmount);
    errorRates[problemIndex][subProblemIndex] /= 4;
    logEvent(`${isIOIContest ? '提交' : '对拍'}失败！代码进度-${fallbackAmount}`, 'check');
    logEvent(`当前代码进度：${codeProgress[problemIndex][subProblemIndex]}/${calculateCodeTime(subProblem)}`, 'check');
    logEvent(`当前心态值：${mood}`, 'check');
  } else {
    // 对拍/提交成功
    const subProblem = subProblems[problemIndex][subProblemIndex];
    isCodeComplete[problemIndex][subProblemIndex] = true;
    mood = Math.min(moodLimit, mood + (subProblem.inspire || 0));

    logEvent(`${isIOIContest ? '提交' : '对拍'}成功！获得 ${subProblem.score} 分`, 'check');
    if (subProblem.inspire) {
      logEvent(`受到鼓舞，心态值+${subProblem.inspire}`, 'check');
    }
    logEvent(`当前心态值：${mood}`, 'check');
  }

  // 更新显示
  updateStatus();
  updateSubProblems();
  triggerRandomEvent(problemIndex, subProblemIndex);
}

// 显示结果
function showResults() {
  // 移除所有可能存在的"查看结果"按钮
  const resultButtons = document.querySelectorAll('.actions button[onclick="showResults"]');
  resultButtons.forEach(button => button.remove());

  // 移除可能存在的"提前离场"按钮
  const leaveButtons = document.querySelectorAll('#leave-early-btn');
  leaveButtons.forEach(button => button.remove());

  // 移除可能存在的旧结果面板
  const oldResultPanel = document.querySelector('.result-panel');
  if (oldResultPanel) {
    oldResultPanel.remove();
  }

  let totalExpectedScore = 0;
  let totalActualScore = 0;
  let resultHTML = '<h3>比赛结果</h3>';

  // 计算每个题目的得分
  for (let i = 0; i < totalProblems; i++) {
    let problemExpectedScore = 0;
    let problemActualScore = 0;
    let subProblemResults = [];

    // 获取当前比赛配置
    const currentContest = Object.values(contestConfigs).find(config => config.name === currentContestName);
    const isIOIContest = currentContest && currentContest.isIOI;

    // 确保数组存在且有效
    if (!subProblems[i] || !codeProgress[i] || !isCodeComplete[i]) {
      continue;
    }

    // 计算每个部分分的得分
    for (let j = 0; j < subProblems[i].length; j++) {
      const subProblem = subProblems[i][j];
      if (!subProblem) continue;

      // 确保进度数组存在且有效
      if (!codeProgress[i] || !isCodeComplete[i]) continue;

      const codeCompleted = codeProgress[i][j] >= calculateCodeTime(subProblem);
      const checkCompleted = isCodeComplete[i][j];

      // 预期得分：写完代码就算通过，取最大值
      if (codeCompleted) {
        problemExpectedScore = Math.max(problemExpectedScore, subProblem.score);
      }

      // 实际得分：根据对拍结果和概率计算，取最大值
      if (checkCompleted) {
        problemActualScore = Math.max(problemActualScore, subProblem.score);
      } else if (codeCompleted && !isIOIContest) {
        // 写完代码但没对拍，根据概率计算（仅在非IOI赛制下）
        const successRate = 1 - errorRates[i][j];
        for (let k = j; k >= 0; k--) {
          if (Math.random() < successRate) {
            problemActualScore = Math.max(problemActualScore, subProblems[i][k].score);
            break;
          }
        }
      }

      // 记录部分分状态
      subProblemResults.push(`
                      <p>部分分 ${j + 1} (${subProblem.score}分): 
                      ${checkCompleted ? (isIOIContest ? '提交通过' : '对拍通过') :
          codeCompleted && !isIOIContest ? `写完代码(通过概率: ${Math.round((1 - errorRates[i][j]) * 100)}%)` :
            '未完成'}</p>
                  `);
    }

    totalExpectedScore += problemExpectedScore;
    totalActualScore += problemActualScore;

    // 添加题目结果
    resultHTML += `
                  <div class="problem-result">
                      <h4>T${i + 1} (${problems[i].name}) 得分</h4>
                      <p>预期得分: ${problemExpectedScore}</p>
                      <p>实际得分: ${problemActualScore}</p>
                      <div class="sub-problem-results">
                          ${subProblemResults.join('')}
                      </div>
                  </div>
              `;

  }

  // 添加总分
  resultHTML += `
              <div class="total-score">
                  <h4>总分</h4>
                  <p>预期总分: ${totalExpectedScore}</p>
                  <p>实际总分: ${totalActualScore}</p>
              </div>
          `;

  // 添加总分显示
  let totalScoreHTML = '';
  if (currentContestName === "省选Day2") {
    const provinceScore = totalActualScore + playerStats.prevScore + (playerStats.noipScore || 0);
    playerStats.tempScore = provinceScore;
    totalScoreHTML = `
                  <div class="total-score">
                      <h4>省选总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${totalActualScore}</p>
                      <p>NOIP得分: ${playerStats.noipScore || 0}</p>
                      <p>最终总分: ${provinceScore.toFixed(1)} (Day1 + Day2 + NOIP)</p>
                  </div>
              `;
  } else if (currentContestName === "NOI Day2") {
    let noiScore = playerStats.noiScore0 + totalActualScore + playerStats.prevScore;
    if (playerStats.isProvincialTeamA) {
      noiScore += 5;
    }
    playerStats.tempScore = noiScore;
    totalScoreHTML = `
                  <div class="total-score">
                      <h4>NOI总分</h4>
                      <p>笔试得分: ${playerStats.noiScore0}</p>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${totalActualScore}</p>
                      <p>基础总分: ${(playerStats.noiScore0 + totalActualScore + playerStats.prevScore).toFixed(1)} (Day1 + Day2)</p>
                      ${playerStats.isProvincialTeamA ? '<p style="color: #4CAF50;">省队A队加分: +5</p>' : ''}
                      <p>最终总分: ${noiScore.toFixed(1)}</p>
                  </div>
              `;
  }
  else if (currentContestName === "IOI Day2") {
    let ioiScore = totalActualScore + playerStats.prevScore;
    playerStats.tempScore = ioiScore;
    totalScoreHTML = `
                  <div class="total-score">
                      <h4>IOI总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${totalActualScore}</p>
                      <p>基础总分: ${(totalActualScore + playerStats.prevScore).toFixed(1)} (Day1 + Day2)</p>
                      <p>最终总分: ${ioiScore.toFixed(1)}</p>
                  </div>
              `;
  }
  else if (currentContestName === "CTT Day4") {
    let cttScore = totalActualScore + playerStats.prevScore1 + playerStats.prevScore2 + playerStats.prevScore3;
    playerStats.tempScore = cttScore;
    playerStats.cttScore = cttScore;
    totalScoreHTML = `
                  <div class="total-score">
                      <h4>CTT总分</h4>
                      <p>Day1得分: ${playerStats.prevScore1}</p>
                      <p>Day2得分: ${playerStats.prevScore2}</p>
                      <p>Day3得分: ${playerStats.prevScore3}</p>
                      <p>Day4得分: ${totalActualScore}</p>
                      <p>基础总分: ${(totalActualScore + playerStats.prevScore1 + playerStats.prevScore2 + playerStats.prevScore3).toFixed(1)} (Day1 + Day2 + Day3 + Day4)</p>
                      <p>最终总分: ${cttScore.toFixed(1)}</p>
                  </div>
              `;
  }
  else if (currentContestName === "CTS Day2") {
    let ctsScore = totalActualScore + playerStats.prevScore + (playerStats.cttScore || 0);
    playerStats.tempScore = ctsScore;
    totalScoreHTML = `
                  <div class="total-score">
                      <h4>CTS总分</h4>
                      <p>Day1得分: ${playerStats.prevScore}</p>
                      <p>Day2得分: ${totalActualScore}</p>
                      <p>CTT得分: ${playerStats.cttScore || 0}</p>
                      <p>基础总分: ${(totalActualScore + playerStats.prevScore + (playerStats.cttScore || 0)).toFixed(1)} (Day1 + Day2 + CTT)</p>
                      <p>最终总分: ${ctsScore.toFixed(1)}</p>
                  </div>
              `;
  }


  // 添加总分显示到结果HTML中
  resultHTML += totalScoreHTML;

  // 在显示总分后添加决心奖励
  const determinationReward = Math.floor(totalActualScore * 5);
  playerStats.determination += determinationReward;

  resultHTML += `
              <div class="determination-reward">
                  <h4>决心奖励</h4>
                  <p>获得决心: +${determinationReward} (${totalActualScore}分 × 5)</p>
                  <p>当前决心: ${playerStats.determination}</p>
              </div>
          `;

  // 比赛结束后的心态恢复
  const minMoodAfterContest = Math.min(5 + (playerStats.mental || 0), 10);
  if (mood < minMoodAfterContest) {
    const moodRecovery = minMoodAfterContest - mood;
    mood = minMoodAfterContest;
    resultHTML += `
                  <div class="determination-reward">
                      <h4>心态恢复</h4>
                      <p>比赛结束后心态自动恢复：+${moodRecovery}</p>
                      <p>当前心态值：${mood}</p>
                  </div>
              `;
    logEvent(`比赛结束后心态自动恢复：+${moodRecovery}，当前心态值：${mood}`, 'event');
  }

  // 在显示总分后添加获奖情况（只在特定比赛显示）
  if (currentContestName !== "省选Day1" && currentContestName !== "NOI Day1" && currentContestName !== "IOI Day1" && currentContestName !== "CTT Day1" && currentContestName !== "CTS Day1" && currentContestName !== "CTT Day2" && currentContestName !== "CTT Day3" && currentContestName !== "NOI Day0") {
    let award;
    if (currentContestName === "省选Day2") {
      award = calculateAward("省选", totalActualScore, playerStats.prevScore);
      // 记录是否进入省队
      playerStats.isProvincialTeam = award.includes("省队");
    } else if (currentContestName === "NOI Day2") {
      award = calculateAward("NOI", totalActualScore, playerStats.prevScore);
    } else if (currentContestName === "IOI Day2") {
      award = calculateAward("IOI", totalActualScore, playerStats.prevScore);
    } else if (currentContestName === "CTT Day4") {
      award = calculateAward("CTT", totalActualScore, playerStats.prevScore);
    } else if (currentContestName === "CTS Day2") {
      award = calculateAward("CTS", totalActualScore, playerStats.prevScore);
    } else {
      award = calculateAward(currentContestName, totalActualScore);
    }

    // 保存比赛成绩
    if (currentContestName === "CSP-S") {
      playerStats.cspScore = totalActualScore;
    } else if (currentContestName === "NOIP") {
      playerStats.noipScore = totalActualScore;
    }

    // 添加获奖显示
    resultHTML += `
                  <div class="award-result">
                      <h4>获奖情况</h4>
                      <p class="award ${award.includes('金') || award.includes('一') || award.includes('A') ? 'gold' :
        award.includes('银') || award.includes('二') || award.includes('B') ? 'silver' :
          award.includes('铜') || award.includes('三') ? 'bronze' : 'none'}">
                          ${award}
                      </p>
                  </div>
              `;

  } else {
    // 保存Day1成绩用于Day2评分
    playerStats.prevScore = totalActualScore;
    if (currentContestName === "CTT Day1") {
      playerStats.prevScore1 = totalActualScore;
    } else if (currentContestName === "CTT Day2") {
      playerStats.prevScore2 = totalActualScore;
    } else if (currentContestName === "CTT Day3") {
      playerStats.prevScore3 = totalActualScore;
    } else if (currentContestName === "NOI Day0") {
      playerStats.noiScore0 = totalActualScore;
    }
  }

  // 创建结果显示面板
  const resultPanel = document.createElement('div');
  resultPanel.className = 'result-panel';
  resultPanel.innerHTML = resultHTML;

  // 根据当前阶段创建不同的按钮
  const nextButton = document.createElement('button');
  nextButton.className = 'btn blue'; // 添加btn类以统一样式


  nextButton.textContent = '继续';
  nextButton.onclick = () => {
    resultPanel.remove(); // 移除结果面板
    handlePhaseTransition();
  };

  updateStatus();

  resultPanel.appendChild(nextButton);

  // 隐藏游戏界面，显示结果面板
  document.querySelector('.game-interface').style.display = 'none';
  document.querySelector('.game-panel').appendChild(resultPanel);

  // 记录结果到日志
  logEvent('比赛结束！', 'event');
  logEvent(`预期总分：${totalExpectedScore}，实际总分：${totalActualScore}`, 'event');
}

// 添加训练事件配置
let remainingEvents = 5; // 主事件剩余次数
let totalTrainingEvents = 5; // 主事件总次数
let currentPhase = 1; // 阶段标记：1-第一次训练，2-CSP-S，3-第二次训练，4-NOIP，5-第三次训练，6-WC，7-第四次训练，8-省选Day1，9-第五次训练，10-省选Day2，11-第六次训练，12-APIO，13-第七次训练，14-NOI Day1，15-第八次训练，16-NOI Day2，17-高二第一次训练，18-CSP-S，19-NOIP，20-第二次训练，21-WC，22-第三次训练，23-省选Day1，24-第四次训练，25-NOI Day1，26-第五次训练，27-APIO，28-第七次训练，29-NOI Day1，30-第八次训练，31-NOI Day2，32-游戏结束


// 修改选择训练选项的函数
function selectTrainingOption(option, isShop, eventType) {
  // 检查是否有足够的决心购买商品
  if (option.cost && playerStats.determination < currentShopPrices[option.text]) {
    alert(`决心不足！需要${currentShopPrices[option.text]}点决心，当前只有${playerStats.determination}点。`);
    logEvent(`决心不足，无法购买！需要${currentShopPrices[option.text]}点决心。`, 'event');
    return;
  }

  // 记录选择到日志
  logEvent(`选择了：${option.text || ''}`, 'event');
  if (option.description) {
    logEvent(option.description, 'event');
  }

  // 扣除决心
  if (option.cost) {
    playerStats.determination -= currentShopPrices[option.text];
    logEvent(`消耗了${currentShopPrices[option.text]}点决心`, 'event');
  }

  // 应用选择的效果
  if (option.effects && typeof option.effects === 'object') {
    Object.entries(option.effects).forEach(([key, value]) => {
      if (key === 'random') {
        // 处理随机提升
        const randomStat = value[Math.floor(Math.random() * value.length)];
        playerStats[randomStat] = Math.max(0, Math.min(20, (playerStats[randomStat] || 0) + 1));
        logEvent(`随机提升：${getStatName(randomStat)}+1`, 'event');
      } else if (key === 'mood') {
        if (option.text === "缓和心态") {
          // 直接设置心态值为7
          mood = 8;
          logEvent(`心态调整到8`, 'event');
        } else {
          // 其他情况正常增减心态值
          mood = Math.max(0, Math.min(moodLimit, mood + value));
          logEvent(`心态${value > 0 ? '+' : ''}${value}`, 'event');
          logEvent(`当前心态值：${mood}`, 'event');
        }
      } else if (key === 'determination') {
        playerStats.determination = Math.max(0, playerStats.determination + value);
      } else if (playerStats.hasOwnProperty(key)) {
        playerStats[key] = Math.max(0, Math.min(key === 'mood' ? 20 : 20, playerStats[key] + value));
      }
    });

    // 更新显示
    updateStatus();
    document.getElementById("player-determination").textContent = playerStats.determination;

    // 记录效果到日志，但排除已经记录的心态和随机效果
    Object.entries(option.effects).forEach(([key, value]) => {
      if (key !== 'random' && key !== 'mood' && value !== undefined && value !== null) {
        logEvent(`${getStatName(key)} ${value > 0 ? '+' : ''}${value}`, 'event');
      }
    });
  }

  // 只在不是"缓和心态"选项时显示当前心态值
  if (!option.effects || !option.effects.mood) {
    logEvent(`当前心态值：${mood}`, 'event');
  }
  logEvent(`当前决心值：${playerStats.determination}`, 'event');
  logEvent("------------------------", 'event');

  // 如果是商店事件
  if (isShop) {
    // 如果是购买选项，禁用该选项并更新价格
    if (option.cost) {
      // 更新下次购买的价格（不影响当前显示）
      if (shopPriceIncrements[gameDifficulty][option.text]) {
        const nextPrice = currentShopPrices[option.text] + shopPriceIncrements[gameDifficulty][option.text];
        currentShopPrices[option.text] = nextPrice;
        logEvent(`下次购买${option.text}需要${nextPrice}点决心`, 'event');
      }

      // 将商品添加到已购买集合
      purchasedItems.add(option.text);

      // 找到并禁用对应的选项按钮
      const optionElements = document.querySelectorAll('.event-option');
      optionElements.forEach(element => {
        const titleElement = element.querySelector('h3');
        if (titleElement && titleElement.textContent === option.text) {
          element.style.opacity = '0.6';
          element.style.cursor = 'not-allowed';
          element.onclick = null;
          element.classList.add('purchased');
        }
      });
    }
    // 如果是离开选项，进入下一个主事件
    if (option.text === "放弃购买") {
      purchasedItems.clear();
      remainingEvents--;
      if (remainingEvents <= 0) {
        handlePhaseTransition();
      } else {
        showNextTrainingEvent();
      }
    }
  } else {
    // 非商店事件，处理次事件
    if (option.nextEvent) {
      logEvent(`触发跳转事件：${option.nextEvent}`, 'event');
      showTrainingEvent(option.nextEvent);
    } else if (option.getNextEventProbability) {
      // 处理动态概率性跳转
      const nextEventProbabilities = option.getNextEventProbability();
      const roll = Math.random();
      let accumulatedProb = 0;
      for (const [nextEvent, prob] of Object.entries(nextEventProbabilities)) {
        accumulatedProb += prob;
        if (roll < accumulatedProb) {
          logEvent(`触发概率跳转事件：${nextEvent}（概率：${Math.round(prob * 100)}%）`, 'event');
          showTrainingEvent(nextEvent);
          return;
        }
      }
      // 如果没有触发任何跳转，继续正常流程
      remainingEvents--;
      if (remainingEvents <= 0) {
        handlePhaseTransition();
      } else {
        showNextTrainingEvent();
      }
    } else if (option.nextEventProbability) {
      // 处理概率性跳转
      const roll = Math.random();
      let accumulatedProb = 0;
      for (const [nextEvent, prob] of Object.entries(option.nextEventProbability)) {
        accumulatedProb += prob;
        if (roll < accumulatedProb) {
          logEvent(`触发概率跳转事件：${nextEvent}（概率：${Math.round(prob * 100)}%）`, 'event');
          showTrainingEvent(nextEvent);
          return;
        }
      }
      // 如果没有触发任何跳转，继续正常流程
      remainingEvents--;
      if (remainingEvents <= 0) {
        handlePhaseTransition();
      } else {
        showNextTrainingEvent();
      }
    } else {
      remainingEvents--;
      if (remainingEvents <= 0) {
        handlePhaseTransition();
      } else {
        showNextTrainingEvent();
      }
    }
  }
}

// 添加显示次事件的函数
function showSubEvent(eventId) {
  const event = eventSystem.sub[eventId];
  if (!event) return;

  // 记录次事件触发到日志
  logEvent(`触发次事件：${event.title}`, 'event');
  logEvent(event.description, 'event');

  // 显示次事件选项
  const optionsContainer = document.getElementById("event-options");
  optionsContainer.innerHTML = `
              <h3>${event.title}</h3>
              <p>${event.description}</p>
              <div class="event-options">
                  ${event.options.map((option, index) => `
                      <div class="event-option" onclick="selectSubOption(${JSON.stringify(option).replace(/"/g, '&quot;')})" id="option-${index}">
                          <h3>${option.text}</h3>
                          <p>${option.description}</p>
                          <div class="event-effects">
                              效果：${Object.entries(option.effects).map(([key, value]) =>
    `${getStatName(key)} ${value > 0 ? '+' : ''}${value}`).join('、')}
                          </div>
                      </div>
                  `).join('')}
              </div>
          `;
}

// 添加选择次事件选项的函数
function selectSubOption(option) {
  // 记录选择到日志
  logEvent(`选择了：${option.text}`, 'event');
  logEvent(option.description, 'event');

  // 应用选择的效果
  Object.entries(option.effects).forEach(([key, value]) => {
    if (key === 'mood') {
      mood = Math.max(0, Math.min(moodLimit, mood + value));
    } else if (playerStats.hasOwnProperty(key)) {
      playerStats[key] = Math.max(0, Math.min(20, playerStats[key] + value));
    }
  });

  // 更新显示
  updateStatus();

  // 记录效果到日志
  Object.entries(option.effects).forEach(([key, value]) => {
    logEvent(`${getStatName(key)} ${value > 0 ? '+' : ''}${value}`, 'event');
  });
  logEvent(`当前心态值：${mood}`, 'event');
  logEvent("------------------------", 'event');

  // 处理下一个事件
  if (option.nextEvent) {
    showSubEvent(option.nextEvent);
  } else {
    // 如果没有下一个事件，返回主事件流程
    remainingEvents--;
    showNextTrainingEvent();
  }
}

// 添加比赛启动函数
function startContest(contestType) {
  // 更新比赛名称显示
  const contestNameMap = {
    "CSP-S": "CSP-S",
    "NOIP": "NOIP",
    "WC": "WC",
    "省选Day1": "省选Day1",
    "省选Day2": "省选Day2",
    "APIO": "APIO",
    "NOI Day0": "NOI 笔试",
    "NOI Day1": "NOI Day1",
    "NOI Day2": "NOI Day2",
    "CTT Day1": "CTT Day1",
    "CTT Day2": "CTT Day2",
    "CTT Day3": "CTT Day3",
    "CTT Day4": "CTT Day4",
    "CTS Day1": "CTS Day1",
    "CTS Day2": "CTS Day2",
    "IOI Day1": "IOI Day1",
  };

  // 更新比赛名称
  document.getElementById("contest-name").textContent = contestNameMap[contestType];

  // 根据比赛类型设置配置
  let config;
  switch (contestType) {
    case "CSP-S": config = contestConfigs[1]; break;
    case "NOIP": config = contestConfigs[2]; break;
    case "WC": config = contestConfigs[3]; break;
    case "省选Day1": config = contestConfigs[4]; break;
    case "省选Day2": config = contestConfigs[5]; break;
    case "APIO": config = contestConfigs[6]; break;
    case "NOI Day0": config = contestConfigs[101]; break;
    case "NOI Day1": config = contestConfigs[7]; break;
    case "NOI Day2": config = contestConfigs[8]; break;
    case "CTT Day1": config = contestConfigs[9]; break;
    case "CTT Day2": config = contestConfigs[10]; break;
    case "CTT Day3": config = contestConfigs[11]; break;
    case "CTT Day4": config = contestConfigs[12]; break;
    case "CTS Day1": config = contestConfigs[13]; break;
    case "CTS Day2": config = contestConfigs[14]; break;
    case "IOI Day1": config = contestConfigs[15]; break;
    case "IOI Day2": config = contestConfigs[16]; break;
  }

  timePoints = config.timePoints;
  currentContestName = config.name;
  isIOIMode = config.isIOI || false;

  // 移除可能存在的"查看结果"按钮
  const existingResultButton = document.querySelector('.actions button[onclick="showResults"]');
  if (existingResultButton) {
    existingResultButton.remove();
  }

  // 移除可能存在的"提前离场"按钮
  const existingLeaveButton = document.querySelector('#leave-early-btn');
  if (existingLeaveButton) {
    existingLeaveButton.remove();
  }

  // 移除可能存在的"结果面板"
  const existingResultPanel = document.querySelector('.result-panel');
  if (existingResultPanel) {
    existingResultPanel.remove();
  }

  // 清空操作区域的所有按钮
  const actionsDiv = document.querySelector('.actions');
  while (actionsDiv.firstChild) {
    actionsDiv.removeChild(actionsDiv.firstChild);
  }

  // 重新添加导航按钮
  const prevButton = document.createElement('button');
  prevButton.id = 'prev-problem-btn';
  prevButton.className = 'btn purple';
  prevButton.onclick = prevProblem;
  prevButton.textContent = '上一题';
  actionsDiv.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.id = 'next-problem-btn';
  nextButton.className = 'btn purple';
  nextButton.onclick = nextProblem;
  nextButton.textContent = '下一题';
  actionsDiv.appendChild(nextButton);

  document.getElementById("training-event-panel").style.display = "none";
  document.getElementById("game-interface").style.display = "block";

  // 重置当前题目位置为 T1
  currentProblem = 1;

  // 重置所有相关数组
  subProblems = [];
  thinkProgress = [];
  codeProgress = [];
  isCodeComplete = [];
  errorRates = [];
  hasCheckedSubProblem = [];

  // 重置操作记录
  lastActions = [];
  currentCodeProgress = 0;

  totalProblems = config.problemRanges.length;

  while (true) {
    problems = [];
    let unique = true;
    for (let i = 0; i < totalProblems; i++) {
      let problem;
      if (contestType == "IOI Day1" || contestType == "IOI Day2" || contestType == "APIO") {
        problem = selectIOIProblemFromRange(
          config.problemRanges[i].minLevel,
          config.problemRanges[i].maxLevel
        );
      }
      else {
        problem = selectProblemFromRange(
          config.problemRanges[i].minLevel,
          config.problemRanges[i].maxLevel
        );
      }
      for (let p of problems) {
        if (p.name == problem.name) {
          unique = false;
          break;
        }
      }
      if (!unique) break;
      problems.push(problem);
    }
    if (unique) break;
  }

  for (let problem of problems) {
    subProblems.push(problem.parts);
    thinkProgress.push(new Array(problem.parts.length).fill(0));
    codeProgress.push(new Array(problem.parts.length).fill(0));
    isCodeComplete.push(new Array(problem.parts.length).fill(false));
    errorRates.push(new Array(problem.parts.length).fill(-1));
    hasCheckedSubProblem.push(new Array(problem.parts.length).fill(false));
  }

  // 添加比赛开始的日志
  logEvent(`${contestType}比赛正式开始！`, 'event');
  logEvent(`你坐在考场中，深吸一口气，准备迎接挑战...`, 'event');

  // 更新心态值并确保显示更新
  let moodDrop = extraMoodDrop; // 基础心态下降值
  if (contestType == 'WC' || contestType == 'APIO' ) {
    moodDrop -= 1;
  }
  else if (contestType == 'NOIP' || contestType == '省选Day1') {
    moodDrop += 1;
  }
  else if (contestType == 'NOI Day1'  || contestType == '省选Day2') {
    moodDrop += 2;
  } 
  else if (contestType == 'NOI Day2') {
    moodDrop += 3;
  }
  else if (contestType == "IOI Day 1") {
    moodDrop += 5;
  }
  else if (contestType == "IOI Day 2") {
    moodDrop += 7;
  }
  if (playerStats.mood > 14) {
    moodDrop += Math.floor((playerStats.mood - 14) / 2);
  }
  
  if (playerStats.mental > 0) {
    moodDrop = Math.max(0, moodDrop - playerStats.mental); // 每点心理素质减少1点心态下降
  }
  mood = Math.max(0, mood - moodDrop);
  document.getElementById("player-mood").textContent = mood;
  logEvent(`进入考场，心态值-${moodDrop}（心理素质减少了${playerStats.mental || 0}点心态下降），当前心态值：${mood}`, 'event');
  logEvent("请合理分配时间，仔细思考每个部分分。", 'event');

  updateStatus();
}

function getStatName(key) {
  const statNames = {
    dp: "动态规划",
    ds: "数据结构",
    string: "字符串",
    graph: "图论",
    combinatorics: "组合计数",
    geometry: "计算几何",
    linearalgebra: "线性代数",
    thinking: "思维",
    coding: "代码",
    carefulness: "细心",
    mood: "心态",
    determination: "决心",
    quickness: "迅捷",
    mental: "心理素质",
    culture: "文化课",
    experience: "经验",
    polynomial: "多项式",
    numbertheory: "数论",
    construction: "构造",
    gametheory: "博弈论",
  };
  return statNames[key] || key;
}

// 添加离开商店函数
function leaveShop() {
  logEvent("离开商店", 'event');
  remainingEvents--;
  showNextTrainingEvent();
}

// 添加正常模式启动函数
function startNormalMode() {
  gameDifficulty = 'easy';
  // 根据难度设置商店初始价格
  currentShopPrices = getInitialShopPrices('easy');
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("pre-story-panel").style.display = "block";
  document.getElementById("log-panel").style.display = "none";

  // 设置正常模式的剧情
  document.getElementById("pre-story-title").textContent = "我重生了？";
  document.getElementById("pre-story-content").innerHTML = `
              <p>参加完 2077 年的省队选拔后，高二的你意识到自己无缘今年省队了。也许从此就和 OI 无缘了。</p>
              <p>你躺在床上，闭上眼，回想起自己曾经在 OI 赛场上挥洒汗水的场景。</p>
              <p>眼泪还是流了出来。你不甘心，你觉得你还可以做得更好。</p>
              <p>你突然惊醒，发现自己回到了高一前的暑假。</p>
              <p>之前经历的一切仿佛是一场梦，却又那么真实。</p>
              <p>你意识到，这一次，你还有机会。</p>
              <p>你决定，这一次，让 OI 生涯不留遗憾。</p>
              <p>你充满了决心。</p>
              <div style="margin-top: 30px; text-align: center;">
                  <button onclick="proceedToAllocation()" class="btn" style="font-size: 16px; padding: 8px 20px;">开始训练</button>
              </div>
          `;

  // 移除剧情左边的蓝线
  const storyContent = document.querySelector('.story-content');
  if (storyContent) {
    storyContent.style.borderLeft = 'none';
    storyContent.style.paddingLeft = '0';
  }

  // 重置游戏状态
  timePoints = 24;
  mood = 10;
  currentProblem = 1;
  totalProblems = 0;
  remainingPoints = 15;
  remainingAbilityPoints = 10;
  currentContestName = "NOIP普及组";

  // 重置玩家属性
  playerStats = {
    dp: 0,
    ds: 0,
    string: 0,
    graph: 0,
    combinatorics: 0,
    geometry: 0,
    linearalgebra: 0,
    thinking: 0,
    coding: 0,
    carefulness: 0,
    experience: 0,
    determination: 500,
    achievements: []
  };

  // 清空日志
  gameLog = [];
  document.getElementById("log").innerHTML = "";

  // 记录游戏开始到日志
  logEvent("选择了正常模式", 'event');
  logEvent(`初始知识点：${remainingPoints}`, 'event');
  logEvent(`初始能力点：${remainingAbilityPoints}`, 'event');
  logEvent(`初始决心：${playerStats.determination}`, 'event');
  logEvent(`初始心态：${mood}`, 'event');
  updateStatus();
  // 更新天赋点显示
  document.getElementById("remaining-points").textContent = remainingPoints;
}

// 添加训练事件启动函数
function startTrainingEvents(totalEvents) {
  // 显示训练事件面板
  document.getElementById("training-event-panel").style.display = "block";
  document.getElementById("allocate-panel").style.display = "none";
  document.getElementById("log-panel").style.display = "block";

  // 更新全局变量
  totalTrainingEvents = totalEvents;
  remainingEvents = totalEvents;

  // 显示第一个训练事件
  showNextTrainingEvent();

  // 记录训练开始
  logEvent("训练阶段开始！", 'event');
  logEvent(`你还有${remainingEvents}次训练机会。`, 'event');
}

// 显示训练事件
function showTrainingEvent(eventName) {
  const event = eventSystem.training[eventName];
  if (!event) {
    console.error('Event not found:', eventName);
    return;
  }

  // 如果是商店事件，重置商店价格为当前难度的初始价格
  if (eventName === "决心商店") {
    purchasedItems.clear(); // 清空已购买记录
  }

  // 更新面板标题和描述
  const panel = document.getElementById("training-event-panel");
  if (!panel) {
    console.error('Training event panel not found');
    return;
  }

  // 显示面板
  panel.style.display = "block";

  // 设置主标题和副标题
  const titleElement = panel.querySelector("h2");
  if (!titleElement) {
    console.error('Title element not found');
    return;
  }

  // 创建或更新副标题
  let subtitleElement = panel.querySelector(".event-subtitle");
  if (!subtitleElement) {
    subtitleElement = document.createElement("h3");
    subtitleElement.className = "event-subtitle";
    subtitleElement.style.fontSize = "18px";
    subtitleElement.style.color = "#666";
    subtitleElement.style.marginTop = "5px";
    titleElement.parentNode.insertBefore(subtitleElement, titleElement.nextSibling);
  }

  // 设置主标题（根据当前阶段显示不同的标题）和副标题（事件名称）
  let phaseText = "";
  switch (currentPhase) {
    case 1: phaseText = "CSP-S"; break;
    case 3: phaseText = "NOIP"; break;
    case 5: phaseText = "WC"; break;
    case 7: phaseText = "省选Day1"; break;
    case 9: phaseText = "省选Day2"; break;
    case 11: phaseText = "APIO"; break;
    case 13: phaseText = "NOI Day1"; break;
    case 15: phaseText = "NOI Day2"; break;
    case 17: phaseText = "CSP-S"; break;
    case 19: phaseText = "NOIP"; break;
    case 21: phaseText = "CTT"; break;
    case 26: phaseText = "CTS"; break;
    case 29: phaseText = "WC"; break;
    case 31: phaseText = "省选Day1"; break;
    case 33: phaseText = "省选Day2"; break;
    case 35: phaseText = "APIO"; break;
    case 38: phaseText = "NOI Day1"; break;
    case 40: phaseText = "NOI Day2"; break;
    case 42: phaseText = "IOI"; break;
    case 45: phaseText = "CTT"; break;
    case 50: phaseText = "CTS"; break;
    case 53: phaseText = "IOI"; break;
  }
  // 确保当前次数从1开始计数
  const currentEvent = Math.min(totalTrainingEvents, Math.max(1, totalTrainingEvents - remainingEvents + 1));
  titleElement.textContent = `${phaseText}比赛即将到来（${currentEvent}/${totalTrainingEvents}）`;
  subtitleElement.textContent = event.title;

  // 显示事件描述
  const descriptionContainer = panel.querySelector("#event-description");
  if (!descriptionContainer) {
    const desc = document.createElement("div");
    desc.id = "event-description";
    desc.style.margin = "10px 0";
    desc.style.fontSize = "16px";
    desc.style.color = "#333";
    desc.style.padding = "10px";
    desc.style.backgroundColor = "#f5f5f5";
    desc.style.borderRadius = "5px";
    panel.insertBefore(desc, panel.querySelector("#event-options"));
  }
  const descElement = panel.querySelector("#event-description");
  if (descElement) {
    descElement.textContent = event.description;
  }

  // 清空并重新生成选项
  const optionsContainer = document.getElementById("event-options");
  if (!optionsContainer) {
    console.error('Options container not found');
    return;
  }
  optionsContainer.innerHTML = "";

  // 获取随机选项
  let availableOptions;
  if (event.isShop) {
    // 使用当前价格更新商店选项
    const updatedOptions = getUpdatedShopOptions();
    const leaveOption = updatedOptions.find(opt => opt.text === "放弃购买");
    const shopOptions = updatedOptions.filter(opt => opt.text !== "放弃购买" && !purchasedItems.has(opt.text));
    availableOptions = shuffleArray(shopOptions).slice(0, event.optionsToShow - 1);
    if (leaveOption) {
      availableOptions.push(leaveOption);
    }
  } else {
    availableOptions = shuffleArray(event.options).slice(0, event.optionsToShow);
  }

  // 创建选项按钮
  availableOptions.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "event-option";

    const title = document.createElement("h3");
    title.textContent = option.text;

    const description = document.createElement("p");
    description.textContent = option.description || "";

    const effects = document.createElement("div");
    effects.className = "event-effects";

    if (option.cost) {
      const currentCost = currentShopPrices[option.text];
      effects.innerHTML = `花费：${currentCost}决心<br>`;
    }

    let effectsText = '效果：';

    // 显示直接效果（如果有）
    if (option.effects && typeof option.effects === 'object' && Object.keys(option.effects).length > 0) {
      const effects = [];
      Object.entries(option.effects).forEach(([key, value]) => {
        if (key === 'random') {
          effects.push(`随机提升一项算法能力+1`);
        } else if (key === 'mood' && option.text === "缓和心态") {
          effects.push(`调整心态到${value}`);
        } else if (value !== undefined && value !== null) {
          effects.push(`${getStatName(key)} ${value > 0 ? '+' : ''}${value}`);
        }
      });
      effectsText += effects.join('、');
    }

    // 如果有跳转、概率跳转或概率效果，添加"？"
    if (option.nextEvent || option.nextEventProbability || option.probabilityEffects) {
      effectsText += (effectsText === '效果：' ? '？' : '、？');
    } else if (effectsText === '效果：') {
      // 如果没有任何效果，显示"无"
      effectsText += '无';
    }

    effects.innerHTML += effectsText;

    optionDiv.appendChild(title);
    optionDiv.appendChild(description);
    optionDiv.appendChild(effects);

    // 检查是否是已购买的商店物品
    const isPurchased = event.isShop && option.cost && purchasedItems.has(option.text);

    if (isPurchased) {
      // 如果是已购买的商品，禁用选项
      optionDiv.style.opacity = '0.6';
      optionDiv.style.cursor = 'not-allowed';
      optionDiv.classList.add('purchased');
    } else {
      // 如果不是已购买的商品，添加点击事件
      optionDiv.onclick = () => {
        if (event.isShop && option.cost) {
          purchasedItems.add(option.text);
        }
        selectTrainingOption(option, event.isShop, event.type);
      };
    }

    optionsContainer.appendChild(optionDiv);
  });

  // 记录事件（只记录事件名）
  logEvent(`触发事件：${event.title}`, 'event');
}

// 显示下一个训练事件
function showNextTrainingEvent() {
  if (remainingEvents <= 0) {
    handlePhaseTransition();
    return;
  }

  let eventType;
  const currentEvent = totalTrainingEvents - remainingEvents + 1;

  // 根据当前阶段和事件序号决定事件类型
  if (currentPhase === 1) { // 第一次训练(7次)：【长期训练】【提升训练/比赛训练】【娱乐时间】【提升训练/比赛训练】【考前一天】
    if (currentEvent === 1) {
      eventType = "长期训练";
    } else if (currentEvent === 2) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 3) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 4) {
      eventType = Math.random() < 0.5 ? "提升训练" : "娱乐时间";
    } else if (currentEvent === 5) {
      eventType = Math.random() < 0.5 ? "焦虑" : "比赛训练";
    } else if (currentEvent === 6) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "提升训练";
    } else if (currentEvent === 7) {
      eventType = "赛前一天";
    }
  } 
  else if (currentPhase == 16) { // 第八次训练(8次)：【步入高二】【长期训练】【提升训练/比赛训练】【提升训练/比赛训练】【娱乐时间】【提升训练/比赛训练】【焦虑】【考前一天】
    if (currentEvent === 1) {
      eventType = "步入高二";
    } else if (currentEvent === 2) {
      eventType = "长期训练";
    } else if (currentEvent === 3 || currentEvent === 4 || currentEvent === 6) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 5) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 7) {
      eventType = "焦虑";
    } else if (currentEvent === 8) {
      eventType = "赛前一天";
    }
  } 
  else if (totalTrainingEvents == 2) { // 2次训练：【焦虑】【考前一天】
    if (currentEvent === 1) {
      eventType = "焦虑";
    } else if (currentEvent === 2) {
      eventType = "赛前一天";
    }
  } 
  else if (totalTrainingEvents == 4) { // 4次训练：【提升训练/比赛训练】【娱乐时间】【焦虑】【考前一天】
    if (currentEvent === 1) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 2) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 3) {
      eventType = "焦虑";
    } else if (currentEvent === 4) {
      eventType = "赛前一天";
    }
  } 
  else if (totalTrainingEvents == 5) { // 5次训练：【提升训练/比赛训练】【娱乐时间】【焦虑】【遗忘】【考前一天】
    if (currentEvent === 1) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 2) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 3) {
      eventType = "焦虑";
    } else if (currentEvent === 4) {
      eventType = "遗忘";
    } else if (currentEvent === 5) {
      eventType = "赛前一天";
    }
  }
  else if (totalTrainingEvents == 6) { // 6次训练：【提升训练/比赛训练】【娱乐时间】【提升训练/比赛训练】【娱乐时间】【焦虑】【考前一天】
    if (currentEvent === 1 || currentEvent === 3) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 2 || currentEvent === 4) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 5) {
      eventType = "焦虑";
    } else if (currentEvent === 6) {
      eventType = "赛前一天";
    }
  }
  else if (totalTrainingEvents == 7) { // 6次训练：【提升训练/比赛训练】【娱乐时间】【提升训练/比赛训练】【娱乐时间】【焦虑】【考前一天】
    if (currentEvent === 1) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 2) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 3) {
      eventType = Math.random() < 0.5 ? "焦虑" : "提升训练";
    } else if (currentEvent === 4) {
      eventType = Math.random() < 0.5 ? "焦虑" : "比赛训练";
    } else if (currentEvent === 5) {
      eventType = "焦虑";
    } else if (currentEvent === 6) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "遗忘";
    } else if (currentEvent === 7) {
      eventType = "赛前一天";
    }
  }
  else if (totalTrainingEvents == 8) { // 6次训练：【提升训练/比赛训练】【娱乐时间】【提升训练/比赛训练】【娱乐时间】【焦虑】【考前一天】
    if (currentEvent === 1) {
      eventType = Math.random() < 0.5 ? "提升训练" : "比赛训练";
    } else if (currentEvent === 2) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 3) {
      eventType = Math.random() < 0.5 ? "焦虑" : "提升训练";
    } else if (currentEvent === 4) {
      eventType = Math.random() < 0.5 ? "焦虑" : "比赛训练";
    } else if (currentEvent === 5) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "阅读博客";
    } else if (currentEvent === 6) {
      eventType = Math.random() < 0.5 ? "娱乐时间" : "遗忘";
    } else if (currentEvent === 7) {
      eventType = Math.random() < 0.5 ? "焦虑" : "提升训练";
    } else if (currentEvent === 8) {
      eventType = "赛前一天";
    }
  }

  showTrainingEvent(eventType);
}

// 数组随机排序函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 添加新的阶段转换处理函数
function handlePhaseTransition() {
  const difficultyMultiplier = {
    'easy': 0.85,    // 简单难度分数线降低15%
    'normal': 0.9,    // 普通难度分数线降低10%
    'hard': 1.0,    // 困难难度分数线保持不变
    'expert': 1.15   // 专家难度分数线提高15%
  }[gameDifficulty];
  if (currentPhase === 1) {
    logEvent("CSP-S比赛即将开始...", 'event');
    currentPhase = 2;
    startContest("CSP-S");
  } else if (currentPhase === 2) {
    logEvent("第二次训练开始...", 'event');
    currentPhase = 3;
    startTrainingEvents(4);
  } else if (currentPhase === 3) {
    if (playerStats.cspScore <= 0) {
      showSkipContestEvent("由于CSP-S成绩为零分", "NOIP", 4);
      playerStats.noipScore = 0;
    } else {
      logEvent("NOIP比赛即将开始...", 'event');
      currentPhase = 4;
      startContest("NOIP");
    }
  } else if (currentPhase === 4) {
    logEvent("第三次训练开始...", 'event');
    currentPhase = 5;
    startTrainingEvents(4);
  } else if (currentPhase === 5) {
    if (playerStats.cspScore < 180 * difficultyMultiplier) { // 三等奖及以下
      showSkipContestEvent("由于CSP-S成绩未达到二等奖及以上", "WC", 6);
    } else {
      logEvent("WC比赛即将开始...", 'event');
      currentPhase = 6;
      startContest("WC");
    }
  } else if (currentPhase === 6) {
    logEvent("第四次训练开始...", 'event');
    currentPhase = 7;
    startTrainingEvents(4);
  } else if (currentPhase === 7) {
    logEvent("省选Day1比赛即将开始...", 'event');
    currentPhase = 8;
    startContest("省选Day1");
  } else if (currentPhase === 8) {
    logEvent("第五次训练开始...", 'event');
    currentPhase = 9;
    startTrainingEvents(2);
  } else if (currentPhase === 9) {
    logEvent("省选Day2比赛即将开始...", 'event');
    currentPhase = 10;
    startContest("省选Day2");
  } else if (currentPhase === 10) {
    logEvent("第六次训练开始...", 'event');
    currentPhase = 11;
    startTrainingEvents(4);
  } else if (currentPhase === 11) {
    if (playerStats.noipScore < 180 * difficultyMultiplier) { // 三等奖及以下
      showSkipContestEvent("由于NOIP成绩未达到二等奖及以上", "APIO", 12);
    } else {
      logEvent("APIO比赛即将开始...", 'event');
      currentPhase = 12;
      startContest("APIO");
    }
  } else if (currentPhase === 12) {
    logEvent("第七次训练开始...", 'event');
    currentPhase = 12.5;
    startTrainingEvents(4);
  } else if (currentPhase === 12.5) {
    if (!playerStats.isProvincialTeam) {
      showSkipContestEvent("由于未进入省队", "NOI", 16);
    } else {
      logEvent("NOI 笔试即将开始...", 'event');
      currentPhase = 13;
      startContest("NOI Day0");
    }
  } else if (currentPhase === 13) {
    logEvent("NOI Day1比赛即将开始...", 'event');
    currentPhase = 14;
    startContest("NOI Day1");
    
  } 
  else if (currentPhase === 14) {
    logEvent("第八次训练开始...", 'event');
    currentPhase = 15;
    startTrainingEvents(2);
  } else if (currentPhase === 15) {
    logEvent("NOI Day2比赛即将开始...", 'event');
    currentPhase = 16;
    startContest("NOI Day2");
  } else if (currentPhase === 16) {
    logEvent("第九次训练开始...", 'event');
    currentPhase = 17;
    startTrainingEvents(8);
  } else if (currentPhase === 17) {
    logEvent("CSP-S比赛即将开始...", 'event');
    currentPhase = 18;
    startContest("CSP-S");
  } else if (currentPhase === 18) {
    logEvent("第十次训练开始...", 'event');
    currentPhase = 19;
    startTrainingEvents(5);
  } else if (currentPhase === 19) {
    if (playerStats.cspScore <= 0 && playerStats.isTrainingTeam == false) {
      showSkipContestEvent("由于CSP-S成绩为零分", "NOIP", 20);
      playerStats.noipScore = 0;
    } else {
      logEvent("NOIP比赛即将开始...", 'event');
      currentPhase = 20;
      startContest("NOIP");
    }
  } else if (currentPhase === 20) {
    if (playerStats.isTrainingTeam) {
      logEvent("第十一次训练开始...", 'event');
      currentPhase = 21;
      startTrainingEvents(6);
    } else {
      logEvent("第十一次训练开始...", 'event');
      currentPhase = 29;
      startTrainingEvents(7);
    }
  } else if (currentPhase === 21) {
    logEvent("CTT Day1比赛即将开始...", 'event');
    currentPhase = 22;
    startContest("CTT Day1");
  } else if (currentPhase === 22) {
    logEvent("CTT Day2比赛即将开始...", 'event');
    currentPhase = 23;
    startContest("CTT Day2");
  } else if (currentPhase === 23) {
    logEvent("CTT Day3比赛即将开始...", 'event');
    currentPhase = 24;
    startContest("CTT Day3");
  } else if (currentPhase === 24) {
    logEvent("CTT Day4比赛即将开始...", 'event');
    currentPhase = 25;
    startContest("CTT Day4");
  } else if (currentPhase === 25) {
    if (playerStats.isCandidateTeam) {
      logEvent("第十二次训练开始...", 'event');
      currentPhase = 26;
      startTrainingEvents(4);
    } else {
      logEvent("第十二次训练开始...", 'event');
      currentPhase = 29;
      startTrainingEvents(4);
    }
  } else if (currentPhase === 26) {
    logEvent("CTS Day1比赛即将开始...", 'event');
    currentPhase = 27;
    startContest("CTS Day1");
  } else if (currentPhase === 27) {
    logEvent("CTS Day2比赛即将开始...", 'event');
    currentPhase = 28;
    startContest("CTS Day2");
  } else if (currentPhase === 28) {
    logEvent("第十三次训练开始...", 'event');
    currentPhase = 31;
    startTrainingEvents(5);
  } else if (currentPhase === 29) {
    if (playerStats.cspScore < 180 * difficultyMultiplier) {
      showSkipContestEvent("由于CSP-S成绩未达到二等奖及以上", "WC", 30);
    } else {
      logEvent("WC比赛即将开始...", 'event');
      currentPhase = 30;
      startContest("WC");
    }
  } else if (currentPhase === 30) {
    logEvent("第十四次训练开始...", 'event');
    currentPhase = 31;
    startTrainingEvents(8);
  } else if (currentPhase === 31) {
    logEvent("省选Day1比赛即将开始...", 'event');
    currentPhase = 32;
    playerStats.isProvincialTeam = false;
    startContest("省选Day1");
  } else if (currentPhase === 32) {
    logEvent("第十五次训练开始...", 'event');
    currentPhase = 33;
    startTrainingEvents(2);
  } else if (currentPhase === 33) {
    logEvent("省选Day2比赛即将开始...", 'event');
    currentPhase = 34;
    startContest("省选Day2");
  } else if (currentPhase === 34) {
    if (!playerStats.isProvincialTeam && !playerStats.isNationalTeam) {
      logEvent("由于未能进入省队，你的OI生涯就此结束", 'event');
      showGameOver("在高二省选中未能进入省队");
    } else {
      logEvent("第十六次训练开始...", 'event');
      currentPhase = 35;
      startTrainingEvents(8);
    }
  } else if (currentPhase === 35) {
    logEvent("APIO比赛即将开始...", 'event');
    currentPhase = 37;
    startContest("APIO");
  } else if (currentPhase === 37) {
    logEvent("第十七次训练开始...", 'event');
    currentPhase = 37.5;
    startTrainingEvents(8);
  } else if (currentPhase === 37.5) {
    logEvent("NOI 笔试即将开始...", 'event');
    currentPhase = 38;
    startContest("NOI Day0");
  }
  else if (currentPhase === 38) {
    logEvent("NOI Day1比赛即将开始...", 'event');
    currentPhase = 39;
    playerStats.isTrainingTeam = false;
    startContest("NOI Day1");
  } else if (currentPhase === 39) {
    logEvent("第十八次训练开始...", 'event');
    currentPhase = 40;
    startTrainingEvents(2);
  } else if (currentPhase === 40) {
    logEvent("NOI Day2比赛即将开始...", 'event');
    currentPhase = 41;
    startContest("NOI Day2");
  } else if (currentPhase === 41) {
    if (playerStats.isNationalTeam) {
      logEvent("第十九次训练开始...", 'event');
      currentPhase = 42;
      startTrainingEvents(6);
    } else if (playerStats.isTrainingTeam) {
      logEvent("第十九次训练开始...", 'event');
      currentPhase = 45;
      startTrainingEvents(8);
    } else {
      showGameOver("完成NOI比赛");
    }
  } else if (currentPhase === 42) {
    logEvent("IOI Day1比赛即将开始...", 'event');
    currentPhase = 43;
    startContest("IOI Day1");
  } else if (currentPhase === 43) {
    logEvent("IOI Day2比赛即将开始...", 'event');
    currentPhase = 44;
    startContest("IOI Day2");
  } else if (currentPhase === 44) {
    if (playerStats.isIOIgold || playerStats.isIOIchampion || !playerStats.isTrainingTeam) {
      showGameOver("完成IOI比赛");
    }
    else {
      currentPhase = 45;
      startTrainingEvents(1);
    }
  } else if (currentPhase === 45) {
    logEvent("CTT Day1比赛即将开始...", 'event');
    currentPhase = 46;
    playerStats.isCandidateTeam = false;
    startContest("CTT Day1");
  } else if (currentPhase === 46) {
    logEvent("CTT Day2比赛即将开始...", 'event');
    currentPhase = 47;
    startContest("CTT Day2");
  } else if (currentPhase === 47) {
    logEvent("CTT Day3比赛即将开始...", 'event');
    currentPhase = 48;
    startContest("CTT Day3");
  } else if (currentPhase === 48) {
    logEvent("CTT Day4比赛即将开始...", 'event');
    currentPhase = 49;
    startContest("CTT Day4");
  } else if (currentPhase === 49) {
    if (playerStats.isCandidateTeam) {
      logEvent("第二十次训练开始...", 'event');
      currentPhase = 50;
      startTrainingEvents(4);
    } else {
      showGameOver("未能进入候选队");
    }
  } else if (currentPhase === 50) {
    logEvent("CTS Day1比赛即将开始...", 'event');
    currentPhase = 51;
    playerStats.isNationalTeam = false;
    startContest("CTS Day1");
  } else if (currentPhase === 51) {
    logEvent("CTS Day2比赛即将开始...", 'event');
    currentPhase = 52;
    startContest("CTS Day2");
  } else if (currentPhase === 52) {
    if (playerStats.isNationalTeam) {
      logEvent("第二十一次训练开始...", 'event');
      currentPhase = 53;
      startTrainingEvents(6);
    } else {
      showGameOver("未能进入国家队");
    }
  } else if (currentPhase === 53) {
    logEvent("IOI Day1比赛即将开始...", 'event');
    currentPhase = 54;
    startContest("IOI Day1");
  } else if (currentPhase === 54) {
    logEvent("IOI Day2比赛即将开始...", 'event');
    currentPhase = 55;
    startContest("IOI Day2");
  } else if (currentPhase === 55) {
    showGameOver("完成IOI比赛");
  }
}

function showGameOver(reason) {
  const gamePanel = document.querySelector('.game-panel');
  let achievementsHTML = '';

  // 显示所有记录的成就
  if (playerStats.achievements.length > 0) {
    achievementsHTML = playerStats.achievements
      .map(achievement => `<li>${achievement}</li>`)
      .join('');
  } else {
    achievementsHTML = '<li>没有获得任何成就</li>';
  }

  // 根据不同结局显示不同的评价
  let evaluation = '';
  if (playerStats.isIOIchampion) {
    evaluation = '你成功拿到了 IOI 冠军 —— 这实在是不可思议！你成为了 IOI 历史上最伟大的选手之一，你是当之无愧的赢家！';
  } else if (playerStats.isIOIgold) {
    evaluation = '你成功拿到了 IOI 金牌 —— 这也许是你曾经想都不敢想的成绩，但你做到了！唯一的遗憾是，你没有获得 IOI 冠军，没有成为 IOI 历史上最伟大的选手之一。';
  } else if (playerStats.isNationalTeam) {
    evaluation = '你成为了中国国家队选手，代表中国参加了 IOI。虽然没有取得最好的成绩，但这仍然是一个令人骄傲的成就！';
  } else if (playerStats.isTrainingTeam) {
    evaluation = '你作为中国国家集训队选手，已经具备了保送资格。希望 OI 能成为你人生中的一道亮丽风景，不过你的人生才刚刚开始！';
  } else if (playerStats.isProvincialTeam) {
    evaluation = '作为省队选手，你在 OI 的道路上已经取得了不错的成绩。虽然没有成功进入集训队，虽然也许还能再好，但你已经做得令自己很满意了。';
  } else {
    evaluation = '虽然未能进入省队，但在 OI 的道路上你依然收获了宝贵的经验。退役之后你仍然会常常想起，曾经学 OI 的时候的一些瞬间。';
  }

  gamePanel.innerHTML = `
              <div style="text-align: center; padding: 40px;">
                  <h2 style="color: #1a237e;">游戏结束</h2>
                  <p style="color: #666; margin: 20px 0;">${reason}</p>
                  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                      <h3 style="color: #1a237e; margin-bottom: 15px;">你的成就</h3>
                      <ul style="list-style: none; padding: 0;">
                          ${achievementsHTML}
                      </ul>
                  </div>
                  <p style="color: #333; margin: 20px 0; font-style: italic;">${evaluation}</p>
                  <button onclick="window.location.reload()" class="btn blue" style="margin-top: 20px;">重新开始</button>
              </div>
          `;
}

// 添加商店购买记录
let purchasedItems = new Set();

// 添加评奖系统函数
function calculateAward(contestType, score, prevScore = 0, prevScore2 = 0, prevScore3 = 0) {
  // 根据难度调整分数线
  const difficultyMultiplier = {
    'easy': 0.85,    // 简单难度分数线降低15%
    'normal': 0.9,    // 普通难度分数线降低10%
    'hard': 1.0,    // 困难难度分数线保持不变
    'expert': 1.15   // 专家难度分数线提高15%
  }[gameDifficulty];

  let award = "";
  switch (contestType) {
    case "CSP-S":
      if (score >= 290 * difficultyMultiplier) award = "一等奖";
      else if (score >= 190 * difficultyMultiplier) award = "二等奖";
      else if (score >= 60 * difficultyMultiplier) award = "三等奖";
      else award = "没有获奖";
      playerStats.achievements.push(`CSP-S：${score}分，${award}`);
      return award;

    case "NOIP":
      if (score >= 270 * difficultyMultiplier) award = "一等奖";
      else if (score >= 180 * difficultyMultiplier) award = "二等奖";
      else if (score >= 50 * difficultyMultiplier) award = "三等奖";
      else award = "没有获奖";
      playerStats.achievements.push(`NOIP：${score}分，${award}`);
      return award;

    case "WC":
    case "APIO":
      if (score >= 220 * difficultyMultiplier) award = "金牌";
      else if (score >= 160 * difficultyMultiplier) award = "银牌";
      else if (score >= 100 * difficultyMultiplier) award = "铜牌";
      else award = "铁牌";
      playerStats.achievements.push(`${contestType}：${score}分，${award}`);
      return award;

    case "省选":
      let totalScore = playerStats.tempScore;
      if (totalScore >= 750 * difficultyMultiplier) {
        award = "省队A队";
        playerStats.isProvincialTeamA = true;
      } else if (totalScore >= 550 * difficultyMultiplier) {
        award = "省队B队";
      } else {
        award = "没有进队";
      }
      playerStats.achievements.push(`省选：${totalScore}分，${award}`);
      return award;

    case "NOI":
      let noiScore = playerStats.tempScore;
      if (noiScore >= 475 * difficultyMultiplier) {
        award = "金牌";
        playerStats.isTrainingTeam = true;
      } else if (noiScore >= 350 * difficultyMultiplier) award = "银牌";
      else if (noiScore >= 250 * difficultyMultiplier) award = "铜牌";
      else award = "铁牌";
      playerStats.achievements.push(`NOI：${noiScore}分，${award}`);
      return award;

    case "CTT":
      let cttScore = playerStats.tempScore;
      award = cttScore >= 750 * difficultyMultiplier ? "入选候选队" : "没有入选候选队";
      playerStats.achievements.push(`CTT：${cttScore}分，${award}`);
      if (cttScore >= 750 * difficultyMultiplier) playerStats.isCandidateTeam = true;
      return award;

    case "CTS":
      let ctsScore = playerStats.tempScore;
      award = ctsScore >= 1100 * difficultyMultiplier ? "入选国家队" : "没有入选国家队";
      playerStats.achievements.push(`CTS：${ctsScore}分，${award}`);
      if (ctsScore >= 1100 * difficultyMultiplier) playerStats.isNationalTeam = true;
      return award;

    case "IOI":
      let ioiScore = playerStats.tempScore;
      if (ioiScore >= 500 * difficultyMultiplier) {
        award = "金牌（冠军）";
        playerStats.isIOIchampion = true;
      } else if (ioiScore >= 425 * difficultyMultiplier) {
        award = "金牌";
        playerStats.isIOIgold = true;
      }
      else if (ioiScore >= 325 * difficultyMultiplier) award = "银牌";
      else if (ioiScore >= 250 * difficultyMultiplier) award = "铜牌";
      else award = "铁牌";
      playerStats.achievements.push(`IOI：${ioiScore}分，${award}`);
      return award;

    default:
      return "";
  }
}

// 添加显示比赛跳过提示的函数
function showSkipContestEvent(reason, contestName, nextPhase) {
  const panel = document.getElementById("training-event-panel");
  const optionsContainer = document.getElementById("event-options");

  // 移除可能存在的副标题
  const existingSubtitle = panel.querySelector(".event-subtitle");
  if (existingSubtitle) {
    existingSubtitle.remove();
  }

  // 移除可能存在的描述
  const existingDesc = panel.querySelector("#event-description");
  if (existingDesc) {
    existingDesc.remove();
  }

  // 设置标题
  panel.querySelector("h2").textContent = `无法参加${contestName}比赛`;

  // 清空并重新生成选项容器
  optionsContainer.innerHTML = `
              <div style="text-align: center; padding: 20px;">
                  <h3 style="color: #dc3545; margin-bottom: 20px;">${reason}，你将无法参加${contestName}比赛</h3>
                  <p style="margin: 20px 0; color: #666;">这对你的OI生涯造成了一定影响，但现在最重要的是继续前进。</p>
                  <div class="event-option" onclick="handleSkipContestConfirm(${nextPhase})">
                      <h3>继续训练</h3>
                      <p>尽管错过了这次机会，但你的OI之路还在继续。</p>
                  </div>
              </div>
          `;

  // 显示面板
  panel.style.display = "block";
  document.getElementById("game-interface").style.display = "none";

  // 记录到日志
  logEvent(`${reason}，无法参加${contestName}比赛`, 'event');
}

// 添加处理比赛跳过确认的函数
function handleSkipContestConfirm(nextPhase) {
  const panel = document.getElementById("training-event-panel");
  panel.style.display = "none";

  if (nextPhase === null) {
    // 游戏结束
    const gamePanel = document.querySelector('.game-panel');
    gamePanel.innerHTML = `
                  <div style="text-align: center; padding: 40px;">
                      <h2 style="color: #dc3545;">游戏结束</h2>
                      <p>你的OI生涯就此结束。</p>
                      <button onclick="window.location.reload()" class="btn blue" style="margin-top: 20px;">重新开始</button>
                  </div>
              `;
  } else {
    // 继续下一阶段
    currentPhase = nextPhase;
    handlePhaseTransition();
  }
}

// 添加属性映射函数
function mapAttributeValue(value) {
  if (value <= 4) return value;
  return Math.floor(4 + (value - 4) / 2);
}

// 修改商店选项生成逻辑
function getUpdatedShopOptions() {
  return [
    {
      text: "思维提升",
      effects: { thinking: 1 },
      cost: currentShopPrices["思维提升"],
      description: `花费${currentShopPrices["思维提升"]}点决心提升1点思维能力`
    },
    {
      text: "代码提升",
      effects: { coding: 1 },
      cost: currentShopPrices["代码提升"],
      description: `花费${currentShopPrices["代码提升"]}点决心提升1点代码能力`
    },
    {
      text: "细心提升",
      effects: { carefulness: 1 },
      cost: currentShopPrices["细心提升"],
      description: `花费${currentShopPrices["细心提升"]}点决心提升1点细心`
    },
    {
      text: "随机提升",
      effects: { random: ["dp", "ds", "string", "graph", "combinatorics", "geometry", "linearalgebra"] },
      cost: currentShopPrices["随机提升"],
      description: `花费${currentShopPrices["随机提升"]}点决心随机提升一项算法能力`
    },
    {
      text: "心态恢复",
      effects: { mood: 2 },
      cost: currentShopPrices["心态恢复"],
      description: `花费${currentShopPrices["心态恢复"]}点决心提升2点心态`
    },
    {
      text: "全面提升",
      effects: { dp: 1, ds: 1, string: 1, graph: 1, combinatorics: 1, geometry: 1, linearalgebra: 1, numbertheory: 1, polynomial: 1, gametheory: 1, construction: 1 },
      cost: currentShopPrices["全面提升"],
      description: `花费${currentShopPrices["全面提升"]}点决心提升所有算法能力`
    },
    {
      text: "速度提升",
      effects: { quickness: 1 },
      cost: currentShopPrices["速度提升"],
      description: `花费${currentShopPrices["速度提升"]}点决心提升1点迅捷`
    },
    {
      text: "心理素质提升",
      effects: { mental: 1 },
      cost: currentShopPrices["心理素质提升"],
      description: `花费${currentShopPrices["心理素质提升"]}点决心提升1点心理素质`
    },
    {
      text: "放弃购买",
      effects: {},
      description: "离开商店"
    }
  ];
}

// 游戏难度设置
let gameDifficulty = 'easy';

// 显示进阶模式难度选择界面
function showAdvancedMode() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("difficulty-screen").style.display = "block";
}

// 返回主菜单
function backToMainMenu() {
  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("game-title").textContent = "OI 比赛模拟游戏";
  document.getElementById("start-screen").style.display = "block";
  document.querySelector(".start-buttons").style.display = "flex";
  document.querySelector(".changelog-content").style.display = "none";
}

// 开始进阶模式
function startAdvancedMode(difficulty) {
  gameDifficulty = difficulty;

  // 根据难度调整初始属性
  switch (difficulty) {
    case 'easy':
      remainingPoints = 30; // 更多知识点
      remainingAbilityPoints = 5; // 更多能力点
      playerStats.determination = 4000; // 更多决心
      mood = 20; // 最高心态
      extraMoodDrop = 0; // 额外心态下降值
      currentShopPrices = getInitialShopPrices('easy');
      break;
    case 'normal':
      remainingPoints = 20; // 标准知识点
      remainingAbilityPoints = 3; // 标准能力点
      playerStats.determination = 2000; // 标准决心
      mood = 18; // 标准心态
      extraMoodDrop = 1; // 额外心态下降值
      currentShopPrices = getInitialShopPrices('normal');
      break;
    case 'hard':
      remainingPoints = 20; // 较少知识点
      remainingAbilityPoints = 2; // 较少能力点
      playerStats.determination = 1000; // 较少决心
      mood = 15; // 较低心态
      extraMoodDrop = 2; // 额外心态下降值
      currentShopPrices = getInitialShopPrices('hard');
      break;
    case 'expert':
      remainingPoints = 15; // 最少知识点
      remainingAbilityPoints = 2; // 最少能力点
      playerStats.determination = 0; // 最少决心
      mood = 12; // 最低心态
      extraMoodDrop = 2; // 额外心态下降值
      currentShopPrices = getInitialShopPrices('expert');
      break;
  }

  // 更新天赋点显示
  document.getElementById("remaining-points").textContent = remainingPoints;
  document.getElementById("remaining-ability-points").textContent = remainingAbilityPoints;

  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("pre-story-panel").style.display = "block";
  document.getElementById("log-panel").style.display = "none";

  // 设置进阶模式的剧情
  document.getElementById("pre-story-title").textContent = "我重生了？";
  document.getElementById("pre-story-content").innerHTML = `
              <p>参加完 2077 年的省队选拔后，高二的你意识到自己无缘今年省队了。也许从此就和 OI 无缘了。</p>
              <p>你躺在床上，闭上眼，回想起自己曾经在 OI 赛场上挥洒汗水的场景。</p>
              <p>眼泪还是流了出来。你不甘心，你觉得你还可以做得更好。</p>
              <p>你突然惊醒，发现自己回到了高一前的暑假。</p>
              <p>之前经历的一切仿佛是一场梦，却又那么真实。</p>
              <p>你意识到，这一次，你还有机会。</p>
              <p>你决定，这一次，让 OI 生涯不留遗憾。</p>
              <p>你充满了决心。</p>
              <div style="margin-top: 30px; text-align: center;">
                  <button onclick="proceedToAllocation()" class="btn" style="font-size: 16px; padding: 8px 20px;">开始训练</button>
              </div>
          `;

  // 移除剧情左边的蓝线
  const storyContent = document.querySelector('.story-content');
  if (storyContent) {
    storyContent.style.borderLeft = 'none';
    storyContent.style.paddingLeft = '0';
  }

  // 重置游戏状态
  timePoints = 24;
  currentProblem = 1;
  totalProblems = 0;
  currentContestName = "NOIP普及组";

  // 重置玩家属性
  playerStats = {
    dp: 0,
    ds: 0,
    string: 0,
    graph: 0,
    combinatorics: 0,
    geometry: 0,
    linearalgebra: 0,
    polynomial: 0,
    numbertheory: 0,
    construction: 0,
    gametheory: 0,
    thinking: 0,
    coding: 0,
    carefulness: 0,
    experience: 0,
    determination: playerStats.determination,
    achievements: []
  };

  // 清空日志
  gameLog = [];
  document.getElementById("log").innerHTML = "";

  // 记录难度到日志
  const difficultyNames = {
    'easy': '简单',
    'normal': '普通',
    'hard': '困难',
    'expert': '专家'
  };
  logEvent(`选择了${difficultyNames[difficulty]}难度`, 'event');
  logEvent(`初始知识点：${remainingPoints}`, 'event');
  logEvent(`初始能力点：${remainingAbilityPoints}`, 'event');
  logEvent(`初始决心：${playerStats.determination}`, 'event');
  logEvent(`初始心态：${mood}`, 'event');
  updateStatus();
}

// 添加获取初始商店价格的函数
function getInitialShopPrices(difficulty) {
  const basePrices = {
    easy: {
      "思维提升": 200,
      "代码提升": 200,
      "细心提升": 200,
      "随机提升": 200,
      "心态恢复": 300,
      "全面提升": 1200,
      "速度提升": 1000,
      "心理素质提升": 1000
    },
    normal: {
      "思维提升": 300,
      "代码提升": 300,
      "细心提升": 300,
      "随机提升": 300,
      "心态恢复": 300,
      "全面提升": 1500,
      "速度提升": 1000,
      "心理素质提升": 1000
    },
    hard: {
      "思维提升": 300,
      "代码提升": 300,
      "细心提升": 300,
      "随机提升": 400,
      "心态恢复": 500,
      "全面提升": 1500,
      "速度提升": 1500,
      "心理素质提升": 1500
    },
    expert: {
      "思维提升": 500,
      "代码提升": 500,
      "细心提升": 500,
      "随机提升": 400,
      "心态恢复": 500,
      "全面提升": 2000,
      "速度提升": 2500,
      "心理素质提升": 2500
    }
  };
  return basePrices[difficulty];
}

// 显示更新日志
function showChangelog() {
  document.getElementById("start-screen").style.display = "block";
  document.querySelector(".start-buttons").style.display = "none";
  document.getElementById("game-title").textContent = "更新日志";
  document.querySelector(".changelog-content").style.display = "block";
}

// 提交答案题处理函数
function submitAnswerProblem(problemIndex) {
  if (timePoints <= 0) {
    alert("时间点不足！");
    return;
  }
  
  // 消耗时间点
  timePoints--;
  
  // 获取当前题目
  const problem = problems[problemIndex];
  const subProblem = subProblems[problemIndex][0];
  
  
  // 生成随机分数 (0-100)
  let mean = problem.mean || 100;
  let variance = problem.variance || 1;
  let standardDev = Math.sqrt(variance);
  


  switch(gameDifficulty) {
    case 'easy':
      mean -= 1;
      break;
    case 'normal':
      mean -= 2; // 普通难度降低1分
      break;
    case 'hard':
      mean -= 3; // 困难难度降低2分
      break;
    case 'expert':
      mean -= 4; // 专家难度降低3分
      break;
    default:
      // 默认不降低
  }

  // 使用Box-Muller变换生成正态分布随机数（简单近似）
  const u1 = Math.random();
  const u2 = Math.random();
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  const randomScore = Math.min(100, Math.max(0, Math.round(mean + standardDev * z0)));


  // 更新题目最高分
  if (!isCodeComplete[problemIndex][0] || randomScore > subProblem.score) {
    subProblem.score = randomScore;
    isCodeComplete[problemIndex][0] = true;
  }
  
  // 记录提交到日志
  logEvent(`提交了第 ${problemIndex + 1} 题的答案`, 'check');
  logEvent(`消耗了 1 个时间点，剩余 ${timePoints} 个时间点`, 'check');
  logEvent(`本次提交得分: ${randomScore}`, 'check');
  logEvent(`当前最高得分: ${subProblem.score}`, 'check');
  
  // 更新最近操作记录
  lastActions.push('check');
  if (lastActions.length > 5) lastActions.shift();
  
  // 更新显示
  updateStatus();
  updateSubProblems();
  
  // 触发随机事件
  triggerRandomEvent(problemIndex, 0);
}
