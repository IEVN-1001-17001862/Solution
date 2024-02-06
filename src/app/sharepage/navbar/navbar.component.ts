import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  idiomaActual = 'en';

  constructor(private translocoService: TranslocoService) {
    console.log(this.translocoService.translate('hello'));
  }

  ngOnInit(): void {
    // Establecer el idioma inicial
    this.translocoService.setActiveLang(this.idiomaActual);
  }

  cambiarIdioma() {
    this.idiomaActual = this.idiomaActual === 'en' ? 'es' : 'en';
    this.translocoService.setActiveLang(this.idiomaActual);
  }
}
