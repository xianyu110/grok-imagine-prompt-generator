# Grok Imagine Prompt Generator

Static GitHub Pages landing page for people searching Grok Imagine prompt templates for AI images, AI videos, cinematic scenes, product shots, portraits, and short social clips.

Live site:

- English: https://xianyu110.github.io/grok-imagine-prompt-generator/
- 简体中文: https://xianyu110.github.io/grok-imagine-prompt-generator/zh-cn/
- 日本語: https://xianyu110.github.io/grok-imagine-prompt-generator/ja/

Repository:

- GitHub: https://github.com/xianyu110/grok-imagine-prompt-generator
- Sitemap: https://xianyu110.github.io/grok-imagine-prompt-generator/sitemap.xml
- LLM summary: https://xianyu110.github.io/grok-imagine-prompt-generator/llms.txt

## Page Purpose

This page gives users copy-ready Grok Imagine prompt structures. It focuses on prompt quality, scene clarity, camera direction, subject details, style notes, motion cues, and negative constraints.

The primary CTA points users to:

- https://trygrokai.asia/list/

## SEO Targets

Primary keyword:

- `Grok Imagine prompt generator`

English long-tail keywords:

- `Grok Imagine prompt`
- `Grok Imagine prompt templates`
- `Grok AI video prompt`
- `Grok image prompt generator`
- `Grok cinematic prompt`
- `Grok product shot prompt`
- `Grok portrait prompt`
- `Grok social video prompt`

Chinese long-tail keywords:

- `Grok Imagine 提示词`
- `Grok Imagine 提示词生成器`
- `Grok 视频提示词`
- `Grok 图片提示词`
- `Grok 电影感提示词`
- `Grok 产品图提示词`

Japanese long-tail keywords:

- `Grok Imagine プロンプト`
- `Grok Imagine プロンプト生成`
- `Grok 動画プロンプト`
- `Grok 画像プロンプト`
- `Grok シネマティック プロンプト`
- `Grok 商品撮影 プロンプト`

## International SEO

The site uses three canonical language versions:

| Locale | URL |
| --- | --- |
| `en-US` | `https://xianyu110.github.io/grok-imagine-prompt-generator/` |
| `zh-CN` | `https://xianyu110.github.io/grok-imagine-prompt-generator/zh-cn/` |
| `ja` | `https://xianyu110.github.io/grok-imagine-prompt-generator/ja/` |
| `x-default` | `https://xianyu110.github.io/grok-imagine-prompt-generator/` |

Implementation details:

- Every language page has a self-referencing `canonical`.
- Every language page includes a full hreflang mesh for `en-US`, `zh-CN`, `ja`, and `x-default`.
- `sitemap.xml` includes the same hreflang alternate set for all three URLs.
- Language switch links are visible in the desktop navigation.

## Files

```text
.
├── index.html          # English landing page
├── zh-cn/index.html    # Simplified Chinese landing page
├── ja/index.html       # Japanese landing page
├── styles.css          # Shared responsive visual system
├── script.js           # Prompt builder interactions
├── assets/hero.png     # Generated hero image copied into the repo
├── robots.txt          # Crawler access and sitemap pointer
├── sitemap.xml         # Hreflang sitemap
├── llms.txt            # LLM-facing page summary
└── .nojekyll           # GitHub Pages static-site flag
```

## Local Preview

Run from the repo root:

```bash
python3 -m http.server 8765
```

Then open:

- http://127.0.0.1:8765/
- http://127.0.0.1:8765/zh-cn/
- http://127.0.0.1:8765/ja/

## Validation Checklist

Fast local checks:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
for rel in ["index.html", "zh-cn/index.html", "ja/index.html"]:
    parser = HTMLParser()
    parser.feed((Path(".") / rel).read_text())
    print(rel, "html_ok")
PY

python3 - <<'PY'
import xml.etree.ElementTree as ET
ET.parse("sitemap.xml")
print("sitemap_xml_ok")
PY

git diff --check
```

Browser checks used before deployment:

- Desktop and mobile pages load without horizontal overflow.
- Hero image loads on all language versions.
- Console has no errors.
- Prompt builder interactions work.
- Primary CTA points to `https://trygrokai.asia/list/`.
- `canonical` and `hreflang` tags are present on all language versions.

## Deployment

GitHub Pages serves the repo from the `main` branch root.

Latest verified deployment:

- Commit: `a4da00b`
- Pages status: built
- Verified URLs: `/`, `/zh-cn/`, `/ja/`, `/sitemap.xml`

## Changelog

- `65dd89b` - Initial GitHub Pages landing page
- `a4da00b` - Add multilingual SEO pages
