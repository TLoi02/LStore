import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit{
  step: number = 1;
  email: string = '';
  otp: string = '';
  newPassword: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitEmail() {
    // this.forgotPasswordService.sendEmail(this.email).subscribe(() => {
    //   this.step = 2;
    // });
    this.step = 2;
  }

  submitOTP() {
    // this.forgotPasswordService.verifyOTP(this.otp).subscribe(() => {
    //   this.step = 3;
    // });
    this.step = 3;
  }

  submitNewPassword() {
   //handle reset password

   this.router.navigate(['/login']);
  }

}
