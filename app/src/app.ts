import express from "express"
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Product } from "./type"
import { PORT, SHOP_NAME } from "./env"


const app = express()

app.get("/", async (_: Request, res: Response) => {
	res.status(StatusCodes.OK).json({
		version: "1.0.0",
		shopName: SHOP_NAME,
		listenPort: PORT,
	})
})

app.get("/buy",  async (_: Request, res: Response<Product>) => {
	const shop = SHOP_NAME
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

app.listen(PORT)
