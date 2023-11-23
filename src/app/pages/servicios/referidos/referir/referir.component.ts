import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-referir',
  templateUrl: './referir.component.html',
  styleUrls: ['./referir.component.scss']
})
export class ReferirComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReferirComponent>
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  codigo: string = "XBAR-12ED"

}
