import express from "express";
import { demoroutes, userRoutes } from "./routes";
import morgan from "morgan";
import { EnvStrings } from "./services";
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(demoroutes);
app.use("/api", userRoutes);

app.listen(EnvStrings.PORT, () => {
  console.log(`server listening on ${EnvStrings.PORT}`);
  EnvStrings.connectToDatabase();
});
