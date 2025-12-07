import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import RecommendResult from './pages/RecommendResult';
import ClassSelection from './pages/ClassSelection';
import AttributeAllocation from './pages/AttributeAllocation'; 
import CharacterList from './pages/CharacterList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recommend-result" element={<RecommendResult />} />
        <Route path="/select-class" element={<ClassSelection />} /> 
        <Route path="/attributes" element={<AttributeAllocation />} />
        <Route path="/characters" element={<CharacterList />} />
      </Routes> 
    </Router>
  );
}

export default App;