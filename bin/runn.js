#!/usr/bin/env node

let program = require("commander");
let runn = require("../src/runn");
let chalk = require("chalk");
let figlet = require("figlet");

program
  .version("0.1.0")
  .arguments("<cmd> [set]")
  .action(function(cmd, set) {
    if (set) runn.saveCommand(cmd, set);
    else runn.runCommand(cmd);
  });

program.parse(process.argv);



if (process.argv.length < 3) {
  console.log(
    chalk.blue(
      figlet.textSync("RUNN", {
        font: "Cyberlarge"
      })
    )
  );
}
// if (process.argv.length < 3) program.help();
