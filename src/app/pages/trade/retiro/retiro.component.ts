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

interface Deposito {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RetiroComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  servicios: Servicio[] = [
    {value: 'servicio-0', viewValue: 'Servicio 1'},
    {value: 'servicio-1', viewValue: 'Servicio 2'},
    {value: 'servicio-2', viewValue: 'Servicio 3'},
  ];

  cuentas: Cuenta[] = [
    {value: 'cuenta-0', viewValue: 'Cuenta 1'},
    {value: 'cuenta-1', viewValue: 'Cuenta 2'},
    {value: 'cuenta-2', viewValue: 'Cuenta 3'},
  ];

  depositos: Deposito[] = [
    {value: 'deposito-0', viewValue: 'Deposito 1'},
    {value: 'deposito-1', viewValue: 'Deposito 2'},
    {value: 'deposito-2', viewValue: 'Deposito 3'},
  ];

}
