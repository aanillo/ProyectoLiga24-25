import { Injectable } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../models/equipo';
import { Jugador } from '../models/jugador';
import { JugadorService } from './jugador.service';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipos: EquipoClasificacion[] = [
    {
      equipo: {
        id: 1,
        nombre: 'Barcelona',
        escudo: 'img/escudos/barcelona.png',
        localidad: 'Barcelona',
        fundacion: 1899,
        estadio: 'Spotify Camp Nou',
        numeroLigas: 27,
        entrenador: 'Hansi Flick',
        jugadores: [
          
        ]
      },
      puntos: 88,
      victorias: 28,
      empates: 4,
      derrotas: 6,
      golesFavor: 102,
      golesContra: 39
    },
    {
        equipo: {
          id: 2,
          nombre: 'Real Madrid',
          escudo: 'img/escudos/realMadrid.png',
          localidad: 'Madrid',
          fundacion: 1902,
          estadio: 'Santiago Bernabéu',
          numeroLigas: 35,
          entrenador: 'Carlo Ancelotti',
          jugadores: [
            
          ]
        },
        puntos: 84,
        victorias: 26,
        empates: 6,
        derrotas: 6,
        golesFavor: 78,
        golesContra: 38,
      },
      {
        equipo: {
          id: 3,
          nombre: 'Atlético de Madrid',
          escudo: 'img/escudos/atletico.png',
          localidad: 'Madrid',
          fundacion: 1903,
          estadio: 'Civitas Metropolitano',
          numeroLigas: 11,
          entrenador: 'Diego Pablo Simeone',
          jugadores: [
            
          ]
        },
        puntos: 76,
        victorias: 22,
        empates: 10,
        derrotas: 6,
        golesFavor: 68,
        golesContra: 30
      },
      {
        equipo: {
          id: 4,
          nombre: 'Athletic de Bilbao',
          escudo: 'img/escudos/athletic.png',
          localidad: 'Bilbao',
          fundacion: 1898,
          estadio: 'San Mamés',
          numeroLigas: 8,
          entrenador: 'Ernesto Valverde',
          jugadores: [
            
          ]
        },
        puntos: 70,
        victorias: 19,
        empates: 13,
        derrotas: 6,
        golesFavor: 54,
        golesContra: 29
      },
      {
        equipo: {
          id: 5,
          nombre: 'Villarreal',
          escudo: 'img/escudos/villarreal.png',
          localidad: 'Villarreal - Castellón',
          fundacion: 1923,
          estadio: 'Estadio de la Cerámica',
          numeroLigas: 0,
          entrenador: 'Marcelino García Toral',
          jugadores: [
            
          ]
        },
        puntos: 70,
        victorias: 20,
        empates: 10,
        derrotas: 8,
        golesFavor: 71,
        golesContra: 51
      },
      {
        equipo: {
          id: 6,
          nombre: 'Real Betis',
          escudo: 'img/escudos/realBetis.png',
          localidad: 'Sevilla',
          fundacion: 1907,
          estadio: 'Benito Villamarín',
          numeroLigas: 1,
          entrenador: 'Manuel Pellegrini',
          jugadores: [
            
          ]
        },
        puntos: 60,
        victorias: 16,
        empates: 12,
        derrotas: 10,
        golesFavor: 57,
        golesContra: 50
      },
      {
        equipo: {
          id: 7,
          nombre: 'Celta',
          escudo: 'img/escudos/celta.png',
          localidad: 'Vigo - Pontevedra',
          fundacion: 1923,
          estadio: 'Balaídos',
          numeroLigas: 0,
          entrenador: 'Claudio Giráldez',
          jugadores: [
            
          ]
        },
        puntos: 55,
        victorias: 16,
        empates: 7,
        derrotas: 15,
        golesFavor: 59,
        golesContra: 57
      },
      {
        equipo: {
          id: 8,
          nombre: 'Rayo Vallecano',
          escudo: 'img/escudos/rayo.png',
          localidad: 'Madrid',
          fundacion: 1924,
          estadio: 'Estadio de Vallecas',
          numeroLigas: 0,
          entrenador: 'Íñigo Pérez',
          jugadores: [
            
          ]
        },
        puntos: 52,
        victorias: 13,
        empates: 13,
        derrotas: 12,
        golesFavor: 41,
        golesContra: 45
      },
      {
        equipo: {
          id: 9,
          nombre: 'Osasuna',
          escudo: 'img/escudos/osasuna.png',
          localidad: 'Pamplona',
          fundacion: 1920,
          estadio: 'El Sadar',
          numeroLigas: 0,
          entrenador: 'Vicente Moreno',
          jugadores: [
            
          ]
        },
        puntos: 52,
        victorias: 12,
        empates: 16,
        derrotas: 10,
        golesFavor: 48,
        golesContra: 52
      },
      {
        equipo: {
          id: 10,
          nombre: 'Mallorca',
          escudo: 'img/escudos/mallorca.png',
          localidad: 'Mallorca',
          fundacion: 1916,
          estadio: 'Son Moix',
          numeroLigas: 0,
          entrenador: 'Jagoba Arrasate',
          jugadores: [
            
          ]
        },
        puntos: 48,
        victorias: 13,
        empates: 9,
        derrotas: 16,
        golesFavor: 35,
        golesContra: 44
      },
      {
        equipo: {
          id: 11,
          nombre: 'Real Sociedad',
          escudo: 'img/escudos/realSociedad.png',
          localidad: 'San Sebastián',
          fundacion: 1909,
          estadio: 'Reale Arena',
          numeroLigas: 2,
          entrenador: 'Imanol Alguacil',
          jugadores: [
            
          ]
        },
        puntos: 46,
        victorias: 13,
        empates: 7,
        derrotas: 18,
        golesFavor: 35,
        golesContra: 46
      },
      {
        equipo: {
          id: 12,
          nombre: 'Valencia',
          escudo: 'img/escudos/valencia.png',
          localidad: 'Valencia',
          fundacion: 1919,
          estadio: 'Mestalla',
          numeroLigas: 6,
          entrenador: 'Carlos Corberán',
          jugadores: [
            
          ]
        },
        puntos: 46,
        victorias: 11,
        empates: 13,
        derrotas: 14,
        golesFavor: 44,
        golesContra: 54
      },
      {
        equipo: {
          id: 13,
          nombre: 'Getafe',
          escudo: 'img/escudos/getafe.png',
          localidad: 'Getafe - Madrid',
          fundacion: 1983,
          estadio: 'Coliseum Alfonso Pérez',
          numeroLigas: 0,
          entrenador: 'José Bordalás',
          jugadores: [
            
          ]
        },
        puntos: 42,
        victorias: 11,
        empates: 9,
        derrotas: 18,
        golesFavor: 34,
        golesContra: 39
      },
      {
        equipo: {
          id: 14,
          nombre: 'Espanyol',
          escudo: 'img/escudos/espanyol.png',
          localidad: 'Barcelona',
          fundacion: 1900,
          estadio: 'Cornellá',
          numeroLigas: 0,
          entrenador: 'Manuel González',
          jugadores: [
            
          ]
        },
        puntos: 42,
        victorias: 11,
        empates: 9,
        derrotas: 18,
        golesFavor: 40,
        golesContra: 51
      },
      {
        equipo: {
          id: 15,
          nombre: 'Alavés',
          escudo: 'img/escudos/alaves.png',
          localidad: 'Vitoria',
          fundacion: 1921,
          estadio: 'Mendizorroza',
          numeroLigas: 0,
          entrenador: 'Eduardo Coudet',
          jugadores: [
            
          ]
        },
        puntos: 42,
        victorias: 10,
        empates: 12,
        derrotas: 16,
        golesFavor: 38,
        golesContra: 48
      },
      {
        equipo: {
          id: 16,
          nombre: 'Girona',
          escudo: 'img/escudos/girona.png',
          localidad: 'Girona',
          fundacion: 1930,
          estadio: 'Montilivi',
          numeroLigas: 0,
          entrenador: 'Miguel Ángel Sánchez "Míchel"',
          jugadores: [
            
          ]
        },
        puntos: 41,
        victorias: 11,
        empates: 12,
        derrotas: 19,
        golesFavor: 44,
        golesContra: 60
      },
      {
        equipo: {
          id: 17,
          nombre: 'Sevilla',
          escudo: 'img/escudos/sevilla.png',
          localidad: 'Sevilla',
          fundacion: 1890,
          estadio: 'Ramón Sánchez Pizjuán',
          numeroLigas: 1,
          entrenador: 'Joaquín Caparrós',
          jugadores: [
            
          ]
        },
        puntos: 41,
        victorias: 10,
        empates: 11,
        derrotas: 17,
        golesFavor: 42,
        golesContra: 55
      },
      {
        equipo: {
          id: 18,
          nombre: 'Leganés',
          escudo: 'img/escudos/leganes.png',
          localidad: 'Leganés - Madrid',
          fundacion: 1928,
          estadio: 'Butarque',
          numeroLigas: 0,
          entrenador: 'Borja Jiménez',
          jugadores: [
            
          ]
        },
        puntos: 40,
        victorias: 9,
        empates: 13,
        derrotas: 16,
        golesFavor: 39,
        golesContra: 56
      },
      {
        equipo: {
          id: 19,
          nombre: 'Las Palmas',
          escudo: 'img/escudos/lasPalmas.png',
          localidad: 'Las Palmas de Gran Canaria',
          fundacion: 1949,
          estadio: 'Estadio Gran Canaria',
          numeroLigas: 0,
          entrenador: 'Diego Martínez',
          jugadores: [
            
          ]
        },
        puntos: 32,
        victorias: 8,
        empates: 8,
        derrotas: 22,
        golesFavor: 22,
        golesContra: 40
      },
      {
        equipo: {
          id: 20,
          nombre: 'Valladolid',
          escudo: 'img/escudos/valladolid.png',
          localidad: 'Valladolid',
          fundacion: 1928,
          estadio: 'José Zorrilla',
          numeroLigas: 0,
          entrenador: 'Álvaro Rubio',
          jugadores: [
            
          ]
        },
        puntos: 16,
        victorias: 4,
        empates: 4,
        derrotas: 30,
        golesFavor: 26,
        golesContra: 90
      },
  ];

  constructor(private jugadorService: JugadorService) { 
    const jugadores = this.jugadorService.getJugadores();

    this.equipos.forEach(eq => {
      eq.equipo.jugadores = jugadores.filter(j => j.equipoId === eq.equipo.id);
    });
   }

  getEquipos(): EquipoClasificacion[] {
    return this.equipos;
  }

  addEquipo(equipo: EquipoClasificacion): void {
    this.equipos.push(equipo);
  }

  getEquipo(id: number) : EquipoClasificacion | undefined {
    return this.equipos.find(equipo => equipo.equipo.id === id)
  }

  clearClasificacion(): void {
    this.equipos = [];
  }

}
