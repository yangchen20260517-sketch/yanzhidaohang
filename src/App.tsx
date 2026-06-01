import { useState } from 'react';
import Wizard from './components/Wizard';
import ResultReport from './components/ResultReport';
import { calculateResults } from './engine/scorer';
import type { Answer, JobResult } from './data/types';
import './styles/app.css';

type Step = 'wizard' | 'result';

function App() {
  const [step, setStep] = useState<Step>('wizard');
  const [results, setResults] = useState<JobResult[]>([]);

  const handleComplete = (answers: Answer[]) => {
    const jobResults = calculateResults(answers);
    setResults(jobResults);
    setStep('result');
  };

  const handleRestart = () => {
    setResults([]);
    setStep('wizard');
  };

  return (
    <div className="app">
      {step === 'wizard' ? (
        <Wizard onComplete={handleComplete} />
      ) : (
        <ResultReport results={results} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
