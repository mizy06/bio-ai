import Link from 'next/link';

import { bioAiWetGroups, getBioAiCardTitle } from '@/lib/bioAiSource';

const wetGroups = bioAiWetGroups;

export default function WetPage() {
  return (
    <main className="bio-page">
      <section className="bio-hero card">
        <div className="bio-breadcrumbs">
          <Link href="/">Bio-AI</Link>
          <span>/</span>
          <Link href="/raw-data">Raw Data</Link>
          <span>/</span>
          <span>Wet</span>
        </div>
        <p className="bio-eyebrow">Bio-AI / Raw Data / Wet</p>
        <h1>Wet</h1>
        <p className="bio-lead">按湿实验报告结构浏览 protocol、reference 与平台详情。</p>
        <div className="bio-stat-row">
          <span className="bio-stat-pill">{wetGroups.length} layers</span>
          <span className="bio-stat-pill">{wetGroups.reduce((sum, group) => sum + group.entries.length, 0)} platforms</span>
          <span className="bio-stat-pill">Grouped by theme</span>
        </div>
      </section>

      <section className="bio-grid">
        {wetGroups.map((group) => (
          <Link key={group.slug} href={`/raw-data/wet/${group.slug}`} className="bio-feature-card">
            <div className="bio-card-topline">
              <span className="bio-card-badge">Layer {group.sectionNumber}</span>
              <span className="muted">{group.entries.length} cards</span>
            </div>
            <h2>{getBioAiCardTitle(group.slug, group.title)}</h2>
            <p>{group.description || '查看该层的平台列表与说明。'}</p>
            <span className="bio-card-link">Open Layer</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
