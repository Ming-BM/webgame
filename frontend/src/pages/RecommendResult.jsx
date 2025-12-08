import { useLocation, useNavigate } from 'react-router-dom';
import { classDescriptions } from '../data/classes';
import './RecommendResult.css';

function RecommendResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recommendedClass, scores } = location.state || {};

  // 如果没有数据，返回首页
  if (!recommendedClass) {
    navigate('/');
    return null;
  }

  const classInfo = classDescriptions[recommendedClass];

  // 获取前三名职业
  const sortedScores = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="result-container">
      <div className="result-content">
        {/* 标题 */}
        <div className="result-header">
          <h1 className="result-title">🎉 Quiz Complete!</h1>
          <p className="result-subtitle">Based on your choices, we recommend:</p>
        </div>

        {/* 推荐职业卡片 */}
        <div className="class-card recommended" style={{ borderColor: classInfo.color }}>
          {/* 职业图片 */}
          {classInfo.image && (
            <div className="class-image-container">
              <img src={classInfo.image} alt={classInfo.name} className="class-image" />
            </div>
          )}

          <div className="class-icon" style={{ color: classInfo.color }}>
            {classInfo.icon}
          </div>
          <h2 className="class-name" style={{ color: classInfo.color }}>
            {classInfo.name}
          </h2>
          <p className="class-name-en">{classInfo.nameEn}</p>
          <p className="class-description">{classInfo.description}</p>

          <div className="class-details">
            <div className="detail-item">
              <span className="detail-label">Recommended Attributes:</span>
              <span className="detail-value">{classInfo.recommendedAttributes}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Playstyle:</span>
              <span className="detail-value">{classInfo.playstyle}</span>
            </div>
          </div>

          <div className="strengths-weaknesses">
            <div className="strengths">
              <h4>✅ Strengths</h4>
              <ul>
                {classInfo.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            <div className="weaknesses">
              <h4>⚠️ Weaknesses</h4>
              <ul>
                {classInfo.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* pts数排名 */}
        <div className="scores-section">
          <h3 className="scores-title">📊 Class Match Rating</h3>
          <div className="scores-list">
            {sortedScores.map(([cls, score], index) => (
              <div key={cls} className="score-item">
                <div className="score-rank">#{index + 1}</div>
                <div className="score-info">
                  <span className="score-class">
                    {classDescriptions[cls].icon} {classDescriptions[cls].name}
                  </span>
                  <div className="score-bar">
                    <div
                      className="score-fill"
                      style={{
                        width: `${(score / sortedScores[0][1]) * 100}%`,
                        backgroundColor: classDescriptions[cls].color
                      }}
                    ></div>
                  </div>
                </div>
                <div className="score-value">{score} pts</div>
              </div>
            ))}
          </div>
        </div>

        {/* 按钮 */}
        <div className="result-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/attributes', {
              state: {
                selectedClass: recommendedClass,
                isRecommended: true
              }
            })}
          >
            ✅ Use Recommended Class
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => navigate('/select-class', { state: { scores } })}
          >
            🔄 Choose Manually
          </button>

          <button
            className="btn btn-tertiary"
            onClick={() => navigate('/quiz')}
          >
            🔁 Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendResult;
