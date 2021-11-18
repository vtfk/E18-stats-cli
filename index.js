#! /usr/bin/env node

const addStats = (options) => {
  const stats = JSON.parse(options)
  console.log(stats.system)
}

const { program } = require('commander')
// add statistic to E18
program
  .command('add <stats>')
  .description('Add statistic to E18')
  .action(addStats)

// parse commands
program.parse()
