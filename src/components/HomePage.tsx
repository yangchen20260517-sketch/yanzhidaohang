interface HomePageProps {
  onStart: () => void;
}

const features = [
  {
    icon: '📋',
    title: '三维评估',
    lines: ['职业兴趣', '工作价值观', '专业背景'],
  },
  {
    icon: '🎯',
    title: '精准推荐',
    lines: ['8 大理工科岗位', '打分排名', '智能匹配'],
  },
  {
    icon: '📊',
    title: '详细报告',
    lines: ['匹配度分析', '技能差距诊断', '职业发展路径'],
  },
];

const domains = [
  '机械设计',
  '机器人工程',
  '电控系统',
  '仿真分析',
  '嵌入式开发',
  '工业自动化',
];

function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero">
        <h1 className="home-title">🎓 研职导航</h1>
        <p className="home-brand">理工科研究生专属职业推荐平台</p>
        <p className="home-desc">
          你的第一份工作，从这里开始
        </p>
        <p className="home-meta">
          40 道选择题 · 3 个维度评估 · 约 5 分钟
        </p>
        <button className="home-cta" onClick={onStart}>
          🚀 开始职业评估
        </button>
      </section>

      {/* Features */}
      <section className="home-features">
        {features.map((f) => (
          <div className="home-feature-card" key={f.title}>
            <span className="home-feature-icon">{f.icon}</span>
            <h3 className="home-feature-title">{f.title}</h3>
            <ul className="home-feature-list">
              {f.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Domains */}
      <section className="home-domains">
        <h3 className="home-domains-title">📍 覆盖领域</h3>
        <div className="home-domains-tags">
          {domains.map((d) => (
            <span className="home-domain-tag" key={d}>
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 研职导航 · 面向理工科研究生</p>
      </footer>
    </div>
  );
}

export default HomePage;
