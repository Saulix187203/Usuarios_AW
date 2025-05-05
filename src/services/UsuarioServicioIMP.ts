import { UsuarioModel } from "../models/UsuarioModel"; 
import { UsuarioRepo } from "../repositories/UsuarioRepo";
import { UsuarioServicio } from "./UsuarioServicio"; 

export class UsuarioServicioIMP implements UsuarioServicio{

    private ur: UsuarioRepo;
    
    constructor(){
        this.ur = new UsuarioRepo();
    }


    async findAll(): Promise<UsuarioModel[]> {
        return await this.ur.findAll(); 
    }

    async findByID(idTBusuarios: number): Promise<UsuarioModel | null> {
        return await this.ur.findById(idTBusuarios); 
    }

    async findByIDRequestParams(idTBusuarios: number): Promise<UsuarioModel | null> {
        return await this.ur.findById(idTBusuarios); 
    }
}