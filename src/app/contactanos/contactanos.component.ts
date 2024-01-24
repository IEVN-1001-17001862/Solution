import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  offices: { [key: string]: string } = {
    'Oficina 1': 'correo1@example.com',
    'Oficina 2': 'correo2@example.com',
    'Oficina 3': 'correo3@example.com'
  };
  selectedOffice: string = '';
  subject: string = '';
  body: string = '';

  sendMail() {
    const email = this.offices[this.selectedOffice];
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
    window.location.href = mailtoLink;
  }

  getOffices() {
    return Object.keys(this.offices);
  }
}
