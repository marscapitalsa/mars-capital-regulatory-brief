const publicBase = "https://marscapitalsa.github.io/mars-capital-regulatory-brief/updates/";

const actionUpdates = [
  {
    date: "20 Aug 2026",
    title: "Switzerland introduces new Russia-related crypto and sectoral rules",
    change: "Crypto-assets are now expressly included in funds; A7A5, RUBx and the digital rouble are restricted; and Swiss legal persons may not transact directly or indirectly with Russian-established crypto-service providers and exchange or transfer platforms.",
    action: "Hold and classify an affected crypto transaction, request exposure confirmation from the execution chain, include crypto in asset-freeze controls, and apply the SECO and AMLA/MROS analyses to a match.",
    deadline: "General rules in force since 20 August · statutory stages and wind-down cut-offs apply",
    tag: "Sanctions",
    href: `${publicBase}switzerland-russia-sanctions-20-august-2026.html`,
  },
  {
    date: "11 Aug 2026",
    title: "Switzerland adds 54 Russia-related sanctions targets",
    change: "The Swiss delta added nine individuals and 45 entities to Annex 8 and amended 11 existing records across Annexes 8 and 2. It took effect on 11 August at 23:00.",
    action: "Load the current SECO list, re-screen relevant parties and assets, resolve ownership or control matches, and run the separate Article 6/9 AMLA analysis required by FINMA.",
    deadline: "In force since 11 August, 23:00 · SECO notification without delay where applicable",
    tag: "Sanctions",
    href: `${publicBase}switzerland-russia-sanctions-11-august-2026.html`,
  },
];

const updates = [
  {
    date: "17 Aug 2026",
    title: "SECO updates Annex 2 data and relaxes the Article 27a restriction on Yelo Bank",
    change: "Four individual and 606 entity records were amended in Annex 2, while Yelo Bank was removed from Annex 14a. The removal is a relaxation of that specific restriction, not a new asset-freeze measure.",
    relevance: "Relevant for controlled-goods activity involving an Annex 2 end-user or where a client, payment, counterparty or service chain uses Yelo Bank.",
    deadline: "In force since 17 August, 23:00",
    tag: "Sanctions",
    href: `${publicBase}switzerland-sanctions-data-yelo-bank-17-august-2026.html`,
  },
  {
    date: "03 Aug 2026",
    title: "EU AI Act: current transparency rules and revised implementation dates",
    change: "Regulation (EU) 2026/1744 moved the core high-risk dates to December 2027 or August 2028, while the Article 50 transparency timetable remained unchanged.",
    relevance: "Relevant only where the IAM has the required EU nexus or a covered use case, such as an EU-facing chatbot, covered public content or an Annex III high-risk use.",
    deadline: "Applicable dates include 2 August and 2 December 2026",
    tag: "AI",
    href: `${publicBase}eu-ai-act-august-2026.html`,
  },
  {
    date: "06 Aug 2026",
    title: "UK adds six Russian banks, seven other targets and six vessels",
    change: "The UK Sanctions List added 13 Russia-regime designations and six ship specifications, including six banks.",
    relevance: "Relevant where a client, UBO, payment, holding, bank, custodian or transaction has a UK nexus, or a service provider contractually applies the UK list.",
    deadline: "UK designation date: 6 August 2026",
    tag: "Sanctions",
    href: `${publicBase}uk-russia-sanctions-august-2026.html`,
  },
  {
    date: "07 Aug 2026",
    title: "EU lists five Russian defence-industry executives",
    change: "The Council imposed an asset freeze and a prohibition on making funds or economic resources available to five senior figures at Russian defence and military-technology companies.",
    relevance: "Relevant where the IAM, a client, UBO, issuer, payment, bank or custodian has an EU nexus or applies the EU list.",
    deadline: "EU listing date: 7 August 2026",
    tag: "Sanctions",
    href: `${publicBase}eu-russia-sanctions-7-august-2026.html`,
  },
];

export default function Home() {
  return (
    <main className="brief-shell">
      <header className="edition-head">
        <p className="eyebrow">IAM Regulatory Brief · Monthly edition</p>
        <h1>August 2026</h1>
        <p className="dek">Six selected developments published or taking effect in August 2026 for a Swiss independent asset manager. Last checked 22 August 2026.</p>
      </header>
      <nav aria-label="Brief navigation">
        <a href="#" aria-current="page">August 2026</a>
        <a href="#action-required">Action required</a>
        <a href="#potentially-relevant">Potentially relevant</a>
        <a href="#archive">Archive</a>
      </nav>
      <section id="action-required" className="updates-section action-section">
        <div className="priority-block"><p className="eyebrow">Priority 1</p><h2>Action required</h2><p>These Swiss sanctions developments were published and took effect in August.</p></div>
        <div className="update-list">{actionUpdates.map((update) => (
          <article className="update-card" key={update.href}><div className="meta"><span className="badge" style={{ background: "var(--accent)", color: "#fff" }}>Action required</span><span>{update.date}</span></div><div><h3>{update.title}</h3><span className="topic-tag">{update.tag}</span><p><strong>What changed:</strong> {update.change}</p><p className="deadline"><strong>{update.deadline}</strong></p><p><strong>Action:</strong> {update.action}</p><a className="read" href={update.href}>Open action plan →</a></div></article>
        ))}</div>
      </section>
      <section id="potentially-relevant" className="updates-section">
        <div className="priority-block potential"><p className="eyebrow">Priority 2</p><h2>Potentially relevant</h2><p>Open a topic only where its stated condition matches the IAM&apos;s activities, products, clients, systems, bank or custody chain.</p></div>
        <div className="update-list">{updates.map((update) => (
          <article className="update-card" key={update.href}><div className="meta"><span className="badge">Potentially relevant</span><span>{update.date}</span></div><div><h3>{update.title}</h3><span className="topic-tag">{update.tag}</span><p><strong>What changed:</strong> {update.change}</p><p className="deadline"><strong>{update.deadline}</strong></p><p><strong>Relevant if:</strong> {update.relevance}</p><a className="read" href={update.href}>Open analysis →</a></div></article>
        ))}</div>
      </section>
      <section className="archive" id="archive">
        <div><p className="eyebrow">Previous editions and earlier material</p><h2>Archive</h2></div>
        <div className="archive-list">
          <a href="https://marscapitalsa.github.io/mars-capital-regulatory-brief/july-2026.html"><span>July 2026</span><strong>AML, product governance, beneficial ownership, sanctions and operational resilience</strong><em>10 updates · View →</em></a>
          <a href={`${publicBase}transparency-register-amla.html`}><span>12 June 2026</span><strong>LETA and revised AMLA: corporate beneficial-owner filing</strong><em>Reference material · View →</em></a>
          <a href={`${publicBase}finma-crypto-custody-01-2026.html`}><span>12 January 2026</span><strong>FINMA Guidance 01/2026: custody and segregation of crypto-assets</strong><em>Reference material · View →</em></a>
        </div>
      </section>
      <footer>© 2026 IAM Regulatory Brief · Independent Asset Manager</footer>
    </main>
  );
}
