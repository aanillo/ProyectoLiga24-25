import { Equipo } from "./equipo";

export interface Jugador {
    id: number,
    nombre: string,
    posicion: 'Portero' | 'Defensa' | 'Centrocampista' | 'Delantero',
    dorsal: number,
    equipoId: number
}