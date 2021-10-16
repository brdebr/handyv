import { ipcMain, shell } from "electron";
import { getHitemsList } from "@/persistence";
import ipcMethod from "@/types/icpMethod";
import { spawn, exec } from "child_process";

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

  ipcMain.handle("open-folder", (ev, folderPath) => {
    shell.openPath(folderPath);
  });

  ipcMain.handle("open-terminal", (ev, folderPath) => {
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
