#!/usr/bin/env node
const process = require('process');
const mdLinks = require('./index');
const Table = require('cli-table');
const chalk = require('chalk');

const pathFile = process.argv[2];
const options = {
  validate: process.argv.includes('--validate'),
  stats: process.argv.includes('--stats'),
  validateAndStats: process.argv.includes('--validate') && process.argv.includes('--stats'),
};

// Função para exibir a tabela com as validações dos links:
function printValidation(itens) {
    const table = new Table({
      head: [(chalk.hex('#C71585')('🔹 ARQUIVO 🔹')), (chalk.hex('#C71585')('🔹 TEXTO 🔹')), (chalk.hex('#C71585')('🔹 LINK 🔹')), (chalk.hex('#C71585')('STATUS')), (chalk.hex('#C71585').bold('É VÁLIDO?'))],
      colWidths: [18, 20, 38, 8, 12],
    });
  
    itens.forEach((item) => {
      const statusMessage = item.status >= 200 && item.status <= 299 ? (chalk.hex('#D8BFD8')) : (chalk.hex('#4682B4'));
      table.push([
        (chalk.hex('#4682B4')(item.file)),
        (chalk.hex('#00BFFF')(item.text)),
        (chalk.hex('#00FFFF')(item.href)),
        statusMessage(item.status),
        (chalk.hex('#D8BFD8')(item.ok)),
      ]);
    });
  
    console.log(table.toString());
}

// Função para exibir a tabela com as estatísticas dos links:
function  displayStats(data) {
    const links = data.map(item => item.href);
    const total = links.length;
    const unique = new Set(links).size;
  
    const table = new Table({
      head: [(chalk.hex('#C71585')('🔗 LINKS')), (chalk.hex('#C71585')('🔎 QUANTIDADE'))],
      colWidths: [15, 15],
    });
  
    table.push(
    [(chalk.hex('#00BFFF').bold('Total')), (chalk.hex('#00FFFF').bold(total))],
    [(chalk.hex('#00BFFF')('Únicos')), (chalk.hex('#B0E0E6')(unique))],
    );
  
    console.log(table.toString());
  
    return { total, unique };
  }

// Função para exibir a tabela com as estatísticas E validações dos links:
function  displayStatsAndValidate(data) {
    const links = data.map(item => item.href);
    const total = links.length;
    const unique = new Set(links).size;
    const broken = data.filter(item => item.status !== 200).length;
  
    const table = new Table({
      head: [(chalk.hex('#C71585')('🔗 LINKS')), (chalk.hex('#C71585')('🔎 QUANTIDADE'))],
      colWidths: [15, 15],
    });
  
    table.push(
      [(chalk.hex('#00BFFF').bold('Total')), (chalk.hex('#00FFFF').bold(total))],
      [(chalk.hex('#00BFFF')('Únicos')), (chalk.hex('#B0E0E6')(unique))],
      [(chalk.hex('#4682B4')('Quebrados')), (chalk.hex('#D8BFD8')(broken))],
    );
  
    console.log(table.toString());
  
    return { total, unique, broken };
  }
  

if (options.validate && options.stats) { // SE, a opção passada for validate E stats:
    mdLinks(pathFile, options) 
    .then((res) => { 
        displayStatsAndValidate(res);
        })
        .catch((err) => {
            console.log(err);
        });

} else if (options.validate) { // SE, a opção passada for validate:
    mdLinks(pathFile, options) 
    .then((res) => { 
        printValidation(res);
        })
        .catch((err) => {
            console.log(err);
        });

} else if (options.stats) { // SE, a opção passada for stats:
    mdLinks(pathFile, options) 
    .then((res) => {
        displayStats(res);
        })
        .catch((err) => {
            console.log(err);
        });

} else {  // SE, nenhuma opção for escolhida, passamos somente o caminho do arquivo:
    mdLinks(pathFile, options)
    .then((res) => {
        const table = new Table({ 
            head: [(chalk.hex('#C71585')('🔹 LINKS🔹')), (chalk.hex('#C71585')('🔹 TEXTO🔹')), (chalk.hex('#C71585')('🔹 ARQUIVO🔹'))],
            colWidths: [40, 30, 20],
        });

        res.forEach((item) => { 
            const row = [ 
            (chalk.hex('#00BFFF')(item.href)),
            (chalk.hex('#00FFFF')(item.text)),
            (chalk.hex('#4682B4')(item.file))
            ];

            table.push(row);
        });

        console.log(table.toString());
    })
    .catch((err) => { 
        console.log(err); 
    });
}