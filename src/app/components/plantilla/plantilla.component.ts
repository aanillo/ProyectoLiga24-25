import { Component } from '@angular/core';
import { Equipo, EquipoClasificacion } from '../../models/equipo';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-plantilla',
  imports: [CommonModule, FormsModule],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css'
})
export class PlantillaComponent {

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

  getColorClass(): string {
    const nombre = this.club?.equipo?.nombre?.toLowerCase();
  
    switch (nombre) {
      case 'barcelona':
        return 'color-barcelona';
      case 'real madrid':
        return 'color-real-madrid';
      case 'atlético de madrid':
        return 'color-atletico';
      case 'athletic de bilbao':
        return 'color-athletic';
      case 'villarreal':
        return 'color-villarreal';
      case 'real betis':
        return 'color-real-betis';
      case 'celta':
        return 'color-celta';
      case 'rayo vallecano':
        return 'color-rayo';
      case 'osasuna':
        return 'color-osasuna';
      case 'mallorca':
        return 'color-mallorca';
      case 'real sociedad':
        return 'color-real-sociedad';
      case 'valencia':
        return 'color-valencia';
      case 'getafe':
        return 'color-getafe';
      case 'espanyol':
        return 'color-espanyol';
      case 'alavés':
        return 'color-alaves';
      case 'girona':
        return 'color-girona';
      case 'sevilla':
        return 'color-sevilla';
      case 'leganés':
        return 'color-leganes';
      case 'las palmas':
        return 'color-las-palmas';
      case 'valladolid':
        return 'color-valladolid';
      default:
        return '';
    }
  }
  
  
}
