# Falcon Industries Brand Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the static Falcon Industries website into a premium RU / EN / ZH industrial technology brand site using the provided Falcon logo identity.

**Architecture:** Keep the current static architecture and replace the three language HTML pages with parallel one-page homepages. Use one shared CSS file for the full design system and one shared JS file for header, menu, reveal, media fallback, and contact-form behavior. Extract provided brand assets into `public/brand/`; support future generated media in `public/media/` while falling back to current `assets/` media and CSS motifs.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, provided SVG/PNG brand assets, existing MP4/JPG/WebP media. No React, Next.js, Vite, package manager, build pipeline, or external runtime dependency.

## Implementation Assumptions

1. The project remains a static deployment with no React, Next.js, Vite, package manager, build pipeline, or external dependencies unless a later approved change makes one absolutely necessary.
2. The implementation uses the current static architecture: `index.html` for Russian, `en/index.html` for English, `zh/index.html` for Simplified Chinese, `assets/styles.css` for shared styling, and `assets/app.js` for shared interactions.
3. Brand assets are extracted to and referenced from `/public/brand/`.
4. Future generated media can be added under `/public/media/`; the site supports the preferred media paths listed below without requiring those files to exist today.
5. Missing `/public/media/` files fall back to `assets/hero.mp4`, `assets/hero-poster.jpg`, `assets/og-falcon.jpg`, dark gradient backgrounds, and Falcon signal-line motifs without broken image or video UI.
6. Global Network and Technology Radar exist on the page, either as standalone sections or sections outside the top navigation.
7. Implementation proceeds in the stages below and stops for confirmation before modifying site files.

## Global Constraints

- Keep the static deployment model.
- Do not introduce React, Next.js, Vite, package manager, build pipeline, or external dependencies unless absolutely necessary.
- Use `index.html` for Russian.
- Use `en/index.html` for English.
- Use `zh/index.html` for Simplified Chinese.
- Use `assets/styles.css` for shared styling.
- Use `assets/app.js` for shared interactions.
- Brand assets live in `/public/brand/`.
- New generated media assets may be added later into `/public/media/`.
- Support preferred media paths when files exist: `/public/media/hero-main.mp4`, `/public/media/hero-main-mobile.mp4`, `/public/media/hero-poster.jpg`, `/public/media/philosophy-bg.jpg`, `/public/media/discover.jpg`, `/public/media/validate.jpg`, `/public/media/deploy.jpg`, `/public/media/scale.jpg`, `/public/media/ai-robotics-card.jpg`, `/public/media/industrial-automation-card.jpg`, `/public/media/industrial-equipment-card.jpg`, `/public/media/components-supply-card.jpg`, `/public/media/factory-audit-card.jpg`, `/public/media/global-supply-card.jpg`, `/public/media/technology-radar.jpg`, `/public/media/global-network.jpg`, `/public/media/contact-bg.jpg`, `/public/media/og-falcon.jpg`.
- If `/public/media/` files are missing, gracefully fall back to `assets/hero.mp4`, `assets/hero-poster.jpg`, `assets/og-falcon.jpg`, dark gradient backgrounds, and Falcon signal-line motifs.
- Do not show broken images or broken videos.
- Global Network and Technology Radar must exist on the page; they may appear without top navigation items.
- The first screen must communicate `Falcon Industries`, `Industrial Innovation Partner`, `We discover technologies that transform industries.`, and `Discover. Validate. Deploy. Scale.`
- Logistics, factory sourcing, equipment supply, and China operations are capabilities, not the primary brand identity.
- Use Falcon logo assets without redrawing, stretching, distorting, or recoloring them incorrectly.
- Respect `prefers-reduced-motion`.
- Preserve keyboard navigation, visible focus states, semantic HTML, and form validation.

---

## File Structure And Responsibilities

- Create: `public/brand/`
  - Contains the extracted logo, favicon, and OG logo assets from `/Users/alexlipskiy/Desktop/falcon-public-brand-assets-fixed.zip`.
- Create: `public/media/`
  - Empty-capable directory for future generated media. The implementation must not require files in this directory to exist.
- Modify: `index.html`
  - Russian page, canonical root page, full static homepage.
- Modify: `en/index.html`
  - English page, same structure as Russian with localized copy and metadata.
- Modify: `zh/index.html`
  - Simplified Chinese page, same structure as Russian with localized copy and metadata.
- Modify: `assets/styles.css`
  - Full Falcon design system, responsive layout, section styling, cards, forms, motion, and media fallbacks.
- Modify: `assets/app.js`
  - Header scroll state, mobile menu, reveal observer, reduced-motion behavior, video fallback logic, contact mailto fallback, current year.
- Do not modify: existing WebP/JPG/MP4 media under `assets/` unless a later task explicitly needs compression or replacement.
- Do not modify: `docs/superpowers/.DS_Store`.

## Shared HTML Interface

All three language pages must expose the same structure and data attributes so the shared CSS and JS remain simple:

- `body[data-lang="ru" | "en" | "zh"]`
- Header: `[data-site-header]`
- Mobile menu button: `[data-menu-toggle]`
- Mobile menu panel: `[data-mobile-menu]`
- Reveal elements: `[data-reveal]`
- Contact form: `[data-contact-form]`
- Contact form status: `[data-form-status]`
- Year target: `[data-year]`
- Optional video target: `[data-video-fallback]`

Shared anchors:

- `#hero`
- `#about`
- `#approach`
- `#technologies`
- `#industries`
- `#capabilities`
- `#global-network`
- `#technology-radar`
- `#contact`

Top navigation anchors:

- `#about`
- `#approach`
- `#technologies`
- `#industries`
- `#capabilities`
- `#contact`

---

### Task 1: File Structure And Brand Asset Mapping

**Files:**
- Create: `public/brand/`
- Create: `public/media/`
- Modify: none of the site HTML/CSS/JS files in this task

**Interfaces:**
- Consumes: `/Users/alexlipskiy/Desktop/falcon-public-brand-assets-fixed.zip`
- Produces: root-relative asset URLs used by later tasks:
  - `/public/brand/falcon-logo-horizontal-light.svg`
  - `/public/brand/falcon-logo-horizontal-dark.svg`
  - `/public/brand/falcon-logo-icon.svg`
  - `/public/brand/falcon-favicon.svg`
  - `/public/brand/falcon-favicon-32.png`
  - `/public/brand/falcon-favicon-192.png`
  - `/public/brand/falcon-favicon-512.png`
  - `/public/brand/falcon-og-logo.png`

- [ ] **Step 1: Extract the provided brand archive into the project root**

Run:

```bash
unzip -o /Users/alexlipskiy/Desktop/falcon-public-brand-assets-fixed.zip -d .
```

Expected:

```text
inflating: public/brand/falcon-logo-horizontal-dark.svg
inflating: public/brand/falcon-logo-horizontal-light.svg
inflating: public/brand/falcon-logo-icon.svg
inflating: public/brand/falcon-logo-icon-dark.svg
inflating: public/brand/falcon-logo-icon-light.svg
inflating: public/brand/falcon-favicon.svg
inflating: public/brand/falcon-favicon-32.png
inflating: public/brand/falcon-favicon-192.png
inflating: public/brand/falcon-favicon-512.png
inflating: public/brand/falcon-og-logo.png
```

- [ ] **Step 2: Create the future media directory**

Run:

```bash
mkdir -p public/media
```

Expected: command exits with status `0`.

- [ ] **Step 3: Verify required brand files exist**

Run:

```bash
test -f public/brand/falcon-logo-horizontal-light.svg
test -f public/brand/falcon-logo-horizontal-dark.svg
test -f public/brand/falcon-logo-icon.svg
test -f public/brand/falcon-favicon.svg
test -f public/brand/falcon-favicon-32.png
test -f public/brand/falcon-favicon-192.png
test -f public/brand/falcon-favicon-512.png
test -f public/brand/falcon-og-logo.png
```

Expected: every command exits with status `0`.

- [ ] **Step 4: Commit the asset structure**

Run:

```bash
git add public/brand public/media
git commit -m "chore: add falcon brand assets"
```

Expected: commit succeeds and includes only `public/brand/` files plus the `public/media/` directory if it contains a trackable file. If Git does not track an empty directory, skip adding `public/media/` until a media file exists.

---

### Task 2: HTML Structure For RU / EN / ZH

**Files:**
- Modify: `index.html`
- Modify: `en/index.html`
- Modify: `zh/index.html`

**Interfaces:**
- Consumes: brand URLs from Task 1, shared CSS at `assets/styles.css`, shared JS at `assets/app.js`
- Produces: consistent DOM structure for CSS and JS:
  - `.site-header`, `.brand-logo`, `.site-nav`, `.language-switcher`, `.mobile-menu`
  - `.hero`, `.section`, `.section-label`, `.signal-card`, `.tech-card`, `.industry-tile`, `.capability-column`, `.radar-stage`, `.contact-form`
  - data attributes listed in the Shared HTML Interface section

- [ ] **Step 1: Replace `index.html` with the Russian static page**

Use this document contract:

```html
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Falcon Industries — партнёр по промышленным инновациям</title>
  <meta name="description" content="Falcon Industries помогает бизнесу находить, проверять и внедрять промышленные технологии: AI, роботизация, автоматизация, оборудование, комплектующие и международные поставки.">
  <link rel="canonical" href="https://falconindustries.io/">
  <link rel="alternate" hreflang="ru" href="https://falconindustries.io/">
  <link rel="alternate" hreflang="en" href="https://falconindustries.io/en/">
  <link rel="alternate" hreflang="zh-Hans" href="https://falconindustries.io/zh/">
  <link rel="alternate" hreflang="x-default" href="https://falconindustries.io/">
  <link rel="icon" href="/public/brand/falcon-favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/public/brand/falcon-favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="/public/brand/falcon-favicon-192.png">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Falcon Industries">
  <meta property="og:title" content="Falcon Industries — партнёр по промышленным инновациям">
  <meta property="og:description" content="Мы находим технологии, которые меняют отрасли. Discover. Validate. Deploy. Scale.">
  <meta property="og:url" content="https://falconindustries.io/">
  <meta property="og:image" content="https://falconindustries.io/public/brand/falcon-og-logo.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body data-lang="ru">
  <a class="skip-link" href="#main">Перейти к содержанию</a>
  <!-- header, main sections, footer, and script follow the shared structure below -->
  <script src="assets/app.js" defer></script>
</body>
</html>
```

In the body, implement all sections in this order:

1. `header.site-header[data-site-header]`
2. `main#main`
3. `section#hero.hero`
4. `section#about.section.section--manifesto`
5. `section#approach.section.section--approach`
6. `section#technologies.section.section--technologies`
7. `section#industries.section.section--industries`
8. `section#capabilities.section.section--capabilities`
9. `section#global-network.section.section--network`
10. `section#technology-radar.section.section--radar`
11. `section#contact.section.section--contact`
12. `footer.site-footer`

Use this Russian hero copy:

```text
Eyebrow: FALCON INDUSTRIES
Headline: Партнёр по промышленным инновациям
Tagline: Мы находим технологии, которые меняют отрасли.
Description: Falcon Industries помогает бизнесу находить, проверять, внедрять и масштабировать передовые промышленные решения — от искусственного интеллекта и роботизации до автоматизации, оборудования, комплектующих и международных поставок.
Primary CTA: Обсудить проект
Secondary CTA: Смотреть направления
Bottom line: Discover. Validate. Deploy. Scale.
```

Use this Russian section copy:

```text
About label: 01 / ЗАЧЕМ FALCON
About headline: Будущее уже здесь. Большинство компаний узнаёт о нём слишком поздно.
About text: Каждый год в мире появляются тысячи новых промышленных технологий: роботы, AI-системы, автоматизированные склады, умное оборудование и новые производственные решения.
About text: Falcon Industries помогает находить такие технологии раньше, проверять их в реальных условиях и внедрять там, где они дают измеримый экономический эффект.
About statement: Мы не просто ищем поставщиков. Мы помогаем бизнесу внедрять технологии.

Approach label: 02 / МЕТОД FALCON
Approach headline: Discover. Validate. Deploy. Scale.
Approach intro: Четкая модель, которая переводит технологию из идеи в реальный бизнес-результат.
Discover: Находим перспективные технологии, производителей, стартапы и промышленные решения на глобальных рынках.
Validate: Проверяем качество продукта, надёжность производителя, технические риски, экономику внедрения и потенциал рынка.
Deploy: Организуем подбор, адаптацию, документы, логистику, пилотный запуск и внедрение решения.
Scale: Помогаем масштабировать технологию через продажи, сервис, дилерские сети, локальные партнёрства и новые рынки.

Technologies label: 03 / НАПРАВЛЕНИЯ
Technologies headline: Промышленные технологии следующего десятилетия.
Technologies intro: Falcon фокусируется на практических инновациях, которые повышают эффективность, снижают затраты и дают бизнесу конкурентное преимущество.

Industries label: 04 / ОТРАСЛИ
Industries headline: Где инновации дают операционное преимущество.

Capabilities label: 05 / ВОЗМОЖНОСТИ
Capabilities headline: От поиска технологии до глобального внедрения.

Global Network label: 06 / ГЛОБАЛЬНАЯ СЕТЬ
Global Network headline: Созданы для промышленной инновации без границ.
Global Network text: Falcon Industries работает через международные производственные, технологические и логистические сети. Сегодня наша сильная операционная база включает Китай, доступ к заводам, экспортную инфраструктуру и международные поставки. Но долгосрочная модель Falcon — глобальная.
Global Network microcopy: Сегодня многие практичные промышленные технологии появляются в Китае. Завтра они могут появиться где угодно. Falcon создан, чтобы находить их там, где они появляются.

Technology Radar label: 07 / TECHNOLOGY RADAR
Technology Radar headline: Мы отслеживаем технологии, которые будут менять промышленность.
Ready for Business: Технологии, которые можно внедрять уже сейчас и получать понятный операционный эффект.
Emerging: Решения, которые быстро развиваются и могут стать коммерчески значимыми в ближайшие годы.
Frontier: Ранние инновации, которые могут определить будущее промышленности.

Contact label: 08 / КОНТАКТЫ
Contact headline: Обсудим, какую технологию вашему бизнесу стоит внедрить следующей.
Contact text: Расскажите, что вы хотите автоматизировать, улучшить или масштабировать. Falcon поможет найти технологии и партнёров, которые могут дать измеримый эффект.
```

- [ ] **Step 2: Replace `en/index.html` with the English static page**

Use the same body structure as `index.html`, but link CSS and JS with parent-relative paths:

```html
<link rel="stylesheet" href="../assets/styles.css">
<script src="../assets/app.js" defer></script>
```

Use this English metadata:

```html
<html lang="en">
<title>Falcon Industries — Industrial Innovation Partner</title>
<meta name="description" content="Falcon Industries helps businesses discover, validate, deploy and scale advanced industrial technologies — from AI and robotics to automation, equipment, components and global supply solutions.">
<link rel="canonical" href="https://falconindustries.io/en/">
<meta property="og:url" content="https://falconindustries.io/en/">
```

Use this English hero copy:

```text
Eyebrow: FALCON INDUSTRIES
Headline: Industrial Innovation Partner
Tagline: We discover technologies that transform industries.
Description: Falcon Industries helps businesses discover, validate, deploy and scale advanced industrial technologies — from AI and robotics to automation, equipment, components and global supply solutions.
Primary CTA: Discuss a Project
Secondary CTA: Explore Technologies
Bottom line: Discover. Validate. Deploy. Scale.
```

Use this English section copy:

```text
About label: 01 / WHY FALCON
About headline: The future is already here. Most businesses discover it too late.
About text: Every year, thousands of new industrial technologies emerge across the world — robotics, AI systems, automated warehouses, smart equipment and advanced manufacturing solutions.
About text: Falcon Industries helps businesses identify these technologies earlier, validate them in real conditions and deploy them where they create measurable impact.
About statement: We are not a sourcing agency. We are a partner for industrial technology adoption.

Approach label: 02 / OUR METHOD
Approach headline: Discover. Validate. Deploy. Scale.
Approach intro: A clear operating model for moving technologies from opportunity to real-world impact.
Discover: We identify promising technologies, manufacturers, startups and industrial solutions across global markets.
Validate: We assess product quality, manufacturer reliability, technical risks, implementation economics and market potential.
Deploy: We manage sourcing, adaptation, documentation, logistics, pilot launch and solution deployment.
Scale: We help technologies expand through sales channels, service infrastructure, dealer networks, local partnerships and new markets.

Technologies label: 03 / TECHNOLOGY AREAS
Technologies headline: Industrial technologies for the next decade.
Technologies intro: Falcon focuses on practical innovations that improve efficiency, reduce costs and create competitive advantage.

Industries label: 04 / INDUSTRIES
Industries headline: Where innovation creates operational advantage.

Capabilities label: 05 / CAPABILITIES
Capabilities headline: From technology scouting to global deployment.

Global Network label: 06 / GLOBAL NETWORK
Global Network headline: Built for borderless industrial innovation.
Global Network text: Falcon Industries operates through international manufacturing, technology and supply networks. Our current operational strength includes China-based sourcing, factory access, export support and logistics infrastructure — while our long-term model is global.
Global Network microcopy: Today, many of the most practical industrial technologies are emerging in China. Tomorrow, they may come from anywhere. Falcon is built to discover them wherever they appear.

Technology Radar label: 07 / TECHNOLOGY RADAR
Technology Radar headline: Tracking what will change industry next.
Ready for Business: Technologies that can be deployed today with clear operational value.
Emerging: Technologies gaining traction and likely to become commercially relevant within the next few years.
Frontier: Early-stage innovations that may define the future of industry.

Contact label: 08 / CONTACT
Contact headline: Let’s discuss the next technology your business should adopt.
Contact text: Tell us what you want to automate, improve or scale. Falcon will help identify technologies and partners that can create measurable impact.
```

- [ ] **Step 3: Replace `zh/index.html` with the Simplified Chinese static page**

Use the same body structure as `en/index.html`, and use:

```html
<html lang="zh-Hans">
<title>Falcon Industries — 工业创新合作伙伴</title>
<meta name="description" content="Falcon Industries 帮助企业发现、验证、部署并规模化先进工业技术解决方案，涵盖人工智能、机器人、自动化、工业设备、零部件和全球供应链。">
<link rel="canonical" href="https://falconindustries.io/zh/">
<meta property="og:url" content="https://falconindustries.io/zh/">
```

Use this Chinese hero copy:

```text
Eyebrow: FALCON INDUSTRIES
Headline: 工业创新合作伙伴
Tagline: 我们发现并引入改变行业的技术。
Description: Falcon Industries 帮助企业发现、验证、部署并规模化先进工业技术解决方案——从人工智能、机器人到自动化、工业设备、零部件和全球供应链。
Primary CTA: 洽谈项目
Secondary CTA: 探索技术方向
Bottom line: Discover. Validate. Deploy. Scale.
```

Use this Chinese section copy:

```text
About label: 01 / 为什么选择 FALCON
About headline: 工业的未来已经存在。大多数企业发现它时已经太晚。
About text: 每年，全球都会出现大量新的工业技术——机器人、人工智能系统、自动化仓储、智能设备和先进制造解决方案。
About text: Falcon Industries 帮助企业更早识别这些技术，在真实场景中验证，并将其部署到能够产生实际价值的业务中。
About statement: 我们不是普通的采购代理。我们是工业技术落地与全球化合作伙伴。

Approach label: 02 / FALCON 方法
Approach headline: Discover. Validate. Deploy. Scale.
Approach intro: 一套清晰的方法，将技术机会转化为真实的商业价值。
Discover: 我们在全球范围内发现有潜力的技术、制造商、初创企业和工业解决方案。
Validate: 我们验证产品质量、制造商可靠性、技术风险、落地经济性和市场潜力。
Deploy: 我们负责选型、适配、文件、物流、试点启动和解决方案部署。
Scale: 我们帮助技术通过销售渠道、服务体系、经销商网络、本地合作伙伴和新市场实现规模化。

Technologies label: 03 / 技术方向
Technologies headline: 面向未来十年的工业技术。
Technologies intro: Falcon 专注于能够提升效率、降低成本并创造竞争优势的实用型工业创新。

Industries label: 04 / 行业
Industries headline: 创新如何创造运营优势。

Capabilities label: 05 / 能力
Capabilities headline: 从技术发现到全球部署。

Global Network label: 06 / 全球网络
Global Network headline: 为无边界的工业创新而生。
Global Network text: Falcon Industries 通过国际制造、技术和供应链网络开展业务。目前，我们在中国拥有强大的运营能力，包括工厂资源、出口支持和物流基础设施；同时，Falcon 的长期模式是全球化的。
Global Network microcopy: 今天，许多实用型工业技术正在中国出现。明天，它们可能来自世界任何地方。Falcon 的使命是在技术出现的地方发现它，并帮助它走向真正的商业应用。

Technology Radar label: 07 / 技术雷达
Technology Radar headline: 追踪下一代改变工业的技术。
Ready for Business: 已经可以部署，并具备明确运营价值的技术。
Emerging: 正在快速发展，并可能在未来几年具备商业价值的技术。
Frontier: 处于早期阶段，但可能定义未来工业方向的创新。

Contact label: 08 / 联系
Contact headline: 让我们讨论您的企业下一步应采用的技术。
Contact text: 告诉我们您希望自动化、改进或规模化的业务环节。Falcon 将帮助识别能够创造实际价值的技术和合作伙伴。
```

- [ ] **Step 4: Implement shared technology, industry, capability, and footer content in all pages**

Use these technology cards with localized descriptions:

```text
AI & Robotics
RU: Промышленные роботы, гуманоидные роботы, AI Vision, складская роботизация, системы инспекции и интеллектуальные машины.
EN: Industrial robots, humanoid robots, AI vision, warehouse robotics, inspection systems and intelligent machines.
ZH: 工业机器人、人形机器人、AI视觉、仓储机器人、检测系统和智能设备。

Industrial Automation
RU: Автоматизация производства, логистики, складов, контроля качества и полевых операций.
EN: Automation systems for manufacturing, logistics, quality control, warehouses and field operations.
ZH: 面向制造、物流、仓储、质量控制和现场作业的自动化系统。

Industrial Equipment
RU: Строительная техника, складское оборудование, коммунальная техника, подъёмные платформы и специализированные машины.
EN: Construction machinery, warehouse equipment, municipal vehicles, lifting platforms and specialized machinery.
ZH: 工程机械、仓储设备、市政车辆、高空作业平台和专用设备。

Components & Supply
RU: Промышленные комплектующие, запчасти, гидравлика, двигатели, электроника и механические системы.
EN: Industrial components, spare parts, hydraulics, engines, electronics and mechanical systems.
ZH: 工业零部件、备件、液压系统、发动机、电子部件和机械系统。

Factory Sourcing & Audit
RU: Поиск производителей, аудит заводов, переговоры, OEM/ODM, контроль качества и техническая проверка.
EN: Manufacturer search, factory audit, negotiations, OEM/ODM, quality control and technical verification.
ZH: 制造商寻找、工厂审核、商务谈判、OEM/ODM、质量控制和技术验证。

Global Supply & Logistics
RU: Экспорт, документы, таможня, консолидация, склады и международная доставка.
EN: Export, documentation, customs, consolidation, warehousing and international delivery.
ZH: 出口、单证、清关、集货、仓储和国际运输。
```

Use these industry outcomes:

```text
Manufacturing / Производство / 制造业:
RU: Автоматизация процессов, контроль качества и снижение простоев.
EN: Automate production, improve quality and reduce downtime.
ZH: 自动化生产流程，提升质量并减少停机。

Construction / Строительство / 建筑工程:
RU: Более умная техника, безопасные операции и высокая производительность.
EN: Deploy smarter equipment, safer operations and higher productivity.
ZH: 部署更智能的设备，提高安全性和生产效率。

Logistics & Warehousing / Логистика и склады / 物流与仓储:
RU: Рост скорости, точности и пропускной способности.
EN: Increase throughput, accuracy and speed with automation.
ZH: 通过自动化提升吞吐量、准确率和速度。

Energy / Энергетика / 能源:
RU: Инспекция, надежность и эффективность инфраструктуры.
EN: Improve inspection, reliability and infrastructure efficiency.
ZH: 提升巡检、可靠性和基础设施效率。

Agriculture / Сельское хозяйство / 农业:
RU: Интеллектуальная техника и автоматизация для роста продуктивности.
EN: Use intelligent equipment and automation to improve productivity.
ZH: 通过智能设备和自动化提升生产力。

Mining / Добыча / 矿业:
RU: Безопасность, мониторинг и эффективность тяжелой техники.
EN: Increase safety, monitoring and heavy equipment efficiency.
ZH: 提高安全性、监控能力和重型设备效率。

Municipal Infrastructure / Городская инфраструктура / 市政基础设施:
RU: Модернизация обслуживания, эксплуатации и городских сервисов.
EN: Modernize city operations, maintenance and public services.
ZH: 推动城市运营、维护和公共服务现代化。

Retail & Distribution / Ритейл и дистрибуция / 零售与分销:
RU: Оптимизация хранения, комплектации и доставки.
EN: Optimize storage, fulfillment and last-mile performance.
ZH: 优化仓储、订单履约和配送表现。
```

Use these capability groups:

```text
Technology:
RU: Поиск технологий; Техническая оценка; Пилотные проекты; Анализ рыночного потенциала
EN: Technology scouting; Technical evaluation; Pilot projects; Market potential analysis
ZH: 技术发现; 技术评估; 试点项目; 市场潜力分析

Manufacturing:
RU: Поиск заводов; Проверка поставщиков; OEM/ODM; Контроль качества
EN: Factory search; Supplier validation; OEM/ODM; Quality control
ZH: 工厂寻找; 供应商验证; OEM/ODM开发; 质量控制

Deployment:
RU: Документация; Логистика; Таможня; Локальная адаптация
EN: Documentation; Logistics; Customs; Local adaptation
ZH: 文件; 物流; 清关; 本地适配

Scale:
RU: Выход на рынок; Дилерская сеть; Сервисная инфраструктура; Локальные партнёрства
EN: Market entry; Dealer network; Service infrastructure; Local partnerships
ZH: 市场进入; 经销商网络; 服务体系; 本地合作伙伴
```

Use footer contacts:

```text
Falcon Industries
Industrial Innovation Partner / Партнёр по промышленным инновациям / 工业创新合作伙伴
info@falconindustries.io
WeChat: a000500
```

- [ ] **Step 5: Verify the three HTML pages have the expected anchors**

Run:

```bash
rg -n 'id="(hero|about|approach|technologies|industries|capabilities|global-network|technology-radar|contact)"' index.html en/index.html zh/index.html
```

Expected: each page reports all nine IDs.

- [ ] **Step 6: Commit the HTML rewrite**

Run:

```bash
git add index.html en/index.html zh/index.html
git commit -m "feat: rebuild multilingual falcon homepage"
```

Expected: commit succeeds and includes only the three HTML pages.

---

### Task 3: CSS Design System

**Files:**
- Modify: `assets/styles.css`

**Interfaces:**
- Consumes: the class names and section structure from Task 2
- Produces: tokenized Falcon visual system, responsive layout, media fallback visuals, reduced-motion support, no reliance on broken images

- [ ] **Step 1: Replace the root tokens and base styles**

At the top of `assets/styles.css`, define these tokens:

```css
*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --falcon-black: #050505;
  --falcon-graphite: #0B0D10;
  --falcon-deep-metal: #111418;
  --falcon-panel: #15191F;
  --falcon-panel-soft: #1B2027;
  --falcon-white: #F5F5F0;
  --falcon-white-soft: #E7E3DA;
  --falcon-muted: #A7A7A7;
  --falcon-muted-dark: #6F747C;
  --falcon-red: #C4322A;
  --falcon-red-bright: #E01E2D;
  --falcon-red-dark: #7A0B12;
  --falcon-tech-blue: #4DA3FF;
  --falcon-tech-blue-soft: #8CC7FF;
  --falcon-border: rgba(255, 255, 255, 0.10);
  --falcon-border-strong: rgba(255, 255, 255, 0.18);
  --container-max: 1440px;
  --container-pad: 64px;
  --nav-height: 84px;
  --radius-small: 10px;
  --radius-medium: 18px;
  --radius-large: 24px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

html {
  scroll-behavior: smooth;
  background: var(--falcon-black);
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--falcon-white);
  background:
    radial-gradient(circle at 74% 12%, rgba(196, 50, 42, 0.16), transparent 28rem),
    radial-gradient(circle at 18% 82%, rgba(77, 163, 255, 0.08), transparent 32rem),
    linear-gradient(180deg, var(--falcon-black), var(--falcon-graphite) 48%, var(--falcon-black));
  font-family: Inter, "Noto Sans SC", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body::after {
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;
  content: "";
  opacity: 0.04;
  background-image:
    linear-gradient(rgba(255,255,255,0.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px);
  background-size: 100% 3px, 72px 72px;
  mix-blend-mode: soft-light;
}
```

- [ ] **Step 2: Implement layout primitives**

Add styles for:

```css
.container
.section
.section__grid
.section__header
.section-label
.section-title
.section-copy
.button
.button--primary
.button--secondary
.signal-node
.signal-line
```

Rules:

- `.container` uses `width: min(100% - (var(--container-pad) * 2), var(--container-max)); margin-inline: auto;`
- `.section` uses `padding-block: 140px;`
- `.section-label` uses small uppercase text with a red number segment.
- `.button--primary:hover` uses red background and `transform: translateY(-1px);`
- `.signal-node` is a small red bordered circle.
- `.signal-line` is a thin red line that can animate width from `0` to `100%`.

- [ ] **Step 3: Implement header, mobile menu, and language switcher styles**

Add styles for:

```css
.site-header
.site-header.is-scrolled
.nav
.brand-logo
.brand-logo img
.site-nav
.site-nav a
.language-switcher
.language-switcher a
.language-switcher a.is-active
.menu-toggle
.mobile-menu
.mobile-menu[hidden]
.mobile-menu__links
```

Rules:

- Header is fixed, transparent on hero, blurred graphite after scroll.
- Logo height is stable: desktop `42px`, mobile `34px`.
- Mobile menu opens below the header with full-width tap targets.
- Active language uses a red border or red underline, not a bright fill.

- [ ] **Step 4: Implement hero and media fallback visuals**

Add styles for:

```css
.hero
.hero__media
.hero__video
.hero__fallback
.hero__overlay
.hero__content
.hero__eyebrow
.hero__title
.hero__tagline
.hero__description
.hero__actions
.hero__bottom-line
.hero__signal
```

Rules:

- `.hero` uses `min-height: 100svh`.
- `.hero__media` is absolute and covers the hero.
- `.hero__fallback` uses `assets/hero-poster.jpg` and a dark gradient.
- `.hero__video` can be hidden by JS on error or reduced motion.
- `.hero__title` uses `clamp(52px, 8vw, 124px)`, `line-height: 0.92`, and `letter-spacing: -0.06em`.
- Add a diagonal red pseudo-element inspired by the Falcon blade, with low opacity and no text overlap.

- [ ] **Step 5: Implement section-specific layouts**

Add styles for:

```css
.manifesto
.manifesto__statement
.approach-grid
.approach-card
.tech-grid
.tech-card
.industry-grid
.industry-tile
.capabilities-grid
.capability-column
.network-panel
.radar
.radar-stage
.contact-layout
.contact-form
.site-footer
```

Rules:

- Approach: four cards in a row on desktop, red progress line connecting cards.
- Technologies: six cards in a 3x2 grid on desktop, one column on mobile.
- Industries: eight dense editorial tiles, no generic service-card feeling.
- Capabilities: four columns, compact lists.
- Global Network: abstract network panel using CSS lines/nodes, not flags.
- Technology Radar: three stages with restrained tech-blue highlights.
- Contact: split layout on desktop, single column on mobile.

- [ ] **Step 6: Implement responsive and reduced-motion rules**

Add media queries:

```css
@media (max-width: 1120px) {
  :root { --container-pad: 36px; }
  .site-nav, .nav__cta { display: none; }
  .menu-toggle { display: inline-flex; }
  .approach-grid, .tech-grid, .capabilities-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 760px) {
  :root { --container-pad: 20px; --nav-height: 72px; }
  .section { padding-block: 72px; }
  .hero__actions { flex-direction: column; align-items: stretch; }
  .approach-grid, .tech-grid, .industry-grid, .capabilities-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero__video {
    display: none;
  }

  [data-reveal] {
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 7: Verify CSS tokens and dominant palette**

Run:

```bash
rg -n "#d8b45d|--gold|gold|#8fb5cc|--steel|#b0644e|--oxide" assets/styles.css
```

Expected: no matches. The old gold/steel/oxide system is gone.

- [ ] **Step 8: Commit CSS design system**

Run:

```bash
git add assets/styles.css
git commit -m "style: implement falcon visual system"
```

Expected: commit succeeds and includes only `assets/styles.css`.

---

### Task 4: JS Interactions And Media Fallbacks

**Files:**
- Modify: `assets/app.js`

**Interfaces:**
- Consumes: DOM data attributes from Task 2
- Produces:
  - Header scroll class `.is-scrolled`
  - Body class `.menu-open`
  - Reveal class `.is-visible`
  - Mailto fallback for `[data-contact-form]`
  - Video fallback class `.has-video-error` on video parent when a source fails

- [ ] **Step 1: Replace `assets/app.js` with shared interaction logic**

Use this implementation:

```js
(() => {
  const doc = document;
  const body = doc.body;
  const header = doc.querySelector("[data-site-header]");
  const menuToggle = doc.querySelector("[data-menu-toggle]");
  const mobileMenu = doc.querySelector("[data-mobile-menu]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  const closeMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    body.classList.remove("menu-open");
    header?.classList.remove("is-open");
  };

  const openMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
    body.classList.add("menu-open");
    header?.classList.add("is-open");
    mobileMenu.querySelector("a")?.focus();
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  mobileMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  doc.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  doc.querySelectorAll("[data-video-fallback]").forEach((video) => {
    if (reduceMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      video.closest(".hero__media")?.classList.add("has-video-error");
      return;
    }

    video.addEventListener("error", () => {
      video.closest(".hero__media")?.classList.add("has-video-error");
    });

    video.querySelectorAll("source").forEach((source) => {
      source.addEventListener("error", () => {
        video.closest(".hero__media")?.classList.add("has-video-error");
      });
    });
  });

  if (reduceMotion) {
    doc.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    doc.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    doc.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  doc.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  doc.querySelectorAll("[data-contact-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const subject = form.dataset.mailSubject || "Falcon Industries project inquiry";
      const opening = form.dataset.statusOpening || "Opening your email client...";
      const fallback = form.dataset.statusFallback || "If nothing opens, email info@falconindustries.io.";
      const lines = [
        `Name: ${data.get("name") || ""}`,
        `Company: ${data.get("company") || ""}`,
        `Country: ${data.get("country") || ""}`,
        `Contact: ${data.get("contact") || ""}`,
        "",
        "Project:",
        data.get("message") || ""
      ];
      const mailto = `mailto:info@falconindustries.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

      if (status) status.textContent = opening;
      window.location.href = mailto;

      window.setTimeout(() => {
        if (status) status.textContent = fallback;
      }, 1200);
    });
  });
})();
```

- [ ] **Step 2: Verify JS selectors exist in all pages**

Run:

```bash
rg -n "data-site-header|data-menu-toggle|data-mobile-menu|data-contact-form|data-form-status|data-video-fallback" index.html en/index.html zh/index.html assets/app.js
```

Expected: each selector appears in `assets/app.js`, and the matching attributes appear in all three HTML pages.

- [ ] **Step 3: Commit JS interactions**

Run:

```bash
git add assets/app.js
git commit -m "feat: add falcon site interactions"
```

Expected: commit succeeds and includes only `assets/app.js`.

---

### Task 5: SEO Metadata And Asset Reference Verification

**Files:**
- Modify: `index.html`
- Modify: `en/index.html`
- Modify: `zh/index.html`

**Interfaces:**
- Consumes: HTML pages from Task 2 and brand assets from Task 1
- Produces: localized metadata, canonical URLs, hreflang, favicon links, Organization schema

- [ ] **Step 1: Add Organization schema to each page**

Use this JSON-LD shape, localizing `url` per page and keeping the same organization identity:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Falcon Industries",
  "url": "https://falconindustries.io/",
  "description": "Industrial innovation partner for discovering, validating, deploying and scaling technologies that transform industries.",
  "email": "info@falconindustries.io",
  "areaServed": ["CN", "RU", "HK"],
  "sameAs": ["https://falconindustries.io/"]
}
</script>
```

- [ ] **Step 2: Verify localized title and description**

Run:

```bash
rg -n "<title>|name=\"description\"|hreflang=\"ru\"|hreflang=\"en\"|hreflang=\"zh-Hans\"|property=\"og:image\"|application/ld\\+json" index.html en/index.html zh/index.html
```

Expected:

- `index.html` title is `Falcon Industries — партнёр по промышленным инновациям`
- `en/index.html` title is `Falcon Industries — Industrial Innovation Partner`
- `zh/index.html` title is `Falcon Industries — 工业创新合作伙伴`
- All three pages include `ru`, `en`, `zh-Hans`, and `x-default` alternates.
- All three pages include an `og:image`.
- All three pages include JSON-LD.

- [ ] **Step 3: Verify local asset references**

Run:

```bash
rg -n 'href="(/public/brand|\\.\\./assets|assets)|src="(/public/brand|/public/media|\\.\\./assets|assets)' index.html en/index.html zh/index.html
```

Expected:

- Root page uses `assets/styles.css` and `assets/app.js`.
- English and Chinese pages use `../assets/styles.css` and `../assets/app.js`.
- Brand references use `/public/brand/...`.
- Optional media references use `/public/media/...` only in video `source` elements or CSS backgrounds that have visual fallbacks.

- [ ] **Step 4: Commit SEO updates**

Run:

```bash
git add index.html en/index.html zh/index.html
git commit -m "seo: add multilingual falcon metadata"
```

Expected: commit succeeds if this task changed metadata after Task 2. If Task 2 already included all metadata exactly, do not create an empty commit.

---

### Task 6: Responsive And Mobile QA Pass

**Files:**
- Modify: `assets/styles.css`
- Modify: `index.html`
- Modify: `en/index.html`
- Modify: `zh/index.html`

**Interfaces:**
- Consumes: layout and interactions from Tasks 2-4
- Produces: usable desktop, tablet, and mobile layouts with no text overlap and functional mobile navigation

- [ ] **Step 1: Run a local static server from the project root**

Run:

```bash
python3 -m http.server 4173
```

Expected:

```text
Serving HTTP on :: port 4173
```

Keep the server running while checking pages. Stop it with `Ctrl-C` when verification is done.

- [ ] **Step 2: Check core URLs in a browser**

Open:

```text
http://localhost:4173/
http://localhost:4173/en/
http://localhost:4173/zh/
```

Expected:

- Header logo loads on all three pages.
- Hero text is readable.
- No broken image icon appears.
- Mobile menu opens and closes.
- Language links navigate to the correct language pages.
- Global Network and Technology Radar are visible on the page.

- [ ] **Step 3: Check desktop responsive layout**

At viewport `1440x1000`, verify:

- Hero fills the first viewport.
- Hero content is left aligned and slightly below vertical center.
- Top navigation fits on one line.
- Technology cards are arranged in a 3x2 grid.
- Capabilities are arranged in four columns.
- Contact form and contact text are side by side.

- [ ] **Step 4: Check tablet responsive layout**

At viewport `900x1100`, verify:

- Header switches to compact navigation or burger mode.
- Two-column grids do not create narrow text.
- Hero CTA buttons remain readable.
- Section labels and headings do not overlap.

- [ ] **Step 5: Check mobile responsive layout**

At viewport `390x844`, verify:

- Header logo remains legible.
- Burger menu has large tap targets.
- Hero headline does not overflow.
- CTA buttons stack vertically.
- Cards and tiles become one column.
- Contact form inputs are full width.
- Chinese page has comfortable line height.

- [ ] **Step 6: Commit responsive fixes**

Run:

```bash
git add assets/styles.css index.html en/index.html zh/index.html
git commit -m "fix: polish responsive falcon layouts"
```

Expected: commit succeeds if responsive fixes were needed. If no files changed, do not create an empty commit.

---

### Task 7: Contact Form Mailto Fallback QA

**Files:**
- Modify: `index.html`
- Modify: `en/index.html`
- Modify: `zh/index.html`
- Modify: `assets/app.js`

**Interfaces:**
- Consumes: `[data-contact-form]`, input names `name`, `company`, `country`, `contact`, `message`
- Produces: a `mailto:info@falconindustries.io` URL with subject and body text

- [ ] **Step 1: Verify form field names on all pages**

Run:

```bash
rg -n 'name="(name|company|country|contact|message)"|required|data-mail-subject|data-status-opening|data-status-fallback' index.html en/index.html zh/index.html
```

Expected:

- Each page has `name`, `company`, `country`, `contact`, and `message`.
- `name`, `contact`, and `message` are required.
- Each form has localized `data-mail-subject`, `data-status-opening`, and `data-status-fallback`.

- [ ] **Step 2: Check localized status messages**

Use these data values:

```text
RU subject: Falcon Industries: новый индустриальный проект
RU opening: Открываем ваш почтовый клиент...
RU fallback: Если письмо не открылось, напишите напрямую: info@falconindustries.io.

EN subject: Falcon Industries: new industrial project
EN opening: Opening your email client...
EN fallback: If nothing opens, email info@falconindustries.io.

ZH subject: Falcon Industries：新的工业项目
ZH opening: 正在打开您的邮件客户端...
ZH fallback: 如果邮件没有打开，请直接发送至 info@falconindustries.io。
```

- [ ] **Step 3: Manually test form validation**

In the browser:

1. Open `http://localhost:4173/`.
2. Submit the contact form empty.
3. Fill `name`, `contact`, and `message`.
4. Submit again.

Expected:

- Empty submit triggers browser validation.
- Filled submit updates the status text and opens a mail client or changes location to a `mailto:` URL.
- The generated email body includes `Name`, `Company`, `Country`, `Contact`, and `Project`.

- [ ] **Step 4: Commit contact fixes**

Run:

```bash
git add index.html en/index.html zh/index.html assets/app.js
git commit -m "fix: verify contact mailto fallback"
```

Expected: commit succeeds if form fixes were needed. If no files changed, do not create an empty commit.

---

### Task 8: Final Verification Checklist

**Files:**
- Test only; modify files only if verification reveals a defect

**Interfaces:**
- Consumes: completed static site
- Produces: final confidence report with changed files, missing generated media, and residual risks

- [ ] **Step 1: Verify file presence**

Run:

```bash
test -f index.html
test -f en/index.html
test -f zh/index.html
test -f assets/styles.css
test -f assets/app.js
test -f public/brand/falcon-logo-horizontal-light.svg
test -f public/brand/falcon-favicon.svg
```

Expected: every command exits with status `0`.

- [ ] **Step 2: Verify no old top-positioning copy remains**

Run:

```bash
rg -n "Ваш надёжный партнёр|Китай — более 15|Логистика Китай|Склад в Хэйхэ|Поставка спецтехники|best prices|fast delivery" index.html en/index.html zh/index.html
```

Expected: no matches.

- [ ] **Step 3: Verify no obvious broken local references**

Run:

```bash
rg -n 'src="[^"]+"|href="[^"]+"' index.html en/index.html zh/index.html
```

Expected:

- CSS and JS references resolve relative to each page.
- `/public/brand/` references correspond to files from Task 1.
- `/public/media/` references are optional media references paired with visual fallbacks.
- External URLs are limited to canonical/metadata URLs and `mailto:`.

- [ ] **Step 4: Verify multilingual linking**

Run:

```bash
rg -n 'href="/("|en/|zh/)|href="../"|href="/en/"|href="/zh/"|hreflang="zh-Hans"' index.html en/index.html zh/index.html
```

Expected:

- Root page links to `/en/` and `/zh/`.
- English page links to `/`, `/en/`, and `/zh/`.
- Chinese page links to `/`, `/en/`, and `/zh/`.
- All pages include `hreflang="zh-Hans"`.

- [ ] **Step 5: Verify final browser behavior**

With the local server running, check:

```text
http://localhost:4173/
http://localhost:4173/en/
http://localhost:4173/zh/
```

Expected:

- First screen clearly communicates Falcon Industries as Industrial Innovation Partner.
- Header logo appears and is not distorted.
- Site feels premium, dark, cinematic, industrial, and technological.
- China/logistics content appears only as capabilities or global operations.
- Global Network and Technology Radar sections exist.
- Mobile navigation works.
- Contact form validation and mailto fallback work.

- [ ] **Step 6: Record missing generated media**

Run:

```bash
for f in public/media/hero-main.mp4 public/media/hero-main-mobile.mp4 public/media/hero-poster.jpg public/media/philosophy-bg.jpg public/media/discover.jpg public/media/validate.jpg public/media/deploy.jpg public/media/scale.jpg public/media/ai-robotics-card.jpg public/media/industrial-automation-card.jpg public/media/industrial-equipment-card.jpg public/media/components-supply-card.jpg public/media/factory-audit-card.jpg public/media/global-supply-card.jpg public/media/technology-radar.jpg public/media/global-network.jpg public/media/contact-bg.jpg public/media/og-falcon.jpg; do test -f "$f" || printf '%s\n' "$f"; done
```

Expected: print any future media files that are not present. These are not blockers because the site has fallbacks.

- [ ] **Step 7: Final commit**

Run:

```bash
git status --short
git add index.html en/index.html zh/index.html assets/styles.css assets/app.js public/brand
git commit -m "feat: launch falcon industrial brand site"
```

Expected: final commit succeeds if there are remaining staged implementation changes. If earlier task commits already captured all changes, do not create an empty commit.
