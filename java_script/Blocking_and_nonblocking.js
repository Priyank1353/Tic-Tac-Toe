// Synchronus or blocking
// -line by line execution

// ASynchronus or nonblocking
// -line by line execution not guaranteed
// callbacks will fire

const fs = require("fs"); 
let text = fs.readFile("dele.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("This is a message");
