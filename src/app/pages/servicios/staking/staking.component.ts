import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Maestro } from 'src/app/services/util/tabla.service';
import { ApiService, IAPICore } from 'src/app/services/apicore/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PagoComponent } from '../../trade/pago/pago.component';
import { RetiroComponent } from '../../trade/retiro/retiro.component';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.scss']
})
export class StakingComponent implements OnInit {

  screen:any = {width: 0}

  constructor(public dialog:
     MatDialog, private apiService: ApiService) {

   }

  async ngOnInit(): Promise<void> {
    this.screen.width = window.innerWidth;
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize(event: Event): void{
    this.screen.width = (event.target as Window).innerWidth
  }

  openDialogRetirar(): void{
    const dialogRef = this.dialog.open(RetiroComponent, {
      width: this.screen.width > 768 ? '50vw' : '80vw'
  })
}

  openDialogDepositar(): void {
    const dialogRef = this.dialog.open(PagoComponent, {
      width: this.screen.width > 768 ? '50vw' : '80vw'
    })
  }

}
