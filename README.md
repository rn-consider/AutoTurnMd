​

# 前提条件

## 安装picgo-core,安装步骤:

```bash
npm install -g picgo -g
```

![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")

## 然后配置图床

```
 picgo set uploader
? Choose a(n) uploader (Use arrow keys)
  smms
❯ tcyun
  github
  qiniu
  imgur
  aliyun
  upyun
(Move up and down to reveal more choices)
```

![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")

## 配置好后便可使用项目

# 快速开始

我有个本地的markdown文件如:

![](https://img-blog.csdnimg.cn/c6f9d534ca52403fb21df8c442c3f338.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")​编辑

如果我们直接上传到csdn会像是会有图片转存失败:

![](https://img-blog.csdnimg.cn/5329228b3bd04deda1b32a0ca4f3c242.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")​编辑

我们的项目结构如,main.js脚本便是项目的入口文件:

![](https://img-blog.csdnimg.cn/534d643881fc45a497a6226b2973da81.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")​编辑

在项目目录下打开命令行,然后用-f参数指定你要上传到csdn的本地md文件,就会在同目录下生成_已设置图床.md

# 实例

```bash
node ./main.js -f "C:\Users\32148\Documents\测试.md"
```

![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")

![](https://img-blog.csdnimg.cn/e4e0943271f3497f9de9e6291f297527.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")​编辑

上传生成后的md文件看看

![](https://img-blog.csdnimg.cn/a1d926745b4f4e3ebb47206963500308.png)![](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw== "点击并拖拽以移动")​编辑

​
