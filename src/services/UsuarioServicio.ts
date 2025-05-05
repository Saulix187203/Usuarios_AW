import { UsuarioModel } from "../models/UsuarioModel";

export interface UsuarioServicio{
    findAll(): Promise<UsuarioModel[]>;
    findByID(idTBusuarios: number):Promise<UsuarioModel | null>;
    findByIDRequestParams(idTBusuarios: number):Promise<UsuarioModel | null>;
}