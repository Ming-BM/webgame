import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import './Quiz.css';

function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);  // 当前Question索引
  const [answers, setAnswers] = useState([]);                 // 用户的答案
  const [selectedOption, setSelectedOption] = useState(null); // 当前选择的选项

  // 处理选择选项
  const handleSelectOption = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  // Next
  const handleNext = () => {
    if (selectedOption === null) {
      alert('Please select an option!');
      return;
    }

    // 保存答案
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    // 如果是最后一题，计算推荐职业
    if (currentQuestion === questions.length - 1) {
      calculateRecommendation(newAnswers);
    } else {
      // Next
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  // Previous
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
      // 移除最后一个答案
      setAnswers(answers.slice(0, -1));
    }
  };

  // 计算推荐职业
  const calculateRecommendation = (finalAnswers) => {
    const scores = {
      warrior: 0,
      mage: 0,
      warlock: 0,
      priest: 0,
      druid: 0,
      paladin: 0,
      rogue: 0
    };

    // 累加分数
    finalAnswers.forEach((answerIndex, questionIndex) => {
      const selectedOption = questions[questionIndex].options[answerIndex];
      Object.keys(selectedOption.points).forEach(cls => {
        scores[cls] += selectedOption.points[cls];
      });
    });

    // 找出最高分
    const maxScore = Math.max(...Object.values(scores));
    const topClasses = Object.keys(scores).filter(cls => scores[cls] === maxScore);
    const recommendedClass = topClasses[Math.floor(Math.random() * topClasses.length)];

    // 跳转到推荐结果页面
    navigate('/recommend-result', {
      state: {
        recommendedClass,
        scores,
        answers: finalAnswers
      }
    });
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        {/* 进度条 */}
        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        {/* Question */}
        <div className="question-section">
          <h2 className="question-text">{question.question}</h2>
        </div>

        {/* 选项 */}
        <div className="options-section">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleSelectOption(index)}
            >
              <span className="option-number">{index + 1}</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>

        {/* 按钮 */}
        <div className="button-section">
          <button 
            className="nav-button prev-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Previous
          </button>

          <button 
            className="nav-button next-button"
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1 ? 'View Recommendation ✨' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;