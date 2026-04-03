import Link from 'next/link';
import { notFound } from 'next/navigation';

import { bioAiDryGroups, getBioAiCardTitle } from '@/lib/bioAiSource';
import { getDryGroupParams } from '@/lib/bioAiRoutes';

interface DryGroupPageProps {
  params: { slug: string };
}

const summaryLabels = [
  ['Resource Type', 'resourceType'],
  ['Recommended Level', 'recommendedLevel'],
  ['Unit', 'recommendedUnit'],
  ['Primary Key', 'recommendedKey'],
] as const;

export function generateStaticParams() {
  return getDryGroupParams();
}

export const dynamicParams = false;

export default function DryGroupPage({ params }: DryGroupPageProps) {
  const group = bioAiDryGroups.find((item) => item.slug === params.slug);

  if (!group) {
    notFound();
  }

  return (
    <main className="bio-page">
      <section className="bio-hero card">
        <div className="bio-breadcrumbs">
          <Link href="/">Bio-AI</Link>
          <span>/</span>
          <Link href="/raw-data">Raw Data</Link>
          <span>/</span>
          <Link href="/raw-data/dry">Dry</Link>
          <span>/</span>
          <span>{group.title}</span>
        </div>
        <p className="bio-eyebrow">Layer {group.sectionNumber}</p>
        <h1>{group.title}</h1>
        <p className="bio-lead">{group.description || '查看这一层的平台与摘要。'}</p>
      </section>

      {group.summary_points?.length ? (
        <article className="bio-detail-card">
          <h2>{group.slug === 'overview' ? 'Overview' : 'Summary'}</h2>
          <div className="bio-plain-text">
            {group.summary_points.map((point) => (
              <section key={point} className="bio-plain-section">
                <p>{point}</p>
              </section>
            ))}
          </div>
        </article>
      ) : (
        <section className="bio-grid">
          {group.entries.map((entry) => (
            <Link key={entry.slug} href={`/raw-data/dry/${group.slug}/${entry.slug}`} className="bio-feature-card">
              <div className="bio-card-topline">
                <span className="bio-card-badge">{entry.sectionNumber}</span>
                {entry.recommendedLevel ? <span className="bio-soft-pill">{entry.recommendedLevel}</span> : null}
              </div>
              <h2>{getBioAiCardTitle(entry.slug, entry.title)}</h2>
              {entry.summary ? <p>{entry.summary}</p> : null}
              <div className="bio-chip-row">
                {summaryLabels.map(([label, key]) => {
                  const value = entry[key];
                  if (!value) return null;
                  return (
                    <span key={label} className="bio-inline-chip">
                      {label}
                    </span>
                  );
                })}
                <span className="bio-inline-chip">{entry.fields.length} fields</span>
              </div>
              <span className="bio-card-link">Open Platform</span>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
