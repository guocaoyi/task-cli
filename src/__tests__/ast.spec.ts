import * as path from 'path'
import * as fs from 'fs'
/**
 * 访问 SQLite 文件解析
 */
const dbFilePath = '/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/'
const dbFileName = 'database.sqlite'
const homePath = process.env.HOME

test('DB Files exist', () => {
  let isExist = fs.existsSync(path.join(homePath ?? '', dbFilePath, dbFileName))
  expect(isExist).toBeTruthy()
})

test('DB Files exist', () => {
  let isExist = fs.existsSync(path.join(homePath ?? '', dbFilePath, dbFileName))
  expect(isExist).toBeTruthy()
})
