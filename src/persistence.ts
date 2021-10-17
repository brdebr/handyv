import path from "path";
import fs from "fs";

interface Hitem {
  name: string;
  path: string;
  description: string;
  type: "file" | "directory" | "link";
  tag: string;
  projectId: string;
}

interface DataJsonFile {
  hitems: Array<Hitem>;
}

export const getHitemsList = (appPath: string): Array<Hitem> => {
  const uri = path.resolve(appPath, "data.json");
  const { hitems } = JSON.parse(
    fs.readFileSync(uri).toString()
  ) as DataJsonFile;
  return hitems;
};

export const saveHitemsList = (appPath: string, items: Array<Hitem>): void => {
  const uri = path.resolve(appPath, "data.json");
  const data = JSON.parse(fs.readFileSync(uri).toString()) as DataJsonFile;
  data.hitems = items;
  fs.writeFileSync(uri, JSON.stringify(data, null, 4));
};
