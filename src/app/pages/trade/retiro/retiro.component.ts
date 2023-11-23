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

  formulario: FormGroup

  constructor(
    public dialogRef: MatDialogRef<RetiroComponent>,
     private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group ({
      servicioFormControl: [null, [Validators.required]],
      cuentaFormControl: [null, [Validators.required]],
      depositoFormControl: [null, [Validators.required]],
      montoFormControl: [null, [Validators.required]],
      comprobanteFormControl: [null, [Validators.required]]
    })
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

  selectedFileName: string

  onFileSelected(event:any): void{
    const input = event.target;
    if(input.files && input.files.length > 0){
      this.selectedFileName = input.files[0].name;
    } else{
      this.selectedFileName = null
    }
  }

  servicioRetiro: Servicio

  withdraw():void {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'De retirar ' + this.servicioRetiro.viewValue,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Retirar!'
    }).then((result) => {
      if(result.isConfirmed) {
        Swal.fire({
          title: 'Retirado',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Listo!'
        })
        this.closeDialog()
      }
    })
  }

}
