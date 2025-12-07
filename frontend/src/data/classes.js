import warriorImg from '../assets/warrior.png';
import mageImg from '../assets/mage.png';
import warlockImg from '../assets/warlock.png';
import priestImg from '../assets/priest.png';
import druidImg from '../assets/druid.png';
import paladinImg from '../assets/paladin.png';
import rogueImg from '../assets/assassin.png';

export const classDescriptions = {
  warrior: {
    name: "战士",
    nameEn: "Warrior",
    icon: "⚔️",
    image: warriorImg,
    description: "强壮的近战战士，用力量和勇气保护队友，冲锋在最前线",
    recommendedAttributes: "力量、精力",
    playstyle: "前排坦克/物理输出",
    strengths: ["高生命值", "强大护甲", "近战伤害"],
    weaknesses: ["机动性低", "缺乏远程能力"],
    color: "#c41e3a"
  },
  mage: {
    name: "法师",
    nameEn: "Mage",
    icon: "🔮",
    image: mageImg,
    description: "精通奥术的魔法大师，用智慧和法术控制战局，操控元素之力",
    recommendedAttributes: "智力、精力",
    playstyle: "远程法术输出/控场",
    strengths: ["强大法术伤害", "群体控制", "远程打击"],
    weaknesses: ["生命值低", "护甲薄弱"],
    color: "#3fc7eb"
  },
  warlock: {
    name: "术士",
    nameEn: "Warlock",
    icon: "💀",
    image: warlockImg,
    description: "与黑暗力量签订契约的施法者，不择手段追求力量，召唤恶魔仆从",
    recommendedAttributes: "智力、精力",
    playstyle: "远程法术输出/持续伤害",
    strengths: ["持续伤害", "恶魔仆从", "生命汲取"],
    weaknesses: ["施法时间长", "依赖仆从"],
    color: "#8788ee"
  },
  priest: {
    name: "牧师",
    nameEn: "Priest",
    icon: "✨",
    image: priestImg,
    description: "虔诚的治疗者，用神圣之力守护生命，是团队的精神支柱",
    recommendedAttributes: "智力、信仰、精力",
    playstyle: "治疗/辅助支援",
    strengths: ["强大治疗", "群体增益", "复活能力"],
    weaknesses: ["攻击力低", "容易成为目标"],
    color: "#f0ebe0"
  },
  druid: {
    name: "德鲁伊",
    nameEn: "Druid",
    icon: "🌿",
    image: druidImg,
    description: "自然的守护者，能在多种形态间切换，平衡且多才多艺",
    recommendedAttributes: "智力、敏捷、信仰",
    playstyle: "多功能（坦克/治疗/输出）",
    strengths: ["形态切换", "多重角色", "自然魔法"],
    weaknesses: ["样样通但不精", "能量管理复杂"],
    color: "#ff7c0a"
  },
  paladin: {
    name: "圣骑士",
    nameEn: "Paladin",
    icon: "🛡️",
    image: paladinImg,
    description: "集战士之勇与牧师之仁于一身的圣战士，正义与荣耀的化身",
    recommendedAttributes: "力量、信仰、精力",
    playstyle: "前排坦克/治疗/辅助",
    strengths: ["神圣之力", "保护能力", "辅助治疗"],
    weaknesses: ["机动性低", "魔法值有限"],
    color: "#f48cba"
  },
  rogue: {
    name: "刺客",
    nameEn: "Rogue",
    icon: "🗡️",
    image: rogueImg,
    description: "潜行于暗影中的致命杀手，一击毙命，快速且致命",
    recommendedAttributes: "敏捷、力量",
    playstyle: "近战爆发输出/控制",
    strengths: ["爆发伤害", "潜行能力", "控制技能"],
    weaknesses: ["生命值低", "护甲薄弱"],
    color: "#fff468"
  }
};