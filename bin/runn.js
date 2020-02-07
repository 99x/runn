#!/usr/bin/env node

let program = require('commander');
let runn = require('../src/runn');
let chalk = require('chalk');
let figlet = require('figlet');
var pjson = require('../package.json');

program
  .version(pjson.version)
  .arguments('<cmd> [set]')
  .action(function (cmd, set) {
    if (set) runn.saveCommand(cmd, set);
    else runn.runCommand(cmd);
  });

program.parse(process.argv);

if (process.argv.length < 3) {
  console.log(
    chalk.blue(
      figlet.textSync('RUNN', {
        font: 'Cyberlarge'
      })
    )
  );

  program.help();
}