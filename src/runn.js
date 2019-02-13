const exec = require('child_process').exec;
const Configstore = require('configstore');
const chalk = require('chalk');


class Runn {

    constructor() {
        const pkg = require('../package.json');
        this.config = new Configstore(pkg.name);
    }

    saveCommand(alias, original) {
        this.config.set(alias, original);
    }

    retriveCommand(alias) {
        return this.config.get(alias);
    }

    runCommand(cmd) {
        const command = this.retriveCommand(cmd);
        if (!command) {
            console.log(chalk.red(`Alias "${cmd}" is not defined`));
            return;
        }       
        exec(command, (err, stdout, stderr) => {
            if (err) {
              console.log(chalk.red(`Unable to execute "${command}"`));
              return;
            }
            if(stdout) console.log(stdout);
            if(stderr) console.log(stderr);
        });
    }

}

module.exports = new Runn();