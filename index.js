const fs = require('fs');
const chalk = require('chalk');

function mdLinks(pathFile, options = {}) { 
  return new Promise((resolve, reject) => { 
    const fileExists = fs.existsSync(pathFile); 

    if (!pathFile.endsWith('.md')) {
      return reject(new Error(chalk.red(`❌ O arquivo "${pathFile}" não é um arquivo em formato Markdown! ❌`)));
    }
    fs.stat(pathFile, (err, stats) => {
      if (err || !fileExists || !stats.isFile() || stats.size === 0) {
        return reject(new Error(chalk.red(`❌ O arquivo "${pathFile}" não existe ou está vazio! ❌`)));
      } else {
        fs.readFile(pathFile, 'utf8', (err, data) => { 
          if (err) {
            reject(new Error(chalk.red(`❌ Erro ao ler o arquivo ${pathFile}: ${err.message}❌`)));
          } else {
            const links = [];
            const regex = /\[(.+?)\]\((https?:\/\/[^\s]+)\)/gm; 
            let match = regex.exec(data);
            while (match !== null) { 
              links.push({ 
                href: match[2], 
                text: match[1], 
                file: pathFile
              });
              match = regex.exec(data); 
            }
            if (links.length === 0) {
              reject(new Error(chalk.red(`❌ O arquivo "${pathFile}" não contém links! ❌`)));
            } else if (options.validate) { 
              const promises = links.map((link) => {
                return fetch(link.href)
                  .then((res) => { 
                    link.status = res.status;
                    link.ok = res.ok ? chalk.green.bold('✅ OK') :  chalk.red.bold('❌ FAIL');
                    return link; 
                  })
                  .catch((err) => {
                    link.status = err.code || 'UNKNOWN';
                    link.ok = 'FAIL';
                    return link;
                  });
              });
              Promise.all(promises).then(resolve).catch(reject);
            } else {
              resolve(links);
            }
          }
        });
      }
    });
  });
}
module.exports = mdLinks;