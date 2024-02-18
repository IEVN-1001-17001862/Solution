import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  state = 'hide';
  images = [
    
    { path: 'assets/inge2.png'},
    { path: 'assets/homw.jpg', text: 'Company dedicated to designing and building water treatment plants' },
    { path: 'assets/eli.jpg', text: 'The environmental, health, and safety practices at Solution Idea are implemented by professionals like us' },
    { path: 'assets/solution-carousel3.jpg', text: 'Renewing, Solving Futures: Your Guarantee of Purity' },
    // ... más imágenes si es necesario
  ];
  images2 = [
    { url: 'https://www.realestatemarket.com.mx/images/2019/11-Noviembre/2711/plantas_para_tratamiento_de_aguas.jpg', state: 'hide' },
    { url: 'https://www.nyfdecolombia.com/aguas-residuales/images/industrial/envasa.jpg', state: 'hide' },
    { url: 'https://marel.com/media/ju2jykdm/water-treatment.jpg', state: 'hide' }
    // ... más imágenes
  ];
  activeSlide = 0;
  mostrarBoton: boolean = false;

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

    this.mostrarBoton = scrollPosition > 200; // Ajusta el valor según tus necesidades
    this.state = this.mostrarBoton ? 'show' : 'hide';
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
