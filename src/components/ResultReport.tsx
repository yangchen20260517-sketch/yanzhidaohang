import type { JobResult } from '../data/types';

interface ResultReportProps {
  results: JobResult[];
  onRestart: () => void;
}

const MEDAL_EMOJI = ['🥇', '🥈', '🥉'];

function ResultReport({ results, onRestart }: ResultReportProps) {
  // 取前 5 个推荐
  const topResults = results.slice(0, 5);

  return (
    <div className="result-report">
      <h1 className="report-title">🎯 你的职位推荐报告</h1>
      <p className="report-subtitle">
        基于你的职业兴趣、工作价值观和专业背景，以下职位与你最匹配
      </p>

      <div className="report-jobs">
        {topResults.map((result, index) => (
          <div className="job-card" key={result.job.id}>
            <div className="job-card-header">
              <span className="job-rank">
                {MEDAL_EMOJI[index] ?? `#${index + 1}`}
              </span>
              <div className="job-title-area">
                <h2 className="job-name">{result.job.name}</h2>
                <div className="job-match">
                  <span className="match-score">
                    匹配度: {result.matchPercentage}%
                  </span>
                  <div className="match-bar">
                    <div
                      className="match-bar-fill"
                      style={{ width: `${result.matchPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="job-description">{result.job.description}</p>

            <div className="job-skills">
              <div className="skills-section">
                <h4>✅ 核心技能</h4>
                <div className="skill-tags">
                  {result.job.requiredSkills.map((skill) => (
                    <span key={skill} className="skill-tag skill-required">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {result.matchedSkills.length > 0 && (
                <div className="skills-section">
                  <h4>💪 你已具备</h4>
                  <div className="skill-tags">
                    {result.matchedSkills.map((skill) => (
                      <span key={skill} className="skill-tag skill-matched">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {result.missingSkills.length > 0 && (
                <div className="skills-section">
                  <h4>📚 建议提升</h4>
                  <div className="skill-tags">
                    {result.missingSkills.map((skill) => (
                      <span key={skill} className="skill-tag skill-missing">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="job-career-path">
              <h4>🚀 发展路径</h4>
              <div className="career-steps">
                {result.job.careerPath.map((step, i) => (
                  <span key={step} className="career-step">
                    {step}
                    {i < result.job.careerPath.length - 1 && (
                      <span className="career-arrow"> → </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="report-actions">
        <button className="btn btn-primary" onClick={onRestart}>
          🔄 重新评估
        </button>
      </div>
    </div>
  );
}

export default ResultReport;
