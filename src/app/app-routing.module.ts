import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StoreComponent } from './components/store/store.component';
import { CareerComponent } from './components/career/career.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { CareerDetailComponent } from './components/career/career-detail/career-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { ProductDetailComponent } from './components/store/product-detail/product-detail.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: '', component: HomePageComponent }, 
      { path: 'store', component: StoreComponent }, 
      { path: 'career', component: CareerComponent }, 
      { path: 'about', component: AboutComponent }, 
      { path: 'login', component: LoginComponent }, 
      { path: 'account', component: AccountComponent, canActivate: [AuthGuard] }, 
      { path: 'sign-up', component: SignUpComponent }, 
      { path: 'forget-password', component: ForgetPasswordComponent }, 
      { path: 'career/:id', component: CareerDetailComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
