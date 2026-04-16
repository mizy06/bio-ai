import {
  bioAiDryGroups as rawBioAiDryGroups,
  bioAiWetGroups as rawBioAiWetGroups,
  type BioAiGroup,
} from '@/lib/bioAiData';
import { applyBioAiAnalysisOverrides } from '@/lib/bioAiAnalysisOverrides';
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

const analyzedGroups = applyBioAiAnalysisOverrides(
  applyCrawlScriptOverrides(rawBioAiDryGroups),
  applyCrawlScriptOverrides(rawBioAiWetGroups)
);

export const bioAiDryGroups = analyzedGroups.dryGroups;
export const bioAiWetGroups = analyzedGroups.wetGroups;
export { getBioAiCardTitle } from '@/lib/bioAiDisplay';
