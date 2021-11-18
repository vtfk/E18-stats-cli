#! /usr/bin/env node

require('dotenv').config()
const { addStats } = require('@vtfk/e18-stats')
const { program } = require('commander')

const processStats = async options => {
  const stats = JSON.parse(options)
  const result = addStats(stats)
  console.log(result)
}

// add statistic to E18
program
  .command('add <stats>')
  .description('Add statistic to E18')
  .action(processStats)

// parse commands
program.parse()
