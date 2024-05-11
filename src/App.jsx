import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Choice from './components/choice/Choice';
import MuscleComponents from './components/muscleComponents/MuscleComponents';
import Exercise from './components/exercise/Exercise';
import Signing from './components/signin/Signing';
import Countdown from './components/countdown/Countdown';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/choice' element = {<Choice />} />
          <Route path='/muscleComponent' element = {<MuscleComponents />} />
          <Route path='/exercise' element = {<Exercise />} />
          <Route path='/signin' element = {<Signing />} />
          <Route path='/timer' element = {<Countdown />} />
        </Routes>
      </Router>
  );
}

export default App;
