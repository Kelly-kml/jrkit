#! /usr/bin/env node
// 标识文件使用 node 执行
// index.ts
import { Command } from 'commander';
import Pack from '../package.json';

import inquirer from 'inquirer';

const program = new Command();

program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption('-h', '--help')
  .usage(`<command> [option]`)
  .command('chooes')
  .action(() => {
    inquirer
      .prompt([
        {
          type: 'checkbox',
          message: 'Select toppings',
          name: 'checkbox',
          choices: [
            new inquirer.Separator(' = The Meats = '),
            {
              name: 'Pepperoni',
            },
            {
              name: 'Ham',
            },
            {
              name: 'Ground Meat',
            },
            {
              name: 'Bacon',
            },
            new inquirer.Separator(' = The Cheeses = '),
            {
              name: 'Mozzarella',
              checked: true,
            },
            {
              name: 'Cheddar',
            },
            {
              name: 'Parmesan',
            },
            new inquirer.Separator(' = The usual ='),
            {
              name: 'Mushroom',
            },
            {
              name: 'Tomato',
            },
            new inquirer.Separator(' = The extras = '),
            {
              name: 'Pineapple',
            },
            {
              name: 'Olives',
              disabled: 'out of stock',
            },
            {
              name: 'Extra cheese',
            },
          ],
          validate(answer) {
            if (answer.length === 0) {
              return 'You must choose at least one topping.';
            }

            return true;
          },
        },
      ])
      .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });
  });

program.parse();
