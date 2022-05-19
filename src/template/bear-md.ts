/**
 * template for bear app
 * @param tops
 * @returns string
 */
export const beatTemp = (tops: Task.AST) =>
  `# ${dayRange} W-${getWeek(day)}/${weeksInYear(day)}

## Top Works
- 「\*\*」
- 「\*\*」
---
## Tasks
${daysOfWeek(day.startOf('week'), 6)
  .map(([w, m, d]: any) => `### ${w}, ${m} ${d}`)
  .join('\n\n')}

---
## Summary
1. 

---
## Next
「Index\*\*」

${tops?.tags?.map?.((tag) => '#' + tag).join('\n') ?? ''}
`
