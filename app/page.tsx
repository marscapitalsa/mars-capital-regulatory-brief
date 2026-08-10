const updates = [
  {
    date: "03 Aug 2026",
    title: "EU AI Act: current transparency rules and revised implementation dates",
    change:
      "The AI Act's general application date arrived on 2 August, while Regulation (EU) 2026/1744 moved the core high-risk-system requirements to 2 December 2027 or 2 August 2028. Legacy generative-AI providers have until 2 December 2026 for Article 50(2) marking.",
    relevance:
      "Relevant only if the IAM has the required EU nexus or covered use case—for example an EU-facing chatbot, covered public content or an Annex III high-risk use. Ordinary internal drafting or research in Switzerland is not automatically high-risk.",
    deadline: "2 August / 2 December 2026",
    tag: "AI",
    href: "https://marscapitalsa.github.io/mars-capital-regulatory-brief/updates/eu-ai-act-august-2026.html",
  },
  {
    date: "06 Aug 2026",
    title: "UK adds six Russian banks, seven other targets and six vessels",
    change:
      "The UK Sanctions List added 13 Russia-regime designations and six ship specifications. The banks include Ozon Bank, Roseximbank, Center-Invest, Realist Bank, Bank Stavr and Teleport Bank.",
    relevance:
      "Relevant where a client, UBO, payment, holding, bank, custodian or transaction has a UK nexus, or where a service provider contractually applies the UK list. The update does not itself amend Swiss law.",
    deadline: "UK designation date: 6 August 2026",
    tag: "Sanctions",
    href: "https://marscapitalsa.github.io/mars-capital-regulatory-brief/updates/uk-russia-sanctions-august-2026.html",
  },
  {
    date: "07 Aug 2026",
    title: "EU lists five Russian defence-industry executives",
    change:
      "The Council imposed an asset freeze and a prohibition on making funds or economic resources available to five senior figures at Russian defence and military-technology companies.",
    relevance:
      "Relevant where the IAM, a client, UBO, issuer, payment, bank or custodian has an EU nexus or applies the EU list. No corresponding Swiss adoption was identified as at 10 August.",
    deadline: "EU listing date: 7 August 2026",
    tag: "Sanctions",
    href: "https://marscapitalsa.github.io/mars-capital-regulatory-brief/updates/eu-russia-sanctions-7-august-2026.html",
  },
];

export default function Home() {
  return (
    <main className="brief-shell">
      <header className="edition-head">
        <p className="eyebrow">IAM Regulatory Brief · Monthly edition</p>
        <h1>August 2026</h1>
        <p className="dek">
          Three selected developments for a Swiss independent asset manager.
          Updated 10 August 2026.
        </p>
      </header>

      <nav aria-label="Brief navigation">
        <a href="#action-required">Action required</a>
        <a href="#potentially-relevant">Potentially relevant</a>
        <a href="#archive">Archive</a>
      </nav>

      <section id="action-required" className="priority-block no-actions">
        <p className="eyebrow">Priority 1</p>
        <h2>No unconditional action items identified</h2>
        <p>
          The August developments currently identified are foreign-law measures.
          They require action only if the stated EU or UK nexus, use case or
          counterparty condition applies.
        </p>
      </section>

      <section id="potentially-relevant" className="updates-section">
        <div className="priority-block potential">
          <p className="eyebrow">Priority 2</p>
          <h2>Potentially relevant</h2>
          <p>
            Open a topic only where its stated condition matches the IAM&apos;s
            activities, clients, systems, bank or custody chain.
          </p>
        </div>

        <div className="update-list">
          {updates.map((update) => (
            <article className="update-card" key={update.href}>
              <div className="meta">
                <span className="badge">Potentially relevant</span>
                <span>{update.date}</span>
              </div>
              <div>
                <h3>{update.title}</h3>
                <span className="topic-tag">{update.tag}</span>
                <p><strong>What changed:</strong> {update.change}</p>
                <p className="deadline"><strong>{update.deadline}</strong></p>
                <p><strong>Relevant if:</strong> {update.relevance}</p>
                <a className="read" href={update.href}>Open analysis →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="archive" id="archive">
        <h2>Archive</h2>
        <a href="https://marscapitalsa.github.io/mars-capital-regulatory-brief/july-2026.html">
          <span>July 2026</span>
          <strong>AML, product governance, beneficial ownership, sanctions and operational resilience</strong>
          <em>10 updates</em>
        </a>
      </section>

      <footer>© 2026 IAM Regulatory Brief</footer>
    </main>
  );
}
