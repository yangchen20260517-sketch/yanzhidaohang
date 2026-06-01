import { useState, useMemo } from 'react';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import { questions } from '../data/questions';
import { DIMENSION_LABELS } from '../data/types';
import type { Answer, Dimension, WizardStep } from '../data/types';

interface WizardProps {
  onComplete: (answers: Answer[]) => void;
}

const STEP_ORDER: Dimension[] = ['interest', 'value', 'background'];

function Wizard({ onComplete }: WizardProps) {
  // 构建分步数据
  const steps: WizardStep[] = useMemo(() => {
    return STEP_ORDER.map((dim) => ({
      dimension: dim,
      label: DIMENSION_LABELS[dim],
      questions: questions.filter((q) => q.dimension === dim),
    }));
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  // 所有答案以 map 存储，方便快速查找
  const [answersMap, setAnswersMap] = useState<Record<string, string>>({});

  const currentQuestions = steps[currentStep]?.questions ?? [];
  const isLastStep = currentStep === steps.length - 1;

  // 当前步骤是否全部作答
  const currentStepComplete = currentQuestions.every(
    (q) => answersMap[q.id] !== undefined
  );

  const handleSelect = (answer: Answer) => {
    setAnswersMap((prev) => ({
      ...prev,
      [answer.questionId]: answer.selectedLabel,
    }));
  };

  const handleNext = () => {
    if (isLastStep) {
      // 构建 Answer 数组提交
      const allAnswers: Answer[] = Object.entries(answersMap).map(
        ([questionId, selectedLabel]) => ({ questionId, selectedLabel })
      );
      onComplete(allAnswers);
    } else {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wizard">
      <h1 className="wizard-title">职位评估</h1>
      <p className="wizard-subtitle">
        完成以下题目，帮助你发现最适合的理工科工作岗位
      </p>

      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

      <div className="wizard-step-header">
        <span className="step-badge">{steps[currentStep]?.label}</span>
        <span className="step-info">
          共 {currentQuestions.length} 题
        </span>
      </div>

      <div className="wizard-questions">
        {currentQuestions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i}
            selectedLabel={answersMap[q.id] ?? null}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <div className="wizard-navigation">
        {currentStep > 0 && (
          <button className="btn btn-secondary" onClick={handlePrev}>
            &larr; 上一步
          </button>
        )}
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!currentStepComplete}
        >
          {isLastStep ? '查看推荐结果 &rarr;' : '下一步 &rarr;'}
        </button>
      </div>
    </div>
  );
}

export default Wizard;
