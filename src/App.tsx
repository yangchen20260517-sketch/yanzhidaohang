import { useState } from 'react';
import HomePage from './components/HomePage';
import Wizard from './components/Wizard';
import ResultReport from './components/ResultReport';
import { calculateResults } from './engine/scorer';
import type { Answer, JobResult } from './data/types';
import './styles/app.css';

type Step = 'home' | 'wizard' | 'result';

function App() {
  const [step, setStep] = useState<Step>('home');
  const [results, setResults] = useState<JobResult[]>([]);

  const handleStart = () => setStep('wizard');

  const handleComplete = (answers: Answer[]) => {
    const jobResults = calculateResults(answers);
    setResults(jobResults);
    setStep('result');
  };

  const handleRestart = () => {
    setResults([]);
    setStep('home');
  };

  const renderStep = () => {
    switch (step) {
      case 'home':
        return <HomePage onStart={handleStart} />;
      case 'wizard':
        return <Wizard onComplete={handleComplete} />;
      case 'result':
        return <ResultReport results={results} onRestart={handleRestart} />;
    }
  };

  return <div className="app">{renderStep()}</div>;
}

export default App;
