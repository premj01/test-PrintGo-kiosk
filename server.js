const printer = require("pdf-to-printer");

printer
  .print("data.pdf") // your file path
  .then(() => console.log("Printed successfully"))
  .catch(err => console.error("Error printing:", err));
