import Link from 'next/link';
import { notFound } from 'next/navigation';

import { bioAiDryGroups } from '@/lib/bioAiSource';
import { getDryFieldParams } from '@/lib/bioAiRoutes';

interface FieldPageProps {
  params: { slug: string; entrySlug: string; fieldSlug: string };
}

export function generateStaticParams() {
  return getDryFieldParams();
}

export const dynamicParams = false;

export default function FieldPage({ params }: FieldPageProps) {
  const group = bioAiDryGroups.find((item) => item.slug === params.slug);
  const entry = group?.entries.find((item) => item.slug === params.entrySlug);
  const fieldIndex = Number(params.fieldSlug);
  const field = Number.isInteger(fieldIndex) && fieldIndex >= 0 ? entry?.fields[fieldIndex] : undefined;

  if (!group || !entry || !field) {
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
          <Link href={`/raw-data/dry/${group.slug}`}>{group.title}</Link>
          <span>/</span>
          <Link href={`/raw-data/dry/${group.slug}/${entry.slug}`}>{entry.title}</Link>
          <span>/</span>
          <span>{field.label}</span>
        </div>
        <p className="bio-eyebrow">{entry.sectionNumber} / Field</p>
        <h1>{field.label}</h1>
      </section>

      <article className="bio-detail-card">
        {field.value ? <p>{field.value}</p> : <p>暂无</p>}
        {field.bullets?.length ? (
          <div className="bio-detail-list">
            {field.bullets.map((bullet) => (
              <div key={bullet} className="bio-detail-bullet">
                {bullet}
              </div>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
