import EquipmentService from "../services/equipmentService";

export class EquipmentController {
    public equipmentService:EquipmentService;
    constructor(){
        this.equipmentService = new EquipmentService()
    }
    public getAllEquipments(req,res){
        
    }
    public getEquipmentById(req,res){
        
    }
    public createEquipment(req,res){
        try {
            this.equipmentService.create({})
        } catch (error) {
            
        }
    }
    public updateEquipment(req,res){
        
    }
    public deleteEquipment(req,res){
        
    }
}