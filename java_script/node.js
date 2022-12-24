// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is rohandas');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Javascript dates</title>
  </head>
  <body>
      <div class="container">
          <h1>this is a container</h1>
          Current time is 
          <h2><span id="time"></span></h2>
      </div>
      <script>
          console.log("This is date and time tutorial");
          let now = new Date();
  
          console.log(now);
          let dt = new Date();
          console.log(dt);
  
          // let newDate = new Date("2029-09-30");
          // console.log(newDate);
  
          //let newDate = new Date(Year, month, date, hours, minutes, seconds, miliseconds);
  
          let newDate = new Date(3020, 4, 6, 9, 3, 2,34);
          console.log(newDate);
  
          let yr = newDate.getFullYear();
          console.log("The yea is ", yr);
  
          let mnth = newDate.getMonth();
          console.log("The month is :", mnth)
  
          // let mnthna = newDate.getUTCMonth();
          // console.log(mnthna);
  
          let day = newDate.getDay();
          console.log("The day is ", day);
  
          newDate.setMonth(4);
          console.log(newDate);
  
          setInterval(updateTime, 1000);
          function updateTime(){
              time.innerHTML = new Date();
          }
  
      </script>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
