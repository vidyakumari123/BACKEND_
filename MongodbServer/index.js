const express = require("express");
const { insertData } = require("./db");

const PORT = 2000;
const hostName = "127.0.0.1"; // Corrected to the usual loopback address
const app = express();

// Assuming insertData is an asynchronous function that returns a Promise
async function startServer() {
  try {
    await insertData();
    app.listen(PORT, hostName, () => {
      console.log(`Server running at http://${hostName}:${PORT}`);
    });
  } catch (error) {
    console.error("Error during data insertion:", error);
  }
}

// Start the server
startServer();
