import warriorImg from '../assets/warrior.png';
import mageImg from '../assets/mage.png';
import warlockImg from '../assets/warlock.png';
import priestImg from '../assets/priest.png';
import druidImg from '../assets/druid.png';
import paladinImg from '../assets/paladin.png';
import rogueImg from '../assets/assassin.png';

export const classDescriptions = {
  warrior: {
    name: "Warrior",
    nameEn: "Warrior",
    icon: "⚔️",
    image: warriorImg,
    description: "A mighty melee warrior who protects allies with strength and courage, charging to the frontline",
    recommendedAttributes: "Strength, Stamina",
    playstyle: "Frontline Tank/Physical DPS",
    strengths: ["High HP", "Heavy Armor", "Melee Damage"],
    weaknesses: ["Low Mobility", "Lacks Range"],
    color: "#c41e3a"
  },
  mage: {
    name: "Mage",
    nameEn: "Mage",
    icon: "🔮",
    image: mageImg,
    description: "An arcane master who controls the battlefield with wisdom and spells, wielding elemental forces",
    recommendedAttributes: "Intelligence, Stamina",
    playstyle: "Ranged Magic DPS/Crowd Control",
    strengths: ["High Spell Damage", "Crowd Control", "Ranged Attacks"],
    weaknesses: ["Low HP", "Weak Armor"],
    color: "#3fc7eb"
  },
  warlock: {
    name: "Warlock",
    nameEn: "Warlock",
    icon: "💀",
    image: warlockImg,
    description: "A caster who made pacts with dark forces, seeking power at any cost, summoning demonic minions",
    recommendedAttributes: "Intelligence, Stamina",
    playstyle: "Ranged Magic DPS/Damage Over Time",
    strengths: ["DoT Damage", "Demon Pets", "Life Drain"],
    weaknesses: ["Long Cast Times", "Pet Dependent"],
    color: "#8788ee"
  },
  priest: {
    name: "Priest",
    nameEn: "Priest",
    icon: "✨",
    image: priestImg,
    description: "A devout healer who protects life with holy power, serving as the team's spiritual pillar",
    recommendedAttributes: "Intelligence, Faith, Stamina",
    playstyle: "Healing/Support",
    strengths: ["Powerful Healing", "Group Buffs", "Resurrection"],
    weaknesses: ["Low Damage", "Easy Target"],
    color: "#f0ebe0"
  },
  druid: {
    name: "Druid",
    nameEn: "Druid",
    icon: "🌿",
    image: druidImg,
    description: "Guardian of nature who can shapeshift between forms, balanced and versatile",
    recommendedAttributes: "Intelligence, Agility, Faith",
    playstyle: "Hybrid (Tank/Heal/DPS)",
    strengths: ["Form Shifting", "Multi-Role", "Nature Magic"],
    weaknesses: ["Jack of All Trades", "Complex Resource Management"],
    color: "#ff7c0a"
  },
  paladin: {
    name: "Paladin",
    nameEn: "Paladin",
    icon: "🛡️",
    image: paladinImg,
    description: "A holy warrior combining warrior's courage with priest's compassion, embodiment of justice and honor",
    recommendedAttributes: "Strength, Faith, Stamina",
    playstyle: "Frontline Tank/Heal/Support",
    strengths: ["Holy Power", "Protection", "Off-Healing"],
    weaknesses: ["Low Mobility", "Limited Mana"],
    color: "#f48cba"
  },
  rogue: {
    name: "Rogue",
    nameEn: "Rogue",
    icon: "🗡️",
    image: rogueImg,
    description: "A deadly assassin lurking in shadows, striking with lethal precision, swift and deadly",
    recommendedAttributes: "Agility, Strength",
    playstyle: "Melee Burst DPS/Control",
    strengths: ["Burst Damage", "Stealth", "CC Abilities"],
    weaknesses: ["Low HP", "Weak Armor"],
    color: "#fff468"
  }
};
