import { EquipmentController } from "../../controllers/equipmentController";
import { Router } from 'express'

const router = Router();
const equipmentController = new EquipmentController();

router.get("/", equipmentController.getAllEquipments);
router.get("/:equipmentId", equipmentController.getEquipmentById);
router.post("/",equipmentController.createEquipment);
router.patch("/:equipmentId", equipmentController.updateEquipment);
router.delete("/:equipmentId", equipmentController.deleteEquipment);

module.exports = router;