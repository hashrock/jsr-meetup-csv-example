import { parseUserCsv } from "./utils";

const csv = "name,age\nAlice,24\nBob,30\nCharlie,35";
const users = parseUserCsv(csv);
console.log(users);
