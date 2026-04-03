type InputField = {
  label: string;
  value?: string;
  bullets?: string[];
};

export type DisplayField = {
  label: string;
  value?: string;
  bullets?: string[];
};

const HIDDEN_FORMAT_LABELS = new Set([
  '文件全集是否闭合',
  '文件格式全集是否闭合',
  '格式全集是否闭合',
  '文件格式闭合性',
]);

const CERTAIN_FORMAT_LABELS = new Set(['闭合部分', '闭合', '闭合核心标准', '消费层闭合']);
const UNCERTAIN_FORMAT_LABELS = new Set(['不闭合部分', '不闭合']);

function cleanPieces(parts: Array<string | undefined>) {
  return parts.map((part) => (part || '').trim()).filter(Boolean);
}

function parseLegacyFormatSummary(value?: string): DisplayField[] {
  const text = (value || '').trim();
  if (!text) return [];

  const certainParts: string[] = [];
  const uncertainParts: string[] = [];

  const certainMatch = text.match(/闭合(?:核心标准|部分)?(?:为|：)([^；。]+)/);
  if (certainMatch?.[1]) {
    certainParts.push(certainMatch[1].trim());
  } else {
    const mostlyMatch = text.match(/以\s*([^；。]+?)\s*为主/);
    if (mostlyMatch?.[1]) {
      certainParts.push(mostlyMatch[1].trim());
    }
  }

  const uncertainMatch = text.match(/不闭合部分?(?:为|：)([^。]+)/);
  if (uncertainMatch?.[1]) {
    uncertainParts.push(uncertainMatch[1].trim());
  } else if (/依具体|依来源而变|未见官方|未给全站|不构成封闭|权限受限/.test(text)) {
    uncertainParts.push(text);
  }

  const result: DisplayField[] = [];
  if (certainParts.length) {
    result.push({
      label: '可以确定的文件格式',
      value: cleanPieces(certainParts).join('；'),
    });
  }
  if (uncertainParts.length) {
    result.push({
      label: '是否有不确定的文件格式',
      value: '有',
      bullets: cleanPieces(uncertainParts),
    });
  }
  return result;
}

function normalizeField(field: InputField): DisplayField[] {
  if (HIDDEN_FORMAT_LABELS.has(field.label)) {
    return parseLegacyFormatSummary(field.value);
  }

  if (CERTAIN_FORMAT_LABELS.has(field.label)) {
    return [
      {
        label: '可以确定的文件格式',
        value: field.value,
        bullets: field.bullets,
      },
    ];
  }

  if (UNCERTAIN_FORMAT_LABELS.has(field.label)) {
    const details = cleanPieces([field.value, ...(field.bullets || [])]);
    return [
      {
        label: '是否有不确定的文件格式',
        value: details.length ? '有' : '没有',
        bullets: details.length ? details : undefined,
      },
    ];
  }

  return [field];
}

export function hasFieldText(value?: string) {
  return Boolean(value && value.trim());
}

export function getDisplayFields(fields: InputField[]) {
  return fields.flatMap(normalizeField);
}
