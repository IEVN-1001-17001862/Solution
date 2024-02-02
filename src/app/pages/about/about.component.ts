import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  constructor() {
    // Inicializa slider aquí si es necesario
  }

  ngOnInit(): void {
    // Lógica de inicialización, si es necesario
    // Cambia la imagen cada 2 segundos (2000 milisegundos)
    setInterval(() => this.changeImage(), 2000);
  }

  changeImage() {
    // Incrementa el índice o reinicia a 0 si llega al final
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    // Establece la nueva URL de la imagen
    this.changingImage.nativeElement.src = this.imageUrls[this.currentIndex];
  }
}

