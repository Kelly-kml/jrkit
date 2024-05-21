#! /usr/bin/env node
// 标识文件使用 node 执行
// index.ts
import { Command } from 'commander';
import Pack from '../package.json';
import Commands from '@commands';
// import { Cblue, Cred, Cgreen } from '@utils';

import { loading } from '@utils';

// import inquirer from 'inquirer';

const program = new Command();

program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption('-h', '--help')
  .usage(`<command> [option]`)
  // .command('chooes')
  // .action(() => {
  //   inquirer
  //     .prompt([
  //       {
  //         type: 'checkbox',
  //         message: 'Select toppings',
  //         name: 'checkbox',
  //         choices: [
  //           new inquirer.Separator(' = The Meats = '),
  //           {
  //             name: 'Pepperoni',
  //           },
  //           {
  //             name: 'Ham',
  //           },
  //           {
  //             name: 'Ground Meat',
  //           },
  //           {
  //             name: 'Bacon',
  //           },
  //           new inquirer.Separator(' = The Cheeses = '),
  //           {
  //             name: 'Mozzarella',
  //             checked: true,
  //           },
  //           {
  //             name: 'Cheddar',
  //           },
  //           {
  //             name: 'Parmesan',
  //           },
  //           new inquirer.Separator(' = The usual ='),
  //           {
  //             name: 'Mushroom',
  //           },
  //           {
  //             name: 'Tomato',
  //           },
  //           new inquirer.Separator(' = The extras = '),
  //           {
  //             name: 'Pineapple',
  //           },
  //           {
  //             name: 'Olives',
  //             disabled: 'out of stock',
  //           },
  //           {
  //             name: 'Extra cheese',
  //           },
  //         ],
  //         validate(answer) {
  //           if (answer.length === 0) {
  //             return 'You must choose at least one topping.';
  //           }

  //           return true;
  //         },
  //       },
  //     ])
  //     .then((answers) => {
  //       console.log(JSON.stringify(answers, null, '  '));
  //     });
  // });
  .command('loading')
  .action(() => {
    loading.start({
      color: 'red',
      text: 'begin',
    });
    setTimeout(() => {
      loading.warn('警告');
      setTimeout(() => {
        loading.info('提示');
        setTimeout(() => {
          loading.start('第二次');
          setTimeout(() => {
            loading.stop();
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  });
// .command('chalk')
// .action(() => {
//   console.log(Cblue('蓝色'));
//   console.log(Cred('红色'));
//   console.log(Cgreen('绿色'));
// });

Object.keys(Commands).forEach((command) => {
  const current = program.command(command);
  if (Commands[command].option && Commands[command].option.length > 0) {
    Commands[command].option.forEach((item) => {
      current.option(item.cmd, item.msg || '');
    });
  }
  current.action(Commands[command].action);
});

program.parse();
