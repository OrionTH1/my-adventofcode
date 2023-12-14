import fs from "fs";

fs.readFile("input.txt", "utf8", (err, data) => {
  data = data.trim().replaceAll("\r", "");

  data = data.split("\n");
  let valueJoined = [];

  data.map((item) => {
    item = item.split("");

    const first = item.find((value) => !Number.isNaN(Number(value)));
    const last = item.findLast((value) => !Number.isNaN(Number(value)));

    valueJoined.push(Number(first + last));
  });

  const result = valueJoined.reduce((sum, actualValue) => {
    return (sum = actualValue + sum);
  }, 0);
});
