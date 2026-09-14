const publicBase = "https://marscapitalsa.github.io/mars-capital-regulatory-brief/updates/";

const actionUpdates = [
  {
    date: "26 Aug 2026",
    title: "ASG publishes an editable model agreement for business introducers",
    change: "ASG published a structured agreement for intermediaries who bring prospective wealth-management or investment-advisory clients to an IAM. The model limits the introducer to introductions and addresses cross-border conduct, AML boundaries, remuneration, independent status, confidentiality, liability and termination.",
    action: "Compare the existing agreement and actual conduct with the ASG model and PwC checklist, resolve any mismatch, and document the controls applicable to the relationship.",
    deadline: "No external deadline stated · internal review date: to be set internally",
    tag: "Introducers",
    href: `${publicBase}asg-business-introducer-model-agreement-2026.html`,
  },
];

const updates = [
  {
    date: "11 Sep 2026",
    title: "UK explains how its sanctions search can produce incomplete results",
    change: "The UK government published instructions for exact, partial and fuzzy searches. Fuzzy search is off by default; exact phrases and early use of filters can create false negatives; and the web search does not replace ownership-and-control analysis.",
    relevance: "Relevant where manual UK-list searches form part of onboarding, periodic review, transaction screening, escalation work or oversight of an external screening provider.",
    deadline: "No external deadline stated · internal review date: to be set internally",
    tag: "Sanctions",
    href: `${publicBase}uk-sanctions-list-search-guide-september-2026.html`,
  },
];

export default function Home() {
  return (
    <main className="brief-shell">
      <header className="edition-head">
        <p className="eyebrow">IAM Regulatory Brief · August–September 2026</p>
        <h1>25 August–14 September 2026</h1>
        <p className="dek">Two selected developments for a Swiss independent asset manager: the ASG model business-introducer agreement and the updated UK Sanctions List search guide.</p>
      </header>
      <nav aria-label="Brief navigation">
        <a href="#" aria-current="page">25 Aug–14 Sep</a>
        <a href="#action-required">Action required</a>
        <a href="#potentially-relevant">Potentially relevant</a>
        <a href="#archive">Archive</a>
      </nav>
      <section id="action-required" className="updates-section action-section">
        <div className="priority-block"><p className="eyebrow">Priority 1</p><h2>Action required</h2><p>The publication is not a new legal rule. An internal review is required because the IAM uses a business introducer.</p></div>
        <div className="update-list">{actionUpdates.map((update) => (
          <article className="update-card" key={update.href}><div className="meta"><span className="badge" style={{ background: "var(--accent)", color: "#fff" }}>Action required</span><span>{update.date}</span></div><div><h3>{update.title}</h3><span className="topic-tag">{update.tag}</span><p><strong>What changed:</strong> {update.change}</p><p className="deadline"><strong>{update.deadline}</strong></p><p><strong>Action:</strong> {update.action}</p><a className="read" href={update.href}>Open action plan →</a></div></article>
        ))}</div>
      </section>
      <section id="potentially-relevant" className="updates-section">
        <div className="priority-block potential"><p className="eyebrow">Priority 2</p><h2>Potentially relevant</h2><p>This item requires attention only where UK-list searches are performed manually or used to oversee an external screening provider.</p></div>
        <div className="update-list">{updates.map((update) => (
          <article className="update-card" key={update.href}><div className="meta"><span className="badge">Potentially relevant</span><span>{update.date}</span></div><div><h3>{update.title}</h3><span className="topic-tag">{update.tag}</span><p><strong>What changed:</strong> {update.change}</p><p className="deadline"><strong>{update.deadline}</strong></p><p><strong>Relevant if:</strong> {update.relevance}</p><a className="read" href={update.href}>Open analysis →</a></div></article>
        ))}</div>
      </section>
      <section className="archive" id="archive">
        <div><p className="eyebrow">Previous editions and earlier material</p><h2>Archive</h2></div>
        <div className="archive-list">
          <a href="https://marscapitalsa.github.io/mars-capital-regulatory-brief/august-2026.html"><span>August 2026</span><strong>Swiss, EU and UK sanctions and the EU AI Act</strong><em>6 updates · View →</em></a>
          <a href="https://marscapitalsa.github.io/mars-capital-regulatory-brief/july-2026.html"><span>July 2026</span><strong>AML, product governance, beneficial ownership, sanctions and operational resilience</strong><em>10 updates · View →</em></a>
          <a href={`${publicBase}transparency-register-amla.html`}><span>12 June 2026</span><strong>LETA and revised AMLA: corporate beneficial-owner filing</strong><em>Reference material · View →</em></a>
          <a href={`${publicBase}finma-crypto-custody-01-2026.html`}><span>12 January 2026</span><strong>FINMA Guidance 01/2026: custody and segregation of crypto-assets</strong><em>Reference material · View →</em></a>
        </div>
      </section>
      <footer>© 2026 IAM Regulatory Brief · Independent Asset Manager</footer>
    </main>
  );
}
