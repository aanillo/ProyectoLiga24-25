import { Component } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-clubes',
  imports: [CommonModule, FormsModule],
  templateUrl: './clubes.component.html',
  styleUrl: './clubes.component.css'
})
export class ClubesComponent {

  equipos: EquipoClasificacion[] = []

  constructor(private router: Router, private equipoService: EquipoService) {
    this.equipos = this.equipoService.getEquipos();
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  goToClub(id: number) {
    this.router.navigate(['/home/club', id]);
  }

}
