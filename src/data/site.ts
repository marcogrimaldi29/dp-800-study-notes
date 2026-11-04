/**
 * Single source of truth for the site's identity and page registry.
 *
 * Everything that needs to know "which pages exist and in what order" reads
 * from here: the foldable sidebar, the footer, the prev/next pager, the search
 * index seed and src/pages/sitemap.xml.ts. Site-wide strings — the name, the
 * exam, the skills-measured revision, the repository, the official links, the
 * hero pills and the code-rain vocabulary — live here too, so no component has
 * them typed in by hand and a new exam never inherits the previous one's.
 *
 * Adding a page is one entry in PAGES plus one file in src/pages/.
 */

const EXAM = 'DP-800';
const REPO_NAME = 'dp-800-study-notes';
const OWNER = 'marcogrimaldi29';

export const SITE = {
  /** The wordmark. Shown in full at every width — never abbreviated. */
  name: `${EXAM} Study Notes`,
  exam: EXAM,
  examTitle: 'Developing AI-Enabled Database Solutions',
  certification: 'Microsoft Certified: SQL AI Developer Associate',
  /** The certification's short name, used as the hero title. */
  certShort: 'SQL AI Developer Associate',
  course: 'DP-800T00-A',
  /** The skills-measured revision these notes are written against (the study guide's own "as of" date). */
  skillsMeasured: 'March 12, 2026',
  origin: 'https://marcogrimaldi29.com',
  /** Also the base path the site is served under (see astro.config.mjs). */
  repoName: REPO_NAME,
  repo: `https://github.com/${OWNER}/${REPO_NAME}`,
  issues: `https://github.com/${OWNER}/${REPO_NAME}/issues`,
  /** Prefix for localStorage keys and custom DOM events. */
  storagePrefix: 'dp800',
  /** Translucent pills in the home page hero, each with a Fluent icon. */
  heroLabels: [
    { text: '100 min exam', icon: 'timer' },
    { text: 'Pass mark 700 / 1000', icon: 'checkmark_circle' },
    { text: '3 skill areas', icon: 'book_open' },
    { text: 'Intermediate level', icon: 'hat_graduation' },
  ],
  /** Tokens for the faint "code rain" background, drawn from the exam's own vocabulary. */
  codeRain: [
    'SELECT', 'VECTOR_DISTANCE', 'VECTOR_SEARCH', 'AI_GENERATE_EMBEDDINGS', 'CREATE EXTERNAL MODEL',
    'sp_invoke_external_rest_endpoint', 'OPENJSON', 'JSON_OBJECT', 'REGEXP_LIKE', 'MATCH', 'OVER (PARTITION BY',
    'BEGIN TRY', 'MERGE', '.sqlproj', 'dab-config.json', 'GraphQL', 'MCP', 'RRF', 'DiskANN', 'Query Store',
    'WITH APPROXIMATE', 'AI_GENERATE_CHUNKS', 'VECTOR(1536)', 'CONTAINSTABLE', 'EDIT_DISTANCE', 'FOR JSON PATH',
    'SYSTEM_VERSIONING', 'LEDGER = ON', 'MASKED WITH', 'SECURITY POLICY', 'READ_COMMITTED_SNAPSHOT', 'sqlpackage',
    'dab start', 'CHANGE_TRACKING', 'cdc', 'THROW', 'WITH cte AS', 'JSON_ARRAYAGG', '{', '}', ';', 'GO',
  ],
  author: {
    name: 'Marco Grimaldi',
    role: 'Cloud Solution Architect',
    site: 'https://marcogrimaldi29.com/',
    github: `https://github.com/${OWNER}`,
    linkedin: 'https://www.linkedin.com/in/marco-grimaldi29/',
  },
  /** Official material, listed in the footer. */
  resources: [
    { label: 'DP-800 study guide', href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-800' },
    { label: 'Certification page', href: 'https://learn.microsoft.com/en-us/credentials/certifications/developing-ai-enabled-database-solutions/' },
    { label: 'Practice assessment', href: 'https://aka.ms/DP800-PA' },
    { label: 'Exam sandbox', href: 'https://aka.ms/examdemo' },
    { label: 'Course DP-800T00-A', href: 'https://learn.microsoft.com/en-us/training/courses/dp-800t00' },
    { label: 'Microsoft SQL docs', href: 'https://learn.microsoft.com/en-us/sql/' },
    { label: 'Azure SQL docs', href: 'https://learn.microsoft.com/en-us/azure/azure-sql/' },
    { label: 'SQL database in Fabric', href: 'https://learn.microsoft.com/en-us/fabric/database/sql/overview' },
    { label: 'SQL Database Projects', href: 'https://learn.microsoft.com/en-us/sql/tools/sql-database-projects/sql-database-projects' },
    { label: 'Data API builder', href: 'https://learn.microsoft.com/en-us/azure/data-api-builder/' },
  ],
} as const;

export type PageGroup = 'start' | 'skills' | 'deep' | 'extras';

export interface NotePage {
  /** URL segment; '' is the home page. */
  slug: string;
  /** Full label, used in the footer, the pager and search results. */
  label: string;
  /**
   * Condensed label for the sidebar. Carries neither the skill number nor the
   * weighting: the counter beside it already shows the weighting, so repeating
   * either in the name reads as a duplicate.
   */
  navLabel: string;
  /** Fluent icon (snake_case) shown beside the label, alone in the folded rail, and on cards. */
  icon: string;
  /** Skill number in the official outline, for the skill pages only. */
  skill?: number;
  /** Uppercase kicker shown on cards and page heads. */
  badge: string;
  /** CSS custom property holding this page's accent colour. */
  accent: string;
  /** Card / meta description. */
  blurb: string;
  group: PageGroup;
  /** Exam weighting, for the skill pages only. */
  weight?: string;
  /** Mid-point of the weighting range, used to size the progress bars. */
  weightPct?: number;
}

export const PAGES: NotePage[] = [
  {
    slug: '',
    label: 'Home',
    navLabel: 'Home',
    icon: 'home',
    badge: 'Overview',
    accent: 'var(--s0)',
    blurb: 'Exam overview, skills weighting and how to use these notes.',
    group: 'start',
  },
  {
    slug: 'sql-foundations',
    label: 'SQL platforms & tooling',
    navLabel: 'Foundations',
    icon: 'book_database',
    badge: 'Foundations · Prerequisite',
    accent: 'var(--s0)',
    blurb:
      'The three platforms the exam spans — SQL Server 2025, Azure SQL and SQL database in Fabric — the tools you build with, and which feature exists where, at what status.',
    group: 'start',
  },
  {
    slug: 'skill-1-design-develop',
    label: 'Design and develop database solutions',
    navLabel: 'Design & develop',
    icon: 'table',
    skill: 1,
    badge: 'Skill 1 · 35–40%',
    accent: 'var(--s1)',
    blurb:
      'Tables, columnstore and specialized tables, JSON columns, constraints, sequences and partitioning; views, functions, procedures and triggers; advanced T-SQL; and building SQL with GitHub Copilot, Copilot in Fabric and MCP.',
    group: 'skills',
    weight: '35–40%',
    weightPct: 37.5,
  },
  {
    slug: 'skill-2-secure-optimize-deploy',
    label: 'Secure, optimize, and deploy database solutions',
    navLabel: 'Secure, optimize & deploy',
    icon: 'shield_lock',
    skill: 2,
    badge: 'Skill 2 · 35–40%',
    accent: 'var(--s2)',
    blurb:
      'Encryption, masking, RLS, permissions, passwordless access and auditing; isolation, Query Store and deadlocks; CI/CD with SQL Database Projects; Data API builder, Azure Monitor and change handling.',
    group: 'skills',
    weight: '35–40%',
    weightPct: 37.5,
  },
  {
    slug: 'skill-3-ai-capabilities',
    label: 'Implement AI capabilities in database solutions',
    navLabel: 'AI capabilities',
    icon: 'sparkle',
    skill: 3,
    badge: 'Skill 3 · 25–30%',
    accent: 'var(--s3)',
    blurb:
      'External models and embeddings, chunking and embedding maintenance, full-text, vector and hybrid search with RRF, and retrieval-augmented generation from inside the database.',
    group: 'skills',
    weight: '25–30%',
    weightPct: 27.5,
  },
  {
    slug: 'advanced-tsql-deep-dive',
    label: 'Advanced T-SQL deep dive',
    navLabel: 'Advanced T-SQL',
    icon: 'code',
    badge: 'Deep dive · Query skill',
    accent: 'var(--s4)',
    blurb:
      'CTEs, window functions, the JSON and regular-expression families, fuzzy matching, graph MATCH, correlated queries and error handling — the code the exam asks you to read.',
    group: 'deep',
  },
  {
    slug: 'vectors-rag-deep-dive',
    label: 'Vectors, search & RAG deep dive',
    navLabel: 'Vectors & RAG',
    icon: 'search_sparkle',
    badge: 'Deep dive · AI skill',
    accent: 'var(--s5)',
    blurb:
      'One end-to-end build in T-SQL: an external model, chunks, embeddings, a vector index, exact and approximate search, full-text, hybrid ranking with RRF and a RAG call to a chat model.',
    group: 'deep',
  },
  {
    slug: 'config-reference',
    label: 'Configuration reference',
    navLabel: 'Config files',
    icon: 'braces',
    badge: 'Deep dive · Files & flags',
    accent: 'var(--s6)',
    blurb:
      'Every file the exam expects you to read: dab-config.json and the DAB CLI, the SDK-style .sqlproj and publish profiles, the GitHub Actions deploy workflow, Copilot instruction files and MCP server configuration.',
    group: 'deep',
  },
  {
    slug: 'exam-tips',
    label: 'Exam tips & caveats',
    navLabel: 'Exam tips',
    icon: 'lightbulb',
    badge: 'Final review',
    accent: 'var(--s7)',
    blurb:
      'Key numbers, GA-versus-preview by platform, the renames and the Learn-versus-docs discrepancies, commonly confused pairs, a scenario-to-answer lookup table and a checklist for the night before.',
    group: 'extras',
  },
];

export const GROUP_LABELS: Record<PageGroup, string> = {
  start: 'Start here',
  skills: 'Skills measured',
  deep: 'Deep dives',
  extras: 'Final review',
};

export const GROUP_ORDER: PageGroup[] = ['start', 'skills', 'deep', 'extras'];

/** Pages that carry an exam weighting, in outline order. */
export const SKILL_PAGES = PAGES.filter((p) => p.group === 'skills');

/** The largest weighting in the outline (40%), which the progress bars are drawn against. */
export const MAX_WEIGHT = 40;

export function pageBySlug(slug: string): NotePage | undefined {
  return PAGES.find((p) => p.slug === slug);
}

/** Previous / next page for the pager, skipping the home page. */
export function neighbours(slug: string) {
  const ordered = PAGES.filter((p) => p.slug !== '');
  const i = ordered.findIndex((p) => p.slug === slug);
  return { prev: i > 0 ? ordered[i - 1] : undefined, next: i >= 0 ? ordered[i + 1] : undefined };
}
