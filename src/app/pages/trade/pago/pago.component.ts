import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

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

  formulario: FormGroup

  constructor(
    public dialogRef: MatDialogRef<PagoComponent>,
    private fb: FormBuilder
    ) { }

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

  ngOnInit(): void {
    this.formulario = this.fb.group ({
      servicioFormControl: [null, [Validators.required]],
      cuentaFormControl: [null, [Validators.required]],
      metodoFormControl: [null, [Validators.required]],
      montoFormControl: [null, [Validators.required]],
      comprobanteFormControl: [null, [Validators.required]]
    })
  }

  selectedFileName: string

  onFileSelected(event:any): void{
    const input = event.target;
    if(input.files && input.files.length > 0){
      this.selectedFileName = input.files[0].name;
    } else{
      this.selectedFileName = null
    }
  }

  tipoDeServicio: Servicio
  cuenta: Cuenta

  buy(): void{
    Swal.fire({
      title: 'Esta seguro?',
      text: 'De comprar ' + this.tipoDeServicio.viewValue,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, comprar!'
    }).then((result) => {
      if(result.isConfirmed) {
        Swal.fire({
          title: 'Comprado',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Listo!'
        })
        this.closeDialog()
      }
    })
  }

}
