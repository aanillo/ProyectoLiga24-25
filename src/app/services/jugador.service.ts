import { Injectable } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../models/equipo';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})

export class JugadorService {

    private jugadores: Jugador[] = [
        {
          id: 1,
          nombre: 'Ter Stegen',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 1
        },
        {
          id: 2,
          nombre: 'Iñaki Peña',
          posicion: 'Portero',
          dorsal: 13,
          equipoId: 1
        },
        {
          id: 3,
          nombre: 'Szczesny',
          posicion: 'Portero',
          dorsal: 25,
          equipoId: 1
        },
        {
          id: 4,
          nombre: 'Cubarsí',
          posicion: 'Defensa',
          dorsal: 2,
          equipoId: 1
        },
        {
          id: 5,
          nombre: 'Araujo',
          posicion: 'Defensa',
          dorsal: 4,
          equipoId: 1
        },
        {
          id: 6,
          nombre: 'Christensen',
          posicion: 'Defensa',
          dorsal: 15,
          equipoId: 1
        },
        {
          id: 7,
          nombre: 'Eric García',
          posicion: 'Defensa',
          dorsal: 24,
          equipoId: 1
        },
        {
          id: 8,
          nombre: 'Íñigo Martínez',
          posicion: 'Defensa',
          dorsal: 5,
          equipoId: 1
        },
        {
          id: 9,
          nombre: 'Alejandro Balde',
          posicion: 'Defensa',
          dorsal: 3,
          equipoId: 1
        },
        {
          id: 10,
          nombre: 'Gerard Martín',
          posicion: 'Defensa',
          dorsal: 35,
          equipoId: 1
        },
        {
          id: 11,
          nombre: 'Koundé',
          posicion: 'Defensa',
          dorsal: 23,
          equipoId: 1
        },
        {
          id: 12,
          nombre: 'Héctor Fort',
          posicion: 'Defensa',
          dorsal: 32,
          equipoId: 1
        },
        {
          id: 13,
          nombre: 'Marc Casadó',
          posicion: 'Centrocampista',
          dorsal: 17,
          equipoId: 1
        },
        {
          id: 14,
          nombre: 'Marc Bernal',
          posicion: 'Centrocampista',
          dorsal: 28,
          equipoId: 1
        },
        {
          id: 15,
          nombre: 'Pedri',
          posicion: 'Centrocampista',
          dorsal: 8,
          equipoId: 1
        },
        {
          id: 16,
          nombre: 'Gavi',
          posicion: 'Centrocampista',
          dorsal: 6,
          equipoId: 1
        },
        {
          id: 17,
          nombre: 'de Jong',
          posicion: 'Centrocampista',
          dorsal: 21,
          equipoId: 1
        },
        {
          id: 18,
          nombre: 'Dani Olmo',
          posicion: 'Centrocampista',
          dorsal: 20,
          equipoId: 1
        },
        {
          id: 19,
          nombre: 'Fermín López',
          posicion: 'Centrocampista',
          dorsal: 16,
          equipoId: 1
        },
        {
          id: 20,
          nombre: 'Pablo Torre',
          posicion: 'Centrocampista',
          dorsal: 14,
          equipoId: 1
        },
        {
          id: 21,
          nombre: 'Raphinha',
          posicion: 'Delantero',
          dorsal: 11,
          equipoId: 1
        },
        {
          id: 22,
          nombre: 'Ansu Fati',
          posicion: 'Delantero',
          dorsal: 10,
          equipoId: 1
        },
        {
          id: 23,
          nombre: 'Lamine Yamal',
          posicion: 'Delantero',
          dorsal: 19,
          equipoId: 1
        },
        {
          id: 24,
          nombre: 'Ferrán Torres',
          posicion: 'Delantero',
          dorsal: 7,
          equipoId: 1
        },
        {
          id: 25,
          nombre: 'Lewandowski',
          posicion: 'Delantero',
          dorsal: 9,
          equipoId: 1
        },
        {
          id: 26,
          nombre: 'Pau Víctor',
          posicion: 'Delantero',
          dorsal: 18,
          equipoId: 1
        },
        {
          id: 27,
          nombre: 'Courtuois',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 2
        },
        {
          id: 28,
          nombre: 'Lunin',
          posicion: 'Portero',
          dorsal: 13,
          equipoId: 2
        },
        {
          id: 29,
          nombre: 'Eder Militao',
          posicion: 'Defensa',
          dorsal: 3,
          equipoId: 2
        },
        {
          id: 30,
          nombre: 'Raúl Asencio',
          posicion: 'Defensa',
          dorsal: 35,
          equipoId: 2
        },
        {
          id: 31,
          nombre: 'Rudiger',
          posicion: 'Defensa',
          dorsal: 4,
          equipoId: 2
        },
        {
          id: 32,
          nombre: 'Alaba',
          posicion: 'Defensa',
          dorsal: 4,
          equipoId: 2
        },
        {
          id: 33,
          nombre: 'Jesús Vallejo',
          posicion: 'Defensa',
          dorsal: 18,
          equipoId: 2
        },
        {
          id: 34,
          nombre: 'Mendy',
          posicion: 'Defensa',
          dorsal: 23,
          equipoId: 2
        },
        {
          id: 35,
          nombre: 'Fran García',
          posicion: 'Defensa',
          dorsal: 20,
          equipoId: 2
        },
        {
          id: 36,
          nombre: 'Carvajal',
          posicion: 'Defensa',
          dorsal: 2,
          equipoId: 2
        },
        {
          id: 37,
          nombre: 'Lucas Vázquez',
          posicion: 'Defensa',
          dorsal: 17,
          equipoId: 2
        },
        {
          id: 38,
          nombre: 'Tchouaméni',
          posicion: 'Centrocampista',
          dorsal: 14,
          equipoId: 2
        },
        {
          id: 39,
          nombre: 'Valverde',
          posicion: 'Centrocampista',
          dorsal: 8,
          equipoId: 2
        },
        {
          id: 40,
          nombre: 'Camavinga',
          posicion: 'Centrocampista',
          dorsal: 6,
          equipoId: 2
        },
        {
          id: 41,
          nombre: 'Dani Ceballos',
          posicion: 'Centrocampista',
          dorsal: 19,
          equipoId: 2
        },
        {
          id: 42,
          nombre: 'Luka Modric',
          posicion: 'Centrocampista',
          dorsal: 10,
          equipoId: 2
        },
        {
          id: 43,
          nombre: 'Jude Bellingham',
          posicion: 'Centrocampista',
          dorsal: 5,
          equipoId: 2
        },
        {
          id: 44,
          nombre: 'Vinicius',
          posicion: 'Delantero',
          dorsal: 7,
          equipoId: 2
        },
        {
          id: 45,
          nombre: 'Rodrygo',
          posicion: 'Delantero',
          dorsal: 11,
          equipoId: 2
        },
        {
          id: 46,
          nombre: 'Arda Guler',
          posicion: 'Delantero',
          dorsal: 15,
          equipoId: 2
        },
        {
          id: 47,
          nombre: 'Brahim Díaz',
          posicion: 'Delantero',
          dorsal: 21,
          equipoId: 2
        },
        {
          id: 48,
          nombre: 'Kylian Mbappé',
          posicion: 'Delantero',
          dorsal: 9,
          equipoId: 2
        },
        {
          id: 49,
          nombre: 'Endrick',
          posicion: 'Delantero',
          dorsal: 16,
          equipoId: 2
        },
        {
          id: 50,
          nombre: 'Jan Oblak',
          posicion: 'Portero',
          dorsal: 13,
          equipoId: 3
        },
        {
          id: 51,
          nombre: 'Juan Musso',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 3
        },
        {
          id: 52,
          nombre: 'Giménez',
          posicion: 'Defensa',
          dorsal: 2,
          equipoId: 3
        },
        {
          id: 53,
          nombre: 'Lenglet',
          posicion: 'Defensa',
          dorsal: 15,
          equipoId: 3
        },
        {
          id: 54,
          nombre: 'Axel Witsel',
          posicion: 'Defensa',
          dorsal: 20,
          equipoId: 3
        },
        {
          id: 55,
          nombre: 'Le Normand',
          posicion: 'Defensa',
          dorsal: 24,
          equipoId: 3
        },
        {
          id: 56,
          nombre: 'Azpilicueta',
          posicion: 'Defensa',
          dorsal: 3,
          equipoId: 3
        },
        {
          id: 57,
          nombre: 'Reinildo',
          posicion: 'Defensa',
          dorsal: 23,
          equipoId: 3
        },
        {
          id: 58,
          nombre: 'Javi Galán',
          posicion: 'Defensa',
          dorsal: 21,
          equipoId: 3
        },
        {
          id: 59,
          nombre: 'Nahuel Molina',
          posicion: 'Defensa',
          dorsal: 16,
          equipoId: 3
        },
        {
          id: 60,
          nombre: 'Pablo Barrios',
          posicion: 'Centrocampista',
          dorsal: 8,
          equipoId: 3
        },
        {
          id: 61,
          nombre: 'Gallagher',
          posicion: 'Centrocampista',
          dorsal: 4,
          equipoId: 3
        },
        {
          id: 62,
          nombre: 'de Paul',
          posicion: 'Centrocampista',
          dorsal: 5,
          equipoId: 3
        },
        {
          id: 63,
          nombre: 'Koke',
          posicion: 'Centrocampista',
          dorsal: 6,
          equipoId: 3
        },
        {
          id: 64,
          nombre: 'Marcos Llorente',
          posicion: 'Centrocampista',
          dorsal: 8,
          equipoId: 3
        },
        {
          id: 65,
          nombre: 'Lemar',
          posicion: 'Centrocampista',
          dorsal: 11,
          equipoId: 3
        },
        {
          id: 66,
          nombre: 'Samu Lino',
          posicion: 'Delantero',
          dorsal: 12,
          equipoId: 3
        },
        {
          id: 67,
          nombre: 'Riquelme',
          posicion: 'Delantero',
          dorsal: 17,
          equipoId: 3
        },
        {
          id: 68,
          nombre: 'Simeone',
          posicion: 'Delantero',
          dorsal: 22,
          equipoId: 3
        },
        {
          id: 69,
          nombre: 'Correa',
          posicion: 'Delantero',
          dorsal: 10,
          equipoId: 3
        },
        {
          id: 70,
          nombre: 'Julián Álvarez',
          posicion: 'Delantero',
          dorsal: 19,
          equipoId: 3
        },
        {
          id: 71,
          nombre: 'Sorloth',
          posicion: 'Delantero',
          dorsal: 19,
          equipoId: 3
        },
        {
          id: 72,
          nombre: 'Griezmann',
          posicion: 'Delantero',
          dorsal: 7,
          equipoId: 3
        },
        {
          id: 73,
          nombre: 'Unai Simón',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 4
        },
        {
          id: 74,
          nombre: 'Diego Conde',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 5
        },
        {
          id: 76,
          nombre: 'Adrián',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 6
        },
        {
          id: 77,
          nombre: 'Guaita',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 7
        },
        {
          id: 77,
          nombre: 'Batalla',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 8
        },
        {
          id: 78,
          nombre: 'Herrera',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 9
        },
        {
          id: 79,
          nombre: 'Greif',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 10
        },
        {
          id: 78,
          nombre: 'Remiro',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 11
        },
        {
          id: 79,
          nombre: 'Mamardashvilli',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 12
        },
        {
          id: 80,
          nombre: 'David Soria',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 13
        },
        {
          id: 81,
          nombre: 'Joan García',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 14
        },
        {
          id: 82,
          nombre: 'Sivera',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 15
        },
        {
          id: 83,
          nombre: 'Gazzaniga',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 16
        },
        {
          id: 84,
          nombre: 'Nyland',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 17
        },
        {
          id: 85,
          nombre: 'Dmitrovich',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 18
        },
        {
          id: 86,
          nombre: 'Cillessen',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 19
        },
        {
          id: 84,
          nombre: 'Karl Hein',
          posicion: 'Portero',
          dorsal: 1,
          equipoId: 20
        },
    ]

    getJugadores(): Jugador[] {
      return this.jugadores;
    }
}