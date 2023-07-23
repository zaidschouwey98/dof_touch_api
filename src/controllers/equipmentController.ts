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

    public async getAllEquipments(req:Request & {query:any},res:Response){
        try {
            const equipmentArray: Array<Equipment> = [];
            if(req.query && req.query.type)
                equipmentArray.push(...(await this.equipmentService.getByType(req.query.type)));
            else equipmentArray.push(...(await this.equipmentService.getAll()));
            res.json(equipmentArray);
        } catch (error) {
            res.status(500).send(error.message);
        }   
    }
    public async getEquipmentById(req:Request & {params:{equipmentId:number}},res:Response){
        try {
            res.json(await this.equipmentService.getById(req.params.equipmentId));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    public async createEquipment(req:Request,res:Response){
        try {
            const equipmentArray:Array<Equipment | null>= Array.isArray(req.body) ? req.body as any as Array<Equipment> : [req.body as any as Equipment]
            const newEquipmentArray:Array<Equipment> = [];
            if(equipmentArray.length === 0) res.send("No json given.")
            else {
                for(const equipment of equipmentArray){
                    if(Object.keys(equipment).length === 0)
                        continue;
                    equipment.statistics = JSON.stringify(equipment.statistics);
                    equipment.recipe = JSON.stringify(equipment.statistics);
                    newEquipmentArray.push(await this.equipmentService.create(equipment));
                }
                res.json(newEquipmentArray);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    public async updateEquipment(req:Request & {params:{equipmentId:number},query:any},res:Response){
        try {
            res.json(await this.equipmentService.getById(req.params.equipmentId));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    public async deleteEquipment(req:Request & {params:{equipmentId:number}},res:Response){
        try {
            
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}