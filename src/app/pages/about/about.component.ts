import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef;

  defaultTransform = 0;

  constructor() {
    // Inicializa slider aquí si es necesario
  }

  ngOnInit(): void {
    // Lógica de inicialización, si es necesario
  }

  goNext() {
    this.defaultTransform -= 398;
    this.transformSlider();
  }

  goPrev() {
    this.defaultTransform += 398;
    this.transformSlider();
  }

  private transformSlider() {
    const slider = this.slider.nativeElement;

    if (Math.abs(this.defaultTransform) >= slider.scrollWidth / 1.7) {
      this.defaultTransform = 0;
    }

    slider.style.transform = `translateX(${this.defaultTransform}px)`;
  }
}

