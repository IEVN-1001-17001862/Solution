import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {
  state = 'hide';
  images = [
    { path: 'assets/inge2.png', text: 'Cost Effectiveness' },
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
  galleryInterval: any;

  constructor() {}

  ngOnInit(): void {
    // Inicia la función para cambiar automáticamente cada tres segundos
    this.galleryInterval = setInterval(() => {
      this.next();
    }, 3000);

    // Inicia la galería
    this.gallery.load();
    this.galleryInterval = setInterval(() => {
      this.gallery.next();
    }, 3000);
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye
    clearInterval(this.galleryInterval);
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

  // Galería de imágenes
  private gallery: Gallery = new Gallery();
}

class Gallery {
  private index: number = 0;
  private rootEl: any;
  private platform: any;
  private frames: any;
  private contentArea: any;
  private width: number = 0;
  private limit: { start: number, end: number } = { start: 0, end: 0 };

  load() {
    this.rootEl = document.querySelector(".gallery");
    this.platform = this.rootEl.querySelector(".platform");
    this.frames = this.platform.querySelectorAll(".each-frame");
    this.contentArea = this.rootEl.querySelector(".content-area");
    this.width = parseInt(this.rootEl.style.width);
    this.limit = { start: 0, end: this.frames.length - 1 };
    this.frames.forEach((each: any) => { each.style.width = this.width + "px"; });
    this.goto(this.index);
  }

  next() {
    if (this.index === this.limit.end) {
      // Si llega al final, desactiva la animación temporalmente
      this.platform.style.transition = 'none';
      // Luego, vuelve al inicio sin animación
      this.goto(this.limit.start);
      // Vuelve a activar la animación después de un breve tiempo
      setTimeout(() => {
        this.platform.style.transition = '';
      }, 10);
    } else {
      this.platform.style.right = this.width * ++this.index + "px";
      this.set_title();
    }
  }

  prev() {
    this.platform.style.right = this.width * --this.index + "px";
    this.set_title();
  }

  goto(index: number) {
    this.platform.style.right = this.width * index + "px";
    this.index = index;
    this.set_title();
  }

  set_title() {
    this.rootEl.querySelector(".heading").innerText = this.frames[this.index].getAttribute("title");
  }
}

