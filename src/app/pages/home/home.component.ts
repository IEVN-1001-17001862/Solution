import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('hide => show', [
        style({ opacity: 0, transform: 'translateX(-100px)' }),
        animate('0.5s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  state = 'hide';
  images = [
    'assets/2.png',
    'assets/3.png',
    'assets/7.png',

    // ... más imágenes si es necesario
  ];
  images2 = [
    { url: 'https://www.realestatemarket.com.mx/images/2019/11-Noviembre/2711/plantas_para_tratamiento_de_aguas.jpg', state: 'hide' },
    { url: 'https://www.nyfdecolombia.com/aguas-residuales/images/industrial/envasa.jpg', state: 'hide' },
    { url: 'https://marel.com/media/ju2jykdm/water-treatment.jpg', state: 'hide' }
    // ... más imágenes
  ];
  activeSlide = 0;

  constructor() {}

  ngOnInit(): void {
    // Inicia la función para cambiar automáticamente cada 2 segundos
    setInterval(() => {
      this.next();
    }, 4000);
  }

  next() {
    this.activeSlide = (this.activeSlide + 1) % this.images.length;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    this.images2.forEach((img, index) => {
      const element = document.querySelector(`#card-${index}`);
      if (element) {
        const componentPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > componentPosition) {
          img.state = 'show';
        }
      }
    });
  }
  

}
