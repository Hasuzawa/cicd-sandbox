import express from "express"
import {Request, Response} from "express"
import { StatusCodes } from "http-status-codes"
import { Product } from "./type"

const app = express()

app.get("/", async (_: Request, res: Response) => {
	res.status(StatusCodes.OK).json({
		version: "1.0.0",
	})
})

app.get("/buy",  async (_: Request, res: Response<Product>) => {
	const shop = "A"
	res.status(StatusCodes.OK).json({
		source: shop,
		seller: shop,
		name: "fish",
		price: 7,
	})
})

app.get("/sell", async (_: Request, res: Response) => {
	res.status(StatusCodes.OK).json({})
})
