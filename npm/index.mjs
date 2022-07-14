import chalk from "chalk";
import validator from 'validator';
const log = console.log;
 //log(chalk.blue('hello'));

  const res = validator.isEmail("abhaybisht9412@gmail.com");
  log( res ? chalk.green.inverse(res) : chalk.red.inverse(res));

//  const res = validator.isEmail("abhaybisht9412@gmailcom");
//  log( res ? chalk.green.inverse(res) : chalk.red.inverse(res));


