import { parseUserCsv } from "./utils";
import { describe, expect, test } from "@jest/globals";

test("parseUserCsv", () => {
  const csv = `Name,Age
Alice,20
Bob,25
Charlie,30`;
  const users = parseUserCsv(csv);
  expect(users).toStrictEqual([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
  ]);
});
