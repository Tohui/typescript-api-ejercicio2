import {Router} from "express"
import {ItemsController} from "./items.controller"

const controller = new ItemsController();
const router = Router();

router.get("/getAll",controller.getAll)
router.get("/getbyid/:id",controller.getById)
router.post("/create",controller.create)
router.delete("/delete/:id", controller.delete)
router.put("/update/:id",controller.update)

export default router;