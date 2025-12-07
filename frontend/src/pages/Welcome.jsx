import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import welcomeImage from '../assets/welcome.png'

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      {/* 左侧：内容 */}
      <div className="welcome-left">
        <div className="welcome-content">
          <h1 className="title">⚔️ 冒险世界 ⚔️</h1>
          <p className="subtitle">欢迎来到这个充满魔法与危险的世界</p>
          
          <div className="welcome-description">
            <p>在这里，你将成为一名勇敢的冒险者</p>
            <p>选择你的职业，分配你的属性</p>
            <p>开启你的传奇之旅！</p>
          </div>

          <div className="button-group">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/quiz')}
            >
              🎮 开始冒险
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/characters')}
            >
              📜 我的角色
            </button>
          </div>
        </div>
      </div>

      <div className="welcome-right" style={{ backgroundImage: `url(${welcomeImage})` }}>
        {/* <div className="image-overlay"></div> */}
      </div>
    </div>

    
  );
}

export default Welcome;