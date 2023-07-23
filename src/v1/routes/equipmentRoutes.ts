import { EquipmentController } from "../../controllers/equipmentController";
import { Router } from 'express'
const router = Router();
const equipmentController = new EquipmentController();


router.get("/", equipmentController.getAllEquipments.bind(equipmentController));
router.get("/:equipmentId", equipmentController.getEquipmentById.bind(equipmentController));
router.post("/",equipmentController.createEquipment.bind(equipmentController));
router.patch("/:equipmentId", equipmentController.updateEquipment.bind(equipmentController));
router.delete("/:equipmentId", equipmentController.deleteEquipment.bind(equipmentController));

export default router;