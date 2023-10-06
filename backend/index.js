import express from "express";
import cors from "cors";

import UserRoute from "./routes/UserRoute.js";
import IncomeRoute from "./routes/IncomeRoute.js";
import WalletRoute from "./routes/WalletRoute.js";
import OutcomeRoute from "./routes/OutcomeRoute.js";
import JenisPengeluaranRoute from "./routes/JenisPengeluaranRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(UserRoute);
app.use(IncomeRoute);
app.use(WalletRoute);
app.use(OutcomeRoute);
app.use(JenisPengeluaranRoute);
app.use(CategoryRoute);

app.listen(5000, ()=> console.log('Server up and running...'));