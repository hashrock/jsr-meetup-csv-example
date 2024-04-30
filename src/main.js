import * as mod from "@hashrock/hr-user-csv-parser";
import fs from "node:fs/promises";
const file = await fs.readFile("users.csv", "utf-8");
const parsed = await mod.parseUserCsv(file);
console.log(parsed);
