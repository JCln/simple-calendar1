import { Component, Inject, inject, model, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VerificationService } from 'src/app/services/verification.service';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrl: './matdialog.component.scss'
})
export class MatdialogComponent implements OnInit {
  submitted: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<MatdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public verificationService: VerificationService
  ) { }

  back(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  accept(): void {
    if (this.verificationService.newTime(this.data)) {
      this.submitted = false;
      this.dialogRef.close(this.data);
    }
    else
      this.submitted = true;
  }
}
