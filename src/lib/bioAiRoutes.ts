import { bioAiDryGroups, bioAiWetGroups } from '@/lib/bioAiSource';

export function getDryGroupParams() {
  return bioAiDryGroups.map((group) => ({
    slug: group.slug,
  }));
}

export function getWetGroupParams() {
  return bioAiWetGroups.map((group) => ({
    slug: group.slug,
  }));
}

export function getDryEntryParams() {
  return bioAiDryGroups.flatMap((group) =>
    group.entries.map((entry) => ({
      slug: group.slug,
      entrySlug: entry.slug,
    })),
  );
}

export function getWetEntryParams() {
  return bioAiWetGroups.flatMap((group) =>
    group.entries.map((entry) => ({
      slug: group.slug,
      entrySlug: entry.slug,
    })),
  );
}

export function getDryFieldParams() {
  return bioAiDryGroups.flatMap((group) =>
    group.entries.flatMap((entry) =>
      entry.fields.map((_, index) => ({
        slug: group.slug,
        entrySlug: entry.slug,
        fieldSlug: String(index),
      })),
    ),
  );
}
