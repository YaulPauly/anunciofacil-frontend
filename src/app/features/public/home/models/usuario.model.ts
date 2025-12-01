export interface UsuarioModel {
    idUsuario: number;
    nombre: string;
    apellido: string;
    email: string;
    fotoPerfil?: string;
    telefono?: string;
    rol: 'ADMIN' | 'USER';
}
