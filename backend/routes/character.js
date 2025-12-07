const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

// 获取所有角色
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find().sort({ createdAt: -1 });
    res.json(characters);
  } catch (error) {
    console.error('获取角色列表失败：', error);
    res.status(500).json({ error: '获取角色列表失败' });
  }
});

// 获取单个角色
router.get('/:id', async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ error: '角色不存在' });
    }
    res.json(character);
  } catch (error) {
    console.error('获取角色失败：', error);
    res.status(500).json({ error: '获取角色失败' });
  }
});

// 创建角色
router.post('/', async (req, res) => {
  try {
    const { name, class: className, isRecommended, attributes, quizAnswers } = req.body;

    // 验证必填字段
    if (!name || !className || !attributes) {
      return res.status(400).json({ error: '缺少必填字段' });
    }

    // 验证属性总和
    const total = attributes.strength + 
                  attributes.agility + 
                  attributes.stamina + 
                  attributes.intelligence + 
                  attributes.faith;
    
    if (total !== 30) {
      return res.status(400).json({ error: `属性总和必须为30点，当前为${total}点` });
    }

    // 创建角色
    const character = new Character({
      name,
      class: className,
      isRecommended: isRecommended || false,
      attributes,
      quizAnswers: quizAnswers || []
    });

    await character.save();
    
    console.log('✅ 角色创建成功：', character.name);
    res.status(201).json(character);
  } catch (error) {
    console.error('创建角色失败：', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: '创建角色失败' });
  }
});

// 删除角色
router.delete('/:id', async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    if (!character) {
      return res.status(404).json({ error: '角色不存在' });
    }
    console.log('✅ 角色删除成功：', character.name);
    res.json({ message: '角色已删除', character });
  } catch (error) {
    console.error('删除角色失败：', error);
    res.status(500).json({ error: '删除角色失败' });
  }
});

module.exports = router;