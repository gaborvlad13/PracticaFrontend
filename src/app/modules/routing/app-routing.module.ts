import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { MateriiComponent } from 'src/app/components/materii/materii.component';
import { PortofolioComponent } from 'src/app/components/portofolio/portofolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'timetable',
    component: MateriiComponent,
  },
  {
    path: 'portofolio',
    component: PortofolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
