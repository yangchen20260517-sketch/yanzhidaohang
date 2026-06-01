import type { Answer, JobResult, ScoringRule, Job } from '../data/types';
import { scoringRules } from '../data/scoring';
import { jobs } from '../data/jobs';
import { questions } from '../data/questions';

/**
 * 判断用户是否"具备"某项技能
 * 从专业背景题中提取用户熟悉的技能关键词
 */
function extractUserSkills(answers: Answer[]): string[] {
  const skills: Set<string> = new Set();

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question || question.dimension !== 'background') continue;

    const option = question.options.find((o) => o.label === answer.selectedLabel);
    if (!option) continue;

    // 从选项中提取技能关键词
    if (option.text.includes('SolidWorks')) skills.add('SolidWorks');
    if (option.text.includes('CATIA')) skills.add('CATIA');
    if (option.text.includes('AutoCAD')) skills.add('AutoCAD');
    if (option.text.includes('ANSYS')) skills.add('ANSYS');
    if (option.text.includes('MATLAB')) skills.add('MATLAB');
    if (option.text.includes('Python')) skills.add('Python');
    if (option.text.includes('C++')) skills.add('C++');
    if (option.text.includes('ROS')) skills.add('ROS');
    if (option.text.includes('PLC')) skills.add('PLC');
    if (option.text.includes('嵌入式')) skills.add('嵌入式开发');
    if (option.text.includes('电路设计')) skills.add('电路设计');
    if (option.text.includes('有限元')) skills.add('有限元分析');
  }

  return Array.from(skills);
}

/**
 * 计算职位推荐结果
 */
export function calculateResults(answers: Answer[]): JobResult[] {
  // 1. 初始化所有职位分数为 0
  const scoreMap: Record<string, number> = {};
  for (const job of jobs) {
    scoreMap[job.id] = 0;
  }

  // 2. 累计分数
  for (const answer of answers) {
    const rule = scoringRules.find((r) => r.questionId === answer.questionId);
    if (!rule) continue;

    const optionRule = rule.options.find((o) => o.label === answer.selectedLabel);
    if (!optionRule) continue;

    for (const [jobId, score] of Object.entries(optionRule.scores)) {
      scoreMap[jobId] = (scoreMap[jobId] || 0) + score;
    }
  }

  // 3. 计算最大可能分数（用于百分比转换）
  const maxPossible = calculateMaxPossibleScore();

  // 4. 提取用户技能
  const userSkills = extractUserSkills(answers);

  // 5. 构建结果
  const results: JobResult[] = jobs.map((job) => {
    const rawScore = scoreMap[job.id] || 0;
    const matchPercentage = maxPossible > 0 ? Math.round((rawScore / maxPossible) * 100) : 0;

    // 技能匹配分析
    const matchedSkills = job.requiredSkills.filter((skill) =>
      userSkills.some((us) => skill.includes(us) || us.includes(skill))
    );
    const missingSkills = job.requiredSkills.filter(
      (skill) => !matchedSkills.includes(skill)
    );

    return {
      job,
      rawScore,
      matchPercentage,
      matchedSkills,
      missingSkills,
    };
  });

  // 6. 按分数降序排列
  results.sort((a, b) => b.rawScore - a.rawScore);

  return results;
}

/**
 * 计算理论最大可能分数
 * 遍历所有评分规则，对每个职位取每个题目中最高选项分并求和
 */
function calculateMaxPossibleScore(): number {
  const maxScores: Record<string, number> = {};

  for (const rule of scoringRules) {
    for (const option of rule.options) {
      for (const [jobId, score] of Object.entries(option.scores)) {
        if (score > (maxScores[jobId] || 0)) {
          maxScores[jobId] = score;
        }
      }
    }
  }

  const values = Object.values(maxScores);
  if (values.length === 0) return 0;
  return Math.max(...values);
}
