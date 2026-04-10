export const crawlScriptSourceOverrides: Record<string, string> = {
  "tools/platform_crawlers/dry/massive.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': 'dataset 列表页', 'url': 'https://massive.ucsd.edu/ProteoSAFe/datasets.jsp'}, {'label': '未带参数探测 \`QueryDatasets\`', 'url': 'https://massive.ucsd.edu/ProteoSAFe/QueryDatasets?target=datasets'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("dry/massive.json", {"slug": "massive", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
  "tools/platform_crawlers/dry/myexperiment.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': 'workflow 列表页探测', 'url': 'https://www.myexperiment.org/workflows'}, {'label': '历史 mashup API 探测', 'url': 'https://www.myexperiment.org/mashup/api.xml?type=workflow&num=1'}, {'label': 'robots 探测', 'url': 'https://www.myexperiment.org/robots.txt'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("dry/myexperiment.json", {"slug": "myexperiment", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
  "tools/platform_crawlers/wet/star_protocols.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': 'robots 规则', 'url': 'https://www.cell.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://www.cell.com/sitemap-index-1.txt'}, {'label': '期刊主页探测', 'url': 'https://www.cell.com/star-protocols/home'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("wet/star_protocols.json", {"slug": "star_protocols", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
  "tools/platform_crawlers/wet/current_protocols.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': 'robots 规则', 'url': 'https://onlinelibrary.wiley.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://onlinelibrary.wiley.com/sitemap-index-1.xml'}, {'label': '期刊主页探测', 'url': 'https://currentprotocols.onlinelibrary.wiley.com/'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("wet/current_protocols.json", {"slug": "current_protocols", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
  "tools/platform_crawlers/wet/methods_and_protocols_mdpi.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': '期刊主页探测', 'url': 'https://www.mdpi.com/journal/mps'}, {'label': '站点 sitemap 探测', 'url': 'https://www.mdpi.com/sitemap.xml'}, {'label': 'robots 探测', 'url': 'https://www.mdpi.com/robots.txt'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("wet/methods_and_protocols_mdpi.json", {"slug": "methods_and_protocols_mdpi", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
  "tools/platform_crawlers/wet/jove.py": `from pathlib import Path
import sys

sys.path.append(str(Path(__file__).resolve().parents[1]))
from common import fetch_text, preview_text, save_snapshot


URLS = [{'label': '站点主页探测', 'url': 'https://www.jove.com/'}, {'label': 'robots 探测', 'url': 'https://www.jove.com/robots.txt'}, {'label': 'sitemap 探测', 'url': 'https://www.jove.com/sitemap.xml'}]


def main() -> None:
    records = []
    for item in URLS:
        response = fetch_text(item["url"])
        records.append(
            {
                "label": item["label"],
                "url": item["url"],
                "status": response.get("status"),
                "final_url": response.get("final_url"),
                "content_type": response.get("content_type"),
                "preview": preview_text(response.get("text", "")),
            }
        )
    path = save_snapshot("wet/jove.json", {"slug": "jove", "records": records})
    print(path)


if __name__ == "__main__":
    main()
`,
};
