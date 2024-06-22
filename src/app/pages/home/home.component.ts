import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  state = 'hide';
  images = [
    { path: 'assets/nuevo1.jpeg', text: 'Cost Effectiveness' },
    { path: 'assets/nuevo2.jpeg', text: 'Company dedicated to designing and building water treatment plants' },
    { path: 'assets/nuevo3.jpeg', text: 'The environmental, health, and safety practices at Solution Idea are implemented by professionals like us' },
  ];
  images2 = [
    { url: 'assets/nuevo1.jpeg', state: 'hide', alt: 'Alt Text 1', category: 'Flexibility', description: 'Adapt to future requirements, for example our versatileThe oxygen supply can be easily adjusted for nitrogen removal and create an anoxic zone in the reactor for ammonia metabolism; Tertiary and flow equalization systems can be easily added.'},
    { url: 'assets/nuevo2.jpeg', state: 'hide', alt: 'Alt Text 2', category: 'Reliable', description: 'Comply 24 hours a day, 7 days a week. with the download requirements, for example, the features and components of Our systems work together to effectively provide treatment. fluid and consistent throughout the useful life of the installation (alternating double redundancy).' },
    { url: 'assets/nuevo3.jpeg', state: 'hide', alt: 'Alt Text 3', category: 'Efficient', description: 'Reduce energy consumption, for example, our process. controllers are set to maintain dissolved oxygen between 2 and 4 ppm in the reactor (below the quality of the effluent is reduced, above it is wasted electricity); Airlifts save energy.' },
    { url: 'assets/balanza.png', state: 'hide', alt: 'Alt Text 4', category: 'Stable', description: 'Resists impact loads, for example, our cameras and equipment. They are designed large enough to deal with spikes organic and hydraulic, and toxic substances that periodically hit the plant, which Allows rapid recovery from disturbances.' },
    { url: 'assets/disponible.png', state: 'hide', alt: 'Alt Text 5', category: 'Category 5', description: 'Description 5' },
    { url: 'assets/modular.png', state: 'hide', alt: 'Alt Text 6', category: 'Category 6', description: 'Description 6' },
    { url: 'assets/factible.png', state: 'hide', alt: 'Alt Text 7', category: 'Category 7', description: 'Description 7' },
    { url: 'assets/durable.png', state: 'hide', alt: 'Alt Text 8', category: 'Category 8', description: 'Description 8' },
    { url: 'assets/odorless.png', state: 'hide', alt: 'Alt Text 9', category: 'Category 9', description: 'Description 9' },
    { url: 'assets/quiet.png', state: 'hide', alt: 'Alt Text 10', category: 'Category 10', description: 'Description 10' }
    // ... más imágenes
  ];
  activeSlide = 0;
  mostrarBoton: boolean = false;
  galleryInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.galleryInterval = setInterval(() => {
      this.next();
    }, 3000);
  }

  ngOnDestroy(): void {
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

    this.mostrarBoton = scrollPosition > 200;
    this.state = this.mostrarBoton ? 'show' : 'hide';
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent): void {
    event.preventDefault();
  }
}
