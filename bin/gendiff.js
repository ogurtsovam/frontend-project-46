#!/usr/bin/env node
import { program } from 'commander';
import parseFile from '../parsers/parseFile.js';
import compareFlatObj from '../src/compareFlatObj.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    try {
      const parsedFile1 = parseFile(filepath1);
      const parsedFile2 = parseFile(filepath2);
      const diff = compareFlatObj(parsedFile1, parsedFile2);
      console.log(diff);

    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);