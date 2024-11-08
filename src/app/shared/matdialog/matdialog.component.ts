import { Component, Inject, inject, model, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrl: './matdialog.component.scss'
})
export class MatdialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<MatdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  back(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }
  accept(): void {
    this.dialogRef.close(this.data);
  }
}
