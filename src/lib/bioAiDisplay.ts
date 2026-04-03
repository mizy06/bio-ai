const GROUP_TITLE_MAP: Record<string, string> = {
  overview: 'Overview',
  'experiment-data': 'Experiment Data',
  'derived-dataset': 'Derived Datasets',
  'dataset-router': 'Dataset Router',
  'protocol-methods': 'Protocols and Methods',
  'workflow-registry': 'Workflow and Registry',
  'protocol-workflow-conclusion': 'Cross-layer Conclusion',
  'project-sample-access-annotation': 'Project, Sample, Access and Annotation',
  'protocol-raw-text': 'Protocol Raw Text',
  'protocol-supplement': 'Protocol Supplement',
  'protocol-reference-domain-special': 'Reference and Domain Special',
  'resource-identity-paper-bridge': 'Resource Identity and Paper Bridge',
  'wetlab-conclusion': 'Wet-lab Conclusion',
};

const ENTRY_TITLE_MAP: Record<string, string> = {
  'rrid-scirunch': 'RRID / SciCrunch',
};

function extractEnglishLikeText(title: string): string | null {
  const parenMatch = title.match(/[（(]([A-Za-z0-9 /.+_-]+)[)）]/);
  if (parenMatch?.[1]) {
    return parenMatch[1].trim();
  }

  const englishPart = title.match(/[A-Za-z][A-Za-z0-9 /.+_-]*/g)?.join(' / ').trim();
  if (englishPart) {
    return englishPart;
  }

  return null;
}

export function getBioAiCardTitle(slug: string, title: string): string {
  return GROUP_TITLE_MAP[slug] || ENTRY_TITLE_MAP[slug] || extractEnglishLikeText(title) || title;
}
