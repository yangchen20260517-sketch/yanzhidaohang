import type { Question, Answer } from '../data/types';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedLabel: string | null;
  onSelect: (answer: Answer) => void;
}

function QuestionCard({ question, index, selectedLabel, onSelect }: QuestionCardProps) {
  return (
    <div className="question-card">
      <p className="question-number">第 {index + 1} 题</p>
      <p className="question-text">{question.text}</p>
      <div className="question-options">
        {question.options.map((option) => {
          const isSelected = selectedLabel === option.label;
          return (
            <label
              key={option.label}
              className={`option-item ${isSelected ? 'option-selected' : ''}`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.label}
                checked={isSelected}
                onChange={() =>
                  onSelect({
                    questionId: question.id,
                    selectedLabel: option.label,
                  })
                }
              />
              <span className="option-label">{option.label}</span>
              <span className="option-text">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
