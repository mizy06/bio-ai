import Link from 'next/link';

import { bioAiDryGroups, bioAiWetGroups } from '@/lib/bioAiSource';

const branches = [
  {
    title: 'Wet',
    href: '/raw-data/wet',
    badge: 'Updated',
    summary: '面向 wet-lab 的 protocol、reference、resource identity 与 bridge 内容。',
    stats: `${bioAiWetGroups.length} layers`,
  },
  {
    title: 'Dry',
    href: '/raw-data/dry',
    badge: 'Updated',
    summary: '面向 dry-lab 的 experiment data、workflow、annotation 与 supporting content。',
    stats: `${bioAiDryGroups.length} layers`,
  },
];

export default function RawDataPage() {
  return (
    <main className="bio-page">
      <section className="bio-hero card">
        <div className="bio-breadcrumbs">
          <Link href="/">Bio-AI</Link>
          <span>/</span>
          <span>Raw Data</span>
        </div>
        <p className="bio-eyebrow">Bio-AI / Raw Data</p>
        <h1>Raw Data</h1>
        <p className="bio-lead">按 Wet 与 Dry 两条线浏览 Bio-AI 的原始资料结构与平台详情。</p>
        <div className="bio-stat-row">
          <span className="bio-stat-pill">2 Branches</span>
          <span className="bio-stat-pill">Static Pages</span>
          <span className="bio-stat-pill">No Backend Required</span>
        </div>
      </section>

      <section className="bio-grid">
        {branches.map((branch) => (
          <Link key={branch.href} href={branch.href} className="bio-feature-card">
            <div className="bio-card-topline">
              <span className="bio-card-badge">{branch.badge}</span>
              <span className="muted">{branch.stats}</span>
            </div>
            <h2>{branch.title}</h2>
            <p>{branch.summary}</p>
            <span className="bio-card-link">Open {branch.title}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
