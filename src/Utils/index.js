const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const results = [];

export function csvJSON(csv) {
  let lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    let obj = {};
    let currently = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currently[j];
    }
    result.push(obj);
  }

  return JSON.stringify(result); //JSON
}

const absolutePath = path.join(__dirname, "src/assets/B.csv");

fs.createReadStream(absolutePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(JSON.stringify(results));

    // typeof results
    // results.filter(({ Category }) => {
    //   return Category.slice(0, 6) === "Greene";
    // })
  });
