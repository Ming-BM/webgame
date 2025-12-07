export const questions = [
  {
    id: 1,
    question: "请选择你的作战风格，你更倾向于正面用力量对抗敌人，还是用灵活的技巧玩弄敌人？",
    options: [
      { 
        text: "正面对抗", 
        points: { 
          warrior: 4, paladin: 3, druid: 2, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "使用技巧", 
        points: { 
          rogue: 4, mage: 3, warlock: 3, priest: 1, 
          warrior: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 2,
    question: "你喜欢单独作战（自己的实力才是最重要的），还是团队活动（团结力量大！）？",
    options: [
      { 
        text: "独自作战", 
        points: { 
          rogue: 4, warlock: 3, mage: 2, warrior: 1, 
          paladin: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "团队活动", 
        points: { 
          priest: 4, paladin: 3, druid: 3, warrior: 2, mage: 1, 
          warlock: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 3,
    question: "在战斗中，你更喜欢站在什么位置？",
    options: [
      { 
        text: "前排冲锋，吸引火力", 
        points: { 
          warrior: 4, paladin: 3, druid: 1, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "中排支援，控场输出", 
        points: { 
          mage: 4, warlock: 3, druid: 2, priest: 2, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "后排治疗，保护队友", 
        points: { 
          priest: 4, druid: 3, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "隐身游走，寻找机会", 
        points: { 
          rogue: 4, warlock: 1, 
          warrior: 0, mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 4,
    question: "你更喜欢用什么方式解决问题？",
    options: [
      { 
        text: "用武器直接解决", 
        points: { 
          warrior: 4, rogue: 3, paladin: 2, druid: 1, 
          mage: 0, warlock: 0, priest: 0 
        } 
      },
      { 
        text: "用魔法和智慧", 
        points: { 
          mage: 4, warlock: 3, priest: 2, druid: 2, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "用信仰和神圣之力", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "用计谋和暗算", 
        points: { 
          rogue: 4, warlock: 2, mage: 1, 
          warrior: 0, paladin: 0, priest: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 5,
    question: "你的力量来源是什么？",
    options: [
      { 
        text: "强健的体魄和战斗技巧", 
        points: { 
          warrior: 4, rogue: 2, paladin: 2, druid: 1, 
          mage: 0, warlock: 0, priest: 0 
        } 
      },
      { 
        text: "对魔法奥秘的研究", 
        points: { 
          mage: 4, warlock: 3, priest: 1, druid: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "与恶魔或黑暗力量的契约", 
        points: { 
          warlock: 4, rogue: 1, 
          mage: 0, warrior: 0, paladin: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "对神明的虔诚信仰", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "与自然的和谐共生", 
        points: { 
          druid: 4, priest: 1, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 6,
    question: "面对一个强大的敌人，你的第一反应是？",
    options: [
      { 
        text: "举起武器冲上去", 
        points: { 
          warrior: 4, paladin: 2, rogue: 1, 
          mage: 0, warlock: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "先观察弱点，再施展法术", 
        points: { 
          mage: 4, warlock: 3, druid: 2, priest: 1, rogue: 1, 
          warrior: 0, paladin: 0 
        } 
      },
      { 
        text: "祈祷神明，给予队友祝福", 
        points: { 
          priest: 4, paladin: 3, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "躲在暗处，寻找致命一击", 
        points: { 
          rogue: 4, warlock: 1, 
          warrior: 0, mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 7,
    question: "在冒险中，你更看重什么？",
    options: [
      { 
        text: "荣誉和正义", 
        points: { 
          paladin: 4, warrior: 3, priest: 2, druid: 1, 
          mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "知识和真理", 
        points: { 
          mage: 4, priest: 2, warlock: 2, druid: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "力量和财富", 
        points: { 
          warrior: 3, warlock: 3, rogue: 3, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      },
      { 
        text: "生命和自然的平衡", 
        points: { 
          druid: 4, priest: 2, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "自由和刺激", 
        points: { 
          rogue: 4, warlock: 2, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 8,
    question: "你希望在团队中扮演什么角色？",
    options: [
      { 
        text: "主坦克，保护所有人", 
        points: { 
          warrior: 4, paladin: 4, druid: 1, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "主力输出，快速击杀敌人", 
        points: { 
          mage: 4, warlock: 3, rogue: 3, warrior: 2, druid: 1, 
          paladin: 0, priest: 0 
        } 
      },
      { 
        text: "治疗者，保证团队续航", 
        points: { 
          priest: 4, druid: 3, paladin: 2, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "辅助控制，削弱敌人", 
        points: { 
          mage: 3, warlock: 3, druid: 2, priest: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 9,
    question: "你对魔法和超自然力量的态度是？",
    options: [
      { 
        text: "魔法是危险的，我更信任武器", 
        points: { 
          warrior: 4, rogue: 2, paladin: 1, 
          mage: 0, warlock: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "魔法是工具，需要深入研究", 
        points: { 
          mage: 4, warlock: 3, druid: 1, 
          warrior: 0, paladin: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "只有神圣之力才是正道", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "为了力量，我愿意使用任何手段", 
        points: { 
          warlock: 4, rogue: 2, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      },
      { 
        text: "自然之力才是最强大的魔法", 
        points: { 
          druid: 4, priest: 1, mage: 1, 
          warrior: 0, warlock: 0, paladin: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 10,
    question: "如果必须在道德和胜利之间选择，你会？",
    options: [
      { 
        text: "坚守道德底线，即使失败", 
        points: { 
          paladin: 4, priest: 3, druid: 2, warrior: 1, 
          mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "视情况而定，寻找平衡", 
        points: { 
          warrior: 3, mage: 3, druid: 3, priest: 1, paladin: 1, warlock: 1, rogue: 1 
        } 
      },
      { 
        text: "胜利优先，手段不重要", 
        points: { 
          warlock: 4, rogue: 4, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  }
];