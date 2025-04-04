import express from 'express';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';



// ROUTE IMPORTS
import allLoadsRoute from "./routes/allLoadsRoutes"
import allUsersRoute from "./routes/allUsersRoutes"

// CONFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

/* ROUTES */
app.use("/allLoads", allLoadsRoute) // http://localhost:8000/allLoads
app.use("/allUsers", allUsersRoute)

/* SERVER */
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});