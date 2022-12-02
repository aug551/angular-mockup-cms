// Dependencies

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ServicesComponent } from './components/services/services.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceFormComponent } from './components/dialogs/service-form/service-form.component'
import { MatSelectModule } from '@angular/material/select';
import { UserProfileDialogComponent } from './components/dialogs/user-profile-dialog/user-profile-dialog.component';
import { ServiceSummaryDialogComponent } from './components/dialogs/service-summary-dialog/service-summary-dialog.component';
import { HistoryComponent } from './components/history/history/history.component';
import { ServicesTableComponent } from './components/services-table/services-table.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    LayoutComponent,
    HomepageComponent,
    DashboardComponent,
    ServicesComponent,
    ServiceFormComponent,
    UserProfileDialogComponent,
    ServiceSummaryDialogComponent,
    HistoryComponent,
    ServicesTableComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
