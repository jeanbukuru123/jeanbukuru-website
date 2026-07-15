# Jean Bukuru — Personal Brand Website

A premium, editorial-style personal branding website built to position **Jean Bukuru** — Mastercard Foundation Scholar, USIU-Africa Business Administration (Accounting) student, and community-impact leader — as a highly competitive candidate for scholarships, fellowships, graduate admissions, leadership programs, research opportunities, and professional/consulting roles.

This is **not** a resume or CV site. It is a storytelling-driven personal brand platform that answers one question on every page: *"Why should someone invest in Jean Bukuru?"*

---

## 🎨 Design System

- **Palette:** Deep Navy Blue (leadership/trust), Forest Green (growth/impact), Warm Gold (excellence/aspiration), Soft Off-White background, Dark Charcoal text.
- **Typography:** Playfair Display (serif, headlines) + Inter (sans, body/UI) via Google Fonts.
- **Icons:** Font Awesome 6 (CDN).
- **Style:** Editorial/premium — sticky glass navbar, animated stat counters, scroll-reveal animations, elegant timeline, case-study cards, filterable gallery with lightbox, animated skill bars.
- Fully responsive (desktop, tablet, mobile) with a slide-in mobile navigation.

## 🗂️ Site Structure & URLs

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, animated impact dashboard, pillars, featured impact, org trust badges, CTA |
| About | `about.html` | Story, values, mission/vision, future aspirations |
| My Journey | `journey.html` | Full chronological timeline (2017–present) across education, leadership, fellowships, projects |
| Impact | `impact.html` | 4 in-depth case studies (Problem → Solution → Implementation → Impact → Lessons) |
| Leadership | `leadership.html` | Leadership roles, philosophy, and leadership style |
| Entrepreneurship | `entrepreneurship.html` | Entrepreneurial mindset applied to social ventures (M-TEP) |
| Experience | `experience.html` | Professional / Community / Mentorship / Academic-research experience |
| Education | `education.html` | Degree cards + academic honors |
| Certifications | `certifications.html` | Certificates grouped by category (Leadership, Fellowships, Mentorship, Academic) |
| Skills | `skills.html` | Animated skill bars + competency tags |
| Fellowships & Awards | `fellowships.html` | Fellowship & award cards + selection highlight |
| Volunteering | `volunteering.html` | 7-year mentorship story + community service initiatives |
| Gallery | `gallery.html` | Categorized, filterable photo gallery with lightbox (Leadership / Projects / Community / Events / Training / Certificates / Portraits) |
| Blog | `blog.html` | Forward-looking blog listing (placeholder articles, ready for future content) |
| Contact | `contact.html` | Contact form (static/demo), direct contact details, CV download, opportunity tags |

All pages share `css/style.css` (design system) and `js/main.js` (nav, scroll-reveal, counters, skill bars, lightbox, gallery filter, mobile menu, contact form demo).

## 🖼️ Visual Asset Placement

Uploaded photos and certificates were analyzed and intentionally placed:

- **Portraits** (`images/portrait-*.png`) → Home hero, About page.
- **Certificates** (`images/cert-*.png`) → Certifications page (grouped by category), Education page, Journey timeline, Fellowships & Awards, Gallery "Certificates" filter.
- **Mahama Tailoring Empowerment Project photos** (`images/mtep-*.png`) → Impact case study #1, Entrepreneurship page, Gallery "Projects"/"Training".
- **Amahoro Coalition Fellowship photos** (`images/amahoro-*.png`) → Journey, Leadership, Gallery "Events & Fellowships".
- **Scholar Day of Service / Kaduro Primary School photos** (`images/kaduro-*.png`) → Impact case study #2, Leadership, Volunteering, Gallery "Community"/"Projects".
- **Millennium Fellowship photos** (`images/millennium-*.png`) → Impact case study #3, Journey, Fellowships & Awards, Gallery.
- **Michigan State University research photo** (`images/msu-research-team.png`) → Impact case study #4, Experience, Journey.
- **EDGE Program photos** (`images/edge-*.png`) → Leadership, Certifications, Journey.
- **Mastercard Foundation Scholars photos** (`images/mcf-scholars-*.png`) → About, Leadership, Journey.
- **Mahama community mentorship photo** (`images/mahama-club-1.png`) → About, Volunteering (Seven Years of Mentorship).

The original CV PDF is preserved at `documents/Jean_Bukuru_CV.pdf` and linked from Home and Contact as a downloadable CV.

## 📦 Data & Storage

This is a fully static site — no database or backend is used. All content is authored directly in HTML/CSS/JS and sourced from the user-provided CV and images. No RESTful Table API tables were needed since content is fixed editorial content, not dynamic user data.

## ✅ Completed Features

- Full 15-page site architecture per the brief (Home, About, Journey, Impact, Leadership, Entrepreneurship, Experience, Education, Certifications, Skills, Fellowships & Awards, Volunteering, Gallery, Blog, Contact)
- Premium, non-template visual design with consistent navy/forest/gold palette
- Animated statistics dashboard, scroll-reveal, skill bars, filterable/lightbox gallery
- 4 detailed impact case studies with problem/solution/implementation/results structure
- Certificates organized by category, not chronologically
- Every uploaded image intentionally placed per the provided placement guide
- SEO metadata (title, description, OG tags) on every page
- Fully responsive layout with mobile navigation
- Downloadable CV link (original PDF preserved)

## 🚧 Not Yet Implemented / Placeholder Content

- **Blog articles** are placeholders ("Coming Soon") — ready for Jean to write and publish full posts as his journey continues.
- **Contact form** is a static front-end demo (no backend/email server) — for a live form, it would need to be linked to a form service (e.g., Formspree) or a Table API-backed submission endpoint, which was intentionally left out until the user requests it (to avoid inventing false integrations).
- Testimonials/recommendation letters section was not included since no verified third-party testimonial text was provided — can be added once available.

## 🔭 Recommended Next Steps

1. Populate the Blog with real articles as Jean publishes reflections.
2. Connect the contact form to a real submission handler once decided (e.g., Table API-backed leads table, or a third-party form service).
3. Add a testimonials/recommendation section once letters or quotes from mentors/supervisors are available.
4. Continue updating the Journey and Impact pages as new fellowships, projects, and milestones are completed.
5. Consider adding a downloadable one-page "impact portfolio" PDF summarizing case studies for scholarship committees.

## 🚀 Deployment

To publish this site and make it live, use the **Publish tab** in the project interface — it will handle deployment and provide the live URL.
