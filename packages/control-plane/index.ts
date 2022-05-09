import express from "express";
import cors from "cors";
import contoller from "./controller";
const app = express();
const port = process.env.PORT || 5055;
app.use(cors());

app.use("/api", contoller);

app.get("/", (req, res) => {
	res.send("Hello from control-plane");
});

app.listen(port, () => {
	console.log(`control-plane listening at port ${port}`);
});
