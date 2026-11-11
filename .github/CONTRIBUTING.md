# Contributing to DP-800 Study Notes

Thanks for helping keep these notes accurate. They cover **Exam DP-800: Developing AI-Enabled Database Solutions**,
across SQL Server 2025, Azure SQL and SQL database in Microsoft Fabric, and those products ship changes often:
features move from preview to general availability, get renamed, or reach one platform before the others. Reports from
people studying with the notes are the best way to catch that.

> [!IMPORTANT]
> **This repo accepts issues, not pull requests.** Pull requests are turned off: I write every change myself and check
> it against the official documentation, so the notes keep one voice and stay consistent from page to page. If you know
> exactly how something should read, put your proposed wording in the issue. It's just as useful.

---

## Contents

- [Ways to Help](#-ways-to-help)
- [Before You Open an Issue](#-before-you-open-an-issue)
- [Opening an Issue](#-opening-an-issue)
- [Out of Scope](#-out-of-scope)
- [What Happens Next](#-what-happens-next)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)

## 🙌 Ways to Help

Every report fits one of the five types in the issue template:

| Type | What it covers | For example |
| --- | --- | --- |
| **Content error** | Text, a table, a callout, a diagram or a code sample is wrong | A T-SQL sample passes `VECTOR_DISTANCE` its arguments in the wrong order, or a decision table maps a scenario to the wrong isolation level |
| **Outdated or renamed** | The product has changed since the page was written | A feature such as vector indexes has gone from preview to GA on one platform, so its "Applies to" flag or a row in the GA/preview matrix no longer holds |
| **Exam coverage** | The notes don't match the official study guide | The study guide was revised after March 12, 2026, or it lists a skill the notes don't cover |
| **Site bug** | Search, navigation, the theme switcher, diagrams, layout, a broken link or accessibility | A search result doesn't jump to its section, a Mermaid diagram doesn't redraw in dark mode, a table overflows on a phone, or a control can't be reached with the keyboard |
| **Suggestion** | Something could be clearer or easier to study | A topic that would read better as a comparison table or a diagram, another exam caveat, or a row for the scenario-to-answer table |

## 🔎 Before You Open an Issue

- **Search the existing issues**, [open and closed](https://github.com/marcogrimaldi29/dp-800-study-notes/issues?q=is%3Aissue).
  If yours is already there, add a 👍 reaction or a comment with anything new rather than opening a duplicate.
- **Check the date.** The notes are written against the **skills measured as of March 12, 2026**. If the
  "Skills measured as of" heading in the
  [study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/dp-800) shows a newer
  date, say so in the issue — it tells me which revision to compare against.
- **Check the current docs.** A quick look at the [Microsoft SQL documentation](https://learn.microsoft.com/en-us/sql/),
  the [Azure SQL documentation](https://learn.microsoft.com/en-us/azure/azure-sql/) or the
  [SQL database in Fabric documentation](https://learn.microsoft.com/en-us/fabric/database/sql/overview) usually
  confirms whether something has changed, and gives you the link the issue asks for. Check the platform too: a feature
  can be GA on SQL Server 2025 and still in preview on Azure SQL or Fabric.
- **One problem per issue.** Separate issues are easier to track, fix and close. Several typos on the same page can go
  in one issue.
- **For a site bug, hard-refresh first** (Ctrl+F5, or Cmd+Shift+R on a Mac) in case your browser is showing an older
  copy of the page.

## 📝 Opening an Issue

1. Open a new issue with the [🐞 Report an Issue](https://github.com/marcogrimaldi29/dp-800-study-notes/issues/new?template=ISSUE_TEMPLATE.md)
   template.
2. Give it a title that names the page and the problem, for example *"Skill 3: hybrid search section applies the RRF
   weights the wrong way round"* rather than *"Mistake on page"*.
3. Fill in the template's sections. Leave out any that don't apply.

> [!TIP]
> To link straight to a section, click it in **On this page**, then copy the address from your browser.

### What Makes a Report Easy to Fix

- **A link to the exact section**, not just the page
- **The text as the notes have it**, quoted, so it can be found even if the page has moved on
- **The platform it applies to** — SQL Server 2025, Azure SQL Database, Azure SQL Managed Instance or SQL database in
  Fabric — when the behaviour differs between them
- **An official source** for any content change — Microsoft Learn is best. A report without one may take longer, because
  every change has to be checked against the documentation before it goes in
- **For site bugs:** the steps to reproduce it, what you expected and what happened instead, the device, operating
  system and browser, and a screenshot if it shows the problem
- **Your proposed wording**, if you have it. With pull requests turned off, this is the closest thing to suggesting an
  edit directly

## 🚫 Out of Scope

To keep the notes accurate and the issue tracker useful, please don't open issues for:

- **Live exam content.** Questions, answers or topics remembered from a real exam break
  [Microsoft's exam security policy](https://learn.microsoft.com/en-us/credentials/support/exam-and-assessment-lab-security-policies).
  Issues or comments that include them will be closed and the content removed.
- **Exam booking, scores or retakes.** [Microsoft Credentials support](https://learn.microsoft.com/en-us/credentials/support/help)
  can help with those.
- **Help with your own database or project.** For troubleshooting your own SQL Server instance, Azure SQL database,
  Fabric workspace, Data API builder deployment or T-SQL, ask on [Microsoft Q&A](https://learn.microsoft.com/en-us/answers/)
  or open an Azure support request.
- **Anything private.** Issues are public, so leave out connection strings, API keys, server and endpoint names, tenant
  IDs and customer data, including in screenshots and query output.
- **Unofficial sources.** Practice-test sites, exam dump sites and AI chat answers aren't accepted as the source for a
  content change.
- **Promotion.** Links to courses, products or services, affiliate links and paid placements won't be added.
- **Security vulnerabilities.** Please
  [report these privately](https://github.com/marcogrimaldi29/dp-800-study-notes/security/advisories/new), as described
  in the [security policy](SECURITY.md), not in a public issue.

## 🔄 What Happens Next

- I maintain the notes on my own, in my spare time, so replies are best effort and there's no fixed response time.
- I check each report against the official documentation. If something needs clarifying, I'll ask on the issue, so keep
  an eye on your GitHub notifications.
- When a fix goes in, the issue is closed with a note or a link to the change. The live site updates shortly after.
- If nothing changes, the issue is closed with the reason, such as out of scope, can't be verified, or working as
  intended.
- An issue waiting on a reply may be closed after a while. Comment with the missing details and it can be reopened.

## 🤝 Code of Conduct

By opening, commenting on or reacting to issues here, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
Comments that are abusive, spam or share live exam content may be hidden, edited or locked.

## 🔒 Security

Found a security problem with the site or this repo? Please don't report it in a public issue. Use
[Report a vulnerability](https://github.com/marcogrimaldi29/dp-800-study-notes/security/advisories/new) instead, so only
you and I can see it. The [security policy](SECURITY.md) has the details.

---

If the notes helped you, the README's [🤝 Let's Connect](https://github.com/marcogrimaldi29/dp-800-study-notes#-lets-connect)
section has a couple of ways to show it. Thanks for helping make them better for the next DP-800 candidate.
