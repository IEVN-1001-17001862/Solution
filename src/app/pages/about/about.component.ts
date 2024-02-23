import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInLeft', [
      transition('hide => show', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('0.9s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition('hide => show', [
        style({ opacity: 0, transform: 'translateX(100px)' }),
        animate('2.0s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  @ViewChild('changingImage', { static: true }) changingImage!: ElementRef;

  imageUrls = [
    "assets/agua4-fotor.png",
    "assets/agua3.png",
    "assets/agua5.png",
    "assets/industriall.jpg",
    "assets/1222.jpg",
    "assets/about.png",
    // Add more image URLs as needed
  ];

  currentIndex = 0;
  mostrarBoton = false;
  state = 'hide';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.changeImage(), 2000);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.mostrarBoton = scrollPosition > 200;
    this.state = this.mostrarBoton ? 'show' : 'hide';
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.changingImage.nativeElement.src = this.imageUrls[this.currentIndex];
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
