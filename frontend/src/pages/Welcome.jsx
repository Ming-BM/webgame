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
          <h1 className="title">⚔️ Adventure World ⚔️</h1>
          <p className="subtitle">Welcome to a world full of magic and danger</p>
          
          <div className="welcome-description">
            <p>Here, you will become a brave adventurer</p>
            <p>Choose your class, allocate your attributes</p>
            <p>Embark on your legendary journey!</p>
          </div>

          <div className="button-group">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/quiz')}
            >
              🎮 Start Adventure
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/characters')}
            >
              📜 My Characters
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