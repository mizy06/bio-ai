import Link from 'next/link';

import { bioAiDryGroups, bioAiWetGroups } from '@/lib/bioAiSource';

const totalLayers = bioAiDryGroups.length + bioAiWetGroups.length;

export default function HomePage() {
  return (
    <main className="bio-page">
      <section className="bio-hero card">
        <div className="bio-breadcrumbs">
          <span>Bio-AI</span>
        </div>
        <p className="bio-eyebrow">Bio-AI</p>
        <h1>Bio-AI</h1>
        <p className="bio-lead">围绕 wet 与 dry 两条线组织的 Bio-AI 原始资料与平台导航。</p>
        <div className="bio-stat-row">
          <span className="bio-stat-pill">Static Export Ready</span>
          <span className="bio-stat-pill">{totalLayers} Layers</span>
          <span className="bio-stat-pill">GitHub Pages</span>
        </div>
      </section>

      <section className="bio-grid">
        <Link href="/raw-data" className="bio-feature-card">
          <div className="bio-card-topline">
            <span className="bio-card-badge">Core Entry</span>
            <span className="muted">{totalLayers} layers</span>
          </div>
          <h2>Raw Data</h2>
          <p>查看 Bio-AI 的原始资料、平台分层与平台详情页。</p>
          <span className="bio-card-link">Open Raw Data</span>
        </Link>
      </section>
    </main>
  );
}
