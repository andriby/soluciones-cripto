import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

interface Servicio {
  value: string;
  viewValue: string;
}

interface Plan {
  value: string;
  viewValue: string;
}

interface Metodo {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inversion',
  templateUrl: './inversion.component.html',
  styleUrls: ['./inversion.component.scss']
})
export class InversionComponent implements OnInit {

formulario: FormGroup

  constructor(
    public dialogRef: MatDialogRef<InversionComponent>,
    private fb: FormBuilder
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  servicios: Servicio[] = [
    {value: 'staking-0', viewValue: 'Staking'},
    {value: 'cripto-bolso-1', viewValue: 'Cripto Bolso'},
    {value: 'grid-2', viewValue: 'Grid'},
  ];

  plans: Plan[] = [
    {value: 'plan-0', viewValue: 'Plan'},
    {value: 'plan-1', viewValue: 'Plan 2'},
    {value: 'plan-2', viewValue: 'Plan 3'},
  ];

  metodos: Metodo[] = [
    {value: 'metodo-0', viewValue: 'metodo'},
    {value: 'metodo-1', viewValue: 'metodo 2'},
    {value: 'metodo-2', viewValue: 'metodo 3'},
  ];
    
  ngOnInit(): void {
    this.formulario = this.fb.group({
      servicioFormControl: [null ,Validators.required],
      planFormControl: [null ,Validators.required],
      capitalFormControl: [null ,Validators.required],
      metodoFormControl: [null ,Validators.required],
      comprobanteFormControl: [null, [Validators.required]],
     });
  }

  selectedFileName: string;

  onFileSelected(event: any): void {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    } else {
      this.selectedFileName = null;
    }
  }

  tipoDeServicio: Servicio

  buy(){
    Swal.fire({
      title: 'Esta seguro?',
      text: "De comprar " + this.tipoDeServicio.viewValue,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Comprar!'
    }).then((result) => {
      if (result.isConfirmed) {
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
