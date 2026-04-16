import type { BioAiEntry, BioAiField, BioAiGroup } from '@/lib/bioAiData';

type FieldOverrides = Record<string, string>;

const dryOverviewPoints = [
  "experiment_data：真实实验数据与受控访问目录主层。代表资源：GEO、SRA、BioProject、BioSample、GDC / TCGA、ENCODE、HCA Data Portal、PRIDE、MassIVE、MetaboLights、EGA / dbGaP。",
  "derived_dataset：整理/派生视图层。代表资源：cBioPortal、CELLxGENE Discover、BioStudies。",
  "dataset_router：联盟索引与跨库发现层。代表资源：ProteomeXchange、OmicsDI。",
  "reference_annotation：参考基因组与注释骨架层。代表资源：Ensembl、GENCODE。",
  "protocol_raw_text：公开 protocol / 方法正文层。当前本地主库以 protocols.io、Bio-protocol、Nature Protocols、STAR Protocols、Protocol Online、OpenWetWare 等为主，已做全文抽取、严格清洗和协议级去重。",
  "protocol_supplement：长尾补充层【难洗】。OpenWetWare 已清掉 notebook/calendar/template 等非方法页，Protocol Online 已做缓存/分段重复归档，二者仍作为长尾补充层使用。",
  "protocol_reference：强参考层、许可化参考层与专题层。代表资源：STAR Protocols、Current Protocols、Springer Nature Experiments / SpringerProtocols、Methods and Protocols (MDPI)、JMIR Research Protocols、JoVE、Biology Methods and Protocols。",
  "workflow_definition：workflow / descriptor / code 流程层。当前本地已落地 WorkflowHub、nf-core、Galaxy Training Network 及少量 Dockstore 探测样本，适合作为 dry-lab workflow 与教程层。"
];

const wetOverviewPoints = [
  "protocol_raw_text：公开协议原文主层，当前已落地并抽样复核 protocols.io、Bio-protocol、Nature Protocols、STAR Protocols、Protocol Online、OpenWetWare、Biology Methods and Protocols、JMIR Research Protocols 等来源。",
  "protocol_supplement：长尾补充层，用于补边缘 protocol、历史表达和社区页面；OpenWetWare / Protocol Online 已经过非方法页清洗和协议级去重，但仍建议训练前按标签再筛。",
  "protocol_reference：强参考层或许可化参考层，用于 schema 对齐、结构 benchmark 和高质量表达参照。",
  "domain_special：专题方法层，用于医学与健康研究方法的专项补充。",
  "resource_identity：资源身份层，用于把试剂、细胞系、质粒和化学实体映射到稳定对象。",
  "literature_bridge：论文桥接层，用于把论文、方法描述、开放全文与实验对象回连起来。"
];

const wetConclusionPoints = [
  "湿实验主库当前已形成 protocols.io、Bio-protocol、Nature Protocols、STAR Protocols、Protocol Online、OpenWetWare 等多源有效语料；核心训练应优先使用清洗后的 wet 子集和 protocol-level canonical 记录。",
  "OpenWetWare 与 Protocol Online 已完成明显非方法页清洗和重复归档，仍适合作为长尾补充层，而不是核心 schema 定义源。",
  "STAR Protocols 和 Biology Methods and Protocols 已落地为可抽样语料，更适合作为结构参考层；Current Protocols、Springer Nature Experiments / SpringerProtocols、Methods and Protocols (MDPI) 仍按公开调研结论保留为参考/待扩展层。",
  "JMIR Research Protocols 抽样显示以临床/研究方案和 dry/hybrid 研究设计为主体，不应替代通用湿实验 SOP 主层。",
  "WorkflowHub、nf-core、Galaxy Training Network 与少量 Dockstore 探测样本已形成 dry-lab workflow / training 层，应与湿实验 protocol 主库分层使用。"
];

const groupSummaryOverrides: Record<string, string[]> = {
  overview: dryOverviewPoints,
  "wetlab-conclusion": wetConclusionPoints
};

const wetGroupSummaryOverrides: Record<string, string[]> = {
  overview: wetOverviewPoints,
  "wetlab-conclusion": wetConclusionPoints
};

const entryFieldOverrides: Record<string, FieldOverrides> = {
  "protocols.io": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 23072 条；本轮按固定随机种子抽样 462 条（2.0%），标签分布为 wet 17981，dry 3900，hybrid 994，unknown 197。样本内容分布为 bench_wet_protocol 293，method_article_review 23，unclear_or_general_method 52，computational_bioinformatics 33，non_method_or_admin 27，training_tutorial 9，clinical_study_protocol 25。清洗去重后仍是最大主库；抽样显示以湿实验 SOP 和 protocols.io 多版本协议为主，夹有部分 dry/hybrid 分析协议，非方法页已显著下降。",
    "数据内容特点与适用场景": "抽样显示以 bench wet protocol 为主体，同时包含计算分析、临床/调查研究、教程和少量仍需后续复核的泛方法页。适合作为最大 protocol 原文主库、版本化步骤语料和 wet/dry/hybrid 混合协议训练源。",
    "下载单元数量": "当前本地有效语料 23,072 条（wet 17,981 / dry 3,900 / hybrid 994 / unknown 197）；另有 3,053 条 protocols.io 重复版本已归档到 wet/dedup/archived_duplicates。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 5657.8 字符，中位数约 4491.0 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "已完成 API/页面抓取后的本地清洗、非方法页剔除和协议级去重；当前主风险是少量 unknown 与跨版本细节差异，需要在训练前按任务再筛。",
    "单平台爬取实验": "本地已落地并完成全库抽样复核：清洗后 wet 17,981 条，dry 3,900 条，hybrid 994 条，unknown 197 条。"
  },
  "Bio-protocol": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 4848 条；本轮按固定随机种子抽样 97 条（2.0%），标签分布为 wet 4431，dry 184，hybrid 224，unknown 9。样本内容分布为 bench_wet_protocol 63，method_article_review 28，non_method_or_admin 5，training_tutorial 1。高度集中于可复现湿实验协议，步骤、试剂、设备与注意事项结构较稳定，适合做核心 schema 锚点。",
    "数据内容特点与适用场景": "抽样以标准湿实验 SOP 为主，包含 PCR、细胞/组织处理、检测、成像、纯化、动物实验等；少量 dry/hybrid 多为图像分析、统计或方法综述。适合做核心湿实验 schema 锚点。",
    "下载单元数量": "当前本地有效语料 4,848 条（wet 4,431 / dry 184 / hybrid 224 / unknown 9）。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 11188 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "本地已完成正文提取、分类与抽样复核；总体质量稳定，unknown 仅 9 条，适合进入核心 wet protocol 主库。",
    "单平台爬取实验": "本地已落地 4,848 条并完成 2% 抽样复核。"
  },
  "Nature Protocols": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 3515 条；本轮按固定随机种子抽样 71 条（2.0%），标签分布为 wet 3515。样本内容分布为 method_article_review 29，bench_wet_protocol 38，non_method_or_admin 1，training_tutorial 2，clinical_study_protocol 1。高质量长文协议与方法文章，材料、Procedure、Timing、Troubleshooting 等栏目完整，适合做结构 benchmark。",
    "数据内容特点与适用场景": "样本集中在高质量长文实验 protocol 与方法文章，Procedure、Timing、Troubleshooting、Anticipated results 等栏目完整，适合作为结构 benchmark 和 schema 参考层。",
    "下载单元数量": "当前本地有效导出 3,515 条 full-text 记录。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 11658.7 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "本地已有 3,515 条导出全文；仍按许可化参考层使用，不作为开放主训练库的唯一来源。",
    "单平台爬取实验": "本地已落地 3,515 条 full-text 记录，并完成 2% 抽样复核。"
  },
  "STAR Protocols": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 4318 条；本轮按固定随机种子抽样 87 条（2.0%），标签分布为 wet 4118，dry 143，hybrid 57。样本内容分布为 bench_wet_protocol 58，method_article_review 25，non_method_or_admin 1，computational_bioinformatics 3。结构化期刊协议，湿实验为主，同时保留少量计算/混合协议；文章级摘要与步骤描述质量较高。",
    "数据内容特点与适用场景": "抽样显示 wet protocol 占主导，也保留少量计算与混合协议；摘要、步骤、expected outcomes、limitations、troubleshooting 等结构质量较好，适合作为高质量模板层和评测层。",
    "下载单元数量": "当前本地有效语料 4,318 条（wet 4,118 / dry 143 / hybrid 57）。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 11872.3 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "本地已完成全文导入、LLM 复分与 dry/hybrid 边界复核；当前语料可用，不再只停留在访问探测层。",
    "单平台爬取实验": "本地已落地 4,318 条，并完成 2% 抽样复核。"
  },
  "OpenWetWare": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 4036 条；本轮按固定随机种子抽样 81 条（2.0%），标签分布为 wet 3505，dry 41，hybrid 37，unknown 453。样本内容分布为 bench_wet_protocol 57，unclear_or_general_method 13，non_method_or_admin 6，computational_bioinformatics 3，training_tutorial 1，method_article_review 1。经严格清洗后仍保留较多长尾 wet SOP，但 wiki 噪声和泛方法页风险高于主库。",
    "数据内容特点与适用场景": "适合作为历史实验配方、实验室 SOP 和社区长尾表达补充；不适合作为核心 schema 定义源。训练前建议优先取 wet 且排除 unknown / unclear / non_method。",
    "下载单元数量": "当前本地有效语料 4,036 条（wet 3,505 / dry 41 / hybrid 37 / unknown 453）；另有 485 条 notebook/calendar/template 等非方法页已移出到 excluded_non_method。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 5344.3 字符，中位数约 4437 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "已完成 notebook、calendar、template、GitHub 教程、设备安装、catalog、consent form 等非方法页清洗；剩余 unknown 仍应在入训练前二次筛。",
    "单平台爬取实验": "本地已落地 4,036 条有效记录，并完成 2% 抽样复核。"
  },
  "Protocol Online": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 1899 条；本轮按固定随机种子抽样 38 条（2.0%），标签分布为 wet 1894，dry 4，hybrid 1。样本内容分布为 bench_wet_protocol 32，method_article_review 1，clinical_study_protocol 2，training_tutorial 1，computational_bioinformatics 1，unclear_or_general_method 1。整体以湿实验协议为主，但页面粒度和正文完整度弱于 protocols.io / Bio-protocol。",
    "数据内容特点与适用场景": "适合作为长尾 protocol 补充层，尤其补充旧式实验方法表达；不建议作为主 schema 源。已归档缓存/分段重复记录。",
    "下载单元数量": "当前本地有效语料 1,899 条（wet 1,894 / dry 4 / hybrid 1）；另有 212 条重复缓存/分段记录已协议级归档。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 5439.3 字符，中位数约 4263.5 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "本地已完成分类与协议级去重；可作为长尾补充层使用，但记录粒度和正文完整度不如 protocols.io / Bio-protocol。",
    "单平台爬取实验": "本地已落地 1,899 条有效记录，并完成 2% 抽样复核。"
  },
  "Biology Methods and Protocols": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 373 条；本轮按固定随机种子抽样 8 条（2.1%），标签分布为 wet 248，dry 93，hybrid 32。样本内容分布为 computational_bioinformatics 2，bench_wet_protocol 3，method_article_review 3。规模不大，但 article 式方法正文质量较高，适合作为结构参考和小规模高质补充。",
    "数据内容特点与适用场景": "兼有湿实验方法、计算方法与方法文章；适合作为结构参考层，不宜按纯 wet SOP 主库处理。",
    "下载单元数量": "当前本地有效语料 373 条（wet 248 / dry 93 / hybrid 32）。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 12000 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "已完成 fulltext 提取和分类；建议按 wet/dry/hybrid 标签分层使用。"
  },
  "JMIR Research Protocols": {
    "数据规模与更新情况": "当前本地清洗/去重后语料共 5595 条；本轮按固定随机种子抽样 112 条（2.0%），标签分布为 wet 132，dry 5207，hybrid 229，unknown 27。样本内容分布为 method_article_review 23，training_tutorial 6，clinical_study_protocol 81，bench_wet_protocol 1，computational_bioinformatics 1。主体是临床/研究方案与研究设计，不是通用 wet bench protocol 主库。",
    "数据内容特点与适用场景": "适合补临床研究方案、问卷/访谈/数字健康研究流程、伦理与招募设计等专题方法；不应替代 bench wet SOP。",
    "下载单元数量": "当前本地有效语料 5,595 条（wet 132 / dry 5,207 / hybrid 229 / unknown 27）。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 11768 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "已完成 fulltext 提取和分类；应作为 domain_special / study protocol 层，训练 wet bench agent 时默认不混入。"
  },
  "Galaxy Training Network": {
    "数据规模与更新情况": "当前本地两批导出共 670 条教程/训练记录；本轮分别抽样 8 条与 7 条，标签均为 dry。样本内容包含 training_tutorial、computational_bioinformatics 和少量被教程包裹的湿实验背景说明。",
    "数据内容特点与适用场景": "适合作为 dry-lab workflow 教程、Galaxy 工具教学和分析任务编排语料；不应归入湿实验 protocol 主层。",
    "下载单元数量": "当前本地有效语料 670 条教程/训练记录。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 12000 字符，中位数约 12000 字符；这是当前本地 fulltext/元数据文本口径，不代表附件总大小。",
    "准入判断": "已落地为 dry-lab training 层；建议与 WorkflowHub / nf-core 一起作为 workflow_definition 使用。"
  },
  "WorkflowHub": {
    "数据规模与更新情况": "当前本地 bundle export 有 1,399 条 workflow 记录，另有少量 API 探测样本；本轮抽样 28 条（2.0%），全部为 dry。样本内容以 workflow_registry_metadata 23 条和 computational_bioinformatics 5 条为主。",
    "数据内容特点与适用场景": "适合作为 workflow registry 元数据、RO-Crate / workflow descriptor 发现层；正文不等同 protocol fulltext，需要和 descriptor 文件、repo 链接一起使用。",
    "下载单元数量": "当前本地有效 workflow bundle 1,399 条；另有 5 条 API 探测样本。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 4552.7 字符，中位数约 3765 字符；这是当前本地元数据文本口径，不代表 workflow 附件总大小。",
    "准入判断": "已落地为 dry-lab workflow registry 层，适合做发现与路由，不适合混作湿实验 SOP。"
  },
  "nf-core": {
    "数据规模与更新情况": "当前本地 bundle export 有 149 条 pipeline / 项目记录，另有少量探测样本；本轮抽样 3 条（2.0%），全部为 dry 且均归入 computational_bioinformatics。",
    "数据内容特点与适用场景": "适合作为标准化 Nextflow pipeline 目录、参数说明与 dry-lab workflow 模板层；不属于 wet protocol。",
    "下载单元数量": "当前本地有效 pipeline / 项目记录 149 条；另有 5 条探测样本。",
    "单个下载单元平均大小": "本轮 2% 样本正文平均约 12000 字符，中位数约 12000 字符；这是当前本地元数据/说明文本口径，不代表代码仓库总大小。",
    "准入判断": "已落地为 dry-lab workflow_definition 层，适合与 WorkflowHub / Dockstore 做交叉索引。"
  },
  "Dockstore": {
    "数据规模与更新情况": "当前本地探测样本 5 条，全部为 dry；本轮抽样 1 条，归入 workflow_registry_metadata。现阶段只可视为连接性和对象结构探测，不代表全库总量。",
    "数据内容特点与适用场景": "适合作为 workflow/tool registry 探测层和后续扩展入口；当前本地样本量太小，不应用作统计性训练语料。",
    "下载单元数量": "当前本地探测样本 5 条。",
    "单个下载单元平均大小": "本轮样本正文约 752 字符；这是当前本地元数据文本口径，不代表 workflow 附件总大小。",
    "准入判断": "当前只完成少量 API 探测，应保留为待扩展 dry-lab workflow registry。"
  }
};

function overrideFields(fields: BioAiField[], overrides?: FieldOverrides): BioAiField[] {
  if (!overrides) {
    return fields;
  }

  return fields.map((field) => {
    const value =
      overrides[field.label] ??
      (field.label === "单平台复核结论" ? overrides["单平台爬取实验"] : undefined) ??
      (field.label === "单平台爬取实验" ? overrides["单平台复核结论"] : undefined);
    return value ? { ...field, value } : field;
  });
}

function overrideEntry(entry: BioAiEntry): BioAiEntry {
  const overrides = entryFieldOverrides[entry.title];
  return overrides ? { ...entry, fields: overrideFields(entry.fields, overrides) } : entry;
}

function overrideGroup(group: BioAiGroup, summaryOverrides: Record<string, string[]>): BioAiGroup {
  const summary_points = summaryOverrides[group.slug] ?? group.summary_points;

  return {
    ...group,
    ...(summary_points ? { summary_points } : {}),
    entries: group.entries.map(overrideEntry)
  };
}

export function applyBioAiAnalysisOverrides(
  dryGroups: BioAiGroup[],
  wetGroups: BioAiGroup[]
): { dryGroups: BioAiGroup[]; wetGroups: BioAiGroup[] } {
  return {
    dryGroups: dryGroups.map((group) => overrideGroup(group, groupSummaryOverrides)),
    wetGroups: wetGroups.map((group) => overrideGroup(group, wetGroupSummaryOverrides))
  };
}
