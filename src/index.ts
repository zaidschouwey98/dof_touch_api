import express from "express";
import v1EquipmentRouter from "./v1/routes/equipmentRoutes";
import v1UserRouter from "./v1/routes/userRoutes";
import bodyParser from "body-parser";

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

app.use(bodyParser.json({limit: '50mb'}))

// Routers
app.use("/api/v1/equipments", v1EquipmentRouter);
app.use("/api/v1/user", v1UserRouter);

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
