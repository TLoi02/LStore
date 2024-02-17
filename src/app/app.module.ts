import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreComponent } from './components/store/store.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CareerDetailComponent } from './components/career/career-detail/career-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ApplyDialogComponent } from './components/career/apply-dialog/apply-dialog.component';
import { QrcodeDialogComponent } from './components/career/qrcode-dialog/qrcode-dialog.component';
import { AccountComponent } from './components/account/account.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ProductDetailComponent } from './components/store/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StoreComponent,
    CareerComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    CareerDetailComponent,
    ApplyDialogComponent,
    QrcodeDialogComponent,
    AccountComponent,
    ProductCardComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    NgxSpinnerModule,
    MatIconModule,
    MatTabsModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
