const fs = require('fs');

const isDirectory = name => fs.statSync(name).isDirectory();

fs.readdir('./', (err, dirList) => {
  dirList.forEach(dir => {
    const isDir = isDirectory(dir);
    if (isDir) {
      fs.readdir(`./${dir}`, (err, fileList) => {
        fileList.forEach(file => {
          if (file.includes('.js')) {
            fs.readFile(`./${dir}/${file}`, 'utf8', (err, content) => {
              const fileName = file.substring(0, file.length - 3);
              fs.writeFile(`./${dir}/${fileName}.md`, `# ${fileName}\n\n\`\`\`js\n${content}\n\`\`\``, err => {
                console.warn(err);
              });
            });
          }
        });
      });
    }
  });
})