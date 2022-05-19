import dayjs from 'dayjs'

import { getWeek, weeksInYear, startOfWeek, endOfWeek, daysOfWeek } from './utils'

const day = dayjs()
const { sYear, sMonth, sDay } = startOfWeek(day)
const { eYear, eMonth, eDay } = endOfWeek(day)

let dayRange = ''
if (sYear === eYear && sMonth === eMonth) {
  // same year and one month
  dayRange = `${sMonth}. ${sDay}-${eDay} ${sYear}`
} else if (sYear === eYear && sMonth !== eMonth) {
  // same year but not one month
  dayRange = `${sMonth}. ${sDay} - ${eMonth} ${eDay} ${sYear}`
} else if (sYear !== eYear) {
  // diff year
  dayRange = `${sMonth}. ${sDay} ${sYear} - ${eMonth} ${eDay} ${eYear}`
}

interface Props {
  tags?: string[]
}

/**
 * TODO: 支持 Markdown 模板格式、支持 Apple Notes 模板格式
 */
export const task = (tops: Props) => `# ${dayRange} W-${getWeek(day)}/${weeksInYear(day)}
## Top Works
- 「\*\*」
---
## Tasks
${daysOfWeek(day.startOf('week'), 6)
  .map(([w, m, d]: any) => `### ${w}. ${m} ${d}`)
  .join('\n\n')}
---
## Weekly Reports
1. 
2. 
---
## Next Week Works
1. 
2. 
${tops?.tags?.map?.((tag) => '#' + tag).join('\n') ?? ''}
`
