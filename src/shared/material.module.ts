import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CdkDropList,
    CdkDrag
  ],
  exports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CdkDropList,
    CdkDrag
  ]
})
export class MaterialModule { }
