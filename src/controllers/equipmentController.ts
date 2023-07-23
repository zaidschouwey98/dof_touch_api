import { Response } from "express";
import EquipmentService from "../services/equipmentService";
import Equipment from "../database/models/equipment";

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
    public async createEquipment(req:Request,res:Response){
        try {
            const equipmentArray:Array<Equipment | null>= Array.isArray(req.body) ? req.body as any as Array<Equipment> : [req.body as any as Equipment]
            const newEquipmentArray:Array<Equipment> = [];
            if(equipmentArray.length === 0) res.send("No json given.")
            for(const equipment of equipmentArray){
                equipment.statistics = JSON.stringify(equipment.statistics);
                equipment.recipe = JSON.stringify(equipment.statistics);
                newEquipmentArray.push(await this.equipmentService.create(equipment));
            }
            res.json(newEquipmentArray);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    public updateEquipment(req,res){
        
    }
    public deleteEquipment(req,res){
        
    }
}