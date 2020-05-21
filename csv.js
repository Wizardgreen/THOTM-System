const path = require("path");
const fs = require("fs");
const csv = require("csv-parser");
const results = [];

function csvJSON(csv) {
  let lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    let obj = {};
    let currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  return JSON.stringify(result); //JSON
}

// const absoultePath = path.join(__dirname, "src/assets/export_items.csv");

// fs.createReadStream(absoultePath)
//   .pipe(csv())
//   .on("data", (data) => results.push(data))
//   .on("end", () => {
//     console.log(
//       results.filter(({ Category }) => {
//         return Category.slice(0, 6) === "Greene";
//       })
//     );
//   });

const absoultePath = path.join(__dirname, "src/assets/B.csv");

fs.createReadStream(absoultePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(JSON.stringify(results));

    // typeof results
    // results.filter(({ Category }) => {
    //   return Category.slice(0, 6) === "Greene";
    // })
  });
