import { EquipmentController } from "../../controllers/equipmentController";
import { Router } from 'express'
import { auth } from "../../middleware/auth";
const router = Router();
const equipmentController = new EquipmentController();


router.get("/", equipmentController.getAllEquipments.bind(equipmentController));
router.get("/:equipmentId", equipmentController.getEquipmentById.bind(equipmentController));
router.post("/", auth,equipmentController.createEquipment.bind(equipmentController));
router.patch("/:equipmentId",auth, equipmentController.updateEquipment.bind(equipmentController));
router.delete("/:equipmentId",auth, equipmentController.deleteEquipment.bind(equipmentController));

export default router;