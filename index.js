#! /usr/bin/env node

const { program } = require('commander')
const addStats = (options) => { console.log(options) }

// add statistic to E18
program
  .command('add <stats>')
  .description('Add statistic to E18')
  .action(addStats)

// parse commands
program.parse()
