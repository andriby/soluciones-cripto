import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Servicio {
  value: string;
  viewValue: string;
}

interface Cuenta {
  value: string;
  viewValue: string;
}

interface Metodo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PagoComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'criptoBolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

  cuentas: Cuenta[] = [
    {value: 'cuenta-0', viewValue: 'Cuenta 1'},
    {value: 'cuenta-1', viewValue: 'Cuenta 2'},
    {value: 'cuenta-2', viewValue: 'Cuenta 3'},
  ];

  metodos: Metodo[] = [
    {value: 'metodo-0', viewValue: 'Metodo 1'},
    {value: 'metodo-1', viewValue: 'Metodo 2'},
    {value: 'metodo-2', viewValue: 'Metodo 3'},
  ];


}
