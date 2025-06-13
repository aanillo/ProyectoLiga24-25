import { Jugador } from "./jugador"

export interface Equipo {
    id: number,
    nombre: string,
    escudo: string,
    localidad: string,
    fundacion: number,
    estadio: string,
    numeroLigas: number,
    entrenador: string,
    jugadores: Jugador[]
}

export interface EquipoClasificacion {
    equipo: Equipo,
    puntos: number,
    victorias: number,
    empates: number,
    derrotas: number,
    golesFavor: number,
    golesContra: number
}