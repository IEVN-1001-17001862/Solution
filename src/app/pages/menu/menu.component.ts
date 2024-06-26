import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInLeft', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('0.9s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  mostrarBoton = false;
  currentIndex = 0;
  imageUrls = [
    // Agrega las URL de las imágenes según sea necesario
  ];

  @ViewChild('changingImage', { static: true }) changingImage!: ElementRef;

  // Agregar la propiedad state
  state: string = 'in';

  constructor() { }

  ngOnInit(): void {
    // Inicializa tu componente aquí si es necesario
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

  openModal(event: Event, modalId: string): void {
    event.preventDefault();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(event: any, modalId: string): void {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'none';
      }
    }
  }
}


