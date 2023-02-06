import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { createUser, deleteUser, getUsers, updateUser } from "./routes/users";

const main = async () => {
  config();

  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  app.get("/users", getUsers);
  app.post("/users", createUser);
  app.patch("/users/:id", updateUser);
  app.delete("/users/:id", deleteUser);

  // Swagger Setup and Initialization
  const swaggerOptions = {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
  };
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, swaggerOptions)
  );

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
