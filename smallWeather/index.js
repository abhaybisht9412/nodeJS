const http = require("http");
const fs = require("fs");
const requests = require("requests");

// getting html file in backend
const homeFile = fs.readFileSync("index.html", "utf-8");

// replacing value of htnl file
const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%temperature%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempMin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempMax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  return temperature;
};

// creating server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=dehradun&units=metric&appid=eb35b7789a5752df59e8856a305f3075"
    )
      .on("data", function (chunk) {
        // chunk is in form of JSON we need to parse it in the form of object data
        const objData = JSON.parse(chunk);
        // console.log(objData);

        // now converting into array of an object
        const arrData = [objData];
        // console.log(arrData[0].main.temp);
        const realData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realData);
        // console.log(realData);
      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);
        console.log("end");
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
