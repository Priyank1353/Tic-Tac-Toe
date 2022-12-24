// javascript node.js built in modules


const fs = require("fs"); 
let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("console", "kon bhai");
console.log(text);