export const questions = [
  {
    id: 1,
    question: "Choose your combat style. Do you prefer facing enemies head-on with strength, or using agile tactics to outmaneuver them?",
    options: [
      { 
        text: "Direct confrontation", 
        points: { 
          warrior: 4, paladin: 3, druid: 2, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "Use tactics", 
        points: { 
          rogue: 4, mage: 3, warlock: 3, priest: 1, 
          warrior: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 2,
    question: "Do you prefer solo combat (individual strength is paramount) or team activities (unity is strength!)?",
    options: [
      { 
        text: "Solo combat", 
        points: { 
          rogue: 4, warlock: 3, mage: 2, warrior: 1, 
          paladin: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "Team activities", 
        points: { 
          priest: 4, paladin: 3, druid: 3, warrior: 2, mage: 1, 
          warlock: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 3,
    question: "In battle, where do you prefer to position yourself?",
    options: [
      { 
        text: "Frontline, drawing enemy fire", 
        points: { 
          warrior: 4, paladin: 3, druid: 1, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "Mid-range, controlling the battlefield", 
        points: { 
          mage: 4, warlock: 3, druid: 2, priest: 2, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "Back-line, healing and protecting allies", 
        points: { 
          priest: 4, druid: 3, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Stealth, looking for opportunities", 
        points: { 
          rogue: 4, warlock: 1, 
          warrior: 0, mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to solve problems?",
    options: [
      { 
        text: "With weapons directly", 
        points: { 
          warrior: 4, rogue: 3, paladin: 2, druid: 1, 
          mage: 0, warlock: 0, priest: 0 
        } 
      },
      { 
        text: "With magic and wisdom", 
        points: { 
          mage: 4, warlock: 3, priest: 2, druid: 2, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "With faith and holy power", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "With strategy and deception", 
        points: { 
          rogue: 4, warlock: 2, mage: 1, 
          warrior: 0, paladin: 0, priest: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 5,
    question: "What is the source of your power?",
    options: [
      { 
        text: "Strong physique and combat skills", 
        points: { 
          warrior: 4, rogue: 2, paladin: 2, druid: 1, 
          mage: 0, warlock: 0, priest: 0 
        } 
      },
      { 
        text: "Studying arcane mysteries", 
        points: { 
          mage: 4, warlock: 3, priest: 1, druid: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "Pacts with demons or dark forces", 
        points: { 
          warlock: 4, rogue: 1, 
          mage: 0, warrior: 0, paladin: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "Devout faith in the divine", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Harmony with nature", 
        points: { 
          druid: 4, priest: 1, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 6,
    question: "Facing a powerful enemy, what's your first instinct?",
    options: [
      { 
        text: "Charge forward with weapon raised", 
        points: { 
          warrior: 4, paladin: 2, rogue: 1, 
          mage: 0, warlock: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "Observe weaknesses first, then cast spells", 
        points: { 
          mage: 4, warlock: 3, druid: 2, priest: 1, rogue: 1, 
          warrior: 0, paladin: 0 
        } 
      },
      { 
        text: "Pray to the divine, buff allies", 
        points: { 
          priest: 4, paladin: 3, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Hide in shadows, seek a fatal strike", 
        points: { 
          rogue: 4, warlock: 1, 
          warrior: 0, mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 7,
    question: "In your adventures, what do you value most?",
    options: [
      { 
        text: "Honor and justice", 
        points: { 
          paladin: 4, warrior: 3, priest: 2, druid: 1, 
          mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Knowledge and truth", 
        points: { 
          mage: 4, priest: 2, warlock: 2, druid: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      },
      { 
        text: "Power and wealth", 
        points: { 
          warrior: 3, warlock: 3, rogue: 3, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      },
      { 
        text: "Life and balance of nature", 
        points: { 
          druid: 4, priest: 2, paladin: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Freedom and excitement", 
        points: { 
          rogue: 4, warlock: 2, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  },
  {
    id: 8,
    question: "What role do you want to play in your team?",
    options: [
      { 
        text: "Main tank, protecting everyone", 
        points: { 
          warrior: 4, paladin: 4, druid: 1, 
          mage: 0, warlock: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "Main DPS, quickly eliminating enemies", 
        points: { 
          mage: 4, warlock: 3, rogue: 3, warrior: 2, druid: 1, 
          paladin: 0, priest: 0 
        } 
      },
      { 
        text: "Healer, ensuring team survival", 
        points: { 
          priest: 4, druid: 3, paladin: 2, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Support control, weakening enemies", 
        points: { 
          mage: 3, warlock: 3, druid: 2, priest: 1, 
          warrior: 0, paladin: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 9,
    question: "What's your attitude toward magic and supernatural forces?",
    options: [
      { 
        text: "Magic is dangerous, I trust my weapon", 
        points: { 
          warrior: 4, rogue: 2, paladin: 1, 
          mage: 0, warlock: 0, priest: 0, druid: 0 
        } 
      },
      { 
        text: "Magic is a tool that needs deep study", 
        points: { 
          mage: 4, warlock: 3, druid: 1, 
          warrior: 0, paladin: 0, priest: 0, rogue: 0 
        } 
      },
      { 
        text: "Only holy power is the true path", 
        points: { 
          priest: 4, paladin: 4, druid: 1, 
          warrior: 0, mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "For power, I'll use any means necessary", 
        points: { 
          warlock: 4, rogue: 2, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      },
      { 
        text: "Nature's power is the strongest magic", 
        points: { 
          druid: 4, priest: 1, mage: 1, 
          warrior: 0, warlock: 0, paladin: 0, rogue: 0 
        } 
      }
    ]
  },
  {
    id: 10,
    question: "If you must choose between morality and victory, you would?",
    options: [
      { 
        text: "Hold moral ground, even if defeated", 
        points: { 
          paladin: 4, priest: 3, druid: 2, warrior: 1, 
          mage: 0, warlock: 0, rogue: 0 
        } 
      },
      { 
        text: "Depends on the situation, seek balance", 
        points: { 
          warrior: 3, mage: 3, druid: 3, priest: 1, paladin: 1, warlock: 1, rogue: 1 
        } 
      },
      { 
        text: "Victory first, means don't matter", 
        points: { 
          warlock: 4, rogue: 4, warrior: 1, 
          mage: 0, priest: 0, paladin: 0, druid: 0 
        } 
      }
    ]
  }
];