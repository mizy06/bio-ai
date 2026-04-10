import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getDisplayFields, hasFieldText } from '@/lib/bioAiFields';
import { bioAiWetGroups } from '@/lib/bioAiSource';
import { getWetEntryParams } from '@/lib/bioAiRoutes';

interface WetEntryPageProps {
  params: { slug: string; entrySlug: string };
}

const summaryLabels = [
  ['Resource Type', 'resourceType'],
  ['Recommended Level', 'recommendedLevel'],
  ['Unit', 'recommendedUnit'],
  ['Primary Key', 'recommendedKey'],
] as const;

export function generateStaticParams() {
  return getWetEntryParams();
}

export const dynamicParams = false;

export default function WetEntryPage({ params }: WetEntryPageProps) {
  const group = bioAiWetGroups.find((item) => item.slug === params.slug);
  const entry = group?.entries.find((item) => item.slug === params.entrySlug);

  if (!group || !entry) {
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
          <Link href="/raw-data/wet">Wet</Link>
          <span>/</span>
          <Link href={`/raw-data/wet/${group.slug}`}>{group.title}</Link>
          <span>/</span>
          <span>{entry.title}</span>
        </div>
        <p className="bio-eyebrow">Item {entry.sectionNumber}</p>
        <h1>{entry.title}</h1>
        {entry.summary ? <p className="bio-lead">{entry.summary}</p> : null}

        <div className="bio-mini-grid">
          {summaryLabels.map(([label, key]) => {
            const value = entry[key];
            if (!value) return null;
            return (
              <div key={label} className="bio-mini-card">
                <span className="bio-mini-label">{label}</span>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bio-stack">
        <article className="bio-detail-card">
          <h2>完整内容</h2>
          <div className="bio-plain-text">
            {getDisplayFields(entry.fields).map((field, index) => {
              const showText = hasFieldText(field.value);
              const showBullets = Boolean(field.bullets?.length);
              return (
                <section key={`${field.label}-${index}`} className="bio-plain-section">
                  <h3>{field.label}</h3>
                  {showText ? <p>{field.value}</p> : null}
                  {!showText && !showBullets ? <p>暂无</p> : null}
                  {showBullets ? (
                    <ul>
                      {field.bullets!.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              );
            })}
          </div>
        </article>

        {entry.crawlScriptSource ? (
          <article className="bio-detail-card">
            <details>
              <summary>爬取脚本</summary>
              <pre className="bio-code-block">{entry.crawlScriptSource}</pre>
            </details>
          </article>
        ) : null}
      </section>
    </main>
  );
}
