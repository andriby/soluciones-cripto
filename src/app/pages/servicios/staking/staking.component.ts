import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Maestro } from 'src/app/services/util/tabla.service';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PagoComponent } from '../../trade/pago/pago.component';

export interface stakingData{
  id: string,
  id_staking: number,
  capital: number,
  porcentaje_ganancia: number,
  fecha_pago: string,
  dias_restantes: number,
  recibo: number
}

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.scss']
})
export class StakingComponent implements OnInit {

  // public xApi: IAPICore = {
  //   funcion : '',
  //   parametros: ''
  // }

  //public ELEMENT_DATA : Maestro[] = []

  displayedColumns: string[] = ['id_staking', 'capital', 'porcentaje_ganancia', 'fecha_pago', 'dias_restantes', 'recibo'];
  dataSource = MatTableDataSource<stakingData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //@Input('columnas') displayedColums: string[];

  //@Input () API: any = ['codigo', 'nombre', 'descripcion'];

  screen:any = {width: 0}

  constructor(public dialog:
     MatDialog, private apiService: ApiService) {
      const data = Array.from({length: 100}, (_, k) => createNew(k + 1));

      this.dataSource = new MatTableDataSource(data);
   }

  async ngOnInit(): Promise<void> {
    this.screen.width = window.innerWidth;
    window.addEventListener('resize', this.onResize.bind(this))

    // console.log('Entrando a la conexion ', this.API)
    // if (this.API != "0") {
    //   await this.cargarContenido()
    // }
  }

  // cargarContenido(): void{
  //   this.ELEMENT_DATA = []
  //   this.xApi.funcion = "CCEC_CCONTENIDO"
  //   this.xApi.parametros = this.API
  //   this.apiService.Ejecutar(this.xApi).subscribe(
  //     (data) => {
  //       this.ELEMENT_DATA = data.Cuerpo
  //       this.dataSource = new MatTableDataSource<Maestro>(this.ELEMENT_DATA)
  //       this.dataSource.paginator = this.paginator

  //     }
  //   )
  // }

  onResize(event: Event): void{
    this.screen.width = (event.target as Window).innerWidth
  }

  openDialogRetirar(): void{

  }

  openDialogDepositar(): void {
    const dialogRef = this.dialog.open(PagoComponent, {
      width: this.screen.width > 768 ? '50vw' : '80vw'
    })
  }

}

function createNew(id:number): stakingData {

  const id_staking = 0
  const capital = 0
  const porcentaje_ganancia = 0
  const fecha_pago = ""
  const dias_restantes = 0
  const recibo = 0

  return {
    id_staking: id_staking,
    capital: capital,
    porcentaje_ganancia: porcentaje_ganancia,
    fecha_pago: fecha_pago,
    dias_restantes: dias_restantes,
    recibo: recibo,
    id: id.toString()
  }
}
