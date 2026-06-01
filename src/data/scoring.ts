import type { ScoringRule } from './types';

/**
 * 评分规则表
 * 每个题目 → 每个选项 → 不同职位的加分权重
 * 分数范围：0-10（0=无关，5=相关，10=高度匹配）
 */
export const scoringRules: ScoringRule[] = [
  // ===== 职业兴趣 (interest_01 ~ interest_15) =====
  {
    questionId: 'interest_01',
    options: [
      { label: 'A', scores: { mechanical_design: 5, embedded_engineer: 3, electronic_control: 3 } },
      { label: 'B', scores: { simulation_engineer: 7, rd_engineer: 6 } },
      { label: 'C', scores: { project_manager: 7, automation_engineer: 3 } },
      { label: 'D', scores: { rd_engineer: 5, robot_engineer: 6 } },
    ],
  },
  {
    questionId: 'interest_02',
    options: [
      { label: 'A', scores: { rd_engineer: 6, simulation_engineer: 4, robot_engineer: 4 } },
      { label: 'B', scores: { automation_engineer: 6, electronic_control: 5, mechanical_design: 3 } },
      { label: 'C', scores: { mechanical_design: 5, simulation_engineer: 5, project_manager: 3 } },
      { label: 'D', scores: { automation_engineer: 5, robot_engineer: 4, electronic_control: 3 } },
    ],
  },
  {
    questionId: 'interest_03',
    options: [
      { label: 'A', scores: { mechanical_design: 8, simulation_engineer: 5 } },
      { label: 'B', scores: { electronic_control: 7, embedded_engineer: 7 } },
      { label: 'C', scores: { robot_engineer: 6, embedded_engineer: 4, electronic_control: 4 } },
      { label: 'D', scores: { automation_engineer: 5, project_manager: 6 } },
    ],
  },
  {
    questionId: 'interest_04',
    options: [
      { label: 'A', scores: { rd_engineer: 5, simulation_engineer: 5, mechanical_design: 3 } },
      { label: 'B', scores: { project_manager: 5, automation_engineer: 4 } },
      { label: 'C', scores: { automation_engineer: 6, electronic_control: 3 } },
      { label: 'D', scores: { project_manager: 5, robot_engineer: 3 } },
    ],
  },
  {
    questionId: 'interest_05',
    options: [
      { label: 'A', scores: { robot_engineer: 8, embedded_engineer: 4, electronic_control: 3 } },
      { label: 'B', scores: { electronic_control: 7, embedded_engineer: 6, automation_engineer: 3 } },
      { label: 'C', scores: { automation_engineer: 7, robot_engineer: 4, embedded_engineer: 3 } },
      { label: 'D', scores: { mechanical_design: 5, simulation_engineer: 5, rd_engineer: 4 } },
    ],
  },
  {
    questionId: 'interest_06',
    options: [
      { label: 'A', scores: { mechanical_design: 7, simulation_engineer: 4 } },
      { label: 'B', scores: { electronic_control: 7, embedded_engineer: 5 } },
      { label: 'C', scores: { robot_engineer: 6, embedded_engineer: 5, simulation_engineer: 3 } },
      { label: 'D', scores: { project_manager: 4, rd_engineer: 4 } },
    ],
  },
  {
    questionId: 'interest_07',
    options: [
      { label: 'A', scores: { mechanical_design: 4, embedded_engineer: 4 } },
      { label: 'B', scores: { rd_engineer: 6, simulation_engineer: 5 } },
      { label: 'C', scores: { robot_engineer: 5, electronic_control: 4 } },
      { label: 'D', scores: { project_manager: 6, automation_engineer: 3 } },
    ],
  },
  {
    questionId: 'interest_08',
    options: [
      { label: 'A', scores: { mechanical_design: 8, simulation_engineer: 7 } },
      { label: 'B', scores: { embedded_engineer: 8, electronic_control: 5 } },
      { label: 'C', scores: { robot_engineer: 8, embedded_engineer: 4 } },
      { label: 'D', scores: { automation_engineer: 8, electronic_control: 5 } },
    ],
  },
  {
    questionId: 'interest_09',
    options: [
      { label: 'A', scores: { rd_engineer: 6, simulation_engineer: 4, mechanical_design: 3 } },
      { label: 'B', scores: { project_manager: 4, robot_engineer: 4 } },
      { label: 'C', scores: { project_manager: 7, automation_engineer: 3 } },
      { label: 'D', scores: { project_manager: 3, robot_engineer: 3 } },
    ],
  },
  {
    questionId: 'interest_10',
    options: [
      { label: 'A', scores: { mechanical_design: 8, automation_engineer: 3 } },
      { label: 'B', scores: { electronic_control: 8, embedded_engineer: 5 } },
      { label: 'C', scores: { robot_engineer: 7, embedded_engineer: 4 } },
      { label: 'D', scores: { automation_engineer: 5, project_manager: 5 } },
    ],
  },
  {
    questionId: 'interest_11',
    options: [
      { label: 'A', scores: { robot_engineer: 5, embedded_engineer: 4, rd_engineer: 4 } },
      { label: 'B', scores: { mechanical_design: 3, automation_engineer: 3 } },
      { label: 'C', scores: { mechanical_design: 4, simulation_engineer: 4 } },
      { label: 'D', scores: { project_manager: 4 } },
    ],
  },
  {
    questionId: 'interest_12',
    options: [
      { label: 'A', scores: { rd_engineer: 5, simulation_engineer: 5 } },
      { label: 'B', scores: { automation_engineer: 5, mechanical_design: 3 } },
      { label: 'C', scores: { project_manager: 3, robot_engineer: 3 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'interest_13',
    options: [
      { label: 'A', scores: { mechanical_design: 7, simulation_engineer: 6 } },
      { label: 'B', scores: { electronic_control: 7, embedded_engineer: 5 } },
      { label: 'C', scores: { robot_engineer: 6, embedded_engineer: 4, simulation_engineer: 3 } },
      { label: 'D', scores: { project_manager: 6, rd_engineer: 3 } },
    ],
  },
  {
    questionId: 'interest_14',
    options: [
      { label: 'A', scores: { automation_engineer: 6, electronic_control: 4, robot_engineer: 3 } },
      { label: 'B', scores: { mechanical_design: 3, robot_engineer: 3 } },
      { label: 'C', scores: { simulation_engineer: 4, rd_engineer: 4 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'interest_15',
    options: [
      { label: 'A', scores: { mechanical_design: 5, robot_engineer: 5, embedded_engineer: 4 } },
      { label: 'B', scores: { rd_engineer: 6, simulation_engineer: 4 } },
      { label: 'C', scores: { automation_engineer: 5, electronic_control: 4 } },
      { label: 'D', scores: { project_manager: 3, robot_engineer: 3 } },
    ],
  },

  // ===== 工作价值观 (value_01 ~ value_10) =====
  {
    questionId: 'value_01',
    options: [
      { label: 'A', scores: { project_manager: 4, robot_engineer: 3, embedded_engineer: 3 } },
      { label: 'B', scores: { automation_engineer: 4, mechanical_design: 3, electronic_control: 3 } },
      { label: 'C', scores: { rd_engineer: 5, robot_engineer: 4, simulation_engineer: 3 } },
      { label: 'D', scores: { robot_engineer: 3, project_manager: 3 } },
    ],
  },
  {
    questionId: 'value_02',
    options: [
      { label: 'A', scores: { robot_engineer: 3, project_manager: 3 } },
      { label: 'B', scores: { mechanical_design: 3, embedded_engineer: 3 } },
      { label: 'C', scores: { automation_engineer: 4, mechanical_design: 3, electronic_control: 3 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'value_03',
    options: [
      { label: 'A', scores: { robot_engineer: 3, embedded_engineer: 3, project_manager: 3 } },
      { label: 'B', scores: { mechanical_design: 3, electronic_control: 3 } },
      { label: 'C', scores: { automation_engineer: 4, rd_engineer: 3 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'value_04',
    options: [
      { label: 'A', scores: { robot_engineer: 3, project_manager: 3, electronic_control: 3 } },
      { label: 'B', scores: { robot_engineer: 4, embedded_engineer: 3 } },
      { label: 'C', scores: { automation_engineer: 4, mechanical_design: 4, rd_engineer: 4 } },
      { label: 'D', scores: { electronic_control: 3, simulation_engineer: 3 } },
    ],
  },
  {
    questionId: 'value_05',
    options: [
      { label: 'A', scores: { rd_engineer: 5, simulation_engineer: 4, mechanical_design: 3, robot_engineer: 3 } },
      { label: 'B', scores: { project_manager: 6, automation_engineer: 3 } },
      { label: 'C', scores: { robot_engineer: 3, embedded_engineer: 3, electronic_control: 3 } },
      { label: 'D', scores: { project_manager: 4, automation_engineer: 3 } },
    ],
  },
  {
    questionId: 'value_06',
    options: [
      { label: 'A', scores: { rd_engineer: 7, simulation_engineer: 4 } },
      { label: 'B', scores: { mechanical_design: 3, electronic_control: 3, embedded_engineer: 3, automation_engineer: 3 } },
      { label: 'C', scores: { robot_engineer: 3 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'value_07',
    options: [
      { label: 'A', scores: { mechanical_design: 3, automation_engineer: 3 } },
      { label: 'B', scores: { electronic_control: 3, embedded_engineer: 3 } },
      { label: 'C', scores: { robot_engineer: 3, simulation_engineer: 3 } },
      { label: 'D', scores: { project_manager: 3, rd_engineer: 3 } },
    ],
  },
  {
    questionId: 'value_08',
    options: [
      { label: 'A', scores: { rd_engineer: 4, robot_engineer: 4, mechanical_design: 3 } },
      { label: 'B', scores: { project_manager: 5, automation_engineer: 3 } },
      { label: 'C', scores: { electronic_control: 3, embedded_engineer: 3 } },
      { label: 'D', scores: { simulation_engineer: 3, rd_engineer: 3 } },
    ],
  },
  {
    questionId: 'value_09',
    options: [
      { label: 'A', scores: { project_manager: 3 } },
      { label: 'B', scores: { mechanical_design: 3, electronic_control: 3, embedded_engineer: 3 } },
      { label: 'C', scores: { automation_engineer: 4, rd_engineer: 3 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'value_10',
    options: [
      { label: 'A', scores: { robot_engineer: 3, embedded_engineer: 3 } },
      { label: 'B', scores: { mechanical_design: 3, electronic_control: 3 } },
      { label: 'C', scores: { automation_engineer: 4 } },
      { label: 'D', scores: { project_manager: 3, robot_engineer: 3 } },
    ],
  },

  // ===== 专业背景 (background_01 ~ background_15) =====
  {
    questionId: 'background_01',
    options: [
      { label: 'A', scores: { mechanical_design: 8, simulation_engineer: 6, automation_engineer: 3 } },
      { label: 'B', scores: { automation_engineer: 7, electronic_control: 6, robot_engineer: 4 } },
      { label: 'C', scores: { robot_engineer: 8, embedded_engineer: 4, electronic_control: 3 } },
      { label: 'D', scores: { electronic_control: 7, embedded_engineer: 7, automation_engineer: 4 } },
      { label: 'E', scores: {} },
    ],
  },
  {
    questionId: 'background_02',
    options: [
      { label: 'A', scores: { rd_engineer: 3, robot_engineer: 2, mechanical_design: 2 } },
      { label: 'B', scores: { mechanical_design: 3, electronic_control: 3, embedded_engineer: 3, automation_engineer: 3 } },
      { label: 'C', scores: { rd_engineer: 6, simulation_engineer: 4, robot_engineer: 3 } },
      { label: 'D', scores: { rd_engineer: 5, simulation_engineer: 3, robot_engineer: 3 } },
    ],
  },
  {
    questionId: 'background_03',
    options: [
      { label: 'A', scores: { mechanical_design: 7, automation_engineer: 3 } },
      { label: 'B', scores: { mechanical_design: 6, simulation_engineer: 3 } },
      { label: 'C', scores: { mechanical_design: 4 } },
      { label: 'D', scores: { mechanical_design: 5 } },
      { label: 'E', scores: {} },
    ],
  },
  {
    questionId: 'background_04',
    options: [
      { label: 'A', scores: { simulation_engineer: 9, mechanical_design: 5, rd_engineer: 4 } },
      { label: 'B', scores: { simulation_engineer: 5, mechanical_design: 3 } },
      { label: 'C', scores: { simulation_engineer: 2, rd_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_05',
    options: [
      { label: 'A', scores: { robot_engineer: 6, simulation_engineer: 4, rd_engineer: 4 } },
      { label: 'B', scores: { embedded_engineer: 8, robot_engineer: 5, electronic_control: 3 } },
      { label: 'C', scores: { simulation_engineer: 5, electronic_control: 5, rd_engineer: 4 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_06',
    options: [
      { label: 'A', scores: { robot_engineer: 9, embedded_engineer: 3 } },
      { label: 'B', scores: { robot_engineer: 5 } },
      { label: 'C', scores: { robot_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_07',
    options: [
      { label: 'A', scores: { embedded_engineer: 9, electronic_control: 5, robot_engineer: 3 } },
      { label: 'B', scores: { embedded_engineer: 4, electronic_control: 3 } },
      { label: 'C', scores: { embedded_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_08',
    options: [
      { label: 'A', scores: { automation_engineer: 9, electronic_control: 5 } },
      { label: 'B', scores: { automation_engineer: 4, electronic_control: 3 } },
      { label: 'C', scores: { automation_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_09',
    options: [
      { label: 'A', scores: { electronic_control: 7, embedded_engineer: 5 } },
      { label: 'B', scores: { electronic_control: 3, embedded_engineer: 3 } },
      { label: 'C', scores: { electronic_control: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_10',
    options: [
      { label: 'A', scores: { mechanical_design: 7, simulation_engineer: 4 } },
      { label: 'B', scores: { robot_engineer: 6, automation_engineer: 4, electronic_control: 3 } },
      { label: 'C', scores: { robot_engineer: 7, embedded_engineer: 3 } },
      { label: 'D', scores: { electronic_control: 6, embedded_engineer: 4, automation_engineer: 3 } },
      { label: 'E', scores: {} },
    ],
  },
  {
    questionId: 'background_11',
    options: [
      { label: 'A', scores: { electronic_control: 5, simulation_engineer: 4, robot_engineer: 3 } },
      { label: 'B', scores: { electronic_control: 3, simulation_engineer: 2 } },
      { label: 'C', scores: { electronic_control: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_12',
    options: [
      { label: 'A', scores: { project_manager: 3, rd_engineer: 3, robot_engineer: 2 } },
      { label: 'B', scores: { mechanical_design: 2, automation_engineer: 2 } },
      { label: 'C', scores: { rd_engineer: 4, simulation_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_13',
    options: [
      { label: 'A', scores: { mechanical_design: 3, electronic_control: 3, embedded_engineer: 3, robot_engineer: 3 } },
      { label: 'B', scores: { mechanical_design: 2, electronic_control: 2, automation_engineer: 2 } },
      { label: 'C', scores: { rd_engineer: 3, simulation_engineer: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_14',
    options: [
      { label: 'A', scores: { electronic_control: 9, embedded_engineer: 5, robot_engineer: 3 } },
      { label: 'B', scores: { electronic_control: 4, automation_engineer: 3 } },
      { label: 'C', scores: { electronic_control: 2 } },
      { label: 'D', scores: {} },
    ],
  },
  {
    questionId: 'background_15',
    options: [
      { label: 'A', scores: { robot_engineer: 3, embedded_engineer: 3, project_manager: 3 } },
      { label: 'B', scores: { mechanical_design: 2, electronic_control: 2 } },
      { label: 'C', scores: {} },
      { label: 'D', scores: {} },
    ],
  },
];
