#!/usr/bin/env node
import { program } from 'commander';
import path from 'path';
import fs from 'fs';
import parseFiles from '../src/parseFiles.js';
import compareFlatObj from '../src/compareFlatObj.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    try {
      const absolutePath1 = path.resolve(process.cwd(), filepath1);
      const absolutePath2 = path.resolve(process.cwd(), filepath2);

      if (!fs.existsSync(absolutePath1)) {
        throw new Error(`File not found: ${absolutePath1}`);
      }
      if (!fs.existsSync(absolutePath2)) {
        throw new Error(`File not found: ${absolutePath2}`);
      }

      // const result = compareFiles(absolutePath1, absolutePath2);
      // console.log(result);
      const parseFile1 = parseFiles(filepath1);
      const parseFile2 = parseFiles(filepath2);
      const compareObj =  compareFlatObj(parseFile1, parseFile2);
      console.log(compareObj);
  


    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);