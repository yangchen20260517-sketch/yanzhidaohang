// 题目维度
export type Dimension = 'interest' | 'value' | 'background';

// 维度中文名映射
export const DIMENSION_LABELS: Record<Dimension, string> = {
  interest: '职业兴趣',
  value: '工作价值观',
  background: '专业背景',
};

// 选项
export interface Option {
  label: string;   // "A"
  text: string;     // "动手操作"
}

// 题目
export interface Question {
  id: string;
  dimension: Dimension;
  text: string;
  options: Option[];
}

// 用户答案
export interface Answer {
  questionId: string;
  selectedLabel: string;
}

// 职位数据
export interface Job {
  id: string;
  name: string;
  description: string;
  requiredSkills: string[];
  careerPath: string[];
}

// 评分规则 - 每个选项对不同职位的加分
export type ScoreMap = Record<string, number>; // { "机械设计工程师": 5, "机器人工程师": 3 }

export interface ScoringRule {
  questionId: string;
  options: {
    label: string;
    scores: ScoreMap;
  }[];
}

// 评分结果
export interface JobResult {
  job: Job;
  rawScore: number;       // 原始分数
  matchPercentage: number; // 匹配度百分比
  matchedSkills: string[]; // 已具备技能（根据回答了"是/熟悉"的技能题判断）
  missingSkills: string[]; // 建议提升技能
}

// 向导步骤
export interface WizardStep {
  dimension: Dimension;
  label: string;
  questions: Question[];
}
