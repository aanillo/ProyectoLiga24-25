import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-records',
  imports: [],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css'
})
export class RecordsComponent {

  constructor(private router: Router) {

  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
