import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ClassTimetableComponent } from './components/class-timetable/class-timetable.component';
import { HttpClientModule } from '@angular/common/http';
import { MateriiService } from './services/materii/materii.service';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { MateriiComponent } from './components/materii/materii.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ClassTimetableComponent,
    DeleteDialogComponent,
    MateriiComponent,
    PortofolioComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MateriiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
