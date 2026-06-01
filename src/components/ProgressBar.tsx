interface ProgressBarProps {
  currentStep: number;   // 0-indexed
  totalSteps: number;
}

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-bar-text">
        步骤 {currentStep + 1}/{totalSteps} &middot; {percentage}%
      </span>
    </div>
  );
}

export default ProgressBar;
