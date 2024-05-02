interface User {
  name: string;
  age: number;
}

/**
 * Parse CSV string and return array of User objects
 * @param csv CSV string
 * @returns Array of User objects
 */
export function parseUserCsv(csv: string) {
  const data = csv.split("\n").map((row) => row.split(","));
  const users = data.slice(1).map((row) => {
    const user: User = {
      name: row[0],
      age: parseInt(row[1]),
    };
    return user;
  });

  return users;
}
