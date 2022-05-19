import dayjs from 'dayjs'
import { getWeek, weeksInYear, startOfWeek, endOfWeek } from '../utils'

test('2020 has 53 weeks', () => {
  const day = dayjs('2020-01-01')
  expect(weeksInYear(day)).toBe(53)
})

test('2021 has 52 weeks', () => {
  const day = dayjs('2021-01-01')
  expect(weeksInYear(day)).toBe(52)
})

test('2022 has 53 weeks', () => {
  const day = dayjs('2022-11-01')
  expect(weeksInYear(day)).toBe(52)
})

test('2021-01-01 is 1th week of 2021', () => {
  const day = dayjs('2021-01-01')
  expect(getWeek(day)).toBe(1)
})

test('2021-03-21 is 12th week of 2021', () => {
  const day = dayjs('2021-03-21')
  expect(getWeek(day)).toBe(12)
})

test('2021-03-22 is 13th week of 2021', () => {
  const day = dayjs('2021-03-22')
  expect(getWeek(day)).toBe(13)
})

test('2021-03-28 is 13th week of 2021', () => {
  const day = dayjs('2021-03-28')
  expect(getWeek(day)).toBe(13)
})

test('2021-03-31 is 14th week of 2021', () => {
  const day = dayjs('2021-03-31')
  expect(getWeek(day)).toBe(14)
})

test('start day of week(2021-03-31) is 2021-03-29', () => {
  const day = dayjs('2021-03-31')
  const { sYear, sDay, sMonth } = startOfWeek(day)
  expect(sYear).toEqual(2021)
  expect(sMonth).toEqual('Mar')
  expect(sDay).toEqual(29)
})

test('start day of week(2020-08-07) is 2020-08-03', () => {
  const day = dayjs('2020-08-07')
  const { sYear, sMonth, sDay } = startOfWeek(day)
  expect(sYear).toEqual(2020)
  expect(sMonth).toEqual('Aug')
  expect(sDay).toEqual(3)
})

test('end day of week(2021-03-31) is 2021-04-04', () => {
  const day = dayjs('2021-03-31')
  const { eYear, eMonth, eDay } = endOfWeek(day)
  expect(eYear).toEqual(2021)
  expect(eMonth).toEqual('Apr')
  expect(eDay).toEqual(4)
})

test('end day of week(2020-12-26) is 2020-12-27', () => {
  const day = dayjs('2020-12-26')
  const { eYear, eMonth, eDay } = endOfWeek(day)
  expect(eYear).toEqual(2020)
  expect(eMonth).toEqual('Dec')
  expect(eDay).toEqual(27)
})
