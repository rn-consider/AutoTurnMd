const { PicGo } = require('picgo');
const fs = require('fs');
const readline = require('readline');
const { generateMarkdownWithImages } = require('./markdownGenerator');
// 创建一个 PicGo 实例
const picgo = new PicGo();

// 处理 Markdown 文件中的图片链接
const dealMd = async (mdFilePath) => {
  try {
    const fileStream = fs.createReadStream(mdFilePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    const localUrls = [];
    for await (const line of rl) {
      const match = line.match(/!\[\]\((C:\\[^)]+)\)/);
      if (match) {
        localUrls.push(match[1]);
      }
    }

    return localUrls;
  } catch (error) {
    console.error('Error reading Markdown file:', error);
    process.exit(1);
  }
};

// 上传图片并保存结果到 finish_upload.txt
const main = async () => {
  const args = process.argv.slice(2);
  if (args.length !== 2 || args[0] !== '-f') {
    console.log('Usage: node your_script.js -f path/to/markdown/file.md');
    process.exit(1);
  }

  const mdFilePath = args[1];
  const localUrls = await dealMd(mdFilePath);
  const finishUploadFilePath = 'finish_upload.txt'; // 请替换为 finish_upload.txt 的路径

  if (localUrls.length === 0) {
    console.log('No local image URLs found in the Markdown file.');
    process.exit(0);
  }

  const uploadResult = await picgo.upload(localUrls);

  // 提取上传结果中的 imgUrl 属性，并保存到 finish_upload.txt
  const imgUrls = uploadResult.map((item) => item.imgUrl);
  const uploadResultText = imgUrls.join('\n');
  fs.writeFileSync('finish_upload.txt', uploadResultText);

  console.log('图片上传. 上传的结果保存在当前目录下的finish_upload.txt.');
  generateMarkdownWithImages(mdFilePath, finishUploadFilePath);
   // 删除 finish_upload.txt 文件
  fs.unlinkSync(finishUploadFilePath);

  console.log('finish_upload.txt 文件已删除.');
};

main();
