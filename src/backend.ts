import { dialog, ipcMain, shell } from "electron";
import { getHitemsList, saveHitemsList } from "@/persistence";
import ipcMethod from "@/types/icpMethod";
import { exec } from "child_process";
import fs from "fs";

let APP_PATH: string | null = null;

export const initHandlers = (appPath: string): void => {
  APP_PATH = appPath;

  ipcMain.handle("get-hitems" as ipcMethod, () => {
    console.log(
      `${new Date().toISOString()} - Fetching nodes from: ${APP_PATH}`
    );

    if (!APP_PATH) {
      throw new Error(`appPath:${APP_PATH} - is not a valid value`);
    }
    return getHitemsList(APP_PATH);
  });
  ipcMain.handle("set-hitems" as ipcMethod, (event, payload) => {
    console.log(`${new Date().toISOString()} - Saving nodes into: ${APP_PATH}`);
    if (!APP_PATH) {
      throw new Error(`appPath:${APP_PATH} - is not a valid value`);
    }
    saveHitemsList(APP_PATH, payload);
  });

  // Add actions

  ipcMain.handle("select-folder", async () => {
    const { filePaths } = await dialog.showOpenDialog({
      properties: ["openDirectory"],
      title: "Folder to save",
    });
    if (!filePaths.length) {
      return "";
    }
    return filePaths[0];
  });
  ipcMain.handle("select-file", async () => {
    const { filePaths } = await dialog.showOpenDialog({
      properties: ["openFile"],
      title: "File to save",
    });
    if (!filePaths.length) {
      return "";
    }
    return filePaths[0];
  });

  // Folder actions

  ipcMain.handle("open-folder", (ev, folderPath) => {
    if (!fs.lstatSync(folderPath).isDirectory()) {
      throw new Error(`folderPath:${folderPath} - is not a valid value`);
    }
    shell.openPath(folderPath);
  });
  ipcMain.handle("open-folder-vscode", (ev, folderPath) => {
    if (!fs.lstatSync(folderPath).isDirectory()) {
      throw new Error(`folderPath:${folderPath} - is not a valid value`);
    }
    exec(`code ${folderPath}`, {
      // @ts-ignore
      cwd: folderPath,
      // @ts-ignore
      detached: true,
    });
  });
  ipcMain.handle("open-terminal", (ev, folderPath) => {
    if (!fs.lstatSync(folderPath).isDirectory()) {
      throw new Error(`folderPath:${folderPath} - is not a valid value`);
    }
    exec(`start cmd.exe /K cd /D ${folderPath}`, {
      // @ts-ignore
      cwd: folderPath,
      env: {
        // @ts-ignore
        FROM_HANDYV: true,
      },
      detached: true,
    });
  });
  ipcMain.handle("open-terminal-sudo", (ev, folderPath) => {
    if (!fs.lstatSync(folderPath).isDirectory()) {
      throw new Error(`folderPath:${folderPath} - is not a valid value`);
    }
    exec(`Start-Process -Verb RunAs cmd.exe -Args "/K cd /D ${folderPath}"`, {
      // @ts-ignore
      cwd: folderPath,
      shell: "powershell",
      env: {
        // @ts-ignore
        FROM_HANDYV: true,
      },
      detached: true,
    });
  });
};
