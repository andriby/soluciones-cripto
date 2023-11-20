import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagoComponent } from '../../trade/pago/pago.component';

@Component({
  selector: 'app-staking',
  templateUrl: './staking.component.html',
  styleUrls: ['./staking.component.scss']
})
export class StakingComponent implements OnInit {

  screen:any = {width: 0}

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.screen.width = window.innerWidth;
    window.addEventListener('resize', this.onResize.bind(this))
  }

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
