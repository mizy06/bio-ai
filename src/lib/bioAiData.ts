export type BioAiField = { label: string; value: string; bullets?: string[] };
export type BioAiEntry = {
  title: string;
  slug: string;
  sectionNumber: string;
  summary: string;
  resourceType: string;
  recommendedLevel: string;
  recommendedUnit: string;
  recommendedKey: string;
  fields: BioAiField[];
  crawlPseudocode?: string;
  crawlScriptPath?: string;
  crawlCommand?: string;
  crawlOutputPath?: string;
  crawlScriptSource?: string;
};
export type BioAiGroup = {
  title: string;
  slug: string;
  sectionNumber: string;
  description: string;
  entries: BioAiEntry[];
  summary_points?: string[];
};

export const bioAiDryOverviewPoints: string[] = [
  "experiment_data：真实实验数据与受控访问目录主层。代表资源：GEO、SRA、BioProject、BioSample、GDC / TCGA、ENCODE、HCA Data Portal、PRIDE、MassIVE、MetaboLights、EGA / dbGaP。",
  "derived_dataset：整理/派生视图层。代表资源：cBioPortal、CELLxGENE Discover、BioStudies。",
  "dataset_router：联盟索引与跨库发现层。代表资源：ProteomeXchange、OmicsDI。",
  "reference_annotation：参考基因组与注释骨架层。代表资源：Ensembl、GENCODE。",
  "protocol_raw_text：公开 protocol / 方法正文层。代表资源：protocols.io、Bio-protocol、Nature Protocols、Cold Spring Harbor Protocols。",
  "protocol_supplement：长尾补充层【难洗】。代表资源：OpenWetWare、Protocol Online。",
  "protocol_reference：强参考层、许可化参考层与专题层。代表资源：STAR Protocols、Current Protocols、Springer Nature Experiments / SpringerProtocols、Methods and Protocols (MDPI)、JMIR Research Protocols、JoVE、Biology Methods and Protocols。",
  "workflow_definition：workflow / descriptor / code 流程层。代表资源：WorkflowHub、Dockstore、nf-core、Galaxy workflows / Galaxy platform、Galaxy Training Network、Bioconductor Workflows、myExperiment。"
];

export const bioAiWetOverviewPoints: string[] = [
  "protocol_raw_text：公开协议原文主层，优先纳入可直接抽取步骤、材料、试剂、注意事项和版本信息的平台。",
  "protocol_supplement：长尾补充层，用于补边缘 protocol、历史表达和社区页面，不作为一期核心主库。",
  "protocol_reference：强参考层或许可化参考层，用于 schema 对齐、结构 benchmark 和高质量表达参照。",
  "domain_special：专题方法层，用于医学与健康研究方法的专项补充。",
  "resource_identity：资源身份层，用于把试剂、细胞系、质粒和化学实体映射到稳定对象。",
  "literature_bridge：论文桥接层，用于把论文、方法描述、开放全文与实验对象回连起来。"
];

export const bioAiDryGroups: BioAiGroup[] = [
  {
    "title": "面向干实验 Agent Raw 数据库的资源分层总览",
    "slug": "overview",
    "sectionNumber": "1",
    "description": "先看 raw 数据总分层、对象结构与落表建议，建立完整的 Bio-AI 数据导航视角。",
    "entries": [],
    "summary_points": [
      "experiment_data：真实实验数据与受控访问目录主层。代表资源：GEO、SRA、BioProject、BioSample、GDC / TCGA、ENCODE、HCA Data Portal、PRIDE、MassIVE、MetaboLights、EGA / dbGaP。",
      "derived_dataset：整理/派生视图层。代表资源：cBioPortal、CELLxGENE Discover、BioStudies。",
      "dataset_router：联盟索引与跨库发现层。代表资源：ProteomeXchange、OmicsDI。",
      "reference_annotation：参考基因组与注释骨架层。代表资源：Ensembl、GENCODE。",
      "protocol_raw_text：公开 protocol / 方法正文层。代表资源：protocols.io、Bio-protocol、Nature Protocols、Cold Spring Harbor Protocols。",
      "protocol_supplement：长尾补充层【难洗】。代表资源：OpenWetWare、Protocol Online。",
      "protocol_reference：强参考层、许可化参考层与专题层。代表资源：STAR Protocols、Current Protocols、Springer Nature Experiments / SpringerProtocols、Methods and Protocols (MDPI)、JMIR Research Protocols、JoVE、Biology Methods and Protocols。",
      "workflow_definition：workflow / descriptor / code 流程层。代表资源：WorkflowHub、Dockstore、nf-core、Galaxy workflows / Galaxy platform、Galaxy Training Network、Bioconductor Workflows、myExperiment。"
    ]
  },
  {
    "title": "实验数据主仓库（experiment_data）",
    "slug": "experiment-data",
    "sectionNumber": "2",
    "description": "直接服务真实下载、对象图构建和分析调度的主仓库入口，覆盖核心实验数据平台。",
    "entries": [
      {
        "title": "GEO",
        "slug": "geo",
        "sectionNumber": "2.1",
        "summary": "",
        "resourceType": "实验数据仓库 / 功能基因组学公共库。",
        "recommendedLevel": "",
        "recommendedUnit": "以 GSE / GSM / GPL / GDS 记录为主；结构化文件优先入 Series Matrix / MINiML / SOFT，supplementary files 先保留清单与链接。",
        "recommendedKey": "GSE / GSM / GPL / GDS accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 功能基因组学公共库。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为表达组学与功能基因组学的主入库源，同时保留项目层（GSE）和样本层（GSM），方便任务筛选、样本检索和下载调度。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 GSE / GSM / GPL / GDS 记录为主；结构化文件优先入 Series Matrix / MINiML / SOFT，supplementary files 先保留清单与链接。"
          },
          {
            "label": "推荐结构表",
            "value": "geo_series 主表、geo_sample 子表、geo_platform 平台表、geo_dataset 派生表、geo_series_sample_map 关联表、geo_file_asset 文件表。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "NCBI Gene Expression Omnibus，覆盖 转录组 / 功能基因组；可提供 Series、Sample、Platform、processed data、部分差异表达与元数据。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于持续滚动更新型公共库；官方 E-utilities 的 gds 口径是混合库，不能直接当“数据集总数”，后续清洗必须按 GSE/GSM/GPL/GDS 前缀再分层。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 表型+表达矩阵+元数据；官方对象主轴可概括为 gds(Entrez db) → GSE / GSM / GPL / GDS；GSE → linked GSM / GPL；GSE → Series Matrix / MINiML / SOFT；主要消费格式可概括为 闭合部分：SOFT、MINiML(XML)、Series Matrix(TXT/GZ)；不闭合部分：supplementary files 官方未定义全站封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 课题检索、复现公开分析、差异表达/聚类/富集分析 benchmarking。为什么值得补：最常见的 dry-lab 入门数据源之一；和文献联动强。主要提醒：processed data 质量参差不齐；不同平台需统一预处理。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 NCBI 接口/下载通道。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 GSE 口径，当前通过 NCBI E-utilities 可核约 280,804 个 Series。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 GSE 的 Series Matrix 文件抽样计算，平均约 3.44 KB；这只代表结构化矩阵文件，不代表 supplementary files 总大小。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；元数据批量检索适合走 Entrez E-utilities，结构化文件适合走 GEO 官方 HTTP/FTP 目录，supplementary files 仍需按 accession 枚举，不宜假设统一 schema。"
          },
          {
            "label": "推荐批量主键",
            "value": "GSE / GSM / GPL / GDS accession"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "Entrez E-utilities 搜索 / 分页",
            "value": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gds&term=gse%5BETYP%5D&retmax=1&retmode=json"
          },
          {
            "label": "官方下载说明",
            "value": "https://www.ncbi.nlm.nih.gov/geo/info/download.html"
          },
          {
            "label": "FTP / HTTP 根目录",
            "value": "https://ftp.ncbi.nlm.nih.gov/geo/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "gds(Entrez db) → GSE / GSM / GPL / GDS",
              "GSE → linked GSM / GPL",
              "GSE → Series Matrix / MINiML / SOFT",
              "GSM / GPL / GDS → full record / supplementary files"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "SOFT、MINiML(XML)、Series Matrix(TXT/GZ)"
          },
          {
            "label": "不闭合部分",
            "value": "supplementary files 官方未定义全站封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，元数据检索与官方文件入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.ncbi.nlm.nih.gov/geo/ ，https://www.ncbi.nlm.nih.gov/geo/info/datasets.html"
          }
        ],
        "crawlPseudocode": "1. 调用 Entrez ESearch(`db=gds`) 先枚举 `gds` 库中的 GEO 记录。\n2. 按 accession 前缀把返回结果拆分成 `GSE / GSM / GPL / GDS` 四类对象。\n3. 对 `GSE` 再下钻到 `Series Matrix / MINiML / SOFT` 官方文件。\n4. 对 `GSM / GPL` 只补抓对应详情页和 supplementary file 链接。\n5. 把 accession、对象类型、详情链接和下载链接分别落表，而不是混成单层记录。",
        "crawlScriptPath": "tools/platform_crawlers/dry/geo.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, fetch_text, save_snapshot\n\n\ndef main() -> None:\n    search = fetch_json(\"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=gds&term=gse[ETYP]&retmax=5&retmode=json\")\n    readme = fetch_text(\"https://ftp.ncbi.nlm.nih.gov/geo/README.txt\")\n    payload = {\n        \"search_count\": ((search.get(\"json\") or {}).get(\"esearchresult\") or {}).get(\"count\"),\n        \"sample_ids\": ((search.get(\"json\") or {}).get(\"esearchresult\") or {}).get(\"idlist\"),\n        \"ftp_readme_preview\": readme.get(\"text\", \"\")[:300],\n    }\n    print(save_snapshot(\"dry/geo.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/geo.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/geo.json"
      },
      {
        "title": "SRA",
        "slug": "sra",
        "sectionNumber": "2.2",
        "summary": "",
        "resourceType": "实验数据仓库 / 原始测序归档。",
        "recommendedLevel": "",
        "recommendedUnit": "以 SRP / SRX / SRR 层级记录和 Run 级元数据表为主，原始文件通过官方工具按需拉取，不建议直接镜像全量 FASTQ。",
        "recommendedKey": "SRP / SRX / SRR accession 或 BioProject accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 原始测序归档。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为测序类干实验任务最底层、最接近 raw 的公共入口；对重跑 RNA-seq、WGS/WES、amplicon 等流程尤其关键。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 SRP / SRX / SRR 层级记录和 Run 级元数据表为主，原始文件通过官方工具按需拉取，不建议直接镜像全量 FASTQ。"
          },
          {
            "label": "推荐结构表",
            "value": "sra_study 主表、sra_experiment 实验表、sra_run 运行表、sra_biosample_link、sra_bioproject_link、sra_file_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "NCBI Sequence Read Archive，覆盖 原始测序数据；可提供 raw reads、alignment info、项目级元数据。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于超大规模、持续更新的原始测序归档；更适合按项目、experiment、run 维度检索与调度，而不是依赖一个静态全站总量。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 FASTQ/BAM + metadata；官方对象主轴可概括为 Study(SRP) → Experiment(SRX) → Run(SRR)；BioProject → BioSample → Experiment(SRX) → Run(SRR)；Run(SRR) → metadata table / manifest / download；主要消费格式可概括为 闭合部分：SRA、FASTQ；不闭合部分：部分项目还会挂接其他分析文件，官方未给全站封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 从原始数据重跑 RNA-seq / WGS / WES / amplicon 分析流程。为什么值得补：做‘analysis agent’时最接近真实复现任务。主要提醒：下载和计算成本高；需重点处理样本信息与 QC。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放为主；程序化访问方式为 NCBI 下载/云访问。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "若按官方 db=sra 记录口径统计，当前全库可核约 43,560,760 条记录；后续清洗入库时仍建议把主键拆回 SRP / SRX / SRR 层级。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条近期单-run 记录的 total_size 字段抽样计算，平均约 232.03 MB；该值对应记录级归档大小，不代表所有 SRR 的真实全局平均。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；优先入口适合选择 Entrez / Run Selector / SRA Toolkit，原始文件下载不宜依赖网页 HTML 抓取。"
          },
          {
            "label": "推荐批量主键",
            "value": "SRP / SRX / SRR accession 或 BioProject accession"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "Entrez E-utilities 搜索 / 分页",
            "value": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=sra&term=bioproject&retmax=1&retmode=json"
          },
          {
            "label": "SRA 下载文档",
            "value": "https://www.ncbi.nlm.nih.gov/sra/docs/sradownload"
          },
          {
            "label": "Run Selector 入口",
            "value": "https://trace.ncbi.nlm.nih.gov/Traces/study/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "Study(SRP) → Experiment(SRX) → Run(SRR)",
              "BioProject → BioSample → Experiment(SRX) → Run(SRR)",
              "Run(SRR) → metadata table / manifest / download"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "SRA、FASTQ"
          },
          {
            "label": "不闭合部分",
            "value": "部分项目还会挂接其他分析文件，官方未给全站封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，元数据检索与官方下载入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.ncbi.nlm.nih.gov/sra ，https://www.ncbi.nlm.nih.gov/sra/docs/"
          }
        ],
        "crawlPseudocode": "1. 调用 Entrez ESearch(`db=sra`) 先拿到 study / experiment / run 的检索结果页。\n2. 从结果记录里抽取 `SRP / SRX / SRR` accession 和关联 `BioProject`。\n3. 优先保留 Run Selector / 官方下载文档里给出的批量下载通道。\n4. 对需要下钻的记录再补抓元数据，不直接依赖网页 HTML 还原对象关系。\n5. 把 `study -> experiment -> run` 和下载入口分开存储。",
        "crawlScriptPath": "tools/platform_crawlers/dry/sra.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    search = fetch_json(\"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=sra&term=bioproject&retmax=5&retmode=json\")\n    payload = {\n        \"count\": ((search.get(\"json\") or {}).get(\"esearchresult\") or {}).get(\"count\"),\n        \"idlist\": ((search.get(\"json\") or {}).get(\"esearchresult\") or {}).get(\"idlist\"),\n    }\n    print(save_snapshot(\"dry/sra.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/sra.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/sra.json"
      },
      {
        "title": "GDC / TCGA",
        "slug": "gdc-tcga",
        "sectionNumber": "2.3",
        "summary": "",
        "resourceType": "实验数据仓库 / 癌症多组学公共+受控平台。",
        "recommendedLevel": "",
        "recommendedUnit": "以 project / case / sample / file 关系图为主，下载侧优先保留 manifest、file metadata 和可公开文件链接。",
        "recommendedKey": "project_id / case_id / file_id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 癌症多组学公共+受控平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为癌症多组学主库；公开层可直接进入核心数据层，受控层更适合保留元数据、manifest 和授权状态，而不直接镜像受控文件。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 project / case / sample / file 关系图为主，下载侧优先保留 manifest、file metadata 和可公开文件链接。"
          },
          {
            "label": "推荐结构表",
            "value": "gdc_project、gdc_case、gdc_sample、gdc_aliquot、gdc_file、gdc_clinical_event、gdc_manifest。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "NCI Genomic Data Commons，覆盖 癌症多组学；可提供 标准化临床、基因组、转录组、表观组、蛋白组数据。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方 API 当前可核实约 91 个 projects、50,270 个 cases、1,271,450 个 files；状态接口显示公开版本为 Data Release 45.0，发布日期 2025-12-04。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 file 口径，当前可核实约 1,271,450 个公开文件记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按官方 file_size 字段抽样 5 个 file 计算，平均约 5.32 GB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 clinical + omics matrices/files；官方对象主轴可概括为 project → case → sample → portion → analyte → aliquot → file；project → case → diagnosis / treatment / follow_up；file → index / metadata / download / manifest；主要消费格式可概括为 目前官方可枚举主集合：BAM、BAI、BCF、BEDPE、CEL、CRAM、CRAI、CSV、IDAT、JSON、MAF、PDF、SVS、TAR、TSV、TXT、VCF、XML。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 癌症 cohort 构建、多组学关联分析、预后/亚型研究。为什么值得补：标准化程度高，适合做可复现分析 agent。主要提醒：受控数据访问合规要求高；任务设计要区分 open vs controlled。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放与受控并存；程序化访问方式为 Portal + API + transfer tool。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "本轮公开部分抓取成功，受控部分必须走授权 token 和官方数据传输通道；不应抓网页代替 API / manifest。"
          },
          {
            "label": "推荐批量主键",
            "value": "project_id / case_id / file_id"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "REST files 分页接口",
            "value": "https://api.gdc.cancer.gov/files?size=1&format=JSON"
          },
          {
            "label": "状态 / 版本接口",
            "value": "https://api.gdc.cancer.gov/status"
          },
          {
            "label": "官方数据传输工具说明",
            "value": "https://gdc.cancer.gov/access-data/gdc-data-transfer-tool"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "project → case → sample → portion → analyte → aliquot → file",
              "project → case → diagnosis / treatment / follow_up",
              "file → index / metadata / download / manifest"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "目前官方可枚举主集合",
            "value": "BAM、BAI、BCF、BEDPE、CEL、CRAM、CRAI、CSV、IDAT、JSON、MAF、PDF、SVS、TAR、TSV、TXT、VCF、XML"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，公开 API 与 manifest 入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://portal.gdc.cancer.gov/ ，https://gdc.cancer.gov/access-data ，https://api.gdc.cancer.gov/status"
          }
        ],
        "crawlPseudocode": "1. 先请求 GDC `status` 接口确认当前数据发布版本。\n2. 再通过 `files` 分页接口枚举公开和受控 `file_id`。\n3. 从每个 file 记录中抽取 `project / case / sample / data_type / access` 字段。\n4. 如需实际下载，只保留 manifest 与 transfer-tool 所需键值，不用网页跳转链路。\n5. 将 `project -> case -> file` 关系和 manifest 单独落盘。",
        "crawlScriptPath": "tools/platform_crawlers/dry/gdc_tcga.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    status = fetch_json(\"https://api.gdc.cancer.gov/status\")\n    files = fetch_json(\"https://api.gdc.cancer.gov/files?size=3&format=JSON\")\n    hits = ((files.get(\"json\") or {}).get(\"data\") or {}).get(\"hits\") or []\n    payload = {\n        \"release\": (status.get(\"json\") or {}).get(\"data_release\"),\n        \"sample_files\": [\n            {\n                \"id\": hit.get(\"id\"),\n                \"file_name\": hit.get(\"file_name\"),\n                \"data_type\": hit.get(\"data_type\"),\n                \"access\": hit.get(\"access\"),\n            }\n            for hit in hits\n        ],\n    }\n    print(save_snapshot(\"dry/gdc_tcga.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/gdc_tcga.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/gdc_tcga.json"
      },
      {
        "title": "ENCODE",
        "slug": "encode",
        "sectionNumber": "2.4",
        "summary": "",
        "resourceType": "实验数据仓库 / 规范化功能基因组平台。",
        "recommendedLevel": "",
        "recommendedUnit": "以 Experiment / File / Biosample / Donor 为主，批量侧优先入 metadata.tsv、JSON 搜索结果和文件清单。",
        "recommendedKey": "ENCODE accession（experiment / file / biosample）",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 规范化功能基因组平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为元数据质量较高、规范化程度较强的功能基因组学样板库；对训练“会选文件、会读 QC”的分析代理很有价值。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 Experiment / File / Biosample / Donor 为主，批量侧优先入 metadata.tsv、JSON 搜索结果和文件清单。"
          },
          {
            "label": "推荐结构表",
            "value": "encode_experiment、encode_file、encode_biosample、encode_donor、encode_replicate、encode_library。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "ENCODE Project Portal，覆盖 功能基因组 / 调控组；可提供 ChIP-seq、ATAC-seq、RNA-seq、single-cell 等实验与统一分析产物。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方搜索接口当前可核实约 27,967 个 experiments、30,497 个 biosamples、1,562,418 个 files；属于长期持续扩展型资源。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 File 口径，当前可核实约 1,562,418 个文件记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按官方 File 搜索结果中的 file_size 字段抽样 5 个 file 计算，平均约 1.59 MB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 raw + processed files + JSON metadata；官方对象主轴可概括为 Experiment → Replicate → Library → File；Biosample → Donor；Experiment → File → derived_from；主要消费格式可概括为 官方 search 可枚举：bed、bigWig、fastq、bam、bigBed、tsv、tar、txt、bedpe、bigInteract、hic、starch、tagAlign、gtf、sra、gff、idat、hdf5、pairs、rcc、sam、wig、fasta、vcf、csv、cndb、csfasta、h5ad、csqual、CEL、idx。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 功能基因组标准流程学习、质量控制、peak/表达分析。为什么值得补：元数据和质量标准都很强，适合训练“规范化分析 agent”。主要提醒：对象模型较复杂，需要先做 metadata 映射。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 Portal / metadata / structured JSON。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；批量枚举适合优先使用 JSON 搜索、metadata.tsv 和 batch_download，不宜用页面级抓取替代。"
          },
          {
            "label": "推荐批量主键",
            "value": "ENCODE accession（experiment / file / biosample）"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "JSON 搜索接口",
            "value": "https://www.encodeproject.org/search/?type=Experiment&format=json&limit=1"
          },
          {
            "label": "metadata.tsv 批量元数据导出",
            "value": "https://www.encodeproject.org/metadata/?type=Experiment&limit=1"
          },
          {
            "label": "batch_download 文件清单",
            "value": "https://www.encodeproject.org/batch_download/?type=Experiment&limit=1"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "Experiment → Replicate → Library → File",
              "Biosample → Donor",
              "Experiment → File → derived_from",
              "Annotation → File"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "官方 search 可枚举",
            "value": "bed、bigWig、fastq、bam、bigBed、tsv、tar、txt、bedpe、bigInteract、hic、starch、tagAlign、gtf、sra、gff、idat、hdf5、pairs、rcc、sam、wig、fasta、vcf、csv、cndb、csfasta、h5ad、csqual、CEL、idx"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，JSON 搜索、metadata 与 batch 下载入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.encodeproject.org/ ，https://www.encodeproject.org/about/data-access/ ，https://www.encodeproject.org/search/?type=Experiment&format=json&limit=1 ，https://www.encodeproject.org/robots.txt"
          }
        ],
        "crawlPseudocode": "1. 从 `search/?type=Experiment&format=json` 开始枚举实验级 JSON 记录。\n2. 同步抓取 `metadata.tsv` 与 `batch_download`，核对实验到文件的映射。\n3. 从实验 JSON 中抽取 accession、assay、biosample、file 列表。\n4. 对文件层再按 `file accession` 保留下载 URL、格式、assembly 和 output type。\n5. 最终分别沉淀 `experiment`、`biosample`、`file` 三层对象。",
        "crawlScriptPath": "tools/platform_crawlers/dry/encode.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    experiments = fetch_json(\"https://www.encodeproject.org/search/?type=Experiment&format=json&limit=1\")\n    payload = {\n        \"sample_accessions\": [item.get(\"accession\") for item in (experiments.get(\"json\") or {}).get(\"@graph\", [])],\n        \"status\": experiments.get(\"status\"),\n        \"content_type\": experiments.get(\"content_type\"),\n    }\n    print(save_snapshot(\"dry/encode.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/encode.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/encode.json"
      },
      {
        "title": "HCA Data Portal",
        "slug": "hca-data-portal",
        "sectionNumber": "2.5",
        "summary": "",
        "resourceType": "实验数据仓库 / 单细胞项目与文件门户。",
        "recommendedLevel": "",
        "recommendedUnit": "以 project UUID 为顶层入库单元，同时保留 file UUID、project metadata manifest、HCA-generated matrices 和 contributor matrices。",
        "recommendedKey": "project UUID / file UUID",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 单细胞项目与文件门户。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为单细胞原始项目、donor、样本和矩阵资产的主入口；对构建 donor-to-file 的真实对象图尤其重要。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 project UUID 为顶层入库单元，同时保留 file UUID、project metadata manifest、HCA-generated matrices 和 contributor matrices。"
          },
          {
            "label": "推荐结构表",
            "value": "hca_project、hca_donor、hca_specimen、hca_cell_suspension、hca_file、hca_matrix_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Human Cell Atlas Data Portal，覆盖 单细胞 / 多组学；可提供 社区生成的单细胞和多组学项目、donor/project 级信息。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官网首页当前可核实约 528 个 projects、11,243 个 donors、70,483,128 个 cells；门户版本显示为 v2.9.1-f49d5d4-dcp57。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 project UUID 口径，当前可核约 528 个 project；若按 file 口径需继续通过 Azul files 端点分批统计。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按官方 files 索引中的 size 字段抽样 5 个 file 计算，平均约 48.82 MB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 single-cell matrices + rich metadata；官方对象主轴可概括为 project → project metadata TSV；project → donor → specimen → cell suspension → library preparation → sequence file；project → analysis process → analysis file；主要消费格式可概括为 闭合部分：TSV(project metadata manifest)；不闭合部分：贡献者矩阵和项目原始/分析文件官方明确不是封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 单细胞数据检索、atlas 级复用、细胞类型参考分析。为什么值得补：单细胞方向的重要公开数据底座。主要提醒：不同项目预处理策略不一，跨项目整合复杂。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 门户/下载。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；程序化入口适合以 Azul 数据服务和项目矩阵 / manifest 为主，不宜把前端 HTML 当主数据源。"
          },
          {
            "label": "推荐批量主键",
            "value": "project UUID / file UUID"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "Azul projects 分页接口",
            "value": "https://service.azul.data.humancellatlas.org/index/projects?catalog=dcp57&size=1"
          },
          {
            "label": "Azul files 分页接口",
            "value": "https://service.azul.data.humancellatlas.org/index/files?catalog=dcp57&size=1"
          },
          {
            "label": "门户说明页",
            "value": "https://data.humancellatlas.org/about"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "project → project metadata TSV",
              "project → donor → specimen → cell suspension → library preparation → sequence file",
              "project → analysis process → analysis file",
              "project → HCA-generated matrix",
              "project → contributor-generated matrix"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "TSV(project metadata manifest)"
          },
          {
            "label": "不闭合部分",
            "value": "贡献者矩阵和项目原始/分析文件官方明确不是封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，Azul API 与项目级入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://data.humancellatlas.org/ ，https://data.humancellatlas.org/about"
          }
        ],
        "crawlPseudocode": "1. 先调 Azul `projects` 接口枚举 project UUID。\n2. 再调 Azul `files` 接口补齐 file UUID、format、size 和 source 数据。\n3. 把 project 记录里的 donor / specimen / cell suspension 概览与文件层拆开保存。\n4. 后续若需要大文件下载，再从 project/file 关系反向生成 manifest。\n5. 不要把前端 portal 页面当作主抓取入口。",
        "crawlScriptPath": "tools/platform_crawlers/dry/hca_data_portal.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    projects = fetch_json(\"https://service.azul.data.humancellatlas.org/index/projects?catalog=dcp57&size=2\")\n    files = fetch_json(\"https://service.azul.data.humancellatlas.org/index/files?catalog=dcp57&size=2\")\n    payload = {\n        \"project_total\": ((projects.get(\"json\") or {}).get(\"pagination\") or {}).get(\"total\"),\n        \"file_total\": ((files.get(\"json\") or {}).get(\"pagination\") or {}).get(\"total\"),\n        \"projects\": [hit.get(\"entryId\") for hit in (projects.get(\"json\") or {}).get(\"hits\", [])],\n    }\n    print(save_snapshot(\"dry/hca_data_portal.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/hca_data_portal.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/hca_data_portal.json"
      },
      {
        "title": "PRIDE",
        "slug": "pride",
        "sectionNumber": "2.6",
        "summary": "",
        "resourceType": "实验数据仓库 / 蛋白组归档。",
        "recommendedLevel": "",
        "recommendedUnit": "以 project(PXD) 为主，重点入 project metadata、file list、sample attributes 和 SDRF。",
        "recommendedKey": "PXD accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 蛋白组归档。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为蛋白组 raw 数据、结果文件和样本注释的主入口之一；对蛋白组复现和 reanalysis 都很重要。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 project(PXD) 为主，重点入 project metadata、file list、sample attributes 和 SDRF。"
          },
          {
            "label": "推荐结构表",
            "value": "pride_project、pride_file、pride_sample_attribute、pride_sdrf、pride_publication_link。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "PRIDE Archive，覆盖 蛋白组；可提供 质谱蛋白组公共数据、鉴定结果、项目元数据。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于持续快速增长的主流蛋白组库；官方提供项目 API，但更适合按 accession 检索，而不是使用单一静态总量。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 raw / mzML / result files + metadata；官方对象主轴可概括为 project → project metadata；project → file list；project → sample attributes；主要消费格式可概括为 闭合核心标准：mzML、mzIdentML、mzTab；不闭合部分：原始厂商文件和补充文件官方未给全站封闭全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 蛋白鉴定复现、蛋白组再分析、公开结果验证。为什么值得补：蛋白组方向最常用公开库之一。主要提醒：文件大、格式复杂，分析流程门槛较高。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 PRIDE API / download。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 PXD project 口径，当前通过 PRIDE Archive API 可核约 37,876 个 project。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 PXD project 的项目级 fileSizeBytes 汇总抽样计算，平均约 10.75 GB。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；优先入口适合选择 PRIDE Archive Web Service，而不是页面抓取。"
          },
          {
            "label": "推荐批量主键",
            "value": "PXD accession"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "项目分页接口",
            "value": "https://www.ebi.ac.uk/pride/ws/archive/v2/projects?pageSize=1&page=0"
          },
          {
            "label": "单项目详情",
            "value": "https://www.ebi.ac.uk/pride/ws/archive/v2/projects/PXD001357"
          },
          {
            "label": "官方 API 说明",
            "value": "https://www.ebi.ac.uk/pride/markdownpage/prideapi"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "project → project metadata",
              "project → file list",
              "project → sample attributes",
              "project → SDRF"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合核心标准",
            "value": "mzML、mzIdentML、mzTab"
          },
          {
            "label": "不闭合部分",
            "value": "原始厂商文件和补充文件官方未给全站封闭全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，Archive API 与项目级入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.ebi.ac.uk/pride/archive/ ，https://www.ebi.ac.uk/pride/markdownpage/prideapi"
          }
        ],
        "crawlPseudocode": "1. 从 PRIDE Archive `projects` 分页接口枚举 `PXD` 项目。\n2. 对每个项目再请求单条 detail API，补齐样本、提交类型和 publication 信息。\n3. 如需文件层，再按项目详情中的文件或 FTP 线索继续下钻。\n4. 把 `project` 与 `file` 分成两层保存，避免在项目表里内嵌巨量文件列表。\n5. 保留 API 返回的 accession 与 FTP 关系，作为后续下载主键。",
        "crawlScriptPath": "tools/platform_crawlers/dry/pride.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    page = fetch_json(\"https://www.ebi.ac.uk/pride/ws/archive/v2/projects?pageSize=3&page=0\")\n    detail = fetch_json(\"https://www.ebi.ac.uk/pride/ws/archive/v2/projects/PXD001357\")\n    payload = {\n        \"projects\": [\n            {\"accession\": item.get(\"accession\"), \"title\": item.get(\"title\")}\n            for item in (page.get(\"json\") or [])\n        ],\n        \"detail_accession\": (detail.get(\"json\") or {}).get(\"accession\"),\n        \"detail_species\": (detail.get(\"json\") or {}).get(\"species\"),\n    }\n    print(save_snapshot(\"dry/pride.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/pride.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/pride.json"
      },
      {
        "title": "MassIVE",
        "slug": "massive",
        "sectionNumber": "2.7",
        "summary": "",
        "resourceType": "实验数据仓库 / 质谱大文件仓库。",
        "recommendedLevel": "",
        "recommendedUnit": "以 dataset(MSV) 为主，优先保留 dataset metadata、列表页统计字段和文件清单入口。",
        "recommendedKey": "MSV accession / dataset URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 质谱大文件仓库。"
          },
          {
            "label": "展示层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为大体量质谱 raw 文件与再分析任务的主入口；它对“下载-解包-重跑”型分析流程特别有价值。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 dataset(MSV) 为主，优先保留 dataset metadata、列表页统计字段和文件清单入口。"
          },
          {
            "label": "推荐结构表",
            "value": "massive_dataset、massive_stat_snapshot、massive_file_asset、massive_reanalysis_link、massive_publication_link。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "MassIVE Repository，覆盖 质谱 / 蛋白组 / 代谢组相关；可提供 大规模质谱数据、再分析与知识库入口。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于持续更新的大型质谱仓库；列表页稳定提供 dataset 级文件数、大小和 reanalysis 统计，适合先做目录层入库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 mass spectrometry raw/result files；官方对象主轴可概括为 dataset → file list；dataset → quantitative analysis；dataset → reanalysis containers；主要消费格式可概括为 不闭合：官方未公布全站封闭文件格式全集；可稳定抽取的是 dataset 级统计字段，不是完整文件后缀全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 质谱数据再分析、谱图库相关任务。为什么值得补：适合扩展到更真实的 MS 工作流。主要提醒：数据与工具门槛更高，建议第二阶段接入。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 站点与下载接口。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 MSV dataset 口径，当前公开列表可核约 19,177 个 dataset。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 MSV dataset 的列表级总大小字段抽样计算，平均约 18.63 GB。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；当前稳定入口是官方 dataset 列表页；站内 AJAX QueryDatasets 虽存在，但公开参数契约尚未确认，不宜在无额外验证时直接依赖。"
          },
          {
            "label": "推荐批量主键",
            "value": "MSV accession / dataset URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "公开 dataset 列表页",
            "value": "https://massive.ucsd.edu/ProteoSAFe/datasets.jsp"
          },
          {
            "label": "站内 AJAX 端点（需额外参数契约）",
            "value": "https://massive.ucsd.edu/ProteoSAFe/QueryDatasets（本轮最小探测未跑通公开参数）"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "dataset → file list",
              "dataset → quantitative analysis",
              "dataset → reanalysis containers",
              "dataset → publications"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "不闭合",
            "value": "官方未公布全站封闭文件格式全集",
            "bullets": [
              "可稳定抽取的是 dataset 级统计字段，不是完整文件后缀全集"
            ]
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，dataset 列表页与样例数据集入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://massive.ucsd.edu/ ，https://massive.ucsd.edu/ProteoSAFe/datasets.jsp"
          }
        ],
        "crawlPseudocode": "1. 访问 `dataset 列表页` 对应的官方入口：`https://massive.ucsd.edu/ProteoSAFe/datasets.jsp`。\n2. 访问 `未带参数探测 QueryDatasets` 对应的官方入口：`https://massive.ucsd.edu/ProteoSAFe/QueryDatasets?target=datasets`。\n3. 把 `massive` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n4. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/dry/massive.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'dataset 列表页', 'url': 'https://massive.ucsd.edu/ProteoSAFe/datasets.jsp'}, {'label': '未带参数探测 `QueryDatasets`', 'url': 'https://massive.ucsd.edu/ProteoSAFe/QueryDatasets?target=datasets'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"dry/massive.json\", {\"slug\": \"massive\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/massive.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/massive.json"
      },
      {
        "title": "MetaboLights",
        "slug": "metabolights",
        "sectionNumber": "2.8",
        "summary": "适合作为代谢组与 ISA 风格元数据的主库，能把干实验 agent 的多组学覆盖从转录组/蛋白组补到代谢组。",
        "resourceType": "实验数据仓库 / 代谢组 study 仓库。",
        "recommendedLevel": "P0 主库核心源。",
        "recommendedUnit": "以 study(MTBLS) 为主，保留 investigation、sample、assay、protocol 和 data files。",
        "recommendedKey": "MTBLS accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "实验数据仓库 / 代谢组 study 仓库。"
          },
          {
            "label": "建议纳入层级",
            "value": "P0 主库核心源。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为代谢组与 ISA 风格元数据的主库，能把干实验 agent 的多组学覆盖从转录组/蛋白组补到代谢组。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 study(MTBLS) 为主，保留 investigation、sample、assay、protocol 和 data files。"
          },
          {
            "label": "建议拆表",
            "value": "mtbls_study、mtbls_investigation、mtbls_sample、mtbls_assay、mtbls_protocol、mtbls_file_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "EMBL-EBI MetaboLights，覆盖 代谢组；可提供 代谢组 studies、raw data、metadata、compound 信息。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方 Web Service 当前可核实约 2,833 个 studies；属于持续收录型仓库，和 ISA 元数据结构结合紧密。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 MTBLS study 口径，当前可核约 2,833 个 study。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个公开 MTBLS study 的官方 FTP 目录递归文件总大小抽样计算，平均约 3.96 GB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 study packages + metadata；官方对象主轴可概括为 study → investigation；study → sample；study → assay；主要消费格式可概括为 闭合部分：ISA-Tab、ISA-JSON；不闭合部分：raw/derived assay files 官方未给全站封闭全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 代谢组数据检索、标准流程复现、跨 study 比较。为什么值得补：补齐代谢组赛道，避免只盯转录组/单细胞。主要提醒：不同仪器与实验设计差异大，标准化成本高。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 公开下载。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；应优先走官方 Web Service 与 study 下载，而不是 HTML 抓取。"
          },
          {
            "label": "推荐批量主键",
            "value": "MTBLS accession"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "study 列表接口",
            "value": "https://www.ebi.ac.uk/metabolights/ws/studies"
          },
          {
            "label": "单 study 详情",
            "value": "https://www.ebi.ac.uk/metabolights/ws/studies/MTBLS1"
          },
          {
            "label": "门户主页",
            "value": "https://www.ebi.ac.uk/metabolights/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "study → investigation",
              "study → sample",
              "study → assay",
              "study → protocol",
              "study → data files"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "ISA-Tab、ISA-JSON"
          },
          {
            "label": "不闭合部分",
            "value": "raw/derived assay files 官方未给全站封闭全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证 Web Service 与 study 下载入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.ebi.ac.uk/metabolights/ ，https://www.ebi.ac.uk/metabolights/about ，https://www.ebi.ac.uk/metabolights/ws/studies"
          }
        ],
        "crawlPseudocode": "1. 从 `ws/studies` 枚举公开 `MTBLS` accession。\n2. 逐条请求 `ws/studies/{accession}` 获取 ISA 风格的 study 详情。\n3. 从 study JSON 中拆出 sample、assay、protocol 和 data file 信息。\n4. 把 `study` 保留为主单元，文件与 assay 作为子表展开。\n5. 文件抓取以 study 详情中的官方链接为准。",
        "crawlScriptPath": "tools/platform_crawlers/dry/metabolights.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    studies = fetch_json(\"https://www.ebi.ac.uk/metabolights/ws/studies\")\n    detail = fetch_json(\"https://www.ebi.ac.uk/metabolights/ws/studies/MTBLS1\")\n    content = (detail.get(\"json\") or {}).get(\"mtblsStudy\") or {}\n    payload = {\n        \"study_list_size\": len((studies.get(\"json\") or {}).get(\"content\") or []),\n        \"detail_accession\": content.get(\"accession\"),\n        \"study_status\": content.get(\"studyStatus\"),\n        \"technology\": content.get(\"studyDesignDescriptors\"),\n    }\n    print(save_snapshot(\"dry/metabolights.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/metabolights.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/metabolights.json"
      }
    ]
  },
  {
    "title": "整理/派生数据层（derived_dataset）",
    "slug": "derived-dataset",
    "sectionNumber": "3",
    "description": "整理后、标准化后的派生数据层，方便更快定位可直接使用的结果对象。",
    "entries": [
      {
        "title": "cBioPortal",
        "slug": "cbioportal",
        "sectionNumber": "3.1",
        "summary": "",
        "resourceType": "整理型分析门户 / 派生队列数据层。",
        "recommendedLevel": "",
        "recommendedUnit": "以 study / patient / sample / molecularProfile 为主，重点入临床表、分子事件表和 profile 级下载资产。",
        "recommendedKey": "studyId + patientId / sampleId / molecularProfileId",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "整理型分析门户 / 派生队列数据层。"
          },
          {
            "label": "展示层级",
            "value": "P1 主库补充层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "更适合作为标准化 cohort 检索和快速分析入口，而不是原始事实源；可提供“已整理好的癌症队列视图”。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 study / patient / sample / molecularProfile 为主，重点入临床表、分子事件表和 profile 级下载资产。"
          },
          {
            "label": "推荐结构表",
            "value": "cbio_study、cbio_patient、cbio_sample、cbio_molecular_profile、cbio_clinical_record、cbio_molecular_event。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "cBioPortal for Cancer Genomics，覆盖 癌症 genomics 可视化/分析门户；可提供 整理后的癌症 genomics studies、可视化和下载接口。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方公开 API 当前可核实约 535 个 public studies；平台属于持续导入型门户，适合作为整理后 cohort 视图层。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 study 口径，当前可核约 535 个 public study。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按官方 study 列表接口抽样 5 个 study 元数据记录计算，平均约 500 B；这反映的是 API 记录体量，不代表全部下游数据文件体积。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 study-level tables / portal API；官方对象主轴可概括为 study → patient → sample；study → sampleList → molecularProfile；study → clinical(patient / sample)；主要消费格式可概括为 消费层闭合：JSON(API)、TSV(download)、MAF(部分分子事件下载)；导入层不是单一闭合集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 快速队列探索、突变/拷贝数/临床关联分析。为什么值得补：适合做快速交互分析与报告生成，不必总从原始文件起步。主要提醒：更像分析门户而非原始数据总库。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 REST API。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；适合直接使用 Web API，不建议回退到网页抓取。"
          },
          {
            "label": "推荐批量主键",
            "value": "studyId + patientId / sampleId / molecularProfileId"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "Web API 版本信息",
            "value": "https://www.cbioportal.org/api/info"
          },
          {
            "label": "studies 分页 / 批量列举",
            "value": "https://www.cbioportal.org/api/studies?pageSize=1&pageNumber=0&projection=SUMMARY"
          },
          {
            "label": "官方 API 文档",
            "value": "https://docs.cbioportal.org/web-api-and-clients/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "study → patient → sample",
              "study → sampleList → molecularProfile",
              "study → clinical(patient / sample)",
              "study → mutations / CNA / expression / structural variants / timeline"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "消费层闭合",
            "value": "JSON(API)、TSV(download)、MAF(部分分子事件下载)",
            "bullets": [
              "导入层不是单一闭合集"
            ]
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，REST API 抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.cbioportal.org/ ，https://docs.cbioportal.org/web-api-and-clients/ ，https://www.cbioportal.org/api/info"
          }
        ],
        "crawlPseudocode": "1. 先请求 `/api/info` 确认 portal 版本。\n2. 通过 `/api/studies` 分页枚举公开 study。\n3. 对每个 study 再决定是否补抓 sample、patient、molecular profile 等子接口。\n4. 把 `studyId` 作为聚合键，病人和样本层单独拆表。\n5. 网页页面仅用于核对展示字段，不用于主数据采集。",
        "crawlScriptPath": "tools/platform_crawlers/dry/cbioportal.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    info = fetch_json(\"https://www.cbioportal.org/api/info\")\n    studies = fetch_json(\"https://www.cbioportal.org/api/studies?pageSize=3&pageNumber=0&projection=SUMMARY\")\n    payload = {\n        \"portal_version\": (info.get(\"json\") or {}).get(\"portalVersion\"),\n        \"studies\": [\n            {\"studyId\": item.get(\"studyId\"), \"name\": item.get(\"name\"), \"cancerTypeId\": item.get(\"cancerTypeId\")}\n            for item in (studies.get(\"json\") or [])\n        ],\n    }\n    print(save_snapshot(\"dry/cbioportal.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/cbioportal.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/cbioportal.json"
      },
      {
        "title": "CELLxGENE Discover",
        "slug": "cellxgene-discover",
        "sectionNumber": "3.2",
        "summary": "更适合作为可直接分析的标准化矩阵层，方便 agent 低门槛做 marker、cluster 和 schema 感知，但不应替代原始单细胞仓库。",
        "resourceType": "整理型数据门户 / 标准化单细胞矩阵层。",
        "recommendedLevel": "P1 主库补充层。",
        "recommendedUnit": "以 collection / dataset / h5ad 为主，重点保留 dataset metadata、schema 字段和 h5ad 下载链接。",
        "recommendedKey": "collection_id / dataset_id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "整理型数据门户 / 标准化单细胞矩阵层。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 主库补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作为可直接分析的标准化矩阵层，方便 agent 低门槛做 marker、cluster 和 schema 感知，但不应替代原始单细胞仓库。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 collection / dataset / h5ad 为主，重点保留 dataset metadata、schema 字段和 h5ad 下载链接。"
          },
          {
            "label": "建议拆表",
            "value": "cxg_collection、cxg_dataset、cxg_h5ad_asset、cxg_obs_schema、cxg_var_schema、cxg_embedding_meta。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "CZ CELLxGENE Discover，覆盖 单细胞；可提供 标准化和可探索的单细胞数据集、可视化与下载。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于持续滚动收录型 curated portal；更适合作为标准化单细胞消费层，而不是拿它替代原始 atlas 仓库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 h5ad / curated single-cell datasets；官方对象主轴可概括为 collection → dataset → h5ad；dataset → obs；dataset → var；主要消费格式可概括为 闭合：h5ad；服务层闭合：TileDB-SOMA(Census)。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 单细胞数据搜索、marker/expression 探索、交互式报告。为什么值得补：对单细胞分析 agent 很友好，入口门槛低于原始平台。主要提醒：更偏 curated portal；不是所有原始数据都在此发布。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 Discover / API / docs。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 dataset 口径，当前可核约 2,083 个 dataset；若按上层容器统计，则约 359 个 collection。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个可下载 H5AD 资产抽样计算，平均约 1.57 GB。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；批量枚举优先走 Discover API，分析级复用再走 Census / h5ad 下载通道。"
          },
          {
            "label": "推荐批量主键",
            "value": "collection_id / dataset_id"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "Discover collections 接口",
            "value": "https://api.cellxgene.cziscience.com/curation/v1/collections"
          },
          {
            "label": "官方下载说明",
            "value": "https://cellxgene.cziscience.com/docs/03__Download%20Published%20Data"
          },
          {
            "label": "官方文档首页",
            "value": "https://cellxgene.cziscience.com/docs/01__CellxGene"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "collection → dataset → h5ad",
              "dataset → obs",
              "dataset → var",
              "dataset → X / layers",
              "dataset → obsm / varm / uns / raw"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合",
            "value": "h5ad"
          },
          {
            "label": "服务层闭合",
            "value": "TileDB-SOMA(Census)"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证 Discover API 与样例资产入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://cellxgene.cziscience.com/ ，https://cellxgene.cziscience.com/docs/01__CellxGene ，https://cellxgene.cziscience.com/docs/03__Download%20Published%20Data"
          }
        ],
        "crawlPseudocode": "1. 从 Discover `collections` 接口枚举 collection。\n2. 抽取 `collection_id`、版本号、dataset 列表与公开下载元数据。\n3. 对每个 collection 再关联 dataset / asset / h5ad 下载链接。\n4. 文档页仅用来核对下载规则和对象语义，不作为主采集源。\n5. 把 `collection -> dataset -> asset` 三层对象分开保存。",
        "crawlScriptPath": "tools/platform_crawlers/dry/cellxgene_discover.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    collection = fetch_json(\"https://api.cellxgene.cziscience.com/curation/v1/collections/db468083-041c-41ca-8f6f-bf991a070adf\")\n    payload = {\n        \"collection_id\": (collection.get(\"json\") or {}).get(\"collection_id\"),\n        \"dataset_count\": len((collection.get(\"json\") or {}).get(\"datasets\") or []),\n        \"visibility\": (collection.get(\"json\") or {}).get(\"visibility\"),\n    }\n    print(save_snapshot(\"dry/cellxgene_discover.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/cellxgene_discover.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/cellxgene_discover.json"
      },
      {
        "title": "BioStudies",
        "slug": "biostudies",
        "sectionNumber": "3.3",
        "summary": "适合作为研究级补充文件和上下文包装层，用来承接论文附件与外链，但不应当作唯一事实源。",
        "resourceType": "研究打包仓库 / study 补充文件层。",
        "recommendedLevel": "P1 主库补充层。",
        "recommendedUnit": "以 study accession 为主，重点保留 attributes、sections、files 和 external links。",
        "recommendedKey": "BioStudies accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "研究打包仓库 / study 补充文件层。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 主库补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为研究级补充文件和上下文包装层，用来承接论文附件与外链，但不应当作唯一事实源。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 study accession 为主，重点保留 attributes、sections、files 和 external links。"
          },
          {
            "label": "建议拆表",
            "value": "biostudies_study、biostudies_attribute、biostudies_section、biostudies_file_asset、biostudies_linkout。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "EMBL-EBI BioStudies，覆盖 study-level 打包 / 多组学；可提供 study 描述、补充文件、指向其他 EBI 资源的链接。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前搜索 API 可核约 80,947 个 study 命中；资源强调“研究单元”和跨资源链接，而不是统一首页总量。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 study accession 口径，当前可核约 80,947 个 study。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按搜索 API 抽样 5 个 study 命中的元数据记录计算，平均约 287 B；这只是索引命中记录大小，不代表 study 附件总大小。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 study metadata + linked assets；官方对象主轴可概括为 study → attributes；study → section → subsection；study → files；主要消费格式可概括为 不闭合：平台本身就是研究级文件打包层，官方不定义封闭文件格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 围绕一篇研究整理全部相关数据资产；多模态 study 打包。为什么值得补：适合未来做‘按 study 组织的全流程 agent’。主要提醒：它更多是包装层，不一定直接给标准化矩阵。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 门户与下载。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；本轮确认到的稳定程序化入口是 search + accession 详情 / 文件信息接口，不应只抓网页。"
          },
          {
            "label": "推荐批量主键",
            "value": "BioStudies accession"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "全文检索 / 分页接口",
            "value": "https://www.ebi.ac.uk/biostudies/api/v1/search?query=*:*&pageSize=1&page=1"
          },
          {
            "label": "单 study 详情",
            "value": "https://www.ebi.ac.uk/biostudies/api/v1/studies/S-BSST1"
          },
          {
            "label": "单 study 文件信息",
            "value": "https://www.ebi.ac.uk/biostudies/api/v1/studies/S-BSST1/info"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "study → attributes",
              "study → section → subsection",
              "study → files",
              "study → external links"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "不闭合",
            "value": "平台本身就是研究级文件打包层，官方不定义封闭文件格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证搜索接口与 accession 详情入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.ebi.ac.uk/biostudies/ ，https://www.ebi.ac.uk/biostudies/about"
          }
        ],
        "crawlPseudocode": "1. 先通过 `search` 接口分页枚举 study accession。\n2. 对每个 accession 请求 study 详情与 `info` 文件信息接口。\n3. 从详情里拆出 section、attribute、link、file table。\n4. 把 `study metadata` 和 `file listing` 分表保存。\n5. 搜索页只负责发现 accession，结构化内容以 detail/info 为准。",
        "crawlScriptPath": "tools/platform_crawlers/dry/biostudies.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    search = fetch_json(\"https://www.ebi.ac.uk/biostudies/api/v1/search?query=*:*&pageSize=2&page=1\")\n    detail = fetch_json(\"https://www.ebi.ac.uk/biostudies/api/v1/studies/S-BSST1\")\n    info = fetch_json(\"https://www.ebi.ac.uk/biostudies/api/v1/studies/S-BSST1/info\")\n    payload = {\n        \"total_hits\": (search.get(\"json\") or {}).get(\"totalHits\"),\n        \"sample_accessions\": [item.get(\"accession\") for item in (search.get(\"json\") or {}).get(\"hits\", [])],\n        \"detail_accno\": (detail.get(\"json\") or {}).get(\"accno\"),\n        \"file_columns\": [col.get(\"name\") for col in (info.get(\"json\") or {}).get(\"columns\", [])],\n    }\n    print(save_snapshot(\"dry/biostudies.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/biostudies.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/biostudies.json"
      }
    ]
  },
  {
    "title": "联盟索引/路由层（dataset_router）",
    "slug": "dataset-router",
    "sectionNumber": "4",
    "description": "联盟索引与 accession 路由层，负责发现、映射和跳转，不替代原始仓库。",
    "entries": [
      {
        "title": "ProteomeXchange",
        "slug": "proteomexchange",
        "sectionNumber": "4.1",
        "summary": "",
        "resourceType": "联盟索引 / 蛋白组数据路由层。",
        "recommendedLevel": "",
        "recommendedUnit": "以 PXD 记录和成员仓库映射关系为主，不把它当成文件主仓库。",
        "recommendedKey": "PXD accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "联盟索引 / 蛋白组数据路由层。"
          },
          {
            "label": "展示层级",
            "value": "P2 路由与发现层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "更适合作为发现入口和 accession 路由层，用来先找到蛋白组数据集，再把真实文件与细节下沉到 PRIDE、MassIVE 等成员仓库。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 PXD 记录和成员仓库映射关系为主，不把它当成文件主仓库。"
          },
          {
            "label": "推荐结构表",
            "value": "px_dataset、px_repository_link、px_accession_map、px_publication_link。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "ProteomeXchange Consortium，覆盖 蛋白组；可提供 公共 proteomics dataset 索引与提交体系。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "属于联盟式持续更新资源，重点价值在“索引与分发”而不是单一存储或统一文件树。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "典型数据形态为 dataset registry + linked files；官方对象主轴可概括为 PXD dataset → member repository → project/files；主要消费格式可概括为 不闭合：联盟官网不定义跨成员仓库的单一文件格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合 蛋白组数据检索、再分析、数据来源定位。为什么值得补：做蛋白组 agent 时是总入口。主要提醒：常需联动 PRIDE/MassIVE 等实际托管仓库。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；程序化访问方式为 公开站点与配套仓库。实际抓取时建议优先走官方批量入口，不要用页面抓取代替结构化接口。"
          },
          {
            "label": "下载单元数量",
            "value": "按联盟 XML feed 中的 PXD dataset 记录口径，当前可核约 51,414 条 accession 级记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 XML feed 前 5 条 Dataset_Identifier 记录片段抽样计算，平均约 800 B；这代表联盟索引记录大小，不代表下游成员仓库文件总量。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；官方 XML 入口可用于 accession 级枚举，真正文件抓取仍需继续下沉到成员仓库。"
          },
          {
            "label": "推荐批量主键",
            "value": "PXD accession"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "最新数据集 XML feed",
            "value": "https://proteomecentral.proteomexchange.org/cgi/GetDataset?outputMode=XML"
          },
          {
            "label": "按 accession 取单条 XML 记录",
            "value": "https://proteomecentral.proteomexchange.org/cgi/GetDataset?ID=PXD000001&outputMode=XML"
          },
          {
            "label": "HTML 数据集页",
            "value": "https://proteomecentral.proteomexchange.org/cgi/GetDataset?ID=PXD000001"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "PXD dataset → member repository → project/files"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "不闭合",
            "value": "联盟官网不定义跨成员仓库的单一文件格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，联盟 XML 入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.proteomexchange.org/"
          }
        ],
        "crawlPseudocode": "1. 先请求 ProteomeXchange 的联盟 XML feed 枚举 `PXD`。\n2. 再对单条 `PXD` 记录请求 XML 详情。\n3. 从 XML 中抽取 `repository / title / submitter / instrument / keyword` 等元数据。\n4. 根据 member repository 字段决定后续文件层要路由到 PRIDE、MassIVE 等成员仓库。\n5. 联盟层仅负责索引与路由，不直接承担最终文件抓取。",
        "crawlScriptPath": "tools/platform_crawlers/dry/proteomexchange.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\ndef main() -> None:\n    detail = fetch_text(\"https://proteomecentral.proteomexchange.org/cgi/GetDataset?ID=PXD000001&outputMode=XML\")\n    payload = {\n        \"sample_accessions\": find_links(detail.get(\"text\", \"\"), r\"PXD\\d{6,}\", 5),\n        \"detail_preview\": detail.get(\"text\", \"\")[:300],\n    }\n    print(save_snapshot(\"dry/proteomexchange.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/proteomexchange.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/proteomexchange.json"
      }
    ]
  },
  {
    "title": "Protocol 与方法内容源",
    "slug": "protocol-methods",
    "sectionNumber": "5",
    "description": "聚焦 protocol 与方法正文，沉淀步骤、材料、版本和正文结构，服务实验复现与方法理解。",
    "entries": [
      {
        "title": "protocols.io",
        "slug": "protocols-io",
        "sectionNumber": "5.1",
        "summary": "",
        "resourceType": "Protocol 平台 / 社区化协议仓库。",
        "recommendedLevel": "",
        "recommendedUnit": "以 protocol → version → step 为主，同时保留 materials、attachments、作者和 DOI 映射。",
        "recommendedKey": "protocol id / DOI / version id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Protocol 平台 / 社区化协议仓库。"
          },
          {
            "label": "展示层级",
            "value": "P0 协议原文主层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为 protocol 原文语料的核心主层，因为它可版本化、可结构化，而且步骤、材料、附件关系清楚。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 protocol → version → step 为主，同时保留 materials、attachments、作者和 DOI 映射。"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_record、protocol_version、protocol_step、protocol_material、protocol_attachment、protocol_reference。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Protocol库 / 工作流平台，覆盖范围为 Both；核心用途是 主训练语料；步骤结构抽取；版本化 protocol 检索。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“核心保留”层，通常不公开统一稳定总量。备注：这是最应保留的主干资源之一；应视作 protocol/workflow 语料库，不是分析数据仓库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 protocol → version → step；protocol → materials / reagents / equipment；protocol → attachments / media；主要消费格式可概括为 闭合部分：HTML、JSON(API)；不闭合部分：附件上传类型官方未给封闭全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 主训练语料；步骤结构抽取；版本化 protocol 检索；protocol 生成适配度 高，dry-lab workflow 生成适配度 中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 混合（公共内容开放，私有工作区存在）；程序化访问情况：公开 API（公共数据）。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "若按公开 protocol 页面 URL 口径统计，当前在 protocols-*.sitemap.xml 中可核约 158,352 条 URL；其中同一 protocol/version 可能包含多语种路由。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 protocols-0.sitemap.xml 前 5 条公开 protocol 页面 HTML 抽样计算，平均约 12.95 KB；这不含附件与受控 API 响应。"
          },
          {
            "label": "准入判断",
            "value": "本轮公开页面抓取成功；官方 API 存在，但当前探测显示无 Bearer token 会直接报授权错误。网页抓取还要受 robots 对 /api/、/private/、/download 等路径的限制。"
          },
          {
            "label": "推荐批量主键",
            "value": "protocol id / DOI / version id"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://www.protocols.io/robots.txt"
          },
          {
            "label": "开发者文档",
            "value": "https://www.protocols.io/developers"
          },
          {
            "label": "官方 API（需 Bearer token）",
            "value": "https://www.protocols.io/api/v4/protocols"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "protocol → version → step",
              "protocol → materials / reagents / equipment",
              "protocol → attachments / media",
              "protocol → authors / tags / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、JSON(API)"
          },
          {
            "label": "不闭合部分",
            "value": "附件上传类型官方未给封闭全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，公开页面抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.protocols.io/ ，https://www.protocols.io/developers ，https://www.protocols.io/robots.txt"
          }
        ],
        "crawlPseudocode": "1. 先读取 `robots.txt` 明确公开页面与 `/api/` 的访问边界。\n2. 把 `developers` 页作为 API 授权与字段语义说明源。\n3. 公开抓取阶段只下钻 public protocol 页面，不伪造 Bearer token 调私有 API。\n4. 从 protocol 页面抽取 `protocol -> version -> step`、materials、references 和 DOI。\n5. 附件与下载资源单独记为 asset 层，不和正文 step 混写。",
        "crawlScriptPath": "tools/platform_crawlers/wet/protocols_io.py",
        "crawlScriptSource": "from pathlib import Path\nimport re\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, save_snapshot\n\n\ndef main() -> None:\n    robots = fetch_text(\"https://www.protocols.io/robots.txt\")\n    dev = fetch_text(\"https://www.protocols.io/developers\")\n    payload = {\n        \"api_disallow_lines\": [line for line in robots.get(\"text\", \"\").splitlines() if \"Disallow:\" in line and \"/api/\" in line],\n        \"developer_page_has_oauth\": bool(re.search(r\"OAuth|Bearer\", dev.get(\"text\", \"\"), re.I)),\n        \"developer_page_preview\": dev.get(\"text\", \"\")[:300],\n    }\n    print(save_snapshot(\"wet/protocols_io.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/protocols_io.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/protocols_io.json"
      },
      {
        "title": "Bio-protocol",
        "slug": "bio-protocol",
        "sectionNumber": "5.2",
        "summary": "",
        "resourceType": "Protocol 期刊 / 开放获取方法文章。",
        "recommendedLevel": "",
        "recommendedUnit": "以 article 为主，保留 protocol sections、materials、procedure、troubleshooting 和 PDF/HTML 链接。",
        "recommendedKey": "article URL / DOI / 站内文章编号",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Protocol 期刊 / 开放获取方法文章。"
          },
          {
            "label": "展示层级",
            "value": "P1 协议原文补充层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为高质量、人工编辑的 protocol 正文补充层，尤其适合提炼 troubleshooting、notes 和试剂清单结构。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，保留 protocol sections、materials、procedure、troubleshooting 和 PDF/HTML 链接。"
          },
          {
            "label": "推荐结构表",
            "value": "bioprotocol_article、bioprotocol_section、bioprotocol_material、bioprotocol_troubleshooting、bioprotocol_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Protocol期刊，覆盖范围为 Wet；核心用途是 高质量 protocol 语料；故障排查/notes/troubleshooting 模板。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：适合做高精度监督语料，但规模和抓取便利性不如 protocols.io。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → protocol sections；article → materials / reagents / equipment；article → procedure / notes / troubleshooting；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：补充材料未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 高质量 protocol 语料；故障排查/notes/troubleshooting 模板；protocol 生成适配度 高，dry-lab workflow 生成适配度 低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放获取；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按 sitemap-protocol.xml 中的 protocol 文章 URL 口径，当前可核约 4,866 条页面记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮对 5 条样例文章 URL 的直接访问均受访问限制，当前环境下未能稳定核出正文页平均大小。"
          },
          {
            "label": "准入判断",
            "value": "本轮目录层抓取成功；本轮未确认到开放 JSON API，稳定批量入口是 robots.txt + sitemap.xml + 公开文章页，并且 robots 明确给出 Crawl-delay: 3。"
          },
          {
            "label": "推荐批量主键",
            "value": "article URL / DOI / 站内文章编号"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://bio-protocol.org/robots.txt"
          },
          {
            "label": "站点 sitemap",
            "value": "https://bio-protocol.org/sitemap.xml"
          },
          {
            "label": "站点首页",
            "value": "https://bio-protocol.org/"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → protocol sections",
              "article → materials / reagents / equipment",
              "article → procedure / notes / troubleshooting",
              "article → references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "补充材料未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，目录层抓取成功，正文页暂未稳定抓取。"
          },
          {
            "label": "官方来源",
            "value": "https://bio-protocol.org/ ，https://bio-protocol.org/en/about ，https://bio-protocol.org/robots.txt"
          }
        ],
        "crawlPseudocode": "1. 从 `sitemap.xml` 进入，再拆分到 `protocol / Bio101 / RAPProtocol / collection` 子 sitemap。\n2. 优先枚举 `bpdetail?id=...` 这类主 protocol detail URL。\n3. 把 sitemap 发现层和 detail 正文层分开记录；若 detail 受访问校验，只记录发现结果。\n4. 对 `Bio101`、`RAPProtocol` 和 `collection` 另建并列对象层。\n5. 不要把访问校验页的 HTML 大小当作正文单元大小。",
        "crawlScriptPath": "tools/platform_crawlers/wet/bio_protocol.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, parse_xml_loc_tags, save_snapshot\n\n\ndef main() -> None:\n    sitemap = fetch_text(\"https://bio-protocol.org/sitemap.xml\")\n    urls = parse_xml_loc_tags(sitemap.get(\"text\", \"\"), 20)\n    payload = {\n        \"child_sitemaps\": urls[:10],\n        \"protocol_sitemap_count\": sum(\"protocol\" in url.lower() for url in urls),\n    }\n    print(save_snapshot(\"wet/bio_protocol.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/bio_protocol.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/bio_protocol.json"
      },
      {
        "title": "STAR Protocols",
        "slug": "star-protocols",
        "sectionNumber": "5.3",
        "summary": "",
        "resourceType": "Protocol 期刊 / 模板化方法文章。",
        "recommendedLevel": "",
        "recommendedUnit": "以 article 为主，重点保留 summary、before-you-begin、step details、expected outcomes、limitations、troubleshooting。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台在结构质量上属于“强参考层 / 评测层”。平台证据：作者指南明确要求 Key resources table、step-by-step method details 等固定结构。证据链接：https://www.cell.com/star-protocols/information-for-authors ，https://www.cell.com/star-protocols/information-for-authors/article-types ，https://www.cell.com/information-for-authors/star-authors-guide"
          },
          {
            "label": "资源类型分类",
            "value": "Protocol 期刊 / 模板化方法文章。"
          },
          {
            "label": "展示层级",
            "value": "P1 协议原文补充层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "若抓取通道可用，它很适合作为模板化 protocol 语料，因为固定 section 很利于抽取 schema；当前可用性仍需与访问限制分开呈现。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，重点保留 summary、before-you-begin、step details、expected outcomes、limitations、troubleshooting。"
          },
          {
            "label": "推荐结构表",
            "value": "star_article、star_section、star_step、star_troubleshooting、star_asset、star_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Protocol期刊，覆盖范围为 Both；核心用途是 标准化 section 模板；expected outcomes / limitations / troubleshooting 抽取。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：结构非常规整，适合作为格式模板和评测集。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → summary；article → before you begin；article → step-by-step method details；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：supplementary files 未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 标准化 section 模板；expected outcomes / limitations / troubleshooting 抽取；protocol 生成适配度 高，dry-lab workflow 生成适配度 中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放获取；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "当前环境下因 cell.com sitemap 与文章页均触发 Cloudflare challenge，未能稳定核出全站 article 数量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮 5 样例 article 页在当前环境下均无法稳定获取正文 HTML，平均大小未能核出。"
          },
          {
            "label": "准入判断",
            "value": "暂未稳定抓取；期刊站点存在，但当前环境对 journal home / sitemap 有访问校验；目前只能确认 robots 可读，不宜视为稳定开放的批量抓取源。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://www.cell.com/robots.txt"
          },
          {
            "label": "robots 指向的 sitemap",
            "value": "https://www.cell.com/sitemap-index-1.txt"
          },
          {
            "label": "期刊主页",
            "value": "https://www.cell.com/star-protocols/home"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → summary",
              "article → before you begin",
              "article → step-by-step method details",
              "article → expected outcomes",
              "article → limitations",
              "article → troubleshooting",
              "article → resource availability"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "supplementary files 未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，当前环境下暂未稳定抓取。"
          },
          {
            "label": "官方来源",
            "value": "https://www.cell.com/star-protocols/home ，https://www.cell.com/information-for-authors/star-authors-guide"
          }
        ],
        "crawlPseudocode": "1. 先从 ScienceDirect `issues` 页枚举 issue URL。\n2. 进入 issue 页后抽取 article 的 PII 链接，而不是依赖受限搜索 API。\n3. 对 article 页面提取 summary、highlights、subject areas、PDF link 和 open access 元数据。\n4. 作者指南页用于核对 `Key resources table / Troubleshooting` 等结构锚点。\n5. 把 `issue -> article(PII)` 作为稳定采集主链路。",
        "crawlScriptPath": "tools/platform_crawlers/wet/star_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'robots 规则', 'url': 'https://www.cell.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://www.cell.com/sitemap-index-1.txt'}, {'label': '期刊主页探测', 'url': 'https://www.cell.com/star-protocols/home'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/star_protocols.json\", {\"slug\": \"star_protocols\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/star_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/star_protocols.json"
      },
      {
        "title": "Current Protocols",
        "slug": "current-protocols",
        "sectionNumber": "5.4",
        "summary": "更适合作目录和元数据层，不适合作开放全文主库；对 raw 数据库来说，它的价值主要是方法体系和主题树，而不是无条件全文抓取。",
        "resourceType": "Protocol 期刊 / 订阅型方法内容集。",
        "recommendedLevel": "P2 许可化参考层。",
        "recommendedUnit": "以 article 为主，优先保留 topic、unit、article metadata、section 结构和可公开目录页。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台属于“许可化强参考层”。平台证据：Wiley 订阅页明确其是 authoritative、peer-reviewed、frequently updated protocols 集合。证据链接：https://currentprotocols.onlinelibrary.wiley.com/hub/subscribe"
          },
          {
            "label": "资源类型分类",
            "value": "Protocol 期刊 / 订阅型方法内容集。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 许可化参考层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作目录和元数据层，不适合作开放全文主库；对 raw 数据库来说，它的价值主要是方法体系和主题树，而不是无条件全文抓取。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，优先保留 topic、unit、article metadata、section 结构和可公开目录页。"
          },
          {
            "label": "建议拆表",
            "value": "current_protocol_article、current_protocol_topic、current_protocol_section、current_protocol_asset、current_protocol_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "方法/Protocol内容集，覆盖范围为 Both；核心用途是 权威参考语料；分析步骤与实验设计说明抽取。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：应视为高价值但偏许可化的内容集，不适合当开放主库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 topic → unit → article → section → step；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：附加资源未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 权威参考语料；分析步骤与实验设计说明抽取；protocol 生成适配度 高，dry-lab workflow 生成适配度 中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 混合（订阅为主）；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "当前环境下 Wiley 的 sitemap 索引直接触发 Cloudflare challenge，未能稳定核出 Current Protocols 期刊层面的 article 总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮 5 样例 article 页在当前环境下均无法稳定获取正文 HTML，平均大小未能核出。"
          },
          {
            "label": "准入判断",
            "value": "本轮未能稳定抓取成功；Wiley 平台当前环境存在访问校验；虽然 robots 暴露了 sitemap 入口，但当前环境下不能把它当成稳定开放抓取源。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://onlinelibrary.wiley.com/robots.txt"
          },
          {
            "label": "robots 指向的 sitemap",
            "value": "https://onlinelibrary.wiley.com/sitemap-index-1.xml"
          },
          {
            "label": "期刊主页",
            "value": "https://currentprotocols.onlinelibrary.wiley.com/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "topic → unit → article → section → step"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "附加资源未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，但当前环境未能稳定抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://currentprotocols.onlinelibrary.wiley.com/ ，https://currentprotocols.onlinelibrary.wiley.com/hub/overview"
          }
        ],
        "crawlPseudocode": "1. 访问 `robots 规则` 对应的官方入口：`https://onlinelibrary.wiley.com/robots.txt`。\n2. 访问 `sitemap 探测` 对应的官方入口：`https://onlinelibrary.wiley.com/sitemap-index-1.xml`。\n3. 访问 `期刊主页探测` 对应的官方入口：`https://currentprotocols.onlinelibrary.wiley.com/`。\n4. 把 `current_protocols` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/wet/current_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'robots 规则', 'url': 'https://onlinelibrary.wiley.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://onlinelibrary.wiley.com/sitemap-index-1.xml'}, {'label': '期刊主页探测', 'url': 'https://currentprotocols.onlinelibrary.wiley.com/'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/current_protocols.json\", {\"slug\": \"current_protocols\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/current_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/current_protocols.json"
      },
      {
        "title": "Nature Protocols",
        "slug": "nature-protocols",
        "sectionNumber": "5.5",
        "summary": "更适合作高质量 benchmark 与 schema 参考层，帮助 agent 学 protocol 写法和结构，但不应默认做开放全文主库。",
        "resourceType": "Protocol 期刊 / 高质量方法文章。",
        "recommendedLevel": "P2 许可化参考层。",
        "recommendedUnit": "以 article 为主，重点保留 abstract、procedure、timing、troubleshooting、anticipated results 和 supplement 索引。",
        "recommendedKey": "article DOI / canonical article URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Protocol 期刊 / 高质量方法文章。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 许可化参考层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作高质量 benchmark 与 schema 参考层，帮助 agent 学 protocol 写法和结构，但不应默认做开放全文主库。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，重点保留 abstract、procedure、timing、troubleshooting、anticipated results 和 supplement 索引。"
          },
          {
            "label": "建议拆表",
            "value": "nature_protocol_article、nature_protocol_section、nature_protocol_timing、nature_protocol_troubleshooting、nature_protocol_asset、nature_protocol_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Protocol期刊，覆盖范围为 Wet；核心用途是 金标准评测集；高质量 timing / troubleshooting schema。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：更适合做 benchmark 和 schema 抽取，不适合作开放主训练库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → abstract；article → introduction；article → procedure；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：supplementary files 未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 金标准评测集；高质量 timing / troubleshooting schema；protocol 生成适配度 高，dry-lab workflow 生成适配度 低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 混合；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按 nature.com 中 nprot 月度 article sitemap 的 URL 口径统计，当前可核约 3,911 条 Nature Protocols 文章页。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条 nprot article 页 HTML 抽样计算，平均约 540.63 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮目录与文章页抓取成功；可做公开元数据 / 目录页 crawl，但全文和 PDF 的可用性仍取决于出版侧访问条件。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://www.nature.com/robots.txt"
          },
          {
            "label": "站点 sitemap",
            "value": "https://www.nature.com/sitemap.xml"
          },
          {
            "label": "期刊主页",
            "value": "https://www.nature.com/nprot/"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → abstract",
              "article → introduction",
              "article → procedure",
              "article → timing",
              "article → troubleshooting",
              "article → anticipated results"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "supplementary files 未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证目录与文章页抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.nature.com/nprot/ ，https://www.nature.com/nprot/about"
          }
        ],
        "crawlPseudocode": "1. 从 `research-articles` 列表页开始枚举 article URL 与 DOI。\n2. 逐条进入 article 页面，提取 abstract、procedure、timing、troubleshooting 等栏目。\n3. 把 figures、tables、references 独立挂到 article 之下。\n4. 如 article 提供 PDF，再把 PDF 记为可选文件资产。\n5. 维持 `journal -> article -> section/figure/table/reference` 的层次化结构。",
        "crawlScriptPath": "tools/platform_crawlers/wet/nature_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\ndef main() -> None:\n    listing = fetch_text(\"https://www.nature.com/nprot/research-articles\")\n    articles = find_links(listing.get(\"text\", \"\"), r'/articles/[^\"']+', 10)\n    payload = {\"article_urls\": articles}\n    print(save_snapshot(\"wet/nature_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/nature_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/nature_protocols.json"
      },
      {
        "title": "Cold Spring Harbor Protocols",
        "slug": "cold-spring-harbor-protocols",
        "sectionNumber": "5.6",
        "summary": "更适合作 curated protocol 参考层，帮助 agent 学到较稳定的主题分类与 protocol 组织方式。",
        "resourceType": "Protocol 期刊 / curated 协议集合。",
        "recommendedLevel": "P2 许可化参考层。",
        "recommendedUnit": "以 protocol article 为主，保留 topic、steps、notes、references 和年份档案关系。",
        "recommendedKey": "article DOI / canonical article URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Protocol 期刊 / curated 协议集合。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 许可化参考层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作 curated protocol 参考层，帮助 agent 学到较稳定的主题分类与 protocol 组织方式。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 protocol article 为主，保留 topic、steps、notes、references 和年份档案关系。"
          },
          {
            "label": "建议拆表",
            "value": "csh_protocol_article、csh_topic、csh_step_note、csh_asset、csh_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Protocol期刊/集合，覆盖范围为 Both；核心用途是 主题分类；集合式 curated exemplar。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：可作为 taxonomy 和 curated subset，不宜作为唯一主源。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 collection → topic → protocol；protocol → steps / notes / references；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：补充材料未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 主题分类；集合式 curated exemplar；protocol 生成适配度 中，dry-lab workflow 生成适配度 低-中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 混合；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按官方 sitemap.xml 中的 article URL 口径，当前可核约 6,841 条页面记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条 article 页 HTML 抽样计算，平均约 270.56 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮档案页与文章页抓取成功；稳定批量入口更像年份档案和文章页，而不是结构化 API。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://cshprotocols.cshlp.org/robots.txt"
          },
          {
            "label": "年份档案页",
            "value": "https://cshprotocols.cshlp.org/content/by/year"
          },
          {
            "label": "站点主页",
            "value": "https://cshprotocols.cshlp.org/"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "collection → topic → protocol",
              "protocol → steps / notes / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "补充材料未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证档案页与文章页抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://cshprotocols.cshlp.org/ ，https://cshprotocols.cshlp.org/site/misc/about.xhtml"
          }
        ],
        "crawlPseudocode": "1. 先从 archive 层枚举 article URL。\n2. 对每篇 protocol article 抓取正文段落和引用信息。\n3. 提取 protocol 页面里的 section 标题、步骤块和参考文献。\n4. 把 article 页面和引用结构单独保存。\n5. 对旧内容保留 canonical URL 与 accession-like 路由映射。",
        "crawlScriptPath": "tools/platform_crawlers/wet/cold_spring_harbor_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\ndef main() -> None:\n    archive = fetch_text(\"https://cshprotocols.cshlp.org/content/by/year\")\n    articles = find_links(archive.get(\"text\", \"\"), r'/content/[0-9]{4}/[0-9]+/[0-9]+/[^\"']+', 10)\n    payload = {\"article_urls\": articles}\n    print(save_snapshot(\"wet/cold_spring_harbor_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/cold_spring_harbor_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/cold_spring_harbor_protocols.json"
      },
      {
        "title": "OpenWetWare",
        "slug": "openwetware",
        "sectionNumber": "5.7",
        "summary": "适合作为 protocol 长尾补充层和术语变体发现层，但必须接受内容质量不齐和强清洗成本。",
        "resourceType": "社区 wiki / protocol 长尾页。",
        "recommendedLevel": "P2 长尾补充层。",
        "recommendedUnit": "以 wiki page 为主，保留 namespace、category、template、sections 和 file links。",
        "recommendedKey": "wiki page title / pageid",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台定位为“长尾补充层【难洗】”，不参与一期核心主 schema 定义。平台证据：官方 About 将其定义为共享 information / know-how / wisdom 的协作型 wiki。证据链接：https://openwetware.org/wiki/OpenWetWare:About"
          },
          {
            "label": "资源类型分类",
            "value": "社区 wiki / protocol 长尾页。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 长尾补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为 protocol 长尾补充层和术语变体发现层，但必须接受内容质量不齐和强清洗成本。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 wiki page 为主，保留 namespace、category、template、sections 和 file links。"
          },
          {
            "label": "建议拆表",
            "value": "oww_page、oww_section、oww_category、oww_template_link、oww_file_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "社区 wiki，覆盖范围为 Wet（含少量 dry-lab 页面）；核心用途是 长尾/噪声扩充语料；变体发现。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：真实存在且仍可用，但噪声高、格式不统一，必须强清洗。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 namespace → page → section → subsection；page → template / category / file；主要消费格式可概括为 闭合部分：HTML / wiki markup；不闭合部分：文件附件未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 长尾/噪声扩充语料；变体发现；protocol 生成适配度 中，dry-lab workflow 生成适配度 低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：可抓取；未见专门 protocol API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按 MediaWiki statistics.articles 口径，当前可核约 48,445 个 article 页面。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 generator=allpages 返回的前 5 个页面 length 字段抽样计算，平均约 2.37 KB；该值是 wiki text 长度，不代表渲染后 HTML 大小。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；优先走 MediaWiki API，HTML category 页面只做回退入口。"
          },
          {
            "label": "推荐批量主键",
            "value": "wiki page title / pageid"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "MediaWiki API allpages",
            "value": "https://openwetware.org/mediawiki/api.php?action=query&list=allpages&aplimit=1&format=json"
          },
          {
            "label": "MediaWiki API siteinfo",
            "value": "https://openwetware.org/mediawiki/api.php?action=query&meta=siteinfo&format=json"
          },
          {
            "label": "协议类页面目录",
            "value": "https://openwetware.org/wiki/Category:Protocols"
          },
          {
            "label": "统一下载目录结构",
            "value": "wiki 平台无统一下载目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "namespace → page → section → subsection",
              "page → template / category / file"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML / wiki markup"
          },
          {
            "label": "不闭合部分",
            "value": "文件附件未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证页面与 API 抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://openwetware.org/wiki/Main_Page ，https://openwetware.org/wiki/OpenWetWare:About"
          }
        ],
        "crawlPseudocode": "1. 先用 MediaWiki API 枚举 page title，而不是直接暴力扫 HTML。\n2. 再按 title 回抓页面 HTML 或 API detail，提取 namespace、category、template。\n3. 把 wiki page、category、attachment/file 分成不同对象层。\n4. 对实验方法页只保留公开文本和分类关系，不把整个 wiki 当结构化 protocol 仓库。\n5. API 枚举与页面补抓并行使用。",
        "crawlScriptPath": "tools/platform_crawlers/wet/openwetware.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    pages = fetch_json(\"https://openwetware.org/api.php?action=query&list=allpages&aplimit=5&format=json\", timeout=10)\n    payload = {\n        \"status\": pages.get(\"status\"),\n        \"pages\": [\n            {\"pageid\": item.get(\"pageid\"), \"title\": item.get(\"title\")}\n            for item in ((pages.get(\"json\") or {}).get(\"query\") or {}).get(\"allpages\", [])\n        ]\n    }\n    print(save_snapshot(\"wet/openwetware.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/openwetware.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/openwetware.json"
      },
      {
        "title": "Springer Nature Experiments / SpringerProtocols",
        "slug": "springer-nature-experiments-springerprotocols",
        "sectionNumber": "5.8",
        "summary": "更适合作目录层和高质量参考层，不适合作开放全文主库；对 raw 数据库的意义主要在主题树、章节结构和平台导航。",
        "resourceType": "商业方法平台 / 许可化内容集合。",
        "recommendedLevel": "P2 许可化参考层。",
        "recommendedUnit": "以 protocol / chapter metadata 为主，保留 subject、series、protocol、section 和外链。",
        "recommendedKey": "protocol / article canonical URL 或 DOI",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台定位为“许可化参考层”，不再表述为开放主语料库。平台证据：官方产品页明确其是 Springer Nature 的 discovery / search / licensed methods solution。证据链接：https://www.springernature.com/gp/librarians/products/databases-solutions/experiments ，https://www.springernature.com/gp/librarians/products/databases-solutions/springerprotocols ，https://experiments.springernature.com/"
          },
          {
            "label": "资源类型分类",
            "value": "商业方法平台 / 许可化内容集合。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 许可化参考层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作目录层和高质量参考层，不适合作开放全文主库；对 raw 数据库的意义主要在主题树、章节结构和平台导航。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 protocol / chapter metadata 为主，保留 subject、series、protocol、section 和外链。"
          },
          {
            "label": "建议拆表",
            "value": "springer_protocol_article、springer_protocol_collection、springer_protocol_section、springer_protocol_asset、springer_protocol_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "商业方法/Protocol内容平台，覆盖范围为 Wet 为主；核心用途是 大规模许可化方法库；高质量参考语料。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：原表规模口径偏旧；应统一写成 Springer Nature Experiments / SpringerProtocols 平台，而非多个碎片名词。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 subject → series → protocol / chapter；主要消费格式可概括为 闭合部分：HTML、PDF。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 大规模许可化方法库；高质量参考语料；protocol 生成适配度 高，dry-lab workflow 生成适配度 低-中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 订阅/许可为主；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按 sitemap_dois.xml 中的 DOI/article 落地页口径，当前可核约 5,000 条记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条 DOI/article 页 HTML 抽样计算，平均约 137.47 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮目录层抓取成功；适合作为许可化参考源，不宜默认当开放全文批量语料。"
          },
          {
            "label": "推荐批量主键",
            "value": "protocol / article canonical URL 或 DOI"
          },
          {
            "label": "公开入口与发现入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://experiments.springernature.com/robots.txt"
          },
          {
            "label": "站点 sitemap",
            "value": "https://experiments.springernature.com/sitemap.xml"
          },
          {
            "label": "平台主页",
            "value": "https://experiments.springernature.com/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一公开目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "subject → series → protocol / chapter"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证目录层抓取成功；正文可用性仍受许可条件约束。"
          },
          {
            "label": "官方来源",
            "value": "https://www.springernature.com/gp/librarians/products/databases-solutions/experiments ，https://www.springernature.com/gp/librarians/products/databases-solutions/springerprotocols"
          }
        ],
        "crawlPseudocode": "1. 从公开 search 页按 `categoryFacet=Protocol` 枚举 result item。\n2. 把每条结果对应的 `/articles/{DOI}` 作为协议记录单元。\n3. 从结果页同步抽取 source、technique、organism、date 等 facet 元数据。\n4. 对会跳转身份校验的 source 页只记录来源映射，不当作主抓取入口。\n5. 将 `search result -> article -> source metadata` 三层分别保存。",
        "crawlScriptPath": "tools/platform_crawlers/wet/springer_nature_experiments_springerprotocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\nSEARCH_URL = \"https://experiments.springernature.com/search?term=&sortType=recent&categoryFacet=Protocol&startDate=1980-01-01&endDate=2024-12-31&isNewSearch=false\"\n\n\ndef main() -> None:\n    search = fetch_text(SEARCH_URL)\n    articles = find_links(search.get(\"text\", \"\"), r'/articles/[^\"']+', 10)\n    payload = {\"search_url\": SEARCH_URL, \"article_urls\": articles}\n    print(save_snapshot(\"wet/springer_nature_experiments_springerprotocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/springer_nature_experiments_springerprotocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/springer_nature_experiments_springerprotocols.json"
      },
      {
        "title": "Methods and Protocols (MDPI)",
        "slug": "methods-and-protocols-mdpi",
        "sectionNumber": "5.9",
        "summary": "理论上是可作为 OA 方法文章补充层的，但在当前环境下自动化访问受阻，所以不应把它放到主库的第一梯队。",
        "resourceType": "方法期刊 / 开放获取但当前探测受阻。",
        "recommendedLevel": "P2 备选期刊层。",
        "recommendedUnit": "以 article 为主，保留 section、supplement、文章级 metadata 和可公开链接。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "方法期刊 / 开放获取但当前探测受阻。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 备选期刊层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "理论上是可作为 OA 方法文章补充层的，但在当前环境下自动化访问受阻，所以不应把它放到主库的第一梯队。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，保留 section、supplement、文章级 metadata 和可公开链接。"
          },
          {
            "label": "建议拆表",
            "value": "mdpi_protocol_article、mdpi_section、mdpi_asset、mdpi_supplement_link、mdpi_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "期刊，覆盖范围为 Both；核心用途是 开放获取补充语料；方法改进与新 protocol 描述。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：可以保留，但优先级低于 protocols.io / STAR / Bio-protocol。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → section；article → supplement；主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：supplementary files 未见官方封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 开放获取补充语料；方法改进与新 protocol 描述；protocol 生成适配度 中，dry-lab workflow 生成适配度 低-中，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放获取；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "当前环境下 mdpi.com 的主页、robots 与 sitemap 自动化访问均被拒绝，未能稳定核出期刊 article 总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮 5 样例 article 页在当前环境下均无法稳定获取正文 HTML，平均大小未能核出。"
          },
          {
            "label": "准入判断",
            "value": "本轮未能稳定抓取成功；当前环境对主页、robots、sitemap 的自动化访问被拒绝；不能把它当成本环境下稳定开放的批量抓取源。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "已复核公开入口（当前不构成稳定批量入口）",
            "value": ""
          },
          {
            "label": "期刊主页",
            "value": "https://www.mdpi.com/journal/mps"
          },
          {
            "label": "站点 sitemap",
            "value": "https://www.mdpi.com/sitemap.xml"
          },
          {
            "label": "robots 探测",
            "value": "https://www.mdpi.com/robots.txt"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → section",
              "article → supplement"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "supplementary files 未见官方封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，但当前环境未能稳定抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.mdpi.com/journal/mps ，https://www.mdpi.com/journal/mps/about"
          }
        ],
        "crawlPseudocode": "1. 访问 `期刊主页探测` 对应的官方入口：`https://www.mdpi.com/journal/mps`。\n2. 访问 `站点 sitemap 探测` 对应的官方入口：`https://www.mdpi.com/sitemap.xml`。\n3. 访问 `robots 探测` 对应的官方入口：`https://www.mdpi.com/robots.txt`。\n4. 把 `methods_and_protocols_mdpi` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/wet/methods_and_protocols_mdpi.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': '期刊主页探测', 'url': 'https://www.mdpi.com/journal/mps'}, {'label': '站点 sitemap 探测', 'url': 'https://www.mdpi.com/sitemap.xml'}, {'label': 'robots 探测', 'url': 'https://www.mdpi.com/robots.txt'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/methods_and_protocols_mdpi.json\", {\"slug\": \"methods_and_protocols_mdpi\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/methods_and_protocols_mdpi.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/methods_and_protocols_mdpi.json"
      },
      {
        "title": "JMIR Research Protocols",
        "slug": "jmir-research-protocols",
        "sectionNumber": "5.10",
        "summary": "更适合作临床研究和医学方案的专项语料层，而不是通用生物实验或生信 workflow 的核心主源。",
        "resourceType": "研究方案期刊 / 医学 protocol 语料。",
        "recommendedLevel": "P2 专项语料层。",
        "recommendedUnit": "以 article 为主，保留 abstract、methods、ethics、appendix 和研究设计字段。",
        "recommendedKey": "article DOI / canonical article URL",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台定位为“医学/健康研究专项层”。平台证据：官方 Focus and Scope 明确其主要覆盖 medical and health research 的 research ideas、study protocols、trial protocols 与 ongoing research。证据链接：https://www.researchprotocols.org/about-journal/focus-and-scope"
          },
          {
            "label": "资源类型分类",
            "value": "研究方案期刊 / 医学 protocol 语料。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 专项语料层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作临床研究和医学方案的专项语料层，而不是通用生物实验或生信 workflow 的核心主源。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，保留 abstract、methods、ethics、appendix 和研究设计字段。"
          },
          {
            "label": "建议拆表",
            "value": "jmir_protocol_article、jmir_section、jmir_trial_metadata、jmir_appendix_asset、jmir_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "研究方案/Protocol期刊，覆盖范围为 医学与健康研究为主；核心用途是 研究设计与方案描述；临床/健康研究 protocol 样式。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：真实且开放，但偏医疗健康研究方案；不宜当通用实验或生信 workflow 主库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → abstract / methods / ethics / appendix；主要消费格式可概括为 闭合部分：HTML、PDF。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 研究设计与方案描述；临床/健康研究 protocol 样式；protocol 生成适配度 中，dry-lab workflow 生成适配度 低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放获取；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按官方 resprot.xml sitemap 的 URL 口径，当前可核约 33,588 条页面记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 sitemap 前 5 条页面 HTML 抽样计算，平均约 291.79 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮目录与文章页抓取成功；robots 对 /api/*、导出路由等有限制，因此稳定批量入口应以 sitemap + 公开文章页为主。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "robots 规则",
            "value": "https://www.researchprotocols.org/robots.txt"
          },
          {
            "label": "站点 sitemap",
            "value": "https://www.researchprotocols.org/sitemap.xml"
          },
          {
            "label": "站点主页",
            "value": "https://www.researchprotocols.org/"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → abstract / methods / ethics / appendix"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证目录与文章页抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.researchprotocols.org/ ，https://www.researchprotocols.org/about-journal/focus-and-scope"
          }
        ],
        "crawlPseudocode": "1. 从 sitemap 或 archive 枚举 article URL。\n2. 进入 article 页面后提取 title、authors、abstract、methods、ethics、timeline 等栏目。\n3. 把 DOI、publication date、subject tag 和 section 结构分开保存。\n4. 对开放页面直接抓取全文 HTML。\n5. 如后续需要下载 PDF，再从 article 页补充文件资产层。",
        "crawlScriptPath": "tools/platform_crawlers/wet/jmir_research_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, parse_xml_loc_tags, save_snapshot\n\n\ndef main() -> None:\n    sitemap = fetch_text(\"https://www.researchprotocols.org/sitemap.xml\")\n    urls = parse_xml_loc_tags(sitemap.get(\"text\", \"\"), 20)\n    payload = {\"sample_urls\": urls[:10]}\n    print(save_snapshot(\"wet/jmir_research_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/jmir_research_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/jmir_research_protocols.json"
      },
      {
        "title": "JoVE",
        "slug": "jove",
        "sectionNumber": "5.11",
        "summary": "更适合作后续视频-文本对齐、多模态教学和操作演示层，不是当前纯文本 raw 数据库的核心。",
        "resourceType": "视频方法期刊 / 多模态方法内容。",
        "recommendedLevel": "P2 多模态补充层。",
        "recommendedUnit": "以 article/video 为主，保留 video、transcript、figures、references 和访问状态。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台定位为“多模态二期层【难洗】”，不再混写为纯文本 protocol 主库。平台证据：官方明确强调通过 “seeing methods in action” 来帮助复现，核心是视频化方法展示。证据链接：https://www.jove.com/ ，https://www.jove.com/research/journal ，https://www.jove.com/about"
          },
          {
            "label": "资源类型分类",
            "value": "视频方法期刊 / 多模态方法内容。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 多模态补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作后续视频-文本对齐、多模态教学和操作演示层，不是当前纯文本 raw 数据库的核心。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article/video 为主，保留 video、transcript、figures、references 和访问状态。"
          },
          {
            "label": "建议拆表",
            "value": "jove_article、jove_video_asset、jove_transcript、jove_section、jove_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "视频方法期刊/平台，覆盖范围为 Wet 为主；核心用途是 多模态方法解释；视频-文本对齐素材。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：价值在视频演示，不适合当纯文本主库，但适合后续多模态扩展。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → video；article → transcript；article → figures / references；主要消费格式可概括为 闭合部分：HTML、video；不闭合部分：下载内容权限受订阅限制。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 多模态方法解释；视频-文本对齐素材；protocol 生成适配度 中，dry-lab workflow 生成适配度 低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 混合/订阅为主；程序化访问情况：未见公开 API。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "当前环境下首页、robots 与 sitemap 均返回 challenge 页面，未能稳定核出 article/video 单元总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮 5 样例 article/video 落地页在当前环境下均无法稳定获取内容体，平均大小未能核出。"
          },
          {
            "label": "准入判断",
            "value": "本轮未能稳定抓取成功；当前环境对首页、robots、sitemap 存在访问校验；未确认到本环境下稳定开放的批量抓取入口。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "video / article URL 或 DOI"
          },
          {
            "label": "已复核公开入口（当前不构成稳定批量入口）",
            "value": ""
          },
          {
            "label": "站点主页",
            "value": "https://www.jove.com/"
          },
          {
            "label": "robots 探测",
            "value": "https://www.jove.com/robots.txt"
          },
          {
            "label": "sitemap 探测",
            "value": "https://www.jove.com/sitemap.xml"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → video",
              "article → transcript",
              "article → figures / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、video"
          },
          {
            "label": "不闭合部分",
            "value": "下载内容权限受订阅限制"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，但当前环境未能稳定抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.jove.com/ ，https://www.jove.com/research/journal"
          }
        ],
        "crawlPseudocode": "1. 访问 `站点主页探测` 对应的官方入口：`https://www.jove.com/`。\n2. 访问 `robots 探测` 对应的官方入口：`https://www.jove.com/robots.txt`。\n3. 访问 `sitemap 探测` 对应的官方入口：`https://www.jove.com/sitemap.xml`。\n4. 把 `jove` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/wet/jove.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': '站点主页探测', 'url': 'https://www.jove.com/'}, {'label': 'robots 探测', 'url': 'https://www.jove.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://www.jove.com/sitemap.xml'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/jove.json\", {\"slug\": \"jove\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/jove.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/jove.json"
      },
      {
        "title": "Biology Methods and Protocols",
        "slug": "biology-methods-and-protocols",
        "sectionNumber": "5.12",
        "summary": "更适合作为高质量方法与 protocol 补充层，尤其适合把湿实验方法与部分计算方法放进同一套 article 级 schema；但当前环境对 OUP 内容站访问阻断明显，不应把它放入第一梯队开放正文主源。",
        "resourceType": "OA 方法与 protocol 期刊 / 湿实验与计算方法混合语料。",
        "recommendedLevel": "P1 方法期刊补充层。",
        "recommendedUnit": "以 article 为主，保留 title、abstract、introduction、materials and methods、results、discussion、supplementary data 和 DOI。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "OA 方法与 protocol 期刊 / 湿实验与计算方法混合语料。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 方法期刊补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作为高质量方法与 protocol 补充层，尤其适合把湿实验方法与部分计算方法放进同一套 article 级 schema；但当前环境对 OUP 内容站访问阻断明显，不应把它放入第一梯队开放正文主源。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 article 为主，保留 title、abstract、introduction、materials and methods、results、discussion、supplementary data 和 DOI。"
          },
          {
            "label": "建议拆表",
            "value": "biomethods_article、biomethods_section、biomethods_supplement_link、biomethods_citation、biomethods_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "原始 Notion 条目写明其为 Oxford University Press 旗下 peer-reviewed methods and protocol journal，覆盖 Molecular Biology、Cell Biology、Genetics、Physiology、Ecology、Evolutionary Biology、Biochemistry、Medical / Biomedical Biology、Computational Biology / Bioinformatics。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "原始 Notion 条目记录规模为 Over 2,300 articles，并记录最新期次为 02/2026 (Volume 11, Issue 1)；本轮在线复核时，academic.oup.com/biomethods 主页、about、issue 与 advance-articles 在当前环境下均返回 403，因此未能用官网页面再次稳定核出 article 总量。"
          },
          {
            "label": "下载单元数量",
            "value": "若按 article 口径，当前只能沿用原始 Notion 条目中的 Over 2,300 articles 作为历史整理值；本轮未能在官方站点中稳定复核出新的全站 article 数。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮对主页、about、issue、advance-articles 的访问均被出版平台阻断，未能稳定获取 5 个 article 正文页，因此平均大小未能核出。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "原始 Notion 条目给出的 record format 为 Title、Abstract、Introduction、Materials and methods、Results、Discussion、Supplementary data；文章具备 DOI 和标准 journal citation 结构。主要消费格式可概括为 闭合部分：HTML、PDF；不闭合部分：supplementary files 官方未给封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "原始条目强调它是 Methods-focused、Peer-reviewed、Citable、Mixed wet + dry、Open access。最适合 高质量 biology methods collection、wet + dry unified corpus、protocol and methods mining、methods-to-publication linkage；不适合当大规模开放仓库主源，也不适合做强步骤化 schema 的唯一来源。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "原始条目明确其为 Open access journal，访问方式包括 homepage、issues、advance articles；但当前环境中自动化访问触发出版平台访问校验，因此要把“公开出版模式”和“当前环境可稳定抓取”分开写。"
          },
          {
            "label": "准入判断",
            "value": "本轮已完成入口层复核，但当前环境未能稳定抓取成功；robots.txt 可访问，而期刊主页、栏目页和 issue 页均返回 403，因此现阶段更适合作目录层/候选源，不应按稳定开放全文批量抓取规划。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article DOI / canonical article URL"
          },
          {
            "label": "已复核公开入口（当前不构成稳定批量入口）",
            "value": ""
          },
          {
            "label": "期刊主页",
            "value": "https://academic.oup.com/biomethods"
          },
          {
            "label": "about",
            "value": "https://academic.oup.com/biomethods/pages/about"
          },
          {
            "label": "issues",
            "value": "https://academic.oup.com/biomethods/issue"
          },
          {
            "label": "advance articles",
            "value": "https://academic.oup.com/biomethods/advance-articles"
          },
          {
            "label": "robots 规则",
            "value": "https://academic.oup.com/robots.txt"
          },
          {
            "label": "统一下载目录结构",
            "value": "期刊级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "article → title / abstract / introduction",
              "article → materials and methods / results / discussion",
              "article → supplementary data / DOI / citation"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF"
          },
          {
            "label": "不闭合部分",
            "value": "supplementary data 官方未给封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，但当前环境未能稳定抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://academic.oup.com/biomethods ，https://academic.oup.com/biomethods/pages/about"
          }
        ],
        "crawlPseudocode": "seed = \"https://academic.oup.com/robots.txt\"\ncheck(seed)\nfor url in [\n  \"https://academic.oup.com/biomethods\",\n  \"https://academic.oup.com/biomethods/issue\",\n  \"https://academic.oup.com/biomethods/advance-articles\"\n]:\n    page = GET(url)\n    if page.status == 200:\n        extract_article_links(page)\n    else:\n        record_access_block(url, page.status)"
      },
      {
        "title": "Protocol Online",
        "slug": "protocol-online",
        "sectionNumber": "5.13",
        "summary": "它更像历史协议目录和长尾方法抓取入口，适合作为湿实验长尾补充语料、分类采样层和旧 protocol 发现层；不应当成高一致性、强结构化的 protocol 主库。",
        "resourceType": "legacy protocol 聚合目录 / 缓存方法页与外链混合站点。",
        "recommendedLevel": "P2 长尾湿实验补充层。",
        "recommendedUnit": "以 protocol page / cached method page 为主，保留 category、title、abstract、materials、procedure、troubleshooting 和 outbound source link。",
        "recommendedKey": "protocol page URL / cache ID / canonical title slug",
        "fields": [
          {
            "label": "平台复核结论",
            "value": "该平台定位为“长尾补充层【难洗】”。平台证据：官方首页同时聚合 Protocol、BioForum、BioProduct、BioTool、PubAlert、BioBlog、BioJob，说明其对象类型混杂。证据链接：https://www.protocol-online.org/"
          },
          {
            "label": "资源类型分类",
            "value": "legacy protocol 聚合目录 / 缓存方法页与外链混合站点。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 长尾湿实验补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "它更像历史协议目录和长尾方法抓取入口，适合作为湿实验长尾补充语料、分类采样层和旧 protocol 发现层；不应当成高一致性、强结构化的 protocol 主库。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 protocol page / cached method page 为主，保留 category、title、abstract、materials、procedure、troubleshooting 和 outbound source link。"
          },
          {
            "label": "建议拆表",
            "value": "protocol_online_page、protocol_online_category、protocol_online_section、protocol_online_cache_ref、protocol_online_source_link。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "原始 Notion 条目将其定义为 aggregated research protocols, manuals, cached methods, and contributed protocol links in bioscience，覆盖 Molecular Biology、Cell Biology、Genetics、Physiology、Microbiology、Botany、Biotechnology、Biochemistry、Biophysics、Medical / Biomedical Biology、Neurobiology / Neuroscience，以及少量 Computational Biology / Bioinformatics。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "原始 Notion 条目记录规模为 Over 3,500 protocols，并标注站点 live, but many areas are unstable or degraded、最近更新时间约为 2021 (?)。本轮在线复核也观察到站点首页与目录页仍可访问，但官方 sitemap.xml 仅暴露 1 条首页 URL，说明站点仍在线但官方批量索引能力很弱。"
          },
          {
            "label": "下载单元数量",
            "value": "若按“可公开浏览的 protocol page / cached method page”口径，原始 Notion 条目记录为 Over 3,500 protocols；本轮官方 sitemap.xml 只能直接核到 1 条首页 URL，因此不能把 sitemap 计数误写成全站协议总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条公开目录/协议页抽样，包括目录首页、1 条 protocol detail、1 条 cached page 和 2 条 category page，平均页面大小约 159.59 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "原始 Notion 条目给出的 record format 为 Title、Abstract、Materials、Procedure、Troubleshooting。主要消费格式可概括为 闭合部分：HTML；不闭合部分：外链目标、缓存页和来源站点文件类型并不统一，官方未给封闭格式全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "原始条目强调它 Protocol-rich、Aggregated、Mostly wet-lab、Some dry-lab support、Quality varies。最适合 broad protocol discovery、legacy protocol harvesting、category-aware sampling、finding source labs and manuals；不适合做 gold-standard benchmark，也不适合做强 DOI 中心化的 publication linkage。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "原始条目指出其 Publicly browsable without login，但内容 provenance 和 licensing vary；本轮复核确认 homepage、protocol index、category 页和样例协议页均可直接访问。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；主页、目录页、category 页、protocol detail 页和 cached page 都能稳定访问，但官方 sitemap 几乎不提供有效批量枚举，因此更适合从目录层逐层抓取，不适合只依赖 sitemap。"
          },
          {
            "label": "推荐批量主键",
            "value": "protocol page URL / cache ID / canonical title slug"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "站点主页",
            "value": "https://www.protocol-online.org/"
          },
          {
            "label": "protocol 目录",
            "value": "https://www.protocol-online.org/prot/"
          },
          {
            "label": "Bioinformatics and Statistics 分类页",
            "value": "https://www.protocol-online.org/prot/Bioinformatics_and_Statistics/index.html"
          },
          {
            "label": "robots 规则",
            "value": "https://www.protocol-online.org/robots.txt"
          },
          {
            "label": "sitemap",
            "value": "https://www.protocol-online.org/sitemap.xml"
          },
          {
            "label": "统一下载目录结构",
            "value": "站点级无统一下载目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "category → subcategory → protocol page",
              "protocol page → title / abstract / materials / procedure / troubleshooting",
              "protocol page → cached copy / outbound source link"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML"
          },
          {
            "label": "不闭合部分",
            "value": "外链目标和缓存来源未给封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证主页、目录页与样例协议页抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.protocol-online.org/ ，https://www.protocol-online.org/robots.txt"
          }
        ],
        "crawlPseudocode": "seed = \"https://www.protocol-online.org/prot/\"\nqueue = [seed]\nwhile queue not empty:\n    page = GET_HTML(queue.pop())\n    save(page.url, page.status, page.bytes)\n    for link in extract_protocol_or_category_links(page):\n        if is_protocol_online(link):\n            queue.push(link)"
      }
    ]
  },
  {
    "title": "Workflow 与 Registry 层",
    "slug": "workflow-registry",
    "sectionNumber": "6",
    "description": "聚焦 workflow、descriptor、源码与版本关系，适合流程复现、调度和工具编排。",
    "entries": [
      {
        "title": "WorkflowHub",
        "slug": "workflowhub",
        "sectionNumber": "6.1",
        "summary": "",
        "resourceType": "Workflow registry / RO-Crate 工作流枢纽。",
        "recommendedLevel": "",
        "recommendedUnit": "以 workflow / version / RO-Crate 为主，保留版本、作者、license、descriptor 和 crate 资产。",
        "recommendedKey": "workflow id / version id / TRS tool id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Workflow registry / RO-Crate 工作流枢纽。"
          },
          {
            "label": "展示层级",
            "value": "P0 workflow 定义主层。"
          },
          {
            "label": "在干实验资源图谱中的定位",
            "value": "适合作为 workflow metadata 与版本关系的主层，尤其适合提供“先看流程定义、再抓 descriptor”的入口。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 workflow / version / RO-Crate 为主，保留版本、作者、license、descriptor 和 crate 资产。"
          },
          {
            "label": "推荐结构表",
            "value": "workflowhub_workflow、workflowhub_version、workflowhub_rocrate、workflowhub_file_asset、workflowhub_author。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Workflow 注册表，覆盖范围为 Dry；核心用途是 workflow 元数据、RO-Crate、可复用计算流程检索。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“核心保留”层，通常不公开统一稳定总量。备注：这是 dry-lab workflow 语料的核心入口之一，应从 protocol 类资源中独立出来。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 workflow → version；workflow → RO-Crate；workflow → metadata / authors / license；主要消费格式可概括为 闭合部分：RO-Crate；不闭合部分：具体 workflow 文件格式取决于被收录工作流语言。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 workflow 元数据、RO-Crate、可复用计算流程检索；protocol 生成适配度 低-中，dry-lab workflow 生成适配度 高，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：可下载工作流与元数据。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 TRS tool/workflow 口径，当前通过 GA4GH TRS 接口可枚举约 1,461 条记录。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 workflow descriptor 抽样计算，平均约 27.28 KB。"
          },
          {
            "label": "准入判断",
            "value": "批量抓取成功；GA4GH TRS 是稳定的批量入口，网页抓取更适合作为补充。"
          },
          {
            "label": "推荐批量主键",
            "value": "workflow id / version id / TRS tool id"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "GA4GH TRS tools 接口",
            "value": "https://workflowhub.eu/ga4gh/trs/v2/tools"
          },
          {
            "label": "GA4GH TRS service-info",
            "value": "https://workflowhub.eu/ga4gh/trs/v2/service-info"
          },
          {
            "label": "平台主页",
            "value": "https://workflowhub.eu/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "workflow → version",
              "workflow → RO-Crate",
              "workflow → metadata / authors / license"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "RO-Crate"
          },
          {
            "label": "不闭合部分",
            "value": "具体 workflow 文件格式取决于被收录工作流语言"
          },
          {
            "label": "单平台爬取实验",
            "value": "内部复核显示，TRS 接口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://workflowhub.eu/ ，https://about.workflowhub.eu/"
          }
        ],
        "crawlPseudocode": "1. 先请求 TRS `service-info` 确认实例能力。\n2. 再从 TRS `tools` 接口枚举 workflow/tool。\n3. 对每个 tool 再拉取 versions、descriptor types 和作者/许可证信息。\n4. 把 `tool -> version -> descriptor` 三层结构原样落盘。\n5. 网页详情只做核对，不替代 TRS 结构化接口。",
        "crawlScriptPath": "tools/platform_crawlers/dry/workflowhub.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    info = fetch_json(\"https://workflowhub.eu/ga4gh/trs/v2/service-info\")\n    tools = fetch_json(\"https://workflowhub.eu/ga4gh/trs/v2/tools\")\n    payload = {\n        \"organization\": (info.get(\"json\") or {}).get(\"organization\"),\n        \"tool_count\": len(tools.get(\"json\") or []),\n        \"sample_tools\": [item.get(\"id\") for item in (tools.get(\"json\") or [])[:5]],\n    }\n    print(save_snapshot(\"dry/workflowhub.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/workflowhub.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/workflowhub.json"
      },
      {
        "title": "Dockstore",
        "slug": "dockstore",
        "sectionNumber": "6.2",
        "summary": "适合作为 descriptor 级 workflow / tool 主库，尤其适合沉淀 CWL / WDL / Nextflow 定义及其版本关系。",
        "resourceType": "Workflow / tool registry / TRS 实现。",
        "recommendedLevel": "P0 workflow 定义主层。",
        "recommendedUnit": "以 entry → version → descriptor 为主，保留 files、checksums、registry metadata 和 TRS 字段。",
        "recommendedKey": "tool / workflow path + version",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Workflow / tool registry / TRS 实现。"
          },
          {
            "label": "建议纳入层级",
            "value": "P0 workflow 定义主层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为 descriptor 级 workflow / tool 主库，尤其适合沉淀 CWL / WDL / Nextflow 定义及其版本关系。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 entry → version → descriptor 为主，保留 files、checksums、registry metadata 和 TRS 字段。"
          },
          {
            "label": "建议拆表",
            "value": "dockstore_entry、dockstore_version、dockstore_descriptor、dockstore_source_file、dockstore_checker_snapshot。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "工具/Workflow 注册表，覆盖范围为 Dry；核心用途是 CWL/WDL/Nextflow workflow 检索与规范化。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“核心保留”层，通常不公开统一稳定总量。备注：更接近 registry，不是期刊型 protocol 语料；非常适合 workflow agent。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 entry(tool/workflow/service) → version → descriptor；entry → files / checksums / metadata；主要消费格式可概括为 闭合：CWL、WDL、Nextflow、JSON(TRS/registry)。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 CWL/WDL/Nextflow workflow 检索与规范化；protocol 生成适配度 低，dry-lab workflow 生成适配度 高，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：有 API / registry 访问模式。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 entry 口径，当前公开 TRS 列表接口单页可稳定枚举 100 条记录；平台未在该接口直接暴露可复核的统一总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 descriptor 抽样计算，平均约 3.46 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；GA4GH TRS 是稳定批量入口。"
          },
          {
            "label": "推荐批量主键",
            "value": "tool / workflow path + version"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "GA4GH TRS tools 接口",
            "value": "https://dockstore.org/api/ga4gh/trs/v2/tools?limit=1"
          },
          {
            "label": "GA4GH TRS service-info",
            "value": "https://dockstore.org/api/ga4gh/trs/v2/service-info"
          },
          {
            "label": "robots 规则",
            "value": "https://dockstore.org/robots.txt"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "entry(tool/workflow/service) → version → descriptor",
              "entry → files / checksums / metadata"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合",
            "value": "CWL、WDL、Nextflow、JSON(TRS/registry)"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证 TRS 接口与 descriptor 抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://dockstore.org/ ，https://dockstore.org/about"
          }
        ],
        "crawlPseudocode": "1. 先请求 TRS `service-info` 确认接口在线。\n2. 再从 TRS `tools` 分页枚举 workflow / tool / service。\n3. 按 `id + version` 下钻 descriptor 与 checker 信息。\n4. 把 entry、version、descriptor、source repo 分开记录。\n5. 以 TRS 为主入口，网页仅做补充。",
        "crawlScriptPath": "tools/platform_crawlers/dry/dockstore.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    info = fetch_json(\"https://dockstore.org/api/ga4gh/trs/v2/service-info\")\n    tools = fetch_json(\"https://dockstore.org/api/ga4gh/trs/v2/tools?limit=5\")\n    payload = {\n        \"organization\": (info.get(\"json\") or {}).get(\"organization\"),\n        \"sample_tools\": [{\"id\": item.get(\"id\"), \"name\": item.get(\"name\")} for item in (tools.get(\"json\") or [])],\n    }\n    print(save_snapshot(\"dry/dockstore.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/dockstore.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/dockstore.json"
      },
      {
        "title": "nf-core",
        "slug": "nf-core",
        "sectionNumber": "6.3",
        "summary": "适合作为可执行 pipeline 的代码原生主层；对让 agent 学“真实项目里的 workflow 长什么样”特别重要。",
        "resourceType": "代码原生 workflow 集合 / Nextflow 生态。",
        "recommendedLevel": "P0 workflow 定义主层。",
        "recommendedUnit": "以 pipeline repo 为主，保留 schema、config、tests、docs、release 和模块关系。",
        "recommendedKey": "pipeline slug / repo full_name / release tag",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "代码原生 workflow 集合 / Nextflow 生态。"
          },
          {
            "label": "建议纳入层级",
            "value": "P0 workflow 定义主层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为可执行 pipeline 的代码原生主层；对让 agent 学“真实项目里的 workflow 长什么样”特别重要。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 pipeline repo 为主，保留 schema、config、tests、docs、release 和模块关系。"
          },
          {
            "label": "建议拆表",
            "value": "nfcore_pipeline、nfcore_release、nfcore_param_schema、nfcore_module_ref、nfcore_doc_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "社区工作流集合，覆盖范围为 Dry；核心用途是 高质量 Nextflow 生信流程；参数/模块/最佳实践学习。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方 pipelines.json 当前可核约 147 个 pipeline；是 workflow generation 的主干资源之一，优先级很高。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 pipeline repo 口径，当前可核约 147 个 pipeline。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按前 5 个 pipeline 对应 GitHub 仓库 size 字段抽样计算，平均约 16.12 MB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 pipeline → module → subworkflow → docs；pipeline → schema / config / tests；主要消费格式可概括为 闭合：Nextflow、YAML、JSON、Markdown。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 高质量 Nextflow 生信流程；参数/模块/最佳实践学习；protocol 生成适配度 低，dry-lab workflow 生成适配度 高，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：代码仓库与站点可访问。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；pipelines.json 是稳定的全站批量入口，后续再下钻到各 pipeline 页面或仓库。"
          },
          {
            "label": "推荐批量主键",
            "value": "pipeline slug / repo full_name / release tag"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "全站 pipeline JSON 索引",
            "value": "https://nf-co.re/pipelines.json"
          },
          {
            "label": "站点首页",
            "value": "https://nf-co.re/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "pipeline → module → subworkflow → docs",
              "pipeline → schema / config / tests"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合",
            "value": "Nextflow、YAML、JSON、Markdown"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证 pipelines.json 与样例仓库入口抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://nf-co.re/"
          }
        ],
        "crawlPseudocode": "1. 从 `pipelines.json` 枚举 pipeline。\n2. 抽取 `name / repo / releases / schema / docs` 等公开字段。\n3. 再按 repo 或 release 链接补拉需要的静态元数据。\n4. 把 pipeline 元数据、release 元数据和 schema 文件分层存放。\n5. 不把 GitHub 页面 HTML 当主抓取源。",
        "crawlScriptPath": "tools/platform_crawlers/dry/nf_core.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    pipelines = fetch_json(\"https://nf-co.re/pipelines.json\")\n    payload = {\n        \"pipeline_count\": len((pipelines.get(\"json\") or {}).get(\"remote_workflows\", [])),\n        \"sample_pipelines\": [\n            {\"name\": item.get(\"name\"), \"repo\": item.get(\"repo\")}\n            for item in (pipelines.get(\"json\") or {}).get(\"remote_workflows\", [])[:5]\n        ],\n    }\n    print(save_snapshot(\"dry/nf_core.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/nf_core.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/nf_core.json"
      },
      {
        "title": "Galaxy workflows / Galaxy platform",
        "slug": "galaxy-workflows-galaxy-platform",
        "sectionNumber": "6.4",
        "summary": "更适合作为 workflow 运行实例和图结构样本层，而不是统一全网主库；它能帮助 agent 学会 step-tool-parameter 图结构。",
        "resourceType": "Workflow 生态 / 公开实例 API 层。",
        "recommendedLevel": "P1 workflow 运行实例层。",
        "recommendedUnit": "以 instance base URL + workflow id 为主，保留 workflow JSON、step 图、tool 引用和 tutorial 映射。",
        "recommendedKey": "server base URL + workflow id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Workflow 生态 / 公开实例 API 层。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 workflow 运行实例层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作为 workflow 运行实例和图结构样本层，而不是统一全网主库；它能帮助 agent 学会 step-tool-parameter 图结构。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 instance base URL + workflow id 为主，保留 workflow JSON、step 图、tool 引用和 tutorial 映射。"
          },
          {
            "label": "建议拆表",
            "value": "galaxy_workflow、galaxy_step、galaxy_tool_ref、galaxy_workflow_file、galaxy_tutorial_link。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Workflow 平台/生态，覆盖范围为 Dry；核心用途是 工作流图结构；可视化流程与教程联动。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“核心保留”层，通常不公开统一稳定总量。备注：应同时关注 Galaxy workflows 与 GTN 教程；非常适合 agent 学习分析顺序和工具衔接。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 workflow → step → tool → parameter → output；training tutorial → workflow → history；主要消费格式可概括为 闭合部分：Galaxy workflow JSON；不闭合部分：工作流内部数据文件类型取决于工具链。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 工作流图结构；可视化流程与教程联动；protocol 生成适配度 低，dry-lab workflow 生成适配度 高，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：平台与 workflow 导入导出。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按代表性公开实例统计，当前 usegalaxy.org 可枚举约 2,347 个 workflow，usegalaxy.eu 可枚举约 2,194 个 workflow；生态层不存在统一全网总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按两个代表性实例各抽样 5 个 workflow 下载 JSON 计算，平均约 101.63 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮代表性实例抓取成功；这是多实例生态，不存在一个覆盖全网的统一入口；应按公开 Galaxy 实例分别抓取 /api/workflows。"
          },
          {
            "label": "推荐批量主键",
            "value": "server base URL + workflow id"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "代表性公开实例 usegalaxy.org",
            "value": "https://usegalaxy.org/api/workflows"
          },
          {
            "label": "代表性公开实例 usegalaxy.eu",
            "value": "https://usegalaxy.eu/api/workflows"
          },
          {
            "label": "Galaxy API 文档",
            "value": "https://docs.galaxyproject.org/en/master/api/"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "workflow → step → tool → parameter → output",
              "training tutorial → workflow → history"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "Galaxy workflow JSON"
          },
          {
            "label": "不闭合部分",
            "value": "工作流内部数据文件类型取决于工具链"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证代表性实例与 workflow API 抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://galaxyproject.org/ ，https://galaxyproject.org/learn/advanced-workflow/"
          }
        ],
        "crawlPseudocode": "1. 访问 `usegalaxy.org 工作流接口` 对应的官方入口：`https://usegalaxy.org/api/workflows`。\n2. 访问 `usegalaxy.eu 工作流接口` 对应的官方入口：`https://usegalaxy.eu/api/workflows`。\n3. 把 `galaxy_workflows` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n4. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/dry/galaxy_workflows.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    version = fetch_json(\"https://usegalaxy.org/api/version\")\n    workflows = fetch_json(\"https://usegalaxy.org/api/workflows?limit=1\")\n    payload = {\n        \"instance_version\": (version.get(\"json\") or {}).get(\"version_major\"),\n        \"workflow_count\": len(workflows.get(\"json\") or []),\n        \"sample_workflow_ids\": [item.get(\"id\") for item in (workflows.get(\"json\") or [])[:3]],\n    }\n    print(save_snapshot(\"dry/galaxy_workflows.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/galaxy_workflows.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/galaxy_workflows.json"
      },
      {
        "title": "Galaxy Training Network",
        "slug": "galaxy-training-network",
        "sectionNumber": "6.5",
        "summary": "适合作为“教程文字 + workflow 文件 + 工具清单 + Zenodo 训练数据”联合语料层；它不是通用 workflow registry，但非常适合训练 agent 学会把分析步骤讲清楚并对齐到 Galaxy workflow。",
        "resourceType": "教程驱动 workflow / training 语料库。",
        "recommendedLevel": "P1 workflow 教学主补充层。",
        "recommendedUnit": "以 topic / tutorial / workflow asset 为主，保留 tutorial 元数据、hands-on 内容、workflow .ga、工具清单、Zenodo 链接和 supported servers。",
        "recommendedKey": "topic name + tutorial id(short_id / tutorial_name) + workflow filename",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "教程驱动 workflow / training 语料库。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 workflow 教学主补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为“教程文字 + workflow 文件 + 工具清单 + Zenodo 训练数据”联合语料层；它不是通用 workflow registry，但非常适合训练 agent 学会把分析步骤讲清楚并对齐到 Galaxy workflow。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 topic / tutorial / workflow asset 为主，保留 tutorial 元数据、hands-on 内容、workflow .ga、工具清单、Zenodo 链接和 supported servers。"
          },
          {
            "label": "建议拆表",
            "value": "gtn_topic、gtn_tutorial、gtn_workflow_asset、gtn_tool_ref、gtn_zenodo_link、gtn_contributor。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "Galaxy Training Network 官方训练材料库，覆盖范围为 Dry；核心用途是 Galaxy 教程、分析步骤讲解、训练用 workflow 与配套数据链接。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "2026-04-03 复核时，官方 topics.json 可见 35 个 topics；逐 topic 汇总可见约 672 个 tutorial/material 记录，其中约 306 个材料项带 workflow 资产；官方 sitemap.xml 可枚举约 7,400 个 URL，属于持续社区更新型资源。"
          },
          {
            "label": "下载单元数量",
            "value": "按推荐下载单元中的 tutorial / material 口径，当前可核约 672 个教程单元。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 tutorial/material JSON 记录抽样计算，平均约 10.18 KB；若改按 workflow 资产统计会得到不同结果。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 topic → tutorial(material)；tutorial → workflows / tools / contributors / supported_servers；tutorial → Zenodo / video / slides / HTML page；主要消费格式可概括为 闭合部分：JSON(API)、HTML、Markdown/教程正文导出、Galaxy workflow(.ga)；不闭合部分：训练数据文件类型取决于教程指向的 Zenodo 或外部数据源。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 教程驱动的 workflow 学习、步骤解释生成、工具链对齐、教学型 agent 监督。为什么值得补：它把“文字解释”和“可运行 workflow”绑在一起，是 dry-lab agent 很稀缺的高质量联合语料。主要提醒：它更偏 training，不等于生产级通用 workflow registry。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放；官方站点、sitemap 和 JSON 端点可访问。实际抓取时应优先走官方 JSON 与教程页面，不要仅从前端 HTML 反推。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；虽然 robots.txt 对 /api/ 给出通用爬虫限制口径，但官方 JSON 实际可访问，且是站点自身稳定结构化出口。提交口径里应写成“优先使用官方 JSON / tutorial 页面，遵守频率控制，不做无边界暴力抓取”。"
          },
          {
            "label": "推荐批量主键",
            "value": "topic name + tutorial id(short_id / tutorial_name) + workflow filename"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "topics JSON 索引",
            "value": "https://training.galaxyproject.org/training-material/api/topics.json"
          },
          {
            "label": "topic JSON 示例",
            "value": "https://training.galaxyproject.org/training-material/api/topics/transcriptomics.json"
          },
          {
            "label": "tutorial JSON 示例",
            "value": "https://training.galaxyproject.org/training-material/api/topics/transcriptomics/tutorials/ref-based/tutorial.json"
          },
          {
            "label": "站点 sitemap",
            "value": "https://training.galaxyproject.org/training-material/sitemap.xml"
          },
          {
            "label": "统一下载目录结构",
            "value": "站点级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "topic → tutorial(material)",
              "tutorial → workflows / tools / contributors / supported_servers",
              "tutorial → Zenodo / video / slides / HTML page"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "JSON(API)、HTML、Galaxy workflow(.ga)"
          },
          {
            "label": "不闭合部分",
            "value": "训练数据文件通常落在 Zenodo 或外部仓库，官方不定义封闭格式全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证官方 JSON 与教程页面抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://training.galaxyproject.org/training-material/ ，https://training.galaxyproject.org/training-material/api/topics.json"
          }
        ],
        "crawlPseudocode": "topics = GET(\"https://training.galaxyproject.org/training-material/api/topics.json\")\nfor topic in topics:\n    topic_json = GET(topic[\"url\"])\n    for tutorial in topic_json[\"materials\"]:\n        save_tutorial_metadata(tutorial)\n        save_tools_and_contributors(tutorial)\n        for wf in tutorial[\"workflows\"]:\n            download_if_needed(wf[\"url\"])"
      },
      {
        "title": "Bioconductor Workflows",
        "slug": "bioconductor-workflows",
        "sectionNumber": "6.6",
        "summary": "适合作为“解释性强的 workflow + code + 文档”联合语料层，特别有利于 agent 学会把分析逻辑说清楚。",
        "resourceType": "Workflow 文档+代码包集合 / Bioconductor 生态。",
        "recommendedLevel": "P1 workflow 教学补充层。",
        "recommendedUnit": "以 package 为主，保留 vignette、workflow 文档、R/Rmd 代码、figures 和 source tarball。",
        "recommendedKey": "package name + version",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Workflow 文档+代码包集合 / Bioconductor 生态。"
          },
          {
            "label": "建议纳入层级",
            "value": "P1 workflow 教学补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "适合作为“解释性强的 workflow + code + 文档”联合语料层，特别有利于 agent 学会把分析逻辑说清楚。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 package 为主，保留 vignette、workflow 文档、R/Rmd 代码、figures 和 source tarball。"
          },
          {
            "label": "建议拆表",
            "value": "bioc_workflow_article、bioc_code_block、bioc_package_ref、bioc_asset。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "计算分析 workflow / vignettes，覆盖范围为 Dry；核心用途是 R/Bioconductor 分析流程、代码与解释文字对齐。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active；平台更适合作为“核心保留”层，通常不公开统一稳定总量。备注：非常适合做‘分析步骤 + 代码 + 说明文字’联合监督。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 workflow → package → vignette → code / figures；主要消费格式可概括为 闭合：HTML、PDF、R、Rmd。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 R/Bioconductor 分析流程、代码与解释文字对齐；protocol 生成适配度 低，dry-lab workflow 生成适配度 高，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：站点与包可访问。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "按官方 workflows/packages.js 中的 workflow package 口径，当前可核约 29 个 package。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按前 5 个 workflow package 落地页 HTML 抽样计算，平均约 22.27 KB。"
          },
          {
            "label": "准入判断",
            "value": "本轮抓取成功；稳定入口是 workflows landing、BiocViews Workflow 分类页和 PACKAGES 索引文件。"
          },
          {
            "label": "推荐批量主键",
            "value": "package name + version"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "release workflows landing",
            "value": "https://bioconductor.org/packages/release/workflows/"
          },
          {
            "label": "BiocViews Workflow 分类页",
            "value": "https://bioconductor.org/packages/release/BiocViews.html#___Workflow"
          },
          {
            "label": "包索引 PACKAGES.gz",
            "value": "https://bioconductor.org/packages/release/bioc/src/contrib/PACKAGES.gz"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "workflow → package → vignette → code / figures"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合",
            "value": "HTML、PDF、R、Rmd"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，并已验证 landing 页与包索引抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.bioconductor.org/help/workflows/"
          }
        ],
        "crawlPseudocode": "1. 先抓 workflows landing 页核对公开工作流包列表。\n2. 再读取 `PACKAGES.gz` 解析 package index。\n3. 把 workflow package、version、depends、vignette 和 source tarball 信息分开保存。\n4. landing 页面只做展示层核对，主元数据来自 package index。\n5. 必要时再根据 package name 补抓具体 vignette 页面。",
        "crawlScriptPath": "tools/platform_crawlers/dry/bioconductor_workflows.py",
        "crawlScriptSource": "from pathlib import Path\nimport re\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_gzip_text, fetch_text, save_snapshot\n\n\ndef main() -> None:\n    landing = fetch_text(\"https://bioconductor.org/packages/release/workflows/\")\n    packages = fetch_gzip_text(\"https://bioconductor.org/packages/release/bioc/src/contrib/PACKAGES.gz\")\n    names = re.findall(r\"^Package: (.+)$\", packages.get(\"text\", \"\"), flags=re.M)[:10]\n    payload = {\n        \"landing_preview\": landing.get(\"text\", \"\")[:200],\n        \"sample_packages\": names,\n    }\n    print(save_snapshot(\"dry/bioconductor_workflows.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/bioconductor_workflows.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/bioconductor_workflows.json"
      },
      {
        "title": "myExperiment",
        "slug": "myexperiment",
        "sectionNumber": "6.7",
        "summary": "更适合作历史 workflow 样本和长尾补充层，而不是当前主库；访问受阻时应优先保留元数据而不是强抓页面。",
        "resourceType": "历史 workflow 分享站 / 长尾补充源。",
        "recommendedLevel": "P2 历史补充层。",
        "recommendedUnit": "以 workflow record 为主，保留 version、file、annotations、tags 和外链。",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "历史 workflow 分享站 / 长尾补充源。"
          },
          {
            "label": "建议纳入层级",
            "value": "P2 历史补充层。"
          },
          {
            "label": "对干实验 agent raw 数据库的定位",
            "value": "更适合作历史 workflow 样本和长尾补充层，而不是当前主库；访问受阻时应优先保留元数据而不是强抓页面。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 workflow record 为主，保留 version、file、annotations、tags 和外链。"
          },
          {
            "label": "建议拆表",
            "value": "myexperiment_workflow_meta、myexperiment_version_meta、myexperiment_file_link、myexperiment_annotation、myexperiment_access_state。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "历史 workflow 分享站点，覆盖范围为 Dry；核心用途是 历史工作流样本；长尾补充。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前状态 Active but historical；平台更适合作为“补充保留”层，通常不公开统一稳定总量。备注：站点仍在线，但更适合做历史补充，不宜作为主干资源。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 workflow → version → file → annotations / tags；主要消费格式可概括为 不闭合：工作流文件格式取决于上传来源，官方未给封闭全集。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 历史工作流样本；长尾补充；protocol 生成适配度 否，dry-lab workflow 生成适配度 中-低，可直接作为分析数据源：否。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开放性为 开放；程序化访问情况：可下载工作流；现代化程度有限。实际抓取边界以下方“准入判断”为准。"
          },
          {
            "label": "下载单元数量",
            "value": "当前环境下 workflow 列表页、历史 mashup API 与 robots 均存在访问阻断，未能稳定核出 workflow 记录总量。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "本轮 5 样例 workflow 记录在当前环境下均无法稳定获取，平均大小未能核出。"
          },
          {
            "label": "准入判断",
            "value": "本轮未能稳定抓取成功；站点存在，但当前环境对 workflow 列表页和历史 API 存在访问阻断；不能把它当成本环境下稳定开放的批量抓取源。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "workflow id / workflow URL"
          },
          {
            "label": "已复核公开入口（当前不构成稳定批量入口）",
            "value": ""
          },
          {
            "label": "workflow 列表页",
            "value": "https://www.myexperiment.org/workflows"
          },
          {
            "label": "历史 mashup API",
            "value": "https://www.myexperiment.org/mashup/api.xml?type=workflow&num=1"
          },
          {
            "label": "robots 探测",
            "value": "https://www.myexperiment.org/robots.txt"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "workflow → version → file → annotations / tags"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "不闭合",
            "value": "工作流文件格式取决于上传来源，官方未给封闭全集"
          },
          {
            "label": "单平台爬取实验",
            "value": "本轮已完成内部复核，但当前环境未能稳定抓取成功。"
          },
          {
            "label": "官方来源",
            "value": "https://www.myexperiment.org/ ，https://www.myexperiment.org/workflows"
          }
        ],
        "crawlPseudocode": "1. 访问 `workflow 列表页探测` 对应的官方入口：`https://www.myexperiment.org/workflows`。\n2. 访问 `历史 mashup API 探测` 对应的官方入口：`https://www.myexperiment.org/mashup/api.xml?type=workflow&num=1`。\n3. 访问 `robots 探测` 对应的官方入口：`https://www.myexperiment.org/robots.txt`。\n4. 把 `myexperiment` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/dry/myexperiment.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'workflow 列表页探测', 'url': 'https://www.myexperiment.org/workflows'}, {'label': '历史 mashup API 探测', 'url': 'https://www.myexperiment.org/mashup/api.xml?type=workflow&num=1'}, {'label': 'robots 探测', 'url': 'https://www.myexperiment.org/robots.txt'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"dry/myexperiment.json\", {\"slug\": \"myexperiment\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/dry/myexperiment.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/dry/myexperiment.json"
      }
    ]
  },
  {
    "title": "项目、样本、受控访问与注释骨架平台",
    "slug": "project-sample-access-annotation",
    "sectionNumber": "7",
    "description": "聚焦项目、样本、受控访问与注释骨架平台，补齐跨仓库关联所需的身份与注释层。",
    "entries": [
      {
        "title": "BioProject",
        "slug": "bioproject",
        "sectionNumber": "7.1",
        "summary": "",
        "resourceType": "项目主线数据库。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "项目主线数据库。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "NCBI 官方将其定义为与单一 initiative 相关的 biological data collection，用于汇总 diverse data types 的项目入口。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续更新；本轮先按官方项目定位完成纳入，不误写未核总量。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 BioProject → linked dataset repositories / accessions。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合作为 dry-lab 的 project → dataset 主线节点。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官方项目入口公开可访问。"
          },
          {
            "label": "平台证据",
            "value": "https://www.ncbi.nlm.nih.gov/bioproject/"
          }
        ]
      },
      {
        "title": "BioSample",
        "slug": "biosample",
        "sectionNumber": "7.2",
        "summary": "",
        "resourceType": "样本主线数据库。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "样本主线数据库。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "NCBI 官方将其定义为 experimental assays 所用 biological source materials 的描述数据库。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续更新；本轮先按官方样本定位完成纳入，不误写未核总量。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 BioSample → attributes / organism / source material / linked assays。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合作为 dry-lab 的 sample 主线层，用于补样本属性与来源。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官方样本入口公开可访问。"
          },
          {
            "label": "平台证据",
            "value": "https://www.ncbi.nlm.nih.gov/biosample/"
          }
        ]
      },
      {
        "title": "EGA / dbGaP",
        "slug": "ega-dbgap",
        "sectionNumber": "7.3",
        "summary": "",
        "resourceType": "人类 genotype / phenotype / clinical 受控访问归档。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "人类 genotype / phenotype / clinical 受控访问归档。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "EGA 面向 personally identifiable genetic、phenotypic、clinical data；dbGaP 面向 human genotype-phenotype studies。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续更新；本轮将其纳入“受控访问层”，不误写为开放主库。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 study → dataset / sample / consent / access request metadata。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合补人类疾病、临床与受控访问数据目录层。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "目录入口公开，数据访问受控。"
          },
          {
            "label": "平台证据",
            "value": "https://ega-archive.org/ ，https://dbgap.ncbi.nlm.nih.gov/home/"
          }
        ]
      },
      {
        "title": "OmicsDI",
        "slug": "omicsdi",
        "sectionNumber": "7.4",
        "summary": "",
        "resourceType": "跨组学发现与去重平台。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "跨组学发现与去重平台。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "官方将其定位为 across heterogeneous omics data 的 knowledge discovery framework。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续更新；本轮先按“跨库发现层”纳入，不误写未核总量。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 dataset identifier → source repository / cross-reference / similarity / metadata。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合做跨库 discovery、去重与路由。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官方站点公开可访问。"
          },
          {
            "label": "平台证据",
            "value": "https://www.omicsdi.org/"
          }
        ]
      },
      {
        "title": "Ensembl",
        "slug": "ensembl",
        "sectionNumber": "7.5",
        "summary": "",
        "resourceType": "reference genome / annotation backbone。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "reference genome / annotation backbone。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "官方将其定义为 public and open project，提供 genomes、annotations、tools、methods，并强调 integrated and consistent annotation。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续发布 release；本轮先按“注释骨架层”纳入。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 release → genome → gene → transcript → exon / annotation。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合作为变异解释、坐标对齐与注释版本统一的基础设施层。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官方 about 与各物种入口公开可访问。"
          },
          {
            "label": "平台证据",
            "value": "https://www.ensembl.org/info/about/index.html"
          }
        ]
      },
      {
        "title": "GENCODE",
        "slug": "gencode",
        "sectionNumber": "7.6",
        "summary": "",
        "resourceType": "human / mouse gene annotation 高质量层。",
        "recommendedLevel": "",
        "recommendedUnit": "",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "human / mouse gene annotation 高质量层。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "官方说明其目标是高准确度识别并分类 human and mouse genomes 的 gene features。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续发布 release；本轮按“高质量人/鼠注释层”纳入。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 release → gene / transcript / gene feature annotation。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合人/鼠组学分析、gene model 对齐与高质量注释补位。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官方主页与 release 体系公开可访问。"
          },
          {
            "label": "平台证据",
            "value": "https://www.gencodegenes.org/"
          }
        ]
      }
    ]
  }
];

export const bioAiWetGroups: BioAiGroup[] = [
  {
    "title": "面向湿实验 Agent Raw 数据库的资源分层总览",
    "slug": "overview",
    "sectionNumber": "1",
    "description": "先看湿实验 raw 语料的总体分层、角色划分和入库原则。",
    "entries": [],
    "summary_points": [
      "protocol_raw_text：公开协议原文主层，优先纳入可直接抽取步骤、材料、试剂、注意事项和版本信息的平台。",
      "protocol_supplement：长尾补充层，用于补边缘 protocol、历史表达和社区页面，不作为一期核心主库。",
      "protocol_reference：强参考层或许可化参考层，用于 schema 对齐、结构 benchmark 和高质量表达参照。",
      "domain_special：专题方法层，用于医学与健康研究方法的专项补充。",
      "resource_identity：资源身份层，用于把试剂、细胞系、质粒和化学实体映射到稳定对象。",
      "literature_bridge：论文桥接层，用于把论文、方法描述、开放全文与实验对象回连起来。"
    ]
  },
  {
    "title": "Protocol 正文主层（protocol_raw_text）",
    "slug": "protocol-raw-text",
    "sectionNumber": "2",
    "description": "直接进入主语料层的平台，适合抽取步骤、材料、故障排查与 protocol 正文。",
    "entries": [
      {
        "title": "protocols.io",
        "slug": "protocols-io",
        "sectionNumber": "2.1",
        "summary": "",
        "resourceType": "Protocol 平台 / 社区化协议仓库。",
        "recommendedLevel": "",
        "recommendedUnit": "以 protocol → version → step 为主，同时保留 materials、attachments、作者和 DOI 映射。",
        "recommendedKey": "protocol id / DOI / version id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "Protocol 平台 / 社区化协议仓库。"
          },
          {
            "label": "展示层级",
            "value": "P0 协议原文主层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为湿实验 protocol 原文语料的核心主层，因其版本化、步骤化和材料关系都较清楚。"
          },
          {
            "label": "推荐入库单元",
            "value": "以 protocol → version → step 为主，同时保留 materials、attachments、作者和 DOI 映射。"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_record、protocol_version、protocol_step、protocol_material、protocol_attachment、protocol_reference。"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 protocols.io 官方平台，覆盖湿实验、干实验与跨学科 protocol；在湿实验侧尤其适合作为结构化步骤语料主源。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "平台持续更新，公开页面 sitemap 可核约 158,352 条 protocol URL；同一 protocol 可能因版本或路由产生多个 URL。"
          },
          {
            "label": "下载单元数量",
            "value": "若按公开 protocol 页面 URL 口径统计，当前可核约 158,352 条。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按前 5 条公开 protocol 页面 HTML 抽样计算，平均约 12.95 KB；不含附件。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 protocol → version → step，protocol → materials / reagents / equipment，protocol → attachments / media。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合步骤抽取、材料规范化、protocol 生成、protocol 检索和 protocol 版本对齐。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "公开页面可访问；开发者 API 存在，但更深层访问依赖授权。"
          },
          {
            "label": "准入判断",
            "value": "公开页面抓取成功；受控 API 仍以授权访问为主。"
          },
          {
            "label": "推荐批量主键",
            "value": "protocol id / DOI / version id"
          },
          {
            "label": "官方批量入口",
            "value": ""
          },
          {
            "label": "robots",
            "value": "https://www.protocols.io/robots.txt"
          },
          {
            "label": "开发者文档",
            "value": "https://www.protocols.io/developers"
          },
          {
            "label": "API 入口",
            "value": "https://www.protocols.io/api/v4/protocols"
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "protocol → version → step",
              "protocol → materials / reagents / equipment",
              "protocol → attachments / media",
              "protocol → authors / tags / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、JSON(API)"
          },
          {
            "label": "不闭合部分",
            "value": "附件上传类型官方未给封闭全集"
          },
          {
            "label": "单平台复核结论",
            "value": "公开 protocol 页面抓取成功，适合作为湿实验主协议层。"
          },
          {
            "label": "官方来源",
            "value": "https://www.protocols.io/ ，https://www.protocols.io/developers ，https://www.protocols.io/robots.txt"
          }
        ],
        "crawlPseudocode": "1. 先读取 `robots.txt` 明确公开页面与 `/api/` 的访问边界。\n2. 把 `developers` 页作为 API 授权与字段语义说明源。\n3. 公开抓取阶段只下钻 public protocol 页面，不伪造 Bearer token 调私有 API。\n4. 从 protocol 页面抽取 `protocol -> version -> step`、materials、references 和 DOI。\n5. 附件与下载资源单独记为 asset 层，不和正文 step 混写。",
        "crawlScriptPath": "tools/platform_crawlers/wet/protocols_io.py",
        "crawlScriptSource": "from pathlib import Path\nimport re\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, save_snapshot\n\n\ndef main() -> None:\n    robots = fetch_text(\"https://www.protocols.io/robots.txt\")\n    dev = fetch_text(\"https://www.protocols.io/developers\")\n    payload = {\n        \"api_disallow_lines\": [line for line in robots.get(\"text\", \"\").splitlines() if \"Disallow:\" in line and \"/api/\" in line],\n        \"developer_page_has_oauth\": bool(re.search(r\"OAuth|Bearer\", dev.get(\"text\", \"\"), re.I)),\n        \"developer_page_preview\": dev.get(\"text\", \"\")[:300],\n    }\n    print(save_snapshot(\"wet/protocols_io.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/protocols_io.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/protocols_io.json"
      },
      {
        "title": "Bio-protocol",
        "slug": "bio-protocol",
        "sectionNumber": "2.2",
        "summary": "",
        "resourceType": "开放获取方法文章平台。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "开放获取方法文章平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 协议原文主层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为公开湿实验方法正文的主层补充，尤其适合补 protocols.io 之外的 article 形态协议。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_article、article_section、article_figure、article_reference"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Bio-protocol 官方站点。公开 sitemap 已明确拆出 protocol、Bio101、RAPProtocol、collection 和 conciseprotocol 等对象层，覆盖实验方法正文、教学型方法说明、快速协议与专题集合。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "站点主页、robots.txt 与 sitemap.xml 均可复核。当前 sitemap 索引含 855 个子 sitemap，其中主 protocol 层 4,867 个 detail URL，Bio101 1,025 个，RAPProtocol 2,410 个，collection 46 个，另有 847 个 conciseprotocol 分片 sitemap。"
          },
          {
            "label": "下载单元数量",
            "value": "若按湿实验主正文层统计，主 protocol 层当前可核 4,867 个 detail URL；若连同 Bio101、RAP 与 collection 一并计入，则对象层明显大于单一 article 口径。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "正文 detail 页在当前环境下返回 Safeline 访问校验页，未将挑战页 HTML 大小误记为正文单元均值。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "主 detail URL 形态为 bpdetail?id=...&type=0。公开结构可落成 protocol article → section / figures / tables / references，并带有 Bio101、RAPProtocol、collection 等并列内容层。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "一方面可提供较标准的 article 式 protocol 正文，另一方面站内还包含配方、准备、教学说明和快速协议，适合补 protocols.io 之外的 article 风格协议语料。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "主页、归档页、robots 与 sitemap 均可公开访问，适合批量发现；英文 detail 页在当前环境下返回访问校验页，因此发现层强、正文层需另行处理。"
          },
          {
            "label": "准入判断",
            "value": "目录层与 sitemap 抓取成功；detail 页当前受访问校验。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article id / canonical article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://bio-protocol.org/en/",
              "https://bio-protocol.org/robots.txt",
              "https://bio-protocol.org/sitemap.xml",
              "https://bio-protocol.org/en/archive"
            ]
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "sitemap-protocol.xml → bpdetail?id=...&type=0",
              "sitemap-bio101.xml → Bio101 article",
              "sitemap-RAPProtocol.xml → RAP protocol",
              "sitemap-collection.xml → collection",
              "sitemap-conciseprotocol*.xml → concise protocol shards"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML"
          },
          {
            "label": "不闭合部分",
            "value": "附件或下载文件类型未见官方全集"
          },
          {
            "label": "单平台复核结论",
            "value": "批量发现层非常清晰，适合先抓 sitemap 与目录层；正文层需要绕开当前访问校验后再继续下钻。"
          },
          {
            "label": "官方来源",
            "value": "https://bio-protocol.org/en/ ，https://bio-protocol.org/robots.txt ，https://bio-protocol.org/sitemap.xml"
          }
        ],
        "crawlPseudocode": "1. 从 `sitemap.xml` 进入，再拆分到 `protocol / Bio101 / RAPProtocol / collection` 子 sitemap。\n2. 优先枚举 `bpdetail?id=...` 这类主 protocol detail URL。\n3. 把 sitemap 发现层和 detail 正文层分开记录；若 detail 受访问校验，只记录发现结果。\n4. 对 `Bio101`、`RAPProtocol` 和 `collection` 另建并列对象层。\n5. 不要把访问校验页的 HTML 大小当作正文单元大小。",
        "crawlScriptPath": "tools/platform_crawlers/wet/bio_protocol.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, parse_xml_loc_tags, save_snapshot\n\n\ndef main() -> None:\n    sitemap = fetch_text(\"https://bio-protocol.org/sitemap.xml\")\n    urls = parse_xml_loc_tags(sitemap.get(\"text\", \"\"), 20)\n    payload = {\n        \"child_sitemaps\": urls[:10],\n        \"protocol_sitemap_count\": sum(\"protocol\" in url.lower() for url in urls),\n    }\n    print(save_snapshot(\"wet/bio_protocol.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/bio_protocol.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/bio_protocol.json"
      },
      {
        "title": "Nature Protocols",
        "slug": "nature-protocols",
        "sectionNumber": "2.3",
        "summary": "",
        "resourceType": "高质量方法期刊。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "article DOI / article URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "高质量方法期刊。"
          },
          {
            "label": "展示层级",
            "value": "P0 协议原文主层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为高质量湿实验方法正文主层，用于规范表达、复杂 protocol 分段和步骤说明对齐。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_article、article_section、article_figure、article_table、article_reference"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Nature Protocols 官方期刊页，覆盖生命科学实验方法。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前可核约 3,911 个文章页，平台持续更新。"
          },
          {
            "label": "下载单元数量",
            "value": "3,911 个文章页"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个文章页抽样，平均约 540.63 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → abstract / introduction / procedure / timing / troubleshooting / anticipated results / references。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合复杂 protocol 结构解析、问题排查段落建模和高质量步骤表达学习。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "目录和代表性文章页可访问。"
          },
          {
            "label": "准入判断",
            "value": "目录与文章页抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://www.nature.com/nprot/",
              "https://www.nature.com/nprot/research-articles"
            ]
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "journal → article",
              "article → sections",
              "article → figures / tables / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": "闭合部分以 HTML 为主；PDF 是否开放依具体文章而定。"
          },
          {
            "label": "单平台复核结论",
            "value": "高质量正文抓取成功，可作为湿实验协议结构参考主层。"
          },
          {
            "label": "官方来源",
            "value": "https://www.nature.com/nprot/"
          }
        ],
        "crawlPseudocode": "1. 从 `research-articles` 列表页开始枚举 article URL 与 DOI。\n2. 逐条进入 article 页面，提取 abstract、procedure、timing、troubleshooting 等栏目。\n3. 把 figures、tables、references 独立挂到 article 之下。\n4. 如 article 提供 PDF，再把 PDF 记为可选文件资产。\n5. 维持 `journal -> article -> section/figure/table/reference` 的层次化结构。",
        "crawlScriptPath": "tools/platform_crawlers/wet/nature_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\ndef main() -> None:\n    listing = fetch_text(\"https://www.nature.com/nprot/research-articles\")\n    articles = find_links(listing.get(\"text\", \"\"), r'/articles/[^\"']+', 10)\n    payload = {\"article_urls\": articles}\n    print(save_snapshot(\"wet/nature_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/nature_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/nature_protocols.json"
      },
      {
        "title": "Cold Spring Harbor Protocols",
        "slug": "cold-spring-harbor-protocols",
        "sectionNumber": "2.4",
        "summary": "",
        "resourceType": "curated protocol 集合。",
        "recommendedLevel": "",
        "recommendedUnit": "protocol article",
        "recommendedKey": "article DOI / article URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "curated protocol 集合。"
          },
          {
            "label": "展示层级",
            "value": "P0 协议原文主层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为标准化 protocol 文章主层，尤其适合补步骤型实验方法。"
          },
          {
            "label": "推荐入库单元",
            "value": "protocol article"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_article、article_section、article_reference"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Cold Spring Harbor Protocols 官方站点，覆盖分子生物学与实验室方法。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前可核约 6,841 个文章页。"
          },
          {
            "label": "下载单元数量",
            "value": "6,841 个文章页"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个文章页抽样，平均约 270.56 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → abstract / materials / methods / notes / references。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合步骤抽取、材料清单抽取和 protocol 段落对齐。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "档案页与代表性文章页可访问。"
          },
          {
            "label": "准入判断",
            "value": "档案页与文章页抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://cshprotocols.cshlp.org/",
              "https://cshprotocols.cshlp.org/content/by/year"
            ]
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "archive → article",
              "article → sections / figures / references"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": "当前稳定可见部分以 HTML 页面为主。"
          },
          {
            "label": "单平台复核结论",
            "value": "适合作为协议原文主层中的高质量补充源。"
          },
          {
            "label": "官方来源",
            "value": "https://cshprotocols.cshlp.org/"
          }
        ],
        "crawlPseudocode": "1. 先从 archive 层枚举 article URL。\n2. 对每篇 protocol article 抓取正文段落和引用信息。\n3. 提取 protocol 页面里的 section 标题、步骤块和参考文献。\n4. 把 article 页面和引用结构单独保存。\n5. 对旧内容保留 canonical URL 与 accession-like 路由映射。",
        "crawlScriptPath": "tools/platform_crawlers/wet/cold_spring_harbor_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\ndef main() -> None:\n    archive = fetch_text(\"https://cshprotocols.cshlp.org/content/by/year\")\n    articles = find_links(archive.get(\"text\", \"\"), r'/content/[0-9]{4}/[0-9]+/[0-9]+/[^\"']+', 10)\n    payload = {\"article_urls\": articles}\n    print(save_snapshot(\"wet/cold_spring_harbor_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/cold_spring_harbor_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/cold_spring_harbor_protocols.json"
      }
    ]
  },
  {
    "title": "长尾补充层（protocol_supplement）",
    "slug": "protocol-supplement",
    "sectionNumber": "3",
    "description": "承接长尾补充平台，适合补充开放社区协议页和历史方法目录。",
    "entries": [
      {
        "title": "OpenWetWare",
        "slug": "openwetware",
        "sectionNumber": "3.1",
        "summary": "",
        "resourceType": "社区协作 wiki。",
        "recommendedLevel": "",
        "recommendedUnit": "wiki page",
        "recommendedKey": "page title / pageid",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "社区协作 wiki。"
          },
          {
            "label": "展示层级",
            "value": "P1 长尾补充层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合补充实验室长尾协议、术语变体和非标准表达，不作为核心 gold source。"
          },
          {
            "label": "推荐入库单元",
            "value": "wiki page"
          },
          {
            "label": "推荐结构表",
            "value": "wiki_page、wiki_section、wiki_category_link"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 OpenWetWare 官方 wiki，包含 labs、courses、protocols、notebooks 等多类对象。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前可核约 48,445 个页面。"
          },
          {
            "label": "下载单元数量",
            "value": "48,445 个页面"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个页面抽样，平均约 2.37 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 namespace → page → section / category / template / file。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合补边缘实验、历史协议和社区式表达。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "页面与 MediaWiki API 均可访问。"
          },
          {
            "label": "准入判断",
            "value": "页面与 API 抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "page title / pageid"
          },
          {
            "label": "官方批量入口",
            "value": "",
            "bullets": [
              "https://openwetware.org/wiki/OpenWetWare:About",
              "https://openwetware.org/api.php"
            ]
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "namespace → page",
              "page → section",
              "page → category / template / file"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": "闭合部分为 HTML、JSON/XML(API)；文件附件不构成封闭格式集合。"
          },
          {
            "label": "单平台复核结论",
            "value": "适合做长尾补充，不适合单独定义核心 schema。"
          },
          {
            "label": "官方来源",
            "value": "https://openwetware.org/wiki/OpenWetWare:About"
          }
        ],
        "crawlPseudocode": "1. 先用 MediaWiki API 枚举 page title，而不是直接暴力扫 HTML。\n2. 再按 title 回抓页面 HTML 或 API detail，提取 namespace、category、template。\n3. 把 wiki page、category、attachment/file 分成不同对象层。\n4. 对实验方法页只保留公开文本和分类关系，不把整个 wiki 当结构化 protocol 仓库。\n5. API 枚举与页面补抓并行使用。",
        "crawlScriptPath": "tools/platform_crawlers/wet/openwetware.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_json, save_snapshot\n\n\ndef main() -> None:\n    pages = fetch_json(\"https://openwetware.org/api.php?action=query&list=allpages&aplimit=5&format=json\", timeout=10)\n    payload = {\n        \"status\": pages.get(\"status\"),\n        \"pages\": [\n            {\"pageid\": item.get(\"pageid\"), \"title\": item.get(\"title\")}\n            for item in ((pages.get(\"json\") or {}).get(\"query\") or {}).get(\"allpages\", [])\n        ]\n    }\n    print(save_snapshot(\"wet/openwetware.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/openwetware.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/openwetware.json"
      },
      {
        "title": "Protocol Online",
        "slug": "protocol-online",
        "sectionNumber": "3.2",
        "summary": "",
        "resourceType": "聚合型 protocol 目录。",
        "recommendedLevel": "",
        "recommendedUnit": "protocol page / cached page",
        "recommendedKey": "protocol URL / cached page URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "聚合型 protocol 目录。"
          },
          {
            "label": "展示层级",
            "value": "P1 长尾补充层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为边缘 protocol 与旧方法表达的补充层，不作为核心主库。"
          },
          {
            "label": "推荐入库单元",
            "value": "protocol page / cached page"
          },
          {
            "label": "推荐结构表",
            "value": "protocol_page、page_section、category_link"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Protocol Online 官方站点，首页同时包含 protocol、forum、product、tool、blog、job 等对象。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方首页写明 Over 3,500 protocols。"
          },
          {
            "label": "下载单元数量",
            "value": "官方首页写明 Over 3,500 protocols"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个协议页抽样，平均约 159.59 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 category → subcategory → protocol page / cached method page。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合补历史方法、目录式 protocol 和缓存页内容。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "主页、目录页和分类页可访问。"
          },
          {
            "label": "准入判断",
            "value": "页面抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "protocol URL / cached page URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://www.protocol-online.org/",
              "https://www.protocol-online.org/prot/"
            ]
          },
          {
            "label": "统一下载目录结构",
            "value": "平台级无统一目录树。"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "category → subcategory",
              "subcategory → protocol page / cached page"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": "当前稳定可见部分以 HTML 页面为主。"
          },
          {
            "label": "单平台复核结论",
            "value": "可作为长尾补充，但对象混杂，不宜充当主协议源。"
          },
          {
            "label": "官方来源",
            "value": "https://www.protocol-online.org/"
          }
        ],
        "crawlPseudocode": "seed = \"https://www.protocol-online.org/prot/\"\nqueue = [seed]\nwhile queue not empty:\n    page = GET_HTML(queue.pop())\n    save(page.url, page.status, page.bytes)\n    for link in extract_protocol_or_category_links(page):\n        if is_protocol_online(link):\n            queue.push(link)"
      }
    ]
  },
  {
    "title": "参考层与专题层（protocol_reference / domain_special）",
    "slug": "protocol-reference-domain-special",
    "sectionNumber": "4",
    "description": "聚焦参考层与专题层，覆盖高质量方法期刊、专题协议与领域专刊。",
    "entries": [
      {
        "title": "STAR Protocols",
        "slug": "star-protocols",
        "sectionNumber": "4.1",
        "summary": "",
        "resourceType": "模板化方法文章平台。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "模板化方法文章平台。"
          },
          {
            "label": "展示层级",
            "value": "P1 强参考层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为结构 benchmark 与 schema 对齐参考，尤其适合 key resources 与 troubleshooting 段落建模。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "reference_article、article_section、resource_table"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 STAR Protocols 官方期刊、ScienceDirect article 页与作者指南。官方长期强调 step-by-step methods、key resources table、expected outcomes 与 troubleshooting 等模板化写法。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前可直接访问 ScienceDirect 的 journal issues 与 article 页。代表性 article 页的预加载 JSON 中公开暴露 publicationOpenAccess.oaArticleCount = 4369；最新可见的 Volume 7, Issue 2 页面可枚举 44 个 PII article URL。"
          },
          {
            "label": "下载单元数量",
            "value": "若按 journal 公开 article 口径统计，当前可复核 4,369 个 open-access articles；若按最新 issue 样例层统计，Volume 7, Issue 2 可见 44 个 PII article URL。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按最新 issue 前 5 个 article 页抽样，平均约 179.47 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "article 页同时暴露 HTML 与预加载 JSON；公开字段可直接观察到 Summary、Graphical abstract、Highlights、Subject areas、DOI、卷期、开放许可与 PDF 入口。作者指南另外定义了 Key resources table、method details、expected outcomes、troubleshooting 等结构锚点。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "非常适合做 protocol 模板建模、资源表抽取、图文摘要对齐和 troubleshooting 段落抽取。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "cell.com 的期刊首页与作者指南可复核；ScienceDirect 的 issue 与 article 页当前环境可直接访问。/search/api 需要 token，当前环境返回 401 或访问校验，不能作为稳定批量主入口。"
          },
          {
            "label": "准入判断",
            "value": "issue 与 article 页抓取成功；搜索 API 当前不稳定。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "PII / DOI / article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://www.sciencedirect.com/journal/star-protocols/issues",
              "https://www.sciencedirect.com/science/article/pii/S2666166726000778",
              "https://www.cell.com/star-protocols/home",
              "https://www.cell.com/star-protocols/information-for-authors"
            ]
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "journal → issue → article(PII/DOI)",
              "article → summary / highlights / graphical abstract / subject areas",
              "article → PDF link / open license / metadata JSON"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、JSON(preloaded state)、PDF link"
          },
          {
            "label": "不闭合部分",
            "value": "图像与补充材料类型依具体 article 而变"
          },
          {
            "label": "单平台复核结论",
            "value": "正文 article 层已经可见，推荐以 issue TOC 枚举 PII，再下钻 article 页；搜索 API 暂不作为稳定入口。"
          },
          {
            "label": "官方来源",
            "value": "https://www.sciencedirect.com/journal/star-protocols/issues ，https://www.sciencedirect.com/science/article/pii/S2666166726000778 ，https://www.cell.com/star-protocols/information-for-authors ，https://www.cell.com/information-for-authors/star-authors-guide"
          }
        ],
        "crawlPseudocode": "1. 先从 ScienceDirect `issues` 页枚举 issue URL。\n2. 进入 issue 页后抽取 article 的 PII 链接，而不是依赖受限搜索 API。\n3. 对 article 页面提取 summary、highlights、subject areas、PDF link 和 open access 元数据。\n4. 作者指南页用于核对 `Key resources table / Troubleshooting` 等结构锚点。\n5. 把 `issue -> article(PII)` 作为稳定采集主链路。",
        "crawlScriptPath": "tools/platform_crawlers/wet/star_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'robots 规则', 'url': 'https://www.cell.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://www.cell.com/sitemap-index-1.txt'}, {'label': '期刊主页探测', 'url': 'https://www.cell.com/star-protocols/home'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/star_protocols.json\", {\"slug\": \"star_protocols\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/star_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/star_protocols.json"
      },
      {
        "title": "Current Protocols",
        "slug": "current-protocols",
        "sectionNumber": "4.2",
        "summary": "",
        "resourceType": "许可化方法内容集。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "许可化方法内容集。"
          },
          {
            "label": "展示层级",
            "value": "P1 许可化强参考层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为高质量结构参照与内容校对参考，不按开放主库处理。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "licensed_article、article_section"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Wiley Current Protocols 官方 catalog 与 Onlinelibrary 订阅体系。官方 catalog 将其定义为面向研究者的 step-by-step techniques、procedures 和 practical overviews 集合。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "Wiley 官方 catalog 明确写明该 collection 包含 Over 25,000 个 step-by-step techniques、procedures 和 practical overviews，并强调 Continuously updated。"
          },
          {
            "label": "下载单元数量",
            "value": "若按官方 collection 口径统计，当前至少覆盖 Over 25,000 个 protocol / procedure / practical overview 单元。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "正文单元当前未稳定直连，未计算均值。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "官方描述可落成 collection → protocol unit → section / figures / tables / references，并突出 curated content、practical advice、troubleshooting 和 reproducibility。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合做高质量结构参照、方法写法比对和 troubleshooting 段落借鉴。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "公开可见的是 Wiley catalog 与订阅说明层；正文访问以 Onlinelibrary 许可访问为主。"
          },
          {
            "label": "准入判断",
            "value": "catalog 层可复核，正文为许可访问。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "article DOI / article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://apac.wiley.com/product/en-wol-cp-catalog",
              "https://currentprotocols.onlinelibrary.wiley.com/hub/subscribe"
            ]
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "collection → topic / protocol unit",
              "protocol unit → sections / figures / tables / references",
              "protocol unit → practical advice / troubleshooting"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML(catalog / journal shell)"
          },
          {
            "label": "不闭合部分",
            "value": "正文导出与补充文件依订阅权限和具体内容而变"
          },
          {
            "label": "单平台复核结论",
            "value": "公开层能稳定说明 collection 规模与定位，但当前更适合作为许可化参考层，而非开放主抓取目标。"
          },
          {
            "label": "官方来源",
            "value": "https://apac.wiley.com/product/en-wol-cp-catalog ，https://currentprotocols.onlinelibrary.wiley.com/hub/subscribe"
          }
        ],
        "crawlPseudocode": "1. 访问 `robots 规则` 对应的官方入口：`https://onlinelibrary.wiley.com/robots.txt`。\n2. 访问 `sitemap 探测` 对应的官方入口：`https://onlinelibrary.wiley.com/sitemap-index-1.xml`。\n3. 访问 `期刊主页探测` 对应的官方入口：`https://currentprotocols.onlinelibrary.wiley.com/`。\n4. 把 `current_protocols` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/wet/current_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': 'robots 规则', 'url': 'https://onlinelibrary.wiley.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://onlinelibrary.wiley.com/sitemap-index-1.xml'}, {'label': '期刊主页探测', 'url': 'https://currentprotocols.onlinelibrary.wiley.com/'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/current_protocols.json\", {\"slug\": \"current_protocols\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/current_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/current_protocols.json"
      },
      {
        "title": "Springer Nature Experiments / SpringerProtocols",
        "slug": "springer-nature-experiments-springerprotocols",
        "sectionNumber": "4.3",
        "summary": "",
        "resourceType": "许可化方法平台。",
        "recommendedLevel": "",
        "recommendedUnit": "protocol / chapter metadata",
        "recommendedKey": "record URL / DOI",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "许可化方法平台。"
          },
          {
            "label": "展示层级",
            "value": "P1 许可化参考层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合做 metadata 映射、来源映射和结构参考。"
          },
          {
            "label": "推荐入库单元",
            "value": "protocol / chapter metadata"
          },
          {
            "label": "推荐结构表",
            "value": "licensed_protocol_record、source_mapping"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Springer Nature Experiments 与 SpringerProtocols 产品体系。产品页明确写明该平台把 SpringerProtocols、Nature Protocols、Nature Methods 和 Nature Reviews Methods Primers 汇总到同一 life sciences discovery 平台。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "experiments.springernature.com 首页标题直接写明 Over 90,000 Protocols and Methods；公开 search 页在 categoryFacet=Protocol 条件下当前显示 67,829 results。"
          },
          {
            "label": "下载单元数量",
            "value": "若按平台全部 protocols and methods 口径统计，官网首页为 Over 90,000；若按协议主层 Protocol facet 口径统计，当前公开 search 页为 67,829 条 results。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个 /articles/{DOI} 页面抽样，平均约 106.63 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "平台公开层已经显示 search results → article(/articles/{DOI}) 的统一路由，并提供 date / technique / antibody / organism / cell line / source 等 facet。article 页可作为跨来源协议记录单元。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "非常适合做多来源协议汇聚、来源映射、technique 检索和 organism / reagent facet 对齐。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "主页、公开 search 页和 article 页当前环境可访问；/sources/... 来源页会跳转到身份与 cookie 检查链路，因此不宜把 source 页当作稳定主入口。"
          },
          {
            "label": "准入判断",
            "value": "搜索页与 article 页抓取成功；source 页需身份跳转。"
          },
          {
            "label": "推荐批量主键",
            "value": "record URL / DOI"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://experiments.springernature.com/",
              "https://experiments.springernature.com/search?term=&sortType=recent&categoryFacet=Protocol&startDate=1980-01-01&endDate=2024-12-31&isNewSearch=false",
              "https://www.springernature.com/gp/librarians/products/databases-solutions/experiments"
            ]
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "search → result item(/articles/{DOI})",
              "result item → source / technique / date / facet metadata",
              "platform → source pages(SpringerProtocols / Nature Protocols / Nature Methods / NRM Primers)"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML"
          },
          {
            "label": "不闭合部分",
            "value": "源站正文与授权下载形式依来源而变"
          },
          {
            "label": "单平台复核结论",
            "value": "公开 search 层已经足够做批量发现和结果页采样，source 页的身份跳转不影响把它作为许可化参考层使用。"
          },
          {
            "label": "官方来源",
            "value": "https://experiments.springernature.com/ ，https://www.springernature.com/gp/librarians/products/databases-solutions/experiments ，https://www.springernature.com/gp/librarians/products/databases-solutions/springerprotocols"
          }
        ],
        "crawlPseudocode": "1. 从公开 search 页按 `categoryFacet=Protocol` 枚举 result item。\n2. 把每条结果对应的 `/articles/{DOI}` 作为协议记录单元。\n3. 从结果页同步抽取 source、technique、organism、date 等 facet 元数据。\n4. 对会跳转身份校验的 source 页只记录来源映射，不当作主抓取入口。\n5. 将 `search result -> article -> source metadata` 三层分别保存。",
        "crawlScriptPath": "tools/platform_crawlers/wet/springer_nature_experiments_springerprotocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, find_links, save_snapshot\n\n\nSEARCH_URL = \"https://experiments.springernature.com/search?term=&sortType=recent&categoryFacet=Protocol&startDate=1980-01-01&endDate=2024-12-31&isNewSearch=false\"\n\n\ndef main() -> None:\n    search = fetch_text(SEARCH_URL)\n    articles = find_links(search.get(\"text\", \"\"), r'/articles/[^\"']+', 10)\n    payload = {\"search_url\": SEARCH_URL, \"article_urls\": articles}\n    print(save_snapshot(\"wet/springer_nature_experiments_springerprotocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/springer_nature_experiments_springerprotocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/springer_nature_experiments_springerprotocols.json"
      },
      {
        "title": "Methods and Protocols (MDPI)",
        "slug": "methods-and-protocols-mdpi",
        "sectionNumber": "4.4",
        "summary": "",
        "resourceType": "OA 方法期刊。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "OA 方法期刊。"
          },
          {
            "label": "展示层级",
            "value": "P1 参考层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为公开方法文章参考层。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "reference_article、article_section"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 MDPI Methods and Protocols 官方期刊页。官网将其定义为一个 international, peer-reviewed, open access journal，覆盖 Life Sciences、Chemistry 和 Biomedical Sciences，并按双月刊持续发布。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官网首页公开展示 Latest Articles、All Article Types、Section、Volume 与 Issue 过滤器；站内公开检索口径显示 All Articles (837)。"
          },
          {
            "label": "下载单元数量",
            "value": "若按期刊 article 单元统计，当前站内公开检索口径为 837 篇。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按官网 Latest Articles 前 5 篇卡片给出的文章大小抽样，平均约 2.06 MB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "首页 article 卡片已公开显示 article type、title、authors、volume/issue/number、DOI、publication date、abstract、section / special issue、page count、file size，部分条目还带 supplementary ZIP。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "除标准方法文章外，还能观察到 Protocol、Article、Technical Note 等多种 article type，适合补充开放获取方法类文章，并用作方法写作字段参照。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "官网首页和 latest article cards 可公开索引；当前环境下 journal 与 article 直连返回访问限制，因此更适合先用目录层和 article card 层做发现与元数据抽取。"
          },
          {
            "label": "准入判断",
            "value": "首页与 article card 层可复核，article 直连当前环境受限。"
          },
          {
            "label": "公开入口与发现入口",
            "value": "https://www.mdpi.com/journal/MPs"
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "journal → latest articles / volume / issue / section",
              "article card → type / DOI / abstract / pages / file size",
              "article → supplementary material(optional)"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML、PDF/size metadata"
          },
          {
            "label": "不闭合部分",
            "value": "补充材料类型依 article 而变，如 ZIP"
          },
          {
            "label": "单平台复核结论",
            "value": "期刊公开层信息量很高，足以支撑目录级入库与 article 元数据抽取；正文直连则需要更稳定的访问环境。"
          },
          {
            "label": "官方来源",
            "value": "https://www.mdpi.com/journal/MPs"
          }
        ],
        "crawlPseudocode": "1. 访问 `期刊主页探测` 对应的官方入口：`https://www.mdpi.com/journal/mps`。\n2. 访问 `站点 sitemap 探测` 对应的官方入口：`https://www.mdpi.com/sitemap.xml`。\n3. 访问 `robots 探测` 对应的官方入口：`https://www.mdpi.com/robots.txt`。\n4. 把 `methods_and_protocols_mdpi` 的公开入口响应、状态码和发现到的下一层链接单独保存。\n5. 若当前入口只返回校验页或授权页，则停止在发现层，不继续绕过访问限制。",
        "crawlScriptPath": "tools/platform_crawlers/wet/methods_and_protocols_mdpi.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, preview_text, save_snapshot\n\n\nURLS = [{'label': '期刊主页探测', 'url': 'https://www.mdpi.com/journal/mps'}, {'label': '站点 sitemap 探测', 'url': 'https://www.mdpi.com/sitemap.xml'}, {'label': 'robots 探测', 'url': 'https://www.mdpi.com/robots.txt'}]\n\n\ndef main() -> None:\n    records = []\n    for item in URLS:\n        response = fetch_text(item[\"url\"])\n        records.append(\n            {\n                \"label\": item[\"label\"],\n                \"url\": item[\"url\"],\n                \"status\": response.get(\"status\"),\n                \"final_url\": response.get(\"final_url\"),\n                \"content_type\": response.get(\"content_type\"),\n                \"preview\": preview_text(response.get(\"text\", \"\")),\n            }\n        )\n    path = save_snapshot(\"wet/methods_and_protocols_mdpi.json\", {\"slug\": \"methods_and_protocols_mdpi\", \"records\": records})\n    print(path)\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/methods_and_protocols_mdpi.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/methods_and_protocols_mdpi.json"
      },
      {
        "title": "Biology Methods and Protocols",
        "slug": "biology-methods-and-protocols",
        "sectionNumber": "4.5",
        "summary": "",
        "resourceType": "OA 方法期刊。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "OA 方法期刊。"
          },
          {
            "label": "展示层级",
            "value": "P1 参考层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为公开方法期刊参考层。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "reference_article、article_section"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Oxford Academic 的 Biology Methods and Protocols 期刊页与作者说明页。官网首页将其定义为 open access journal，覆盖 biological sciences、biomedicine、pre-clinical 和 translational research 中的新方法与改良方法。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官网首页当前可见 Latest Issue Volume 11 Issue 1 2026；All Issues 页公开列出 2016-2026 共 11 个年度卷入口，并提供 Advance articles 与按 subject 浏览的入口。"
          },
          {
            "label": "下载单元数量",
            "value": "当前可稳定复核到 11 个年度卷入口和一个 advance articles 流；官网公开页未直接给出 article 总数，因此不在报告中伪造总条数。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "当前环境下 journal、issue、article 与 advance-article 直连均返回访问限制，未计算 article 单元均值。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "作者说明页明确列出 Methods、Reviews、Opinions、Innovations、Protocols、Pre-Registered Study Protocols、Commentaries、New Materials、Teaching New Methods 等 article types；主页与 issue 层可见 subject、issue、advance articles、article abstract 等入口层。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "相比一般方法期刊，该刊对 Protocols 和 Pre-Registered Study Protocols 的定义更明确，适合做 protocol 写法参照和预注册研究设计补充。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "通过浏览器与搜索引擎可见主页、issue archive、author instructions 和代表性 article 结果；当前环境下 journal/article URL 直连返回 403，因此更适合把它当作公开结构参考层而非稳定直抓主源。"
          },
          {
            "label": "准入判断",
            "value": "卷期与 article 类型层可复核，正文直连当前环境受限。"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://academic.oup.com/biomethods?searchresult=1",
              "https://academic.oup.com/biomethods/issue-archive",
              "https://academic.oup.com/biomethods/pages/General_Instructions"
            ]
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "journal → issue archive / advance articles",
              "issue → article abstract / article page",
              "article → article type / subject / abstract / DOI"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML"
          },
          {
            "label": "不闭合部分",
            "value": "PDF 与补充材料依具体 article 权限而变"
          },
          {
            "label": "单平台复核结论",
            "value": "期刊公开层足以提供卷期、article type 和 subject 结构，但当前环境不适合直接把它当作稳定正文抓取源。"
          },
          {
            "label": "官方来源",
            "value": "https://academic.oup.com/biomethods?searchresult=1 ，https://academic.oup.com/biomethods/issue-archive ，https://academic.oup.com/biomethods/pages/General_Instructions"
          }
        ],
        "crawlPseudocode": "seed = \"https://academic.oup.com/robots.txt\"\ncheck(seed)\nfor url in [\n  \"https://academic.oup.com/biomethods\",\n  \"https://academic.oup.com/biomethods/issue\",\n  \"https://academic.oup.com/biomethods/advance-articles\"\n]:\n    page = GET(url)\n    if page.status == 200:\n        extract_article_links(page)\n    else:\n        record_access_block(url, page.status)"
      },
      {
        "title": "JMIR Research Protocols",
        "slug": "jmir-research-protocols",
        "sectionNumber": "4.6",
        "summary": "",
        "resourceType": "医学与健康研究 protocol 期刊。",
        "recommendedLevel": "",
        "recommendedUnit": "article",
        "recommendedKey": "article DOI / article URL",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "医学与健康研究 protocol 期刊。"
          },
          {
            "label": "展示层级",
            "value": "P1 专题层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "适合作为医学和健康研究 protocol 的专题补充层。"
          },
          {
            "label": "推荐入库单元",
            "value": "article"
          },
          {
            "label": "推荐结构表",
            "value": "domain_article、article_section"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 JMIR Research Protocols 官方站点，重点覆盖 medical and health research。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "当前可核约 33,588 个 URL。"
          },
          {
            "label": "下载单元数量",
            "value": "33,588 个 URL"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个页面抽样，平均约 291.79 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → abstract / methods / ethics / appendix。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合医学研究设计、临床相关 protocol 和 health study 方法。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "目录与文章页可访问。"
          },
          {
            "label": "准入判断",
            "value": "目录与文章页抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "article DOI / article URL"
          },
          {
            "label": "公开入口与发现入口",
            "value": "https://www.researchprotocols.org/about-journal/focus-and-scope"
          },
          {
            "label": "单平台复核结论",
            "value": "真实且可用，但定位为专题层而非通用湿实验主层。"
          },
          {
            "label": "官方来源",
            "value": "https://www.researchprotocols.org/"
          }
        ],
        "crawlPseudocode": "1. 从 sitemap 或 archive 枚举 article URL。\n2. 进入 article 页面后提取 title、authors、abstract、methods、ethics、timeline 等栏目。\n3. 把 DOI、publication date、subject tag 和 section 结构分开保存。\n4. 对开放页面直接抓取全文 HTML。\n5. 如后续需要下载 PDF，再从 article 页补充文件资产层。",
        "crawlScriptPath": "tools/platform_crawlers/wet/jmir_research_protocols.py",
        "crawlScriptSource": "from pathlib import Path\nimport sys\n\nsys.path.append(str(Path(__file__).resolve().parents[1]))\nfrom common import fetch_text, parse_xml_loc_tags, save_snapshot\n\n\ndef main() -> None:\n    sitemap = fetch_text(\"https://www.researchprotocols.org/sitemap.xml\")\n    urls = parse_xml_loc_tags(sitemap.get(\"text\", \"\"), 20)\n    payload = {\"sample_urls\": urls[:10]}\n    print(save_snapshot(\"wet/jmir_research_protocols.json\", payload))\n\n\nif __name__ == \"__main__\":\n    main()\n",
        "crawlCommand": "python tools/platform_crawlers/wet/jmir_research_protocols.py",
        "crawlOutputPath": "platform_crawl_audits/summaries/independent/wet/jmir_research_protocols.json"
      }
    ]
  },
  {
    "title": "资源身份与论文桥接平台",
    "slug": "resource-identity-paper-bridge",
    "sectionNumber": "5",
    "description": "围绕资源身份、材料来源与论文桥接平台，补充湿实验对象识别与外部关联。",
    "entries": [
      {
        "title": "RRID / SciCrunch",
        "slug": "rrid-scicrunch",
        "sectionNumber": "5.1",
        "summary": "",
        "resourceType": "资源身份解析平台。",
        "recommendedLevel": "",
        "recommendedUnit": "RRID record",
        "recommendedKey": "",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "资源身份解析平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 资源身份层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "用于把抗体、工具、数据库、模型生物等资源映射到稳定标识。"
          },
          {
            "label": "推荐入库单元",
            "value": "RRID record"
          },
          {
            "label": "推荐结构表",
            "value": "resource_identity、resource_synonym"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 rrids.org 官方说明站与 SciCrunch 聚合索引体系。官方说明页明确写明 The RRID portal displays the aggregated RRID index，并将抗体、细胞系、质粒等资源分别挂到各自权威来源。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "rrids.org sitemap 当前可见 46 个公开内容页。说明页还明确写出 index updates 由源数据更新驱动，通常会有数天的索引滞后；真正的聚合记录入口是 scicrunch.org/resources 与 rrid.site，但当前环境对该层访问受限。"
          },
          {
            "label": "下载单元数量",
            "value": "若按当前稳定可抓的公开说明层统计，rrids.org sitemap 可见 46 个内容页；RRID record 级总量因聚合入口受限未写入硬数字。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个公开说明页抽样，平均约 90.68 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "说明页把 RRID 描述为聚合自权威源的 index。可落成 RRID → resource record → provider / citation / metadata / status。资源来源映射也相当明确，例如 antibodies → Antibody Registry、cell lines → Cellosaurus、plasmids → Addgene。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "最适合做 protocol 中抗体、细胞系、质粒、软件、数据库和模型资源的稳定标识回连，以及多资源来源之间的 authority mapping。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "说明页、规则页和 sitemap 可公开访问；聚合检索层和更深的 SciCrunch 资源页当前环境受限，因此更适合先接 RRID 解析规则与 authority mapping。"
          },
          {
            "label": "准入判断",
            "value": "公开说明页抓取成功，SciCrunch 聚合索引入口当前环境受限。"
          },
          {
            "label": "若后续接入，建议定位键",
            "value": "RRID"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://www.rrids.org/rrid-system",
              "https://scicrunch.org/resources"
            ]
          },
          {
            "label": "官方对象结构与实际下载单元",
            "value": "",
            "bullets": [
              "RRID → resource record",
              "resource record → provider / citation / metadata / status",
              "resource type → authority(Antibody Registry / Cellosaurus / Addgene / BioSamples authority)"
            ]
          },
          {
            "label": "文件格式闭合性",
            "value": ""
          },
          {
            "label": "闭合部分",
            "value": "HTML"
          },
          {
            "label": "不闭合部分",
            "value": "聚合索引层的返回格式与 API 能力依 SciCrunch developer tools 而变"
          },
          {
            "label": "单平台复核结论",
            "value": "说明页已经足够把 RRID 的 authority mapping 讲清楚；真正的大规模 record 抓取仍要等聚合检索层访问条件更稳定。"
          },
          {
            "label": "官方来源",
            "value": "https://www.rrids.org/rrid-system ，https://scicrunch.org/resources ，https://scicrunch.org/resolver/RRID%3ASCR_004098"
          }
        ]
      },
      {
        "title": "Cellosaurus",
        "slug": "cellosaurus",
        "sectionNumber": "5.2",
        "summary": "",
        "resourceType": "细胞系标准化数据库。",
        "recommendedLevel": "",
        "recommendedUnit": "cell line accession",
        "recommendedKey": "CVCL accession",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "细胞系标准化数据库。"
          },
          {
            "label": "展示层级",
            "value": "P0 细胞系身份层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "用于细胞系命名标准化、别名对齐与污染风险提示。"
          },
          {
            "label": "推荐入库单元",
            "value": "cell line accession"
          },
          {
            "label": "推荐结构表",
            "value": "cell_line_record、cell_line_synonym"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Cellosaurus 官方站点，覆盖人、小鼠、大鼠及其他物种细胞系。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方首页当前写明 Release 55 of March 2026，并给出 167,186 条 cell lines，其中 122,835 条 human、31,079 条 mouse、3,233 条 rat。"
          },
          {
            "label": "下载单元数量",
            "value": "若按细胞系 accession 口径统计，当前约 167,186 条 cell lines。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个细胞系页面抽样，平均约 56.12 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 cell line accession → recommended name / synonyms / species / flags / references；官方下载目录同时提供 txt、obo、xml、xsd 等格式。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合 protocol 中细胞系实体规范化、细胞系别名对齐与问题细胞系识别。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "主页、说明页、单条细胞系页面和官方下载目录均可公开访问。"
          },
          {
            "label": "准入判断",
            "value": "主页、细胞系页面与下载目录抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "CVCL accession"
          },
          {
            "label": "官方批量入口",
            "value": "",
            "bullets": [
              "https://www.cellosaurus.org/",
              "https://ftp.expasy.org/databases/cellosaurus/"
            ]
          },
          {
            "label": "单平台复核结论",
            "value": "是湿实验侧最稳定的细胞系身份层之一，数量、页面和下载目录均已核实。"
          },
          {
            "label": "官方来源",
            "value": "https://www.cellosaurus.org/ ，https://www.cellosaurus.org/description.html"
          }
        ]
      },
      {
        "title": "Addgene",
        "slug": "addgene",
        "sectionNumber": "5.3",
        "summary": "",
        "resourceType": "质粒、载体与 protocol 资源平台。",
        "recommendedLevel": "",
        "recommendedUnit": "plasmid / protocol / collection",
        "recommendedKey": "plasmid id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "质粒、载体与 protocol 资源平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 构建物与试剂层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "用于把 protocol 步骤连接到真实构建物、载体和相关 protocol。"
          },
          {
            "label": "推荐入库单元",
            "value": "plasmid / protocol / collection"
          },
          {
            "label": "推荐结构表",
            "value": "construct_record、construct_protocol_link"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Addgene 官方平台，覆盖 plasmids、viral vectors、recombinant antibodies 以及 protocol 资源。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方首页当前写明 170,838 个 plasmids、6,863 个 labs、1,100 个 ready-to-use viral vectors 和 258 个 recombinant antibodies。"
          },
          {
            "label": "下载单元数量",
            "value": "若按主资源单元 plasmid 统计，当前约 170,838 个。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 个公开 plasmid 页面抽样，平均约 221.15 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 plasmid / collection → protocol / sequence / vector metadata。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合把 protocol 中的构建物、载体和相关 protocol 页面连接到真实实验资源。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "主页、protocols 页、plasmid 页面可公开访问；更深层交互能力依平台自身功能开放程度而定。"
          },
          {
            "label": "准入判断",
            "value": "主页、protocols 页与代表性 plasmid 页面抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "plasmid id"
          },
          {
            "label": "公开入口与发现入口",
            "value": "",
            "bullets": [
              "https://www.addgene.org/",
              "https://www.addgene.org/protocols/"
            ]
          },
          {
            "label": "单平台复核结论",
            "value": "适合作为构建物与 protocol 联动层，当前可稳定抓到公开资源页。"
          },
          {
            "label": "官方来源",
            "value": "https://www.addgene.org/ ，https://www.addgene.org/protocols/"
          }
        ]
      },
      {
        "title": "Europe PMC",
        "slug": "europe-pmc",
        "sectionNumber": "5.4",
        "summary": "",
        "resourceType": "论文、注释与开放全文桥接平台。",
        "recommendedLevel": "",
        "recommendedUnit": "PMCID / PMID / OA article",
        "recommendedKey": "PMID / PMCID / Europe PMC id",
        "fields": [
          {
            "label": "资源类型分类",
            "value": "论文、注释与开放全文桥接平台。"
          },
          {
            "label": "展示层级",
            "value": "P0 论文桥接层。"
          },
          {
            "label": "在湿实验资源图谱中的定位",
            "value": "用于 paper、methods、annotation 和开放全文之间的桥接。"
          },
          {
            "label": "推荐入库单元",
            "value": "PMCID / PMID / OA article"
          },
          {
            "label": "推荐结构表",
            "value": "literature_record、literature_annotation、literature_linkout"
          },
          {
            "label": "数据来源与覆盖领域",
            "value": "来自 Europe PMC Developers、REST 和 Downloads 体系，覆盖论文元数据、开放全文、注释和链接。"
          },
          {
            "label": "数据规模与更新情况",
            "value": "官方 REST 检索在 query=*、pageSize=1 口径下当前返回约 47,830,420 条 records；平台持续更新。"
          },
          {
            "label": "下载单元数量",
            "value": "若按 REST 检索记录口径统计，当前约 47,830,420 条。"
          },
          {
            "label": "单个下载单元平均大小",
            "value": "按 5 条 REST lite records 抽样，平均约 0.72 KB；若按开发页和下载页等说明页面抽样，页面级大小约 39.39 KB。"
          },
          {
            "label": "数据格式与字段结构",
            "value": "核心对象可概括为 article → metadata / annotations / full text / links。"
          },
          {
            "label": "数据内容特点与适用场景",
            "value": "适合把 protocol 与论文、全文、注释和外部数据链接回连起来。"
          },
          {
            "label": "获取方式、开放性与可用性",
            "value": "开发页、下载页和 REST 检索接口均可公开访问。"
          },
          {
            "label": "准入判断",
            "value": "开发页、下载页与 REST 检索抓取成功。"
          },
          {
            "label": "推荐批量主键",
            "value": "PMID / PMCID / Europe PMC id"
          },
          {
            "label": "官方批量入口",
            "value": "",
            "bullets": [
              "https://europepmc.org/developers",
              "https://europepmc.org/RestfulWebService",
              "https://europepmc.org/downloads"
            ]
          },
          {
            "label": "单平台复核结论",
            "value": "是湿实验侧最稳定的论文桥接入口之一，API 级批量抓取可行。"
          },
          {
            "label": "官方来源",
            "value": "https://europepmc.org/developers ，https://europepmc.org/RestfulWebService ，https://europepmc.org/downloads"
          }
        ]
      }
    ]
  },
  {
    "title": "湿实验侧结论",
    "slug": "wetlab-conclusion",
    "sectionNumber": "6",
    "description": "汇总湿实验侧的最终取舍，便于整体浏览与后续整理。",
    "entries": [],
    "summary_points": [
      "湿实验主库的核心公开协议层仍应以 protocols.io、Bio-protocol、Nature Protocols 和 Cold Spring Harbor Protocols 为主。",
      "OpenWetWare 与 Protocol Online 仍有价值，但更适合作为长尾补充层，而不是核心 schema 定义源。",
      "STAR Protocols、Current Protocols、Springer Nature Experiments / SpringerProtocols、Methods and Protocols (MDPI)、Biology Methods and Protocols 更适合作为结构参考层或许可化参考层。",
      "JMIR Research Protocols 适合作为专题层补充，不应替代通用湿实验主协议层。",
      "RRID / SciCrunch、Cellosaurus、Addgene 和 Europe PMC 补齐了湿实验 raw 数据库在资源身份、实验资源映射与论文桥接方面的关键空缺。"
    ]
  }
];
