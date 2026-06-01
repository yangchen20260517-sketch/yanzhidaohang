import type { Job } from './types';

export const jobs: Job[] = [
  {
    id: 'mechanical_design',
    name: '机械设计工程师',
    description: '负责机械设备、零部件或整机的结构设计与优化，使用 CAD/CAE 工具进行三维建模和工程图纸绘制。是制造业最核心的岗位之一。',
    requiredSkills: ['SolidWorks/CATIA', '工程制图', '有限元分析', '机械原理', '材料力学'],
    careerPath: ['初级设计工程师', '高级设计工程师', '主任工程师', '技术总监/总工程师'],
  },
  {
    id: 'robot_engineer',
    name: '机器人工程师',
    description: '从事机器人系统（工业机器人、协作机器人、人形机器人等）的设计、开发与集成。涉及机械结构、运动控制、感知算法等多个方向。',
    requiredSkills: ['ROS/ROS2', 'C++', '运动控制', '机器人学', '传感器应用', 'Python'],
    careerPath: ['机器人算法工程师', '高级算法工程师', '系统架构师', '技术总监'],
  },
  {
    id: 'electronic_control',
    name: '电控工程师',
    description: '负责电机驱动控制、伺服系统调试、PLC 编程等，是工业自动化和智能装备领域的核心岗位。',
    requiredSkills: ['PLC编程', '电机控制/FOC', '嵌入式开发', '电路设计', 'MATLAB/Simulink'],
    careerPath: ['电控工程师', '高级电控工程师', '电气主管', '技术副总'],
  },
  {
    id: 'simulation_engineer',
    name: '仿真分析工程师',
    description: '使用有限元分析、多体动力学等仿真工具，对产品进行结构强度、热力学、流体力学等方面的仿真分析，支撑设计决策。',
    requiredSkills: ['ANSYS/Abaqus', '有限元分析', 'MATLAB', '力学理论', 'Python'],
    careerPath: ['仿真工程师', '高级仿真工程师', 'CAE主管', '研发总监'],
  },
  {
    id: 'embedded_engineer',
    name: '嵌入式系统工程师',
    description: '从事嵌入式硬件和软件开发，包括 MCU/DSP 编程、实时操作系统、传感器驱动开发等，广泛应用于机器人、汽车电子、工业控制等领域。',
    requiredSkills: ['C/C++', 'STM32/ARM', 'RTOS', '电路设计', '通信协议(CAN/SPI/I2C)'],
    careerPath: ['嵌入式工程师', '高级嵌入式工程师', '硬件架构师', '技术总监'],
  },
  {
    id: 'automation_engineer',
    name: '自动化工程师',
    description: '负责工业自动化系统的设计、集成和调试，包括 PLC 编程、SCADA 系统、传感器与执行器配置、生产线自动化改造等。',
    requiredSkills: ['PLC编程', 'SCADA/HMI', '电路设计', '工业通信协议', 'PID控制'],
    careerPath: ['自动化工程师', '高级自动化工程师', '项目经理', '工厂自动化总监'],
  },
  {
    id: 'rd_engineer',
    name: '研发工程师',
    description: '在研究院所或企业研发中心从事前沿技术研究、新产品开发、技术预研等工作，需要较强的理论功底和创新思维。',
    requiredSkills: ['数学建模', 'MATLAB', 'Python', '文献检索', '实验设计', '有限元分析'],
    careerPath: ['研发工程师', '高级研究员', '首席科学家', '研究院院长'],
  },
  {
    id: 'project_manager',
    name: '技术项目经理',
    description: '负责技术项目的计划、执行和交付，协调跨部门资源，管理项目进度和风险，是连接技术团队和管理层的桥梁。',
    requiredSkills: ['项目管理(PMP)', '沟通协调', '技术理解力', '风险管控', '敏捷开发'],
    careerPath: ['项目经理', '高级项目经理', '项目总监', 'VP of Engineering'],
  },
];

// 职位 ID 到名称的映射，方便评分规则中使用
export const jobIdMap: Record<string, string> = {};
for (const job of jobs) {
  jobIdMap[job.id] = job.name;
}
