interface User {
  name: string;
  age: number;
}

export function parseUserCsv(csv) {
  const header = [
    "Name",
    "Age"
  ]

  const data = csv.split("\n").map(row => row.split(","))
  const users = data.map(row => {
    const user: User = {
      name: row[0],
      age: parseInt(row[1])
    }
    return user
  })

  return users;
}

