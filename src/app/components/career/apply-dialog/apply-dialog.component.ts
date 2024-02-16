import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-dialog',
  templateUrl: './apply-dialog.component.html',
  styleUrl: './apply-dialog.component.scss'
})
export class ApplyDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
