import { Component } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-club',
  imports: [CommonModule, FormsModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css'
})
export class ClubComponent {

  club?: EquipoClasificacion;

  constructor(private router: Router, private equipoService: EquipoService, private route: ActivatedRoute, private location: Location) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.club = this.equipoService.getEquipo(id);
    });
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  goBack(): void {
    this.location.back();
  }

  goToPlantilla(id: number | undefined) {
    this.router.navigate(['/home/plantilla', id]);
  }
  
}
