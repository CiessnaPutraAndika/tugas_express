import express from "express"
import { deleterOrder, getOrder, getOrderById, postOrder, putOrder } from "../controllers/orderController.js";
const router = express.Router();

router.get("/", getOrder)
router.get("/find", getOrderById)
router.post("/create", postOrder)
router.put("/update", putOrder)
router.delete("/delete", deleterOrder)

export default router;