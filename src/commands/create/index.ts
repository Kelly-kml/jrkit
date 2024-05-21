import { readDir, mkdir, rm, Cred } from '@utils';



export default async function (projectName, cmd) {
  // 1. 判断文件夹存在与否
  // 若存在则判断force 为true则删除
  // false 则提示错误

  // nodejs => fs
  const currentPath = process.cwd() + '\\' + projectName;

  try {
    const exists = await readDir(currentPath);

    if (cmd.force) {
      // 强制清除文件
      exists && (await rm(currentPath));
      await mkdir(currentPath);
    } else {
      if (exists) {
        // 不存在文件夹提示错误 返回
        console.log(Cred('Exists dir'));
        return;
      }

      await mkdir(currentPath);

      //下载Git
      // download-git-repo
    }
  } catch (e) {
    console.log(e);
  }
}
