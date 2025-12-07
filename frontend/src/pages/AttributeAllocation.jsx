import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { classDescriptions } from '../data/classes';
import './AttributeAllocation.css';

function AttributeAllocation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedClass, isRecommended } = location.state || {};

  // 如果没有选择职业，返回首页
  if (!selectedClass) {
    navigate('/');
    return null;
  }

  const classInfo = classDescriptions[selectedClass];

  // 状态管理
  const [characterName, setCharacterName] = useState('');
  const [attributes, setAttributes] = useState({
    strength: 5,      // 力量
    agility: 5,       // 敏捷
    stamina: 5,       // 精力
    intelligence: 5,  // 智力
    faith: 5          // 信仰
  });

  const TOTAL_POINTS = 30;
  const MIN_ATTRIBUTE = 0;
  const MAX_ATTRIBUTE = 20;

  // 计算已使用的点数
  const usedPoints = Object.values(attributes).reduce((sum, val) => sum + val, 0);
  const remainingPoints = TOTAL_POINTS - usedPoints;

  // 增加属性点
  const increaseAttribute = (attr) => {
    if (remainingPoints > 0 && attributes[attr] < MAX_ATTRIBUTE) {
      setAttributes({
        ...attributes,
        [attr]: attributes[attr] + 1
      });
    }
  };

  // 减少属性点
  const decreaseAttribute = (attr) => {
    if (attributes[attr] > MIN_ATTRIBUTE) {
      setAttributes({
        ...attributes,
        [attr]: attributes[attr] - 1
      });
    }
  };

  // 重置属性
  const resetAttributes = () => {
    setAttributes({
      strength: 5,
      agility: 5,
      stamina: 5,
      intelligence: 5,
      faith: 5
    });
  };

  // 创建角色
  const handleCreateCharacter = async () => {
  // 验证
  if (!characterName.trim()) {
    alert('请输入角色名字！');
    return;
  }

  if (remainingPoints !== 0) {
    alert(`请分配完所有点数！还剩 ${remainingPoints} 点未分配。`);
    return;
  }

  // 准备角色数据
  const characterData = {
    name: characterName,
    class: selectedClass,
    isRecommended: isRecommended || false,
    attributes: {
      strength: attributes.strength,
      agility: attributes.agility,
      stamina: attributes.stamina,
      intelligence: attributes.intelligence,
      faith: attributes.faith
    }
  };

  try {
    // 发送到后端保存
    const response = await fetch('http://localhost:3000/api/characters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(characterData)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '创建失败');
    }

    const savedCharacter = await response.json();
    console.log('✅ 角色创建成功：', savedCharacter);
    
    alert('角色创建成功！');
    navigate('/characters');
  } catch (error) {
    console.error('❌ 创建角色失败：', error);
    alert(`创建角色失败：${error.message}`);
  }
};

  // 属性名称映射
  const attributeNames = {
    strength: { name: '力量', icon: '⚔️', description: '提高物理攻击力和近战伤害' },
    agility: { name: '敏捷', icon: '🏃', description: '提高闪避、暴击和攻击速度' },
    stamina: { name: '精力', icon: '💪', description: '提高生命值和防御力' },
    intelligence: { name: '智力', icon: '📚', description: '提高法术强度和魔法值' },
    faith: { name: '信仰', icon: '✨', description: '提高治疗效果和神圣伤害' }
  };

  return (
    <div className="allocation-container">
      <div className="allocation-content">
        {/* 左侧：职业信息 + 图片 */}
        <div className="allocation-left">
          <div className="class-info-card" style={{ borderColor: classInfo.color }}>
            <div className="class-image-wrapper">
              <img 
                src={classInfo.image} 
                alt={classInfo.name}
                className="class-image-large"
              />
            </div>
            <div className="class-info-text">
              <div className="class-icon-large" style={{ color: classInfo.color }}>
                {classInfo.icon}
              </div>
              <h2 className="class-name-large" style={{ color: classInfo.color }}>
                {classInfo.name}
              </h2>
              <p className="class-name-en-small">{classInfo.nameEn}</p>
              <p className="class-desc-small">{classInfo.description}</p>
              <div className="recommended-attrs">
                <strong>推荐属性：</strong>
                <span>{classInfo.recommendedAttributes}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：属性分配 */}
        <div className="allocation-right">
          <div className="allocation-header">
            <h1 className="allocation-title">创建角色</h1>
            <p className="allocation-subtitle">
              {isRecommended ? '✨ 使用推荐职业' : '自选职业'}
            </p>
          </div>

          {/* 角色名字 */}
          <div className="name-section">
            <label htmlFor="characterName" className="input-label">
              角色名字
            </label>
            <input
              id="characterName"
              type="text"
              className="name-input"
              placeholder="请输入角色名字..."
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              maxLength={20}
            />
          </div>

          {/* 点数统计 */}
          <div className="points-section">
            <div className="points-display">
              <span className="points-label">剩余点数：</span>
              <span className={`points-value ${remainingPoints === 0 ? 'complete' : ''}`}>
                {remainingPoints} / {TOTAL_POINTS}
              </span>
            </div>
            {remainingPoints !== 0 && (
              <p className="points-hint">
                {remainingPoints > 0 ? '⚠️ 还有点数未分配' : '❌ 点数超出限制'}
              </p>
            )}
          </div>

          {/* 属性分配 */}
          <div className="attributes-section">
            {Object.entries(attributes).map(([attr, value]) => (
              <div key={attr} className="attribute-row">
                <div className="attribute-info">
                  <span className="attribute-icon">{attributeNames[attr].icon}</span>
                  <div className="attribute-details">
                    <span className="attribute-name">{attributeNames[attr].name}</span>
                    <span className="attribute-desc">{attributeNames[attr].description}</span>
                  </div>
                </div>
                <div className="attribute-controls">
                  <button
                    className="control-btn decrease"
                    onClick={() => decreaseAttribute(attr)}
                    disabled={value <= MIN_ATTRIBUTE}
                  >
                    −
                  </button>
                  <span className="attribute-value">{value}</span>
                  <button
                    className="control-btn increase"
                    onClick={() => increaseAttribute(attr)}
                    disabled={remainingPoints <= 0 || value >= MAX_ATTRIBUTE}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 按钮 */}
          <div className="allocation-buttons">
            <button className="btn btn-reset" onClick={resetAttributes}>
              🔄 重置属性
            </button>
            <button 
              className="btn btn-create" 
              onClick={handleCreateCharacter}
              disabled={remainingPoints !== 0 || !characterName.trim()}
            >
              ✅ 创建角色
            </button>
          </div>

          <button 
            className="btn btn-back" 
            onClick={() => navigate(-1)}
          >
            ← 返回
          </button>
        </div>
      </div>
    </div>
  );

  
}

export default AttributeAllocation;