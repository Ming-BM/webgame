import { useNavigate } from 'react-router-dom';
import { classDescriptions } from '../data/classes';
import './ClassSelection.css';

function ClassSelection() {
  const navigate = useNavigate();

  // All classes (fixed order)
  const allClasses = ['warrior', 'mage', 'warlock', 'priest', 'druid', 'paladin', 'rogue'];

  // Select class
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
          <h1 className="selection-title">Choose Your Class</h1>
          <p className="selection-subtitle">
            Select a class to begin your adventure
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
                {/* Class image */}
                <div className="class-card-image-wrapper">
                  <img
                    src={classInfo.image}
                    alt={classInfo.name}
                    className="class-card-image"
                  />
                  <div className="class-card-overlay">
                    <span className="select-text">Click to Select</span>
                  </div>
                </div>

                {/* Class info */}
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
                    Select {classInfo.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back button */}
        <div className="selection-footer">
          <button className="btn-back-selection" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassSelection;