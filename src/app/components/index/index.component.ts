import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {

   @ViewChild('carouselTrack') carouselTrack!:ElementRef<HTMLDivElement>;

   currentIndex = 0;
   slideWidth = 1200;
   totalSlides = 2;
   intervalId: any;

   constructor(private router: Router) {

   }

   ngAfterViewInit(): void {
     this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      this.carouselTrack.nativeElement.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
     }, 5000)
   }

   ngOnDestroy() {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
   }

   goTo(route: string) {
    this.router.navigate([route]);
  }
}
