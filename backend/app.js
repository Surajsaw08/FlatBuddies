import express from "express";

import cors from "cors";
import authRoutes from "./routes/user_routes/auth_route.js";
import userDetailRoutes from "./routes/user_routes/detailRoutes.js";
import UserMiddleware from "./middleware/user_middleware.js";
import flatRoutes from "./routes/user_routes/flat_register.js";
import flatMateRoutes from "./routes/user_routes/flatMate_register.js";
import flatsRoutes from "./routes/user_routes/flats_routes.js";
import flatmatesRoutes from "./routes/user_routes/flatmates_routes.js";
import mailRoutes from "./routes/user_routes/mail_routes.js";
import flatOwnerroutes from "./routes/user_routes/flatOwner_routes.js";
import flatmateOwnerRoutes from "./routes/user_routes/flatMateOwner_routes.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/user/auth", authRoutes);

app.use("/api/user/userdata", UserMiddleware, userDetailRoutes);

app.use("/api/user/registerflat", UserMiddleware, flatRoutes);

app.use("/api/user/registerflatMate", UserMiddleware, flatMateRoutes);

app.use("/api/user/getFlats", flatsRoutes);

app.use("/api/user/getFlatmates", flatmatesRoutes);

app.use("/api/user", UserMiddleware, mailRoutes);
app.use("/api/user/flat", UserMiddleware, flatOwnerroutes);
app.use("/api/user/flatmate", UserMiddleware, flatmateOwnerRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
