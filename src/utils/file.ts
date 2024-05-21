/*
 * @Description:
 * @author: kelly
 * @Date: 2024-05-21 20:55:04
 * @LastEditTime: 2024-05-21 21:57:24
 */
import { Cred } from './chalk';
import fs from 'fs';

export const readDir = (path: string) =>
  new Promise((res, rej) => {
    fs.readdir(path, (err) => {
      if (!err) res(true);
      res(false);
    });
  });

export const mkdir = (path: string): Promise<any> =>
  new Promise((res, rej) => {
    fs.mkdir(path, (err) => {
      if (!err) res('');
      rej(
        `${Cred('Can not make dir')} ${
          typeof err === 'string' ? err : JSON.stringify(err)
        }`
      );
    });
  });

export const rm = (path: string) =>
  new Promise((res, rej) => {
    fs.rmdir(path, (err) => {
      if (!err) res('');
      rej(
        `${Cred('Can not remove"' + path + '"')} ${
          typeof err === 'string' ? err : JSON.stringify(err)
        }`
      );
    });
  });
