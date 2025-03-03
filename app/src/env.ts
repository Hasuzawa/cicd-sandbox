import process from "process"

const PORT = process.env.PORT ?? 8080
const SHOP_NAME = process.env.SHOP_NAME ?? "Shop"


export {
	PORT,
	SHOP_NAME,
}
