
export interface PaginacionModel<T> {
    contenido: T[];
    paginasTotales: number;
    totalElementos: number;
    tamaño: number;
    paginaActual: number;
}
