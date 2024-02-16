import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import QRCode from 'qrcode';
import { MatDialog } from '@angular/material/dialog';
import { ApplyDialogComponent } from '../apply-dialog/apply-dialog.component';
import { QrcodeDialogComponent } from '../qrcode-dialog/qrcode-dialog.component';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrl: './career-detail.component.scss'
})
export class CareerDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute, private spinner: NgxSpinnerService, private _snackBar:MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  handleCopyLink():void{
    var currentUrl = window.location.href;
  
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        this._snackBar.open('Copy Link Success', 'Close', { duration: 2000 }); 
      })
      .catch(() => {
        this._snackBar.open('Copy Link Unsuccess', 'Close', { duration: 2000 });
      });
  }

  handleQRCode(): void {
      var currentUrl = window.location.href;
      QRCode.toDataURL(currentUrl)
        .then((imageURL: string) => {
          const dialogRef = this.dialog.open(QrcodeDialogComponent, {
            data: { url: imageURL},
          });
        })
        .catch((err: any) => {
          this._snackBar.open('Create QR Code Unsuccess', 'Close', { duration: 2000 });
        });
  }

  openApplyDialog():void{
    const dialogRef = this.dialog.open(ApplyDialogComponent, {
      data: { id: 1 },
    });
  }
}
