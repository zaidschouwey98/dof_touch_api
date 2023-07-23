import EquipmentService from "../services/equipmentService";

export class EquipmentController {
    private static instance: EquipmentController;
    public equipmentService:EquipmentService;

    constructor(){
        this.equipmentService = new EquipmentService();
    }

    public static getInstance(): EquipmentController {
        if (!EquipmentController.instance) {
            EquipmentController.instance = new EquipmentController();
        }
        return EquipmentController.instance;
    }
    
    public getAllEquipments(req,res){
        
    }
    public getEquipmentById(req,res){
        
    }
    public async createEquipment(req,res){
        try {
            let test = await this.equipmentService.create({});
            res.send(test);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    public updateEquipment(req,res){
        
    }
    public deleteEquipment(req,res){
        
    }
}