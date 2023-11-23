import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/services/util/mensaje.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InversionComponent } from 'src/app/pages/trade/inversion/inversion.component';
import { ReferirComponent } from 'src/app/pages/servicios/referidos/referir/referir.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public pagina : string = '';
  screen: any = {width: 0};

  constructor(private ruta : Router, private msj: MensajeService, public dialog: MatDialog) { }

  ngOnInit() {
    const pagina = this.ruta.url.split("/")
    this.pagina = pagina[1].toUpperCase()
    this.msj.contenido$.subscribe( e => {
      console.log(e)
      this.pagina = e
    })
    this.screen.width = window.innerWidth;
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(event: Event): void {
    this.screen.width = (event.target as Window).innerWidth; // Actualizar la anchura de la pantalla al cambiar el tamaño
  }

  IrA(url : string){
    
    this.pagina = url.toUpperCase()
    this.ruta.navigate(['/' + url]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InversionComponent, {
      width: this.screen.width > 768 ? '25vw' : '60vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  referir(){
    const dialogRef = this.dialog.open(ReferirComponent, {
      width: this.screen.width > 768 ? '50vw' : '80vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}
