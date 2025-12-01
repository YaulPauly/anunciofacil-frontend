import { CategoriaModel } from "./categoria.model";
import { UsuarioModel } from "./usuario.model";

export interface PublicacionModel {
    idPublicacion: number;
    titulo: string;
    contenido: string;
    fechaPublicacion: string;
    imagenes:string;
    estado: string;
    usuario: UsuarioModel;
    categoria: CategoriaModel;
    locacion?: string;

}
