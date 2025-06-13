import { Component } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clasificacion',
  imports: [CommonModule, FormsModule],
  templateUrl: './clasificacion.component.html',
  styleUrl: './clasificacion.component.css'
})
export class ClasificacionComponent {

  equipos: EquipoClasificacion[] = []

  constructor(private router: Router, private equipoService: EquipoService) {
    this.equipos = this.equipoService.getEquipos(); 
  }


  getColorClass(id: number): string {
    if (id === 1) {
      return 'color-gold';
    } else if (id >= 2 && id <= 5) {
      return 'color-green';
    } else if (id === 6 || id === 7) {
      return 'color-blue';
    } else if (id === 8) {
      return 'color-purple';
    } else if (id === 18 || id === 19 || id === 20) {
      return 'color-red';
    } else {
      return '';  
    }
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  goToClub(id: number) {
    this.router.navigate(['/home/club', id]);
  }

}