import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { classDescriptions } from '../data/classes';
import { API_BASE_URL } from '../config/api';
import './CharacterList.css';

function CharacterList() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // 加载Character List
  useEffect(() => {
    loadCharacters();
  }, []);

   const loadCharacters = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/characters`);
      
      if (!response.ok) {
        throw new Error('获取Character List失败');
      }

      const data = await response.json();
      console.log('✅ 加载Character List成功：', data);
      setCharacters(data);
      setLoading(false);
    } catch (error) {
      console.error('❌ 加载角色失败：', error);
      alert('加载Character List失败，请检查后端服务是否运行');
      setLoading(false);
    }
  };

  // Delete Character
  const handleDelete = async (characterId) => {
    if (!window.confirm('Are you sure you want to delete this character?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/characters/${characterId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('删除失败');
      }

      console.log('✅ 角色Deleted successfully');
      alert('角色已删除！');
      
      // 重新加载Character List
      loadCharacters();
    } catch (error) {
      console.error('❌ Delete Character失败：', error);
      alert('删除失败，请重试！');
    }
  };

  // 格式化日期
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Create New Character
  const handleCreateNew = () => {
    navigate('/select-class');
  };

  if (loading) {
    return (
      <div className="list-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="list-content">
        {/* 标题 */}
        <div className="list-header">
          <h1 className="list-title">我的角色</h1>
          <button className="btn-create-new" onClick={handleCreateNew}>
            ➕ Create New Character
          </button>
        </div>

        {/* Character List */}
        {characters.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎮</div>
            <h2 className="empty-title">还没有角色</h2>
            <p className="empty-text">创建你的第一个角色，开始冒险之旅！</p>
            <button className="btn-create-first" onClick={handleCreateNew}>
              🎨 创建角色
            </button>
          </div>
        ) : (
          <div className="characters-grid">
            {characters.map((character) => {
              const classInfo = classDescriptions[character.class];
              
              return (
                <div 
                  key={character._id} 
                  className="character-card"
                  style={{ borderColor: classInfo.color }}
                >
                  {/* 推荐标签 */}
                  {character.isRecommended && (
                    <div className="recommended-badge" style={{ backgroundColor: classInfo.color }}>
                      ✨ Recommended
                    </div>
                  )}

                  {/* 角色图片 */}
                  <div className="character-image-wrapper">
                    <img
                      src={classInfo.image}
                      alt={character.name}
                      className="character-image"
                    />
                    <div className="character-class-overlay" style={{ backgroundColor: classInfo.color }}>
                      <span className="class-icon-overlay">{classInfo.icon}</span>
                      <span className="class-name-overlay">{classInfo.name}</span>
                    </div>
                  </div>

                  {/* 角色信息 */}
                  <div className="character-info">
                    <h3 className="character-name">{character.name}</h3>
                    <p className="character-class" style={{ color: classInfo.color }}>
                      {classInfo.icon} {classInfo.name}
                    </p>

                    {/* 属性显示 */}
                    <div className="attributes-display">
                      <div className="attribute-item">
                        <span className="attr-icon">⚔️</span>
                        <span className="attr-label">STR</span>
                        <span className="attr-value">{character.attributes.strength}</span>
                      </div>
                      <div className="attribute-item">
                        <span className="attr-icon">🏃</span>
                        <span className="attr-label">AGI</span>
                        <span className="attr-value">{character.attributes.agility}</span>
                      </div>
                      <div className="attribute-item">
                        <span className="attr-icon">💪</span>
                        <span className="attr-label">STA</span>
                        <span className="attr-value">{character.attributes.stamina}</span>
                      </div>
                      <div className="attribute-item">
                        <span className="attr-icon">📚</span>
                        <span className="attr-label">INT</span>
                        <span className="attr-value">{character.attributes.intelligence}</span>
                      </div>
                      <div className="attribute-item">
                        <span className="attr-icon">✨</span>
                        <span className="attr-label">FAI</span>
                        <span className="attr-value">{character.attributes.faith}</span>
                      </div>
                    </div>

                    {/* Created */}
                    <div className="character-date">
                      🕒 {formatDate(character.createdAt)}
                    </div>

                    {/* 删除按钮 */}
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(character._id)}
                    >
                      🗑️ Delete Character
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 返回首页按钮 */}
        <div className="list-footer">
          <button className="btn-back-home" onClick={() => navigate('/')}>
            🏠 返回首页
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterList;