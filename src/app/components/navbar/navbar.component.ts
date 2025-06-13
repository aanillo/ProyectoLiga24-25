import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() activeRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
