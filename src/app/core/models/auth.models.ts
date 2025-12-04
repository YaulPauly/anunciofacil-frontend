export interface UsuarioLoginDTO {
  email: string;
  password: string;
}


export interface UsuarioRegisterDTO {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  fotoPerfil?: string | null; 
}


export interface AuthResponse {
  token: string;
}