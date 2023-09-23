const fs = require('fs');
const path = require('path');

// 处理原始 Markdown 文件，替换本地 URL
const processMarkdown = (originalMarkdown, uploadResult) => {
  let updatedMarkdown = originalMarkdown;
  for (let i = 0; i < uploadResult.length; i++) {
    updatedMarkdown = updatedMarkdown.replace(/\!\[\]\((?:C:\\|\/)[^\s)]+(?:%[0-9A-Fa-f]{2})*\)/, `![Image${i + 1}](${uploadResult[i]})`);
  }
  return updatedMarkdown;
};

// 生成新的 Markdown 文件
const generateNewMarkdown = (mdFilePath, uploadResult) => {
  const originalMarkdown = fs.readFileSync(mdFilePath, 'utf-8');
  const updatedMarkdown = processMarkdown(originalMarkdown, uploadResult);
  const mdFileName = path.basename(mdFilePath, path.extname(mdFilePath));
  const newMdFileName = `${mdFileName}_已设置图床.md`;
  const newMdFilePath = path.join(path.dirname(mdFilePath), newMdFileName);

  fs.writeFileSync(newMdFilePath, updatedMarkdown, 'utf-8');

  console.log(`新的Markdown文件已生成：${newMdFilePath}`);
};

// 读取 finish_upload.txt 文件
const readFinishUploadFile = (finishUploadFilePath) => {
  try {
    const finishUploadContent = fs.readFileSync(finishUploadFilePath, 'utf-8');
    return finishUploadContent.trim().split('\n');
  } catch (error) {
    console.error(`Error reading ${finishUploadFilePath}: ${error}`);
    process.exit(1);
  }
};

// 提供外部调用的 API
const generateMarkdownWithImages = (mdFilePath, finishUploadFilePath) => {
  const uploadResult = readFinishUploadFile(finishUploadFilePath);
  generateNewMarkdown(mdFilePath, uploadResult);
};

module.exports = {
  generateMarkdownWithImages,
};
