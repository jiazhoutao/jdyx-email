import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdyxDashboardComponent } from './jdyx-dashboard/jdyx-dashboard.component';
import { JdyxPasswordComponent } from './jdyx-password/jdyx-password.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { JdyxMobileComponent } from './jdyx-mobile/jdyx-mobile.component';
import { JdyxEmailComponent } from './jdyx-email/jdyx-email.component';



@NgModule({
  declarations: [JdyxDashboardComponent, JdyxPasswordComponent, JdyxMobileComponent, JdyxEmailComponent],
  exports: [
    JdyxDashboardComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class JdyxDashboardModule { }
