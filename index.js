const chalk = require('chalk');
const Spinner = require('cli-spinner').Spinner;
const notifier = require('node-notifier')


console.log(chalk.red('hola, yo soy pearson'));
let spinner = new Spinner('processing..%s');
spinner.setSpinnerString('|/-\\')
spinner.start();
setTimeout(
    () => {
        spinner.stop(true)
    }
    , 2000);

notifier.notify({

title:`visual studio`,
message:`este es mi primer trabajo en visual s.`


});