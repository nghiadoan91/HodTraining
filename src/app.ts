import express, { Application } from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "User API",
      description: "User API Information",
      servers: ["http://localhost:3000"],
    },
  },
  apis: ['src/routes/*.ts', 'build/routes/*js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log("hello World");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.listen(3000, () => console.log("Starting Port 3000"))

