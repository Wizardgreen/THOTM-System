// // const path = require("path");
// // const fs = require("fs");
// // const csv = require("csv-parser");
// // const results = [];

// // function csvJSON(csv) {
// //   let lines = csv.split("\n");
// //   const result = [];
// //   const headers = lines[0].split(",");

// //   for (let i = 1; i < lines.length; i++) {
// //     let obj = {};
// //     let currentline = lines[i].split(",");
// //     for (let j = 0; j < headers.length; j++) {
// //       obj[headers[j]] = currentline[j];
// //     }
// //     result.push(obj);
// //   }

// //   return JSON.stringify(result); //JSON
// // }

// // const absolutePath = path.join(__dirname, "src/assets/B.csv");

// // fs.createReadStream(absolutePath)
// //   .pipe(csv())
// //   .on("data", (data) => results.push(data))
// //   .on("end", () => {
// //     console.log(JSON.stringify(results));

// //     // typeof results
// //     // results.filter(({ Category }) => {
// //     //   return Category.slice(0, 6) === "Greene";
// //     // })
// //   });

// // // csv -> js data

// const program = [
//   { label: "丘主", value: "HL" },
//   { label: "有志之士", value: "MA" },
//   { label: "戰地元帥", value: "FM" },
//   { label: "禁軍統領", value: "GG" },
//   { label: "菁英指揮官", value: "EC" },
//   { label: "見習指揮官", value: "OC" },
//   { label: "游擊隊指揮官", value: "GO" },
// ];
// .map((info) => ({
//   birthday: info.出生日,
//   email: info.Email,
//   expiryDate: info.方案到期日,
//   id: info.內環編號,
//   city: info.現居住地,
//   hasCard: info.會員卡,
//   joinDate: info.入會日期,
//   journeyBeing: info.征途之始成就,
//   lineId: info["Line ID"],
//   name: info.姓名,
//   nickname: info.暱稱,
//   note: info.備註,
//   phone: info.電話 ? info.電話.slice(1) : "",
//   storage: info.櫃位,
//   program: program.find(({ label }) => {
//     return label === info.月繳方案;
//   }).value,
//   game: {
//     wh40k: info["戰鎚 40K"],
//     killteam: info.殺戮小隊,
//     necromunda: info.巢都世界,
//     whaos: info.西格瑪紀元,
//     warcry: info.戰吼,
//     underworld: info.冥土世界,
//     infinity: info.無限戰爭,
//     malifaux: info.噩夢鎮,
//     monsterPocalypse: info.巨獸啟示錄,
//     warMachineAndHordes: info["戰爭機器&部落"],
//   },
// }));
