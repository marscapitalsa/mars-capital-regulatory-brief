const updates = [
  {
    date: "18 Jul 2026",
    tag: "FINMA",
    title: "FINMA clarifies expectations for outsourcing oversight",
    summary:
      "Practical focus points for asset managers: vendor inventories, exit planning, incident escalation and board-level reporting.",
    level: "Action may be required",
  },
  {
    date: "09 Jul 2026",
    tag: "AMLA",
    title: "Consultation opens on targeted AML reporting changes",
    summary:
      "The proposal would refine documentation and reporting expectations for higher-risk client relationships and intermediaries.",
    level: "Consultation",
  },
  {
    date: "30 Jun 2026",
    tag: "FDF",
    title: "Sustainable-finance transparency: revised implementation timeline",
    summary:
      "Updated milestones affect product disclosures, portfolio claims and internal governance for sustainability-related communication.",
    level: "Monitor",
  },
  {
    date: "12 Jun 2026",
    tag: "FIDLEG",
    title: "Client documentation: recurring suitability-review reminders",
    summary:
      "A concise review of the records and cadence investment advisers should be able to evidence during supervision.",
    level: "Practice note",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Alpine Regulatory Brief home">
          <span className="brand-mark">A</span>
          <span>Alpine Regulatory Brief</span>
        </a>
        <div className="nav-links">
          <a href="#updates">Updates</a>
          <a href="#topics">Topics</a>
          <a href="#about">About</a>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Swiss asset management · legal intelligence</p>
          <h1>Regulatory change,<br /><em>made useful.</em></h1>
          <p className="lede">
            A concise, trusted view of Swiss legal and regulatory developments that matter to asset managers.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#updates">Browse latest updates</a>
            <a className="text-link" href="#about">How it works <span>→</span></a>
          </div>
        </div>
        <aside className="brief-card" aria-label="Latest briefing">
          <div className="card-topline"><span>Latest briefing</span><span>07.2026</span></div>
          <div className="rule" />
          <p className="card-kicker">Supervisory focus</p>
          <h2>Outsourcing controls move to the foreground</h2>
          <p>What Swiss asset managers should revisit now — in five practical questions.</p>
          <a href="#updates">Read the briefing <span>↗</span></a>
        </aside>
      </section>

      <section className="signal-bar" aria-label="Site focus">
        <p>Curated for decision-makers</p><span />
        <p>Swiss law &amp; regulation</p><span />
        <p>Asset management</p>
      </section>

      <section className="updates-section" id="updates">
        <header className="section-heading">
          <div>
            <p className="eyebrow">The legal update</p>
            <h2>What changed.<br />What it means.</h2>
          </div>
          <p>Clear summaries, context and a practical signal — without the noise.</p>
        </header>
        <div className="update-list">
          {updates.map((update, index) => (
            <article className="update" key={update.title}>
              <div className="update-meta"><span>{update.date}</span><span>{update.tag}</span></div>
              <div className="update-main">
                <span className={`status status-${index}`}>{update.level}</span>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
              </div>
              <a className="arrow" href="#about" aria-label={`Read ${update.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="topics" id="topics">
        <p className="eyebrow">Follow the themes that matter</p>
        <div className="topic-grid">
          <a href="#updates">Conduct &amp; client protection <span>↗</span></a>
          <a href="#updates">AML &amp; financial crime <span>↗</span></a>
          <a href="#updates">Sustainable finance <span>↗</span></a>
          <a href="#updates">Governance &amp; operations <span>↗</span></a>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">A working prototype</p>
        <h2>Built to turn regulatory movement into informed action.</h2>
        <p>This first version demonstrates the editorial experience. Source monitoring, personalised alerts and archive search will follow.</p>
      </section>

      <footer><span>© 2026 Alpine Regulatory Brief</span><span>Switzerland · Independent legal intelligence</span></footer>
    </main>
  );
}
