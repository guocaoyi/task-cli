import * as os from 'os'
import * as cp from 'child_process'
import * as process from 'process'
import { Command } from 'commander'
import chalk from 'chalk'

import { task } from './task'
import { version, tags } from './utils'

const program = new Command()

program
  .option('-t, --tags', 'output extra debugging')
  .option('-h, --help', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

const options = program.opts()
if (options.debug) console.log(options)
console.log('pizza details:')
if (options.small) console.log('- small pizza size')
if (options.pizzaType) console.log(`- ${options.pizzaType}`)

let newtags = tags
process.argv.forEach((val) => {
  if (val.startsWith('--tags=')) {
    const tagstr = val.replace(/\-\-tags\=/i, '')
    newtags = tags.concat((tagstr || '').split(','))
  } else if (val.startsWith('--help')) {
    console.info(`
Usage:
  $ task [root]

Options: 
  --tags=[tag1,tag2]            generator with tags
  --help                        get help message
  --version                     get version
  --temp                        set outfile template
  --output                      if not, will copy to clipboard
  `)
    process.exit(0)
  } else if (val.startsWith('--version')) {
    console.info(`task/${version}`)
    process.exit(0)
  }
})

const str = task({
  tags: newtags,
})

if (os.platform() === 'darwin') {
  let proc = cp.spawn('pbcopy')
  proc.stdin.write(str)
  proc.stdin.end()
  console.log(chalk.green.bold('[Done]'), 'Copy to Clipboard!')
}
