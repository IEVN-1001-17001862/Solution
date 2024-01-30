import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModal(event: Event, modalId: string): void {
    event.preventDefault();  // Evita la recarga de la página al hacer clic en el enlace
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


