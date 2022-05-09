import express from "express";
import path from "path";
import glob from "glob";
const contoller = express.Router();

const registery: any[] = [];

contoller.get("/get-all-bots", (_req, res) => {
	res.send(registery);
});
contoller.get("/update-registry", async (_req, res) => {
	const rootDir = path.posix.join(__dirname, "../../");

	glob(`${rootDir}x-*`, {}, (er, files) => {
		files.forEach((file) => {
			const packageLocation = path.resolve(
				file,
				"package.json"
			);
			const _path = require(packageLocation)["x-config"];
			(_path["rating"] = 0), (_path["download_size"] = 0);
			registery.push(_path);
		});
	});
	res.send(true);
});

export default contoller;
