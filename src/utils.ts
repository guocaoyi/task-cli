import * as fs from 'fs'
import path from 'path'
import dayjs, { Dayjs } from 'dayjs'
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isoWeeksInYear) // 总周数
dayjs.extend(isLeapYear) // 总周数
dayjs.extend(weekOfYear) // 当前周数
export const customLocale = {
  name: 'zh', // name String
  weekStart: 1,
  formats: {},
  relativeTime: {},
  meridiem: (hour: number) => (hour > 12 ? 'PM' : 'AM'),
}
dayjs.locale(customLocale)

/**
 * task version
 */
export const version =
  JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../package.json'), {
      encoding: 'utf8',
    }) ?? '{}',
  )?.version ?? '-'

/**
 * default support tags
 */
export let tags = ['dailywork']

export const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

export const Weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sta']

/**
 * 第多少
 * @param day Dayjs
 * @returns string
 */
export const getWeek = (day: Dayjs) => day.week()

/**
 * 年度总周数字
 * @param day Dayjs
 * @returns string
 */
export const weeksInYear = (day: Dayjs) => day.isoWeeksInYear()

/**
 * 每周开启第一天
 * @param day Dayjs
 * @returns {$M,$D,$Y}
 */
export const startOfWeek = (day: Dayjs) => {
  const { $y, $M, $D } = day.startOf('week') as Dayjs & Task.StartOfWeek
  return {
    sYear: $y,
    sMonth: Months[$M],
    sDay: $D,
  }
}

/**
 * 每周结束的日期
 * @param day Dsyjs
 * @returns {$M,$D,$Y}
 */
export const endOfWeek = (day: Dayjs) => {
  const { $y, $M, $D } = day.endOf('week') as Dayjs & Task.StartOfWeek
  return {
    eYear: $y,
    eMonth: Months[$M],
    eDay: $D,
  }
}

/**
 * 获取{day}所在周每天的信息
 * @param day  Dayjs
 * @param limit number
 * @returns Array<{w, m, d}>
 */
export const daysOfWeek = (day: Dayjs, limit: number = 5) =>
  new Array(limit).fill(1).map((v, i) => {
    let { $M, $W, $D } = day.add(+i, 'day') as Dayjs & Task.StartOfWeek
    return [Weeks[$W], Months[$M], $D]
  })
