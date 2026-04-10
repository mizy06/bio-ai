import {
  bioAiDryGroups as rawBioAiDryGroups,
  bioAiWetGroups as rawBioAiWetGroups,
  type BioAiGroup,
} from '@/lib/bioAiData';
import { crawlScriptOverrides } from '@/lib/bioAiScriptOverrides';

function applyCrawlScriptOverrides(groups: BioAiGroup[]): BioAiGroup[] {
  return groups.map((group) => ({
    ...group,
    entries: group.entries.map((entry) => {
      const override = entry.crawlScriptPath
        ? crawlScriptOverrides[entry.crawlScriptPath]
        : undefined;

      return override ? { ...entry, ...override } : entry;
    }),
  }));
}

export const bioAiDryGroups = applyCrawlScriptOverrides(rawBioAiDryGroups);
export const bioAiWetGroups = applyCrawlScriptOverrides(rawBioAiWetGroups);
export { getBioAiCardTitle } from '@/lib/bioAiDisplay';
