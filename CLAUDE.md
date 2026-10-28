# CLAUDE.md: Karim Elsarha portfolio (GitHub Pages)

Static personal portfolio at https://karimelsarha.github.io/Portfolio/ (English + Arabic).
Owner: Karim Elsarha, Procurement & Inventory Planning Manager at SCZONE. He is job hunting
(Saudi/Gulf, plus global roles), so recruiters and HR read this site fast, often on a phone.

## How to work with me
- Plan first. Show me the plan and the list of files you will touch, then wait for my approval.
- Work on a branch (`redesign`). Never push to the main branch unless I say so.
- Work in small stages and stop after each one so I can review. Stages are listed below.
- Preview locally before calling anything done (`python -m http.server`), and check desktop
  and a ~390px mobile width.
- Keep the existing look (navy and gold, current layout). Improve it, do not redesign it.

## Hard rules about content
- Never invent a number, date, name, project detail or claim. If something is missing, leave a
  `TODO(Karim)` comment in the code and list it for me at the end of the stage.
- Every metric must match the current CV (`Karim_Elsarha_CV_v4_clean.docx`). If the site and the
  CV disagree, the CV wins, except for the items under "Needs Karim's confirmation".
- Writing style: plain, natural, concise. No filler. Avoid em dashes used as connectors, avoid
  "ensuring ..." tails, avoid words like rigorous, in-depth, high-performance, complex, sharply,
  institutionalized, ongoing. No "not X but Y" constructions, no one-line dramatic closers.
- The Arabic version must be kept in sync with every English change. Do not machine-translate
  loosely: keep procurement terms accurate and use professional Modern Standard Arabic.

## Stage 1: Content sync with the CV
Fix these on the English page, then mirror them in Arabic.

Numbers and claims
- Remove the "90% Warehouse Efficiency" metric. It was dropped from the CV.
- Use "up to 35%" for procurement cost savings everywhere (hero stats, About, Experience).
  Label it "Procurement Cost Savings (up to)" or equivalent.
- "Deployed AI-driven demand forecasting ... to sharply cut excess inventory": change to
  "AI-assisted demand forecasting and real-time inventory tracking that cut excess inventory by 55%
  and raised order fulfillment accuracy to 98%". Use "AI-assisted" everywhere, never "AI-driven"
  (also in Skills: "AI-Assisted Supplier Evaluation & Data Analysis").
- Keep these metrics as they are, but do not add new ones: 60% bid cycle time, 80% approval
  delays, 65% on-time delivery, 55% excess inventory, 800+ suppliers onboarded, 19% disqualified.
- Team: "team of 25 professionals". Replace "Mentor and lead a high-performance team" with
  "Leads, coaches, and develops a team of 25 professionals."

Experience bullets (current role and Section Head)
- Replace "Institutionalized full compliance with FIDIC standards ..." with
  "Keeps procurement and inventory operations compliant with FIDIC conditions, legal frameworks,
  and governance requirements."
- Supplier negotiation bullet: "Leads supplier negotiations on payment terms and pricing,
  reducing procurement costs by up to 35% without disrupting supply continuity."
- DRP bullet: use "Min-Max levels" (not MIN-MAX).
- Section Head: "Managed the full procurement cycle, including RFQ, ITB, and RFP processes, and
  monitored bid compliance throughout the bid lifecycle."
- "Evaluated supplier quotes and proposals on price, delivery terms, and service offerings."
- "Onboarded 800+ suppliers through an evaluation system and disqualified 19% of them for
  underperformance."
- "Conducted market research to identify sourcing opportunities, benchmark pricing, and align
  bid strategies with current market conditions." (drop "ongoing")
- "Oversaw day-to-day warehouse operations: inventory control, stock management, and
  distribution workflows."
- "Introduced barcode tracking for warehouse operations, which improved inventory accuracy."
- RSPA: "Helped prepare and consolidate RSPA's annual budget and multi-year financial
  forecasts." and "Monitored budget performance through the fiscal year, identified variances,
  and recommended corrective actions."

Additional projects section
- Same cleanup: remove "Complex", "ensuring", "balancing", "each with full ...". Use commas
  instead of dashes in "(Vissim, Norway)", "(Mapso, Switzerland)", "(Pietro Fiorentini, Italy)".
- Infrastructure card: lead with the Ain Sokhna Port VTS navigation tower, then the Adabiya Port
  development and the sewage-station installation.

Names and spelling (must be consistent across both languages)
- "Adabiya" (not Adabia). "Ain Sokhna Port" everywhere (not "Sokhna Port").
- Contact address: "New Cairo, Egypt" (not 5th Settlement).
- Behavioral training: "Behavioral Barriers" (drop "in Leadership").
- Dates: keep "Jan 2025 – Present", "May 2016 – Jan 2025", "Jun 2008 – May 2016" as is.

Education and certifications
- PMP: "PMP, Project Management Professional · PMI · In Progress" (not "Currently Studying").
  No exam date.
- Collapse the five LinkedIn Learning cards into one compact card titled "LinkedIn Learning
  (course completions)": Become a Supply Chain Manager, Negotiation Skills, Project Management
  Foundations (Procurement), Inventory Management Foundations. Remove "Problem-Solving &
  Troubleshooting". Make sure the PMP card is visually the strongest item in that section.
- Master's coursework line: keep it limited to what is confirmed (see below).

New content to add (all from Karim's own statements, keep the wording tight)
- SAP MM: "Led the SAP MM implementation: knowledge transfer, staff training, documentation, and
  SCZONE's representation in project meetings." Put it in Experience.
- Regulations: "Authored the Warehouse Regulation (13 chapters plus appendices, based on Egyptian
  government references and international standards, including ISO 55000 and CIPS) and the
  Procurement & Contracts Regulations." Use it inside the existing "Warehouse Regulations" and
  "Procurement Regulations" case studies as well.
- Custody tracking: "Built a web application (Python, Flask, SQLite) to replace the manual Excel
  and Power Query workflow for tracking employee custody items (issue, return, addition)." Use it
  in the existing "Warehouse Automation" case study.
- Skills: add Tendering (RFQ/ITB/RFP), Contract Management, Green Procurement (he has a published
  article on it).
- Hero or About: add a compact line "Available to join within one month" and "Open to relocation
  (KSA/GCC)".

### Needs Karim's confirmation (leave TODO(Karim), do not decide)
- Whether 35% is the best result on one contract/category or an overall average, and any baseline
  and period for 35, 55, 98, 65, 60, 80%.
- Whether the SAP MM implementation was in the Manager role (2025 on) or the Section Head role.
- Whether the Warehouse Regulation is approved ("Authored") or still a draft ("Drafted").
- Whether the custody app is in use at SCZONE.
- Whether the old "control tower upgrade" and the VTS navigation tower are the same project.
- Nationality line, graduation years, expected Master's completion date, exact Associate institute
  name (CV upload says "Suez Institute for Management Information Systems", the site says
  "Suez Higher Institute ...").
- The "NOGA Café" case study: the venture has closed. Propose a framing as entrepreneurship
  experience (no present tense, no "business development" claims beyond what he confirms) and
  ask me whether to keep, retitle, or move it.
- The name shown on the site vs the LinkedIn URL (karim-mohamed-abdallah): ask me which spelling
  matches my passport and use it everywhere.

## Stage 2: UX cleanup
- Too many download buttons (4 "Download" items on the first screen). Keep one primary "Download
  CV" button in the hero and one in the header; move "Download Portfolio" to the footer/contact
  section or make it secondary.
- Header: "Case Studies" wraps onto two lines. Shorten to "Cases" or reduce spacing so the nav
  fits on one line at desktop widths.
- KPI blocks: add a one-line caption under each number group if confirmed baseline/period exists,
  otherwise leave as is.
- Contact section: add a visible "Available within one month" and relocation line.
- Check all links, including `cv.pdf` and `Karim-Elsarha-Portfolio.pdf` (they must point to the
  updated files, see Stage 4).

## Stage 3: Motion and mobile polish (light, purposeful)
Goal: feels polished on desktop, Android and iOS, never slow.
- Scroll reveal: sections and cards fade in and rise 12 to 20px once, 400 to 600ms, using
  IntersectionObserver. Content must be visible if JavaScript fails.
- Count-up animation for the hero/About numbers (18+, 35%, 800+, 25) when they enter the viewport,
  once only, about 1.2s. The final value must always be in the HTML.
- Smooth scroll for nav links, with an offset for the sticky header; active nav item updates on
  scroll.
- Header: slight shrink or shadow after scrolling a few pixels.
- Thin reading-progress bar at the top.
- Cards and buttons: small lift and shadow on hover; equivalent `:active` feedback for touch.
- Case-study tab switch: short cross-fade (about 200ms).
- Mobile: bottom-reachable or full-screen menu that is easy to use with one thumb, tap targets at
  least 44px, no horizontal scroll, safe-area padding for iPhone notch, `100dvh` instead of
  `100vh` for the hero.
- Animate only `transform` and `opacity`. No parallax, no autoplay video, no typewriter text, no
  sound, no heavy libraries. Prefer plain CSS and a small vanilla JS file.
- Respect `prefers-reduced-motion: reduce` by disabling all of the above.
- Arabic (RTL) must animate and lay out correctly too (mirror directions where needed).

## Stage 4: Files, SEO, QA
- Replace `cv.pdf` with a PDF exported from `Karim_Elsarha_CV_v4_clean.docx` once Karim approves
  it, and rebuild `Karim-Elsarha-Portfolio.pdf` from the updated site content. Do not ship old
  PDFs with the removed numbers.
- Check `<title>`, meta description, Open Graph and Twitter tags, a social preview image, `lang`
  and `dir` attributes on both languages, favicon, and alt text on the photo.
- Accessibility: contrast on the navy sections, visible focus states, headings in order.
- Run Lighthouse (performance, accessibility, SEO) on mobile and report the scores.
- Test: desktop Chrome, Android Chrome, iOS Safari (or the nearest emulation) and say which one
  you could not test.
- Final report: changed files, before/after list of text changes, remaining TODO(Karim) items.
