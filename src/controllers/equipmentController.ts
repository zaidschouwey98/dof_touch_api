import EquipmentService from "../services/equipmentService";

export class EquipmentController {
    public equipmentService:EquipmentService;
    constructor(){
        this.equipmentService = new EquipmentService();
        console.log(this.equipmentService)
    }
    public getAllEquipments(req,res){
        
    }
    public getEquipmentById(req,res){
        
    }
    public async createEquipment(req,res){
        try {
            
            let equipmentService = new EquipmentService();
            console.log(equipmentService)
            let test = await equipmentService.create({});
            res.send(test);
        } catch (error) {
            console.error(error.toString())
        }
    }
    public updateEquipment(req,res){
        
    }
    public deleteEquipment(req,res){
        
    }
}