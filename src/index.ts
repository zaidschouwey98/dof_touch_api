import express from "express";
import v1EquipmentRouter from "./v1/routes/equipmentRoutes";

require('dotenv').config();
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mariadb',
})

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
app.use("/api/v1/equipments", v1EquipmentRouter);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
