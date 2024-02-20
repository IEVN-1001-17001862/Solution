import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  idiomaActual = 'en';
  banderaUrl: string = '/assets/usa.png';  // Asegúrate de proporcionar la ruta correcta a tu imagen

  constructor(private translocoService: TranslocoService) {
    console.log(this.translocoService.translate('hello'));
  }

  ngOnInit(): void {
    this.translocoService.setActiveLang(this.idiomaActual);
  }
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  cambiarIdioma() {
    this.idiomaActual = this.idiomaActual === 'en' ? 'es' : 'en';
    this.translocoService.setActiveLang(this.idiomaActual);
    this.actualizarBandera();
  }

  private actualizarBandera(): void {
    this.banderaUrl = this.idiomaActual === 'en' ? '/assets/usa.png' : '/assets/mexico.png';
  }

  seleccionarBandera(codigoIdioma: string): void {
    this.idiomaActual = codigoIdioma;
    this.translocoService.setActiveLang(this.idiomaActual);
    this.actualizarBandera();
  }
}

