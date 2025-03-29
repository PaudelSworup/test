import express from "express";
import { demoroutes, userRoutes } from "./routes";
import morgan from "morgan";
import { EnvStrings } from "./services";
import cors from "cors";
const app = express();

//cors configiration for all http request
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(demoroutes);
app.use("/api", userRoutes);

app.listen(EnvStrings.PORT, () => {
  console.log(`server listening on ${EnvStrings.PORT}`);
  EnvStrings.connectToDatabase();
});

// "src": "/(.*)",
