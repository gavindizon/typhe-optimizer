const fs = require("fs");
const data = require("./cohfie.json");

let filterData = data
    .map((item) => {
        return {
            text: item.text,
            source: item.source,
        };
    })
    .filter((a) => a.text.split(" ").length >= 90 && a.text.split(" ").length < 95)
    .sort((a, b) => a.text.length - b.text.length);

let combinedData = [];

// for (let i = 0; i < Math.floor(filterData.length / 2) + 1; i++)
//     combinedData.push({
//         text: filterData[i].text + " " + filterData[filterData.length - 1 - i].text,
//         random: Math.floor(Math.random() * filterData.length * 10 + 1),
//     });

// combinedData = combinedData.sort((a, b) => a.text.length - b.text.length);

// console.log(filterData.length * 10 + 1);
//console.log(combinedData[0].text.length);
//console.log(combinedData.reduce((sum, curr) => sum + curr.text.length, 0) / combinedData.length);
//console.log(combinedData[combinedData.length - 1].text.length);
//console.log(combinedData.length);

///fs.writeFileSync("cohfie-new.json", JSON.stringify(combinedData));
