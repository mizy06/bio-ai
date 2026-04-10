import {
  bioAiDryGroups as rawBioAiDryGroups,
  bioAiWetGroups as rawBioAiWetGroups,
  type BioAiGroup,
} from '@/lib/bioAiData';
import { crawlScriptSourceOverrides } from '@/lib/bioAiScriptOverrides';

function applyCrawlScriptOverrides(groups: BioAiGroup[]): BioAiGroup[] {
  return groups.map((group) => ({
    ...group,
    entries: group.entries.map((entry) => {
      const override = entry.crawlScriptPath
        ? crawlScriptSourceOverrides[entry.crawlScriptPath]
        : undefined;

      return override ? { ...entry, crawlScriptSource: override } : entry;
    }),
  }));
}

export const bioAiDryGroups = applyCrawlScriptOverrides(rawBioAiDryGroups);
export const bioAiWetGroups = applyCrawlScriptOverrides(rawBioAiWetGroups);
export { getBioAiCardTitle } from '@/lib/bioAiDisplay';
