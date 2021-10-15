import { ipcMain } from "electron";
import { getHitemsList } from "@/persistence";
import ipcMethod from "@/types/icpMethod";

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
};
