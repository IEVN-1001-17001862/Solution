import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleTranslation(): void {
    const translateElement = document.getElementById('google_translate_element2');

    if (translateElement) {
      const computedStyle = window.getComputedStyle(translateElement);

      if (computedStyle.display === 'none' || !computedStyle.display) {
        translateElement.style.display = 'block';
      } else {
        translateElement.style.display = 'none';
      }
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
}
