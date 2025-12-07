import { useNavigate } from 'react-router-dom';
import { classDescriptions } from '../data/classes';
import './ClassSelection.css';

function ClassSelection() {
  const navigate = useNavigate();

  // 所有职业（固定顺序）
  const allClasses = ['warrior', 'mage', 'warlock', 'priest', 'druid', 'paladin', 'rogue'];

  // 选择职业
  const handleSelectClass = (classKey) => {
    navigate('/attributes', {
      state: {
        selectedClass: classKey,
        isRecommended: false
      }
    });
  };

  return (
    <div className="selection-container">
      <div className="selection-content">
        <div className="selection-header">
          <h1 className="selection-title">选择你的职业</h1>
          <p className="selection-subtitle">
            选择一个职业开始你的冒险之旅
          </p>
        </div>

        <div className="classes-grid">
          {allClasses.map((classKey) => {
            const classInfo = classDescriptions[classKey];

            return (
              <div
                key={classKey}
                className="class-selection-card"
                style={{ borderColor: classInfo.color }}
                onClick={() => handleSelectClass(classKey)}
              >
                {/* 职业图片 */}
                <div className="class-card-image-wrapper">
                  <img
                    src={classInfo.image}
                    alt={classInfo.name}
                    className="class-card-image"
                  />
                  <div className="class-card-overlay">
                    <span className="select-text">点击选择</span>
                  </div>
                </div>

                {/* 职业信息 */}
                <div className="class-card-info">
                  <div className="class-card-icon" style={{ color: classInfo.color }}>
                    {classInfo.icon}
                  </div>
                  <h3 className="class-card-name" style={{ color: classInfo.color }}>
                    {classInfo.name}
                  </h3>
                  <p className="class-card-name-en">{classInfo.nameEn}</p>
                  <p className="class-card-description">{classInfo.description}</p>

                  <div className="class-card-details">
                    <div className="detail-row">
                      <span className="detail-icon">🎯</span>
                      <span className="detail-text">{classInfo.playstyle}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-icon">📊</span>
                      <span className="detail-text">{classInfo.recommendedAttributes}</span>
                    </div>
                  </div>

                  <button
                    className="select-button"
                    style={{ backgroundColor: classInfo.color }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectClass(classKey);
                    }}
                  >
                    选择 {classInfo.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 返回按钮 */}
        <div className="selection-footer">
          <button className="btn-back-selection" onClick={() => navigate(-1)}>
            ← 返回
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassSelection;