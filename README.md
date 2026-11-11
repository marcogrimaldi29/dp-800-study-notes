# 🗄️ DP-800 Study Notes

**📖 Read them at [marcogrimaldi29.com/dp-800-study-notes](https://marcogrimaldi29.com/dp-800-study-notes/)** — and if
they help, ⭐ star this repo so other candidates can find them.

Exam-focused study notes for **Exam DP-800: Developing AI-Enabled Database Solutions**, the exam behind the
*Microsoft Certified: SQL AI Developer Associate* certification. They cover designing, securing, optimizing and
deploying databases across SQL Server 2025, Azure SQL and SQL database in Microsoft Fabric — and bringing AI into
them with external models, embeddings, vector and hybrid search, and retrieval-augmented generation written in T-SQL.

📅 Written against the **DP-800 skills measured as of March 12, 2026**.

---

## 📚 What's Inside

| Page | Covers | Exam weight |
| --- | --- | --- |
| [SQL Platforms & Tooling](https://marcogrimaldi29.com/dp-800-study-notes/sql-foundations/) | The three platforms, Managed Instance update policies, SQL database in Fabric, a feature-by-platform GA/preview matrix, the switches that turn features on, and the developer tools | Prerequisite |
| [Skill 1 · Design & Develop](https://marcogrimaldi29.com/dp-800-study-notes/skill-1-design-develop/) | Tables, types and columnstore; temporal, ledger, in-memory, external and graph tables; JSON columns; constraints, sequences, partitioning; programmability; GitHub Copilot, Copilot in Fabric and MCP | 35–40% |
| [Skill 2 · Secure, Optimize & Deploy](https://marcogrimaldi29.com/dp-800-study-notes/skill-2-secure-optimize-deploy/) | Always Encrypted, masking, RLS, passwordless access and auditing; isolation, Query Store and deadlocks; CI/CD with SQL Database Projects; Data API builder, Azure Monitor and change handling | 35–40% |
| [Skill 3 · AI Capabilities](https://marcogrimaldi29.com/dp-800-study-notes/skill-3-ai-capabilities/) | External models, chunking and embedding maintenance; full-text, vector and hybrid search with RRF; RAG with `sp_invoke_external_rest_endpoint` | 25–30% |
| [Advanced T-SQL Deep Dive](https://marcogrimaldi29.com/dp-800-study-notes/advanced-tsql-deep-dive/) | CTEs, window functions, JSON, regular expressions, fuzzy matching, graph `MATCH`, correlated queries, error handling and `MERGE` | Deep dive |
| [Vectors, Search & RAG Deep Dive](https://marcogrimaldi29.com/dp-800-study-notes/vectors-rag-deep-dive/) | One end-to-end build: model, chunks, embeddings, DiskANN and full-text indexes, recall check, weighted RRF, a grounded RAG procedure and embedding maintenance | Deep dive |
| [Configuration Reference](https://marcogrimaldi29.com/dp-800-study-notes/config-reference/) | `dab-config.json` and the DAB CLI, SDK-style `.sqlproj` and publish profiles, a GitHub Actions deploy workflow, CODEOWNERS, Copilot instruction and prompt files, MCP server configuration | Deep dive |
| [Exam Tips & Caveats](https://marcogrimaldi29.com/dp-800-study-notes/exam-tips/) | Key numbers, GA-versus-preview by platform, renames and Learn-vs-docs discrepancies, commonly confused pairs, a scenario-to-answer table and a night-before checklist | Final review |

Every page carries "Applies to" platform flags, diagrams, decision tables, T-SQL and configuration samples, and
exam-caveat callouts.

## ✨ Reading Experience

- **Site-wide search** (<kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>K</kbd> or <kbd>/</kbd>) across every page — prose, tables,
  code and diagram labels — jumping straight to the matching section
- **Two-rail navigation**: the page list on the left, and an **On this page** outline on the right that follows you as
  you scroll
- **Light and dark mode**, switched by the sunrise brand mark that rises into a full sun
- **Platform flags** on every feature that differs between SQL Server 2025, Azure SQL and Fabric
- **Diagrams** that follow the active theme, and syntax-highlighted T-SQL, JSON, XML and YAML samples
- Designed for phones, tablets and laptops alike, with keyboard and screen-reader support

## 🤖 A Note on AI

These notes were researched and written **with the help of AI — [Claude](https://claude.com/claude-code)**,
Anthropic's assistant, working from the official DP-800 study guide, the DP-800T00-A course and its Microsoft Learn
modules, and the SQL Server, Azure SQL, Microsoft Fabric, Data API builder and GitHub Copilot documentation. Every
page was reviewed before publication, but AI-assisted writing can still get details wrong, and these products change
quickly. Treat the notes as a study companion and verify anything decision-critical against the
[official documentation](https://learn.microsoft.com/en-us/sql/).

## 🐞 Spotted a Mistake?

SQL Server, Azure SQL and Fabric ship changes often, and features move from preview to general availability between
exam revisions. If something here is wrong or out of date, please
[report an issue](https://github.com/marcogrimaldi29/dp-800-study-notes/issues). The
[contributing guide](.github/CONTRIBUTING.md) explains what makes a report easy to fix and what's out of scope.

## ⚠️ Disclaimer

These notes are an independent study aid for **learning purposes only**. They are not affiliated with or endorsed by
Microsoft. Always verify against the
[official DP-800 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-800)
and the [Microsoft SQL documentation](https://learn.microsoft.com/en-us/sql/) before relying on any detail here.

## 🤝 Let's Connect

Maintained by **Marco Grimaldi**, Cloud Solution Architect. Find more study notes and certification reviews on my
website, follow along on GitHub, or connect on LinkedIn.

<p align="center">
  <a href="https://marcogrimaldi29.com/"><img src="https://img.shields.io/badge/marcogrimaldi29.com-0b1422?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjUiIHkxPSIxNiIgeDI9IjI3IiB5Mj0iMTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2ZiOTUwIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iIzJlYzVjNSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDQ5M2Y4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM%2BCiAgPGcgc3Ryb2tlPSJ1cmwoI2cpIiBzdHJva2Utd2lkdGg9IjEuOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgIDxsaW5lIHgxPSIxNiIgeTE9IjEwLjUiIHgyPSIxNiIgeTI9IjcuNSIgLz4KICAgIDxsaW5lIHgxPSIxMC4yIiB5MT0iMTIuNiIgeDI9IjguNCIgeTI9IjEwLjgiIC8%2BCiAgICA8bGluZSB4MT0iMjEuOCIgeTE9IjEyLjYiIHgyPSIyMy42IiB5Mj0iMTAuOCIgLz4KICA8L2c%2BCiAgPHBhdGggZD0iTTguNSAyMCBhNy41IDcuNSAwIDAgMSAxNSAwIHoiIGZpbGw9InVybCgjZykiIC8%2BCiAgPGxpbmUgeDE9IjQuNSIgeTE9IjIwIiB4Mj0iMjcuNSIgeTI9IjIwIiBzdHJva2U9IiMyZWM1YzUiIHN0cm9rZS13aWR0aD0iMS45IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8%2BCjwvc3ZnPgo%3D&logoColor=white" alt="marcogrimaldi29.com" /></a>
  <a href="https://github.com/marcogrimaldi29"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/marco-grimaldi29/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2EyLjA2MiAyLjA2MiAwIDAgMS0yLjA2My0yLjA2NSAyLjA2NCAyLjA2NCAwIDEgMSAyLjA2MyAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyNSAweiIvPjwvc3ZnPg%3D%3D" alt="LinkedIn" /></a>
</p>
