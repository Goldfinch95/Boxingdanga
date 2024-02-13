import { Routes } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


export const routes: Routes = [
    {path: 'new-account', component: CreateAccountComponent},
    {path:'forgot-password', component: ForgotPasswordComponent}
];
