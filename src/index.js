const express = require("express");
const v1EquipmentRouter= require("./v1/routes/equipmentRoutes");
require('dotenv').config();
const { Sequelize } = require('sequelize');

const app = express ();
const PORT = process.env.PORT || 3000;

const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   dialect: 'mariadb',
// })

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the testDatabaseConnection function to check the connection
testDatabaseConnection();

// Routers
app.use("/api/v1/equipments",v1EquipmentRouter );

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
