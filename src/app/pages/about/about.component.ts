import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('changingImage', { static: true }) changingImage!: ElementRef;

  imageUrls = [
    "assets/agua4.jpeg",
    "assets/agua3.jpeg",
    "assets/agua5.jpeg",
    "assets/industriall.jpeg",
    "assets/1222.jpeg",
    "assets/about.jpeg",
    // Add more image URLs as needed
  ];

  currentIndex = 0;
  mostrarBoton = false;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.changeImage(), 2000);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.mostrarBoton = window.pageYOffset > 200;
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.changingImage.nativeElement.src = this.imageUrls[this.currentIndex];
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
