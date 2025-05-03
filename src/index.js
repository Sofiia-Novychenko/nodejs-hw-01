import fs from 'node:fs/promises';

// fs.readFile('hiho.txt', { encoding: 'utf-8' })
//   .then(() => console.log('Done'))
//     .catch((error) => console.error('Opps: ', error));

fs.appendFile('append.txt', 'oougohogoug\n')
  .then(() => console.log('Done'))
  .catch((error) => console.error('Opps: ', error));

import path from 'node:path';

// приклад для побудови шляху із його частин
// const pathToWorkDir = path.join(process.cwd()); // отримуємо шлях до кореневої директорії викликом метода process.cwd()
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');

// (async () => {
//   try {
//     const files = await fs.readdir('.');
//     console.log('Список файлів і каталогів:', files);
//   } catch (err) {
//     console.error('Помилка отримання списку файлів і каталогів:', err);
//   }
// })();

// console.log(process.cwd());
// /Users/sitijtato/Desktop/Projects/nodejs-hw-01/src
